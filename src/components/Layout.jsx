import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'


export default function Layout() {
  return (
    <div className="site-wrapper">
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  )
}