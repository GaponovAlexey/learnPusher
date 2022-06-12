import type { NextPage } from 'next'
import Head from 'next/head'
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [username, setUsername] = useState('')

  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  let allMessages = [] as any

  useEffect(() => {
    Pusher.logToConsole = true

    const pusher = new Pusher('c5b6b19d7f78dc9bbd77', {
      cluster: 'eu',
    })

    const channel = pusher.subscribe('chat')
    channel.bind('message', function (data: any) {
      allMessages.push(data)
      setMessages(allMessages)
    })
  }, [])

  const submit = async (e: any) => {
    e.preventDefault()
    await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        message,
      }),
    })
    setMessage('')
  }

  return (
    <div>
      <Head>
        <title>socket.io</title>
      </Head>
      <div>
        <div className='container d-flex flex-column align-items-stretch flex-shrink-0 bg-white'>
          <div className='d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom'>
            <svg className='bi pe-none me-2' width='30' height='24'></svg>
            <input
              value={username}
              placeholder='start typing...'
              onChange={(e) => setUsername(e.target.value)}
              className='fs-5 fw-semibold'
            />
          </div>
          <div
            style={{ minHeight: '300px' }}
            className='list-group list-group-flush border-bottom scrollarea'
          >
            {messages.map((message) => {
              return (
                <div className='list-group-item list-group-item-action py-3 lh-sm'>
                  <div className='d-flex w-100 align-items-center justify-content-between'>
                    <strong className='mb-1'>{message.username}</strong>
                  </div>
                  <div className='col-10 mb-1 small'>{message.message}</div>
                </div>
              )
            })}
          </div>
          <form onSubmit={submit}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='form-control'
              placeholder='Write a message'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
