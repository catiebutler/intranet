import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";

// import { Client as FaunaClient } from "faunadb"

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
  },
}

export default NextAuth(authOptions)
