import React from 'react'

const ThemeItem = ({color, img, changeColor}) => {
  return (
    <img 
        src={img} 
        alt="" 
        onClick={() => changeColor(color)}
    />
  )
}

export default ThemeItem