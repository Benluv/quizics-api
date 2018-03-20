import { db, auth } from '../../database/firebase'

export const createUser = (req, res, next) => {
  const { firstName, lastName, email, emailVerified, password, username } = req.body
  if (!email.includes('@lindenwood.edu')) {
    res.status(400)
    return next(new Error('Email must be a valid Lindenwood email'))
  }
  auth.createUser({
    email,
    password,
    emailVerified
  })
    .then(userRecord => {
      db.collection('users').doc(userRecord.uid).set({
        firstName,
        lastName,
        email,
        emailVerified : false,
        username
      })
      res.status(100)
      res.json('great success LU')
    })
    .catch(e => {
      console.log('something shitty happened', e)
      res.status(400)
      res.json(e)
    })
}
