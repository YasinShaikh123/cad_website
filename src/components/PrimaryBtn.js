import React from 'react'
import { Link } from 'react-router-dom'



const PrimaryBtn = ({title, path}) => {
  return (
    <Link className="login" to={path}>{title}</Link>
  )
}

export default PrimaryBtn
