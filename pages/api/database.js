import { Client } from '@notionhq/client'

const notion = new Client({
	auth: process.env.NOTION_API_KEY,
})

export default async (req, res) => {


	try {
		const dbId = process.env.NOTION_DATABASE_ID
		const response = await notion.databases.retrieve({ database_id: dbId });
    console.log(response)
    res.status(200).json({ response })
  } catch (error) {
    console.error(error)
  	res.status(500).json({ error })
  }
}
