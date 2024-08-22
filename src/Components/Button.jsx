import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className='rounded-lg text-black bg-cyan-300 text-center p-3 hover:bg-black mx-auto  hover:text-white'>{props.button_cnt}</button>
    </>
  )
}

export default Button
