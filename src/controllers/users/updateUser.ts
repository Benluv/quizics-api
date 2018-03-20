import { db, auth } from '../../database/firebase'

// export const updateUser = (req, res, next) => {
//   const userId = req.params.id
//   auth.updateUser(userId, {
//     email: 'someName@name.com',
//     emailVerified: true,
//     password: 'newPass'
//   })
//   res.json({
//     user: {
//       email,
//       emailVerified,

//     }
//   })
//   .then(() => {
//     console.log('Updated the user: ', userId.lastName)
//     res.status(202)
//     res.json('updated user correctly')
//   })
//   .catch((e) => {
//     res.status(406)
//     res.json(e)
//   })
// }

export const updateUser = (req, res, next) => {
  const { firstName, lastName, email, emailVerified, password, username } = req.body
  const userId = req.params.id
  db.collection('users').doc(userId).update({
    firstName,
    lastName,
    email,
    emailVerified
  })
    .then(() => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully updated user', userId)
      res.status(250)
      res.json('works successfully!')
    })
    .catch((error) => {
      console.log('Error updating user:', error)
      res.status(450)
      res.json(error)
    })
}
