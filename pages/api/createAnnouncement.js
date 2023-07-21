import { createAnnouncement } from '../../utils/Fauna'

export default async function handler(req, res) {
  const { title, message, image, type } = req.body
  console.log('title', title)

  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' })
  }
  try {
    const createdAnnouncement = await createAnnouncement(title, message, image, type)
    return res.status(200).json(createdAnnouncement)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Something went wrong.' })
  }
}
