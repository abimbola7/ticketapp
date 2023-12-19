import Link from 'next/link'
import React from 'react';
import { FaTicket } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className='flex flex-row justify-between p-4 bg-nav'>
      <div className='flex items-center space-x-4'>
        <Link href="/">
          <FaHome className='icon'/>
        </Link>
        <Link href="/ticketpage/new">
          <FaTicket className='icon'/>
        </Link>
      </div>
      <div>
        <p className="text-default">abimbolababajide6@gmail.com</p>
      </div>
    </nav>
  )
}

export default Nav