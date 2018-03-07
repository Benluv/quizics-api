import { db, auth } from '../../database/firebase'

export const updateUser = (req, res, next) => {
  const { firstName, lastName, email, emailVerified, password, username } = req.body
  const userId = req.params.id
  auth.updateUser(userId, {
    email: 'modifiedUser@example.com',
    emailVerified: true,
    password: 'newPassword'
  })
  .then(() => {
    db.collection('users').doc(userId).update({
      firstName,
      lastName,
      email,
      emailVerified
    }).then(() => {
	  // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully updated user', userId)
      res.status(250)
      res.json('works successfully!')
    })
  })
  .catch((error) => {
    console.log('Error updating user:', error)
    res.status(450)
    res.json(error)
  })
}
