import Ticketform from '@/app/(components)/ticketform';
import React from 'react'


const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/ticket/${id}`, {
    cache: "no-store"
  })
  // if (!res.ok) {
  //   throw new Error("Failed to get ticket")
  // }
  return "POOP";
}


const TicketPage = async ({params, searchParams}) => {
  console.log(params, searchParams);
  const editmode = params.id === "new" ? false : true
  let updateTicketData  = {};
  if (editmode) {
    updateTicketData = await getTicketById(params.id)
    console.log(updateTicketData)
  }
  return (
    <Ticketform />
  )
}

export default TicketPage