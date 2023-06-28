import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";

import { Client as FaunaClient } from "faunadb"
import { FaunaAdapter } from "@next-auth/fauna-adapter"



const client = new FaunaClient({
  secret: "fnAFHjCI6eAATXsPYCS2jBGbcBb6qzlbAmeq8I-_",
  domain: "db.us.fauna.com",
})

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: { params: { scope: "openid profile user.Read email" } },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // IMPORTANT: Persist the access_token to the token right after sign in
      if (account) {
        token.idToken = account.id_token;
      }
      return token;
    },
  },
  adapter: FaunaAdapter(client)
}

export default NextAuth(authOptions)
