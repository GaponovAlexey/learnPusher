import { NextApiRequest, NextApiResponse } from 'next'
const Pusher = require('pusher')

const pusher = new Pusher({
  appId: '1422358',
  key: 'c5b6b19d7f78dc9bbd77',
  secret: 'ede61e9ab6aac135d6ce',
  cluster: 'eu',
  useTLS: true,
})

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { username, message } = req.body
  pusher.trigger('chat', 'message', {
    message: message,
    username: username,
  })
  res.status(200).json({ message: req.body.message })
}
