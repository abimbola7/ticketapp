import React from 'react'
import DeleteBlock from './deleteblock'
import PriorityDisplay from './prioritydisplay'
import Progressbar from './progressbar'
import StatusDisplay from './statusdisplay'
import moment from 'moment'
import Link from 'next/link'
// import { Timestamp } from 'mongodb'

const TicketCard = ({ ticket }) => {
  const convertTimestamp = (timestamp) => {
    const options = {
      year  : "numeric",
      month : "2-digit",
      day : "2-digit",
      hour : "2-digit",
      minute : "2-digit",
      hour12 : true
    }
    const date  =  new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", options)
    return formattedDate;
  }

  return (
    <div className='flex flex-col p-3 m-2 rounded-md shadow-lg bg-cards hover:bg-cardHover'>
      <div className='flex mb-3 '>
        <PriorityDisplay priority={ticket.priority}/>  
        <div className='ml-auto'>
          <DeleteBlock id={ticket._id}/>
        </div>
      </div>
      <Link href={`/ticketpage/${ticket._id}`} style={{ display : "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className='h-px mb-2 border-0 bg-page'/>
        <p className='whitespace-pre-wrap'>
          {ticket.description}
        </p>
        <div className='flex-grow'>
          
        </div>
        <div className='flex mt-2'>
          <div className='flex flex-col'>
            <p className='my-1 text-xs'>{ convertTimestamp(ticket.createdAt) }</p>
            <Progressbar progress={ticket.progress}/>
          </div>
          <div className='flex items-end ml-auto'>
            <StatusDisplay status={ticket.status} />  
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TicketCard;