import { getAnnouncementById } from '../../../utils/Fauna'
export default async function handler(req, res) {
  const { id } = req.query
  if (req.method !== 'GET') {
    return res.status(405)
  }

  try {
    const announcement = await getAnnouncementById(id)
    return res.status(200).json(announcement)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Something went wrong.' })
  }
}
