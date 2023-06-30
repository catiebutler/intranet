import { Client } from '@notionhq/client'

const notion = new Client({
	auth: process.env.NOTION_API_KEY,
})

export default async (req, res) => {
	const { q } = req.query

	try {
		// const dbId = process.env.NOTION_DATABASE_ID
		const response = await notion.search({
			query: q,
      filter: {
        value: 'database',
        property: 'object'
      },
      sort: {
        direction: 'ascending',
        timestamp: 'last_edited_time'
      },
    })
		// const dbId = process.env.NOTION_DATABASE_ID
		// const response = await notion.databases.query({
		// 	database_id: dbId,
		// 	filter: {
		// 		and: [
		// 			{
		// 				property: 'Name',
		// 				title: {
		// 					contains: q,
		// 				},
		// 			},
		// 		],
		// 	},
		// 	sort: [
		// 		{
		// 			property: 'Name',
		// 			direction: 'ascending',
		// 		},
		// 	],
    // })

    // Extract relevant data from Notion database and return it as JSON
    console.log(response)
    const results = response.results.map((page) => ({
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      // description : page.properties.Description.rich_text[0] ? page.properties.Description.rich_text[0].plain_text : ''
    }))

    res.status(200).json({ results })

  } catch (error) {
    console.error(error)
  	res.status(500).json({ error })
  }
}
