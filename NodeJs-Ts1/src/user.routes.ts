import express from 'express'
const userRouter = express.Router()



userRouter.use ((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
  // res.status(400).send('Not allowed')
  // console.log(1234567890)
},
(req, res, next) => {
  console.log('Time2: ', Date.now())
  next()
}
)

userRouter.get('/tweets', (req, res) => {
  res.json({
    data : [
      {
        id: 1,
        text: "hi world"
      }
    ]
  })
})

export default userRouter