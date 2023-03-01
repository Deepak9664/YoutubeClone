import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  return (
    <div>
      <h1 className='flex'>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Songs"/>
        <Button name="Live"/>
        <Button name="Soccer"/>
        <Button name="Cricket"/>
        <Button name="News"/>
      </h1>
    </div>
  )
}

export default Buttonlist
