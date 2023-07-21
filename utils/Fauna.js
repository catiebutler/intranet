import { Client, query } from 'faunadb';
const faunaClient = new Client({
  secret: 'fnAFIhd3mHAASTgSOWS0JVrluupQAQP9LK-tjzsD',
  domain: 'db.us.fauna.com',
})
const q = query
const getAnnouncements = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('announcements')), { size: 5000 }),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  )
  const announcements = data.map((announcement) => {
    announcement.id = announcement.ref.id
    announcement.data.id = announcement.id
    delete announcement.ref
    return announcement.data
  })
  return announcements
}

const getAnnouncementById = async (id) => {
  const announcement = await faunaClient.query(
    q.Get(q.Ref(q.Collection('announcements'), id))
  )
  announcement.id = announcement.ref.id
  delete announcement.ref
  return announcement
}

const createAnnouncement = async (
  title,
  message,
  image,
  type,
) => {
  return await faunaClient.query(
    q.Create(q.Collection('announcements'), {
      data: {
        title,
        message,
        image,
        type,
      },
    })
  )
}

// const updateLocation = async (
//   id,
//   locationName,
//   address,
//   city,
//   state,
//   zip,
//   placeId,
//   coordinates,
//   publications
// ) => {
//   return await faunaClient.query(
//     q.Update(q.Ref(q.Collection('locations'), id), {
//       data: {
//         locationName,
//         address,
//         city,
//         state,
//         zip,
//         placeId,
//         coordinates,
//         publications,
//       },
//     })
//   )
// }


module.exports = {
  getAnnouncements,
  createAnnouncement,
  getAnnouncementById
}
