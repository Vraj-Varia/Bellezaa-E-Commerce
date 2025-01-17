import React from 'react'
import './Board.css'
import Sidebar from './sidebar'
import Topbar from './Topbar'
import BestSelling from './BestSelling/BestSelling'

const Board = () => {
  return (
    <div className='board'>
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Topbar />
        <div className="container">
          <BestSelling />
        </div>
      </div>
    </div>
  )
}

export default Board