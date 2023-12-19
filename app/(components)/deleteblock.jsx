"use client"
import React from 'react'
import { FaX } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const DeleteBlock = ({ id }) => {
  const router = useRouter()
  const deleteTicket  = async () => {
    const res = await fetch(`/api/ticket/${id}`,{
      method: "DELETE"
    })
    if (res.ok) {
      router.refresh()
    }
  }

  return (
    <FaX
    onClick={deleteTicket}
     className='text-red-400 hover:cursor-pointer hover:text-red-200'/>
  )
}

export default DeleteBlock