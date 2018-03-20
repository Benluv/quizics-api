import { db } from '../database/firebase'

export const createQuestion = (req, res, next) => {
  const { quizId, topicID } = req.body
  db.collection('questions').doc(quizId)
    .collection(topicID).
    add({
      'text' : req.body.text,
      'variables' : req.body.variables,
      'answers' : req.body.answers,
      'pictures' : req.body.pictures,
      'points' : req.body.points
    })
  res.json({
    question: {
      'text' : req.body.text,
      'variables' : req.body.variables,
      'answers' : req.body.answers,
      'pictures' : req.body.pictures,
      'points' : req.body.points
    }
  })
  .then(() => {
    console.log('successful write in')
  })
  .catch(e => {
    console.log('Some error happened!', e)
    res.status(402)
    res.json(e)
  })
}
