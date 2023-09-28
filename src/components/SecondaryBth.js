import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryBth = ({titleTwo,path}) => {
  return (
    <Link className="trail" to={path}>{titleTwo}</Link>
  )
}

export default SecondaryBth
