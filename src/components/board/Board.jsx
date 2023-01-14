import React from 'react'
import MemoBlock from '../memoBlock/MemoBlock'
import './Board.css'

const Board = ({ animating, handleMemoClick, memoBlocks }) => {
  return (
    <div>
        <h2 className='title'>Juego de Memoria</h2>
        <main className='board'>
            {
                memoBlocks.map((memoBlock, i)=>{
                    return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
                })
            }
        </main>
    </div>
  )
}

export default Board