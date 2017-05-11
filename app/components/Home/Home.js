import React from 'react'
import { container, title, slogan } from './styles.css'

const Home = ({ ...props }) => (
  <div className={container}>
    <p className={title}>{'Reduxr'}</p>
    <p className={slogan}>
      {'The real time, cloud based social platform.'}
    </p>
  </div>
)

export default Home
