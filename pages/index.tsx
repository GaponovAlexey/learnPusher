import type { NextPage } from 'next'
import Head from 'next/head'
import s from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>socket.io</title>
      </Head>
      <div>
        <div className='container d-flex flex-column align-items-stretch flex-shrink-0 bg-white'>
          <a
            href='/'
            className='d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom'
          >
            <svg className='bi pe-none me-2' width='30' height='24'>
              <use href='#bootstrap'></use>
            </svg>
            <span className='fs-5 fw-semibold'>List group</span>
          </a>
          <div className='list-group list-group-flush border-bottom scrollarea'>
            <a
              href='#'
              className='list-group-item list-group-item-action py-3 lh-sm'
            >
              <div className='d-flex w-100 align-items-center justify-content-between'>
                <strong className='mb-1'>List group item heading</strong>
                <small className='text-muted'>Tues</small>
              </div>
              <div className='col-10 mb-1 small'>
                Some placeholder content in a paragraph below the heading and
                date.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
