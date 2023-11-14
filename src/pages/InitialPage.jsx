import React from 'react'
import { Link } from 'react-router-dom'
import AddToCupboardBtn from '../components/AddToCupboardBtn'
import CheckCupboard from '../components/CheckCupboard'
 
export default function InitialPage() {
  return (
    <div className="site-wrapper">
      <div>
        <Link to="/cook">Start cooking</Link>
        <Link to="/shop">Start shopping</Link>
      </div>
      <AddToCupboardBtn />
      <CheckCupboard />
    </div>


  )
}