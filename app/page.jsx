import React from 'react'
import TicketCard from './(components)/ticketcard'


const getTickets = async () => {
  try {
    const res =  await fetch("http://localhost:3000/api/ticket", {
      cache : "no-store"
    })
    return res.json();
  } catch (error) {
    console.log(error)
  }
}


const Dashboard = async () => {
  const { tickets } = await getTickets();
  console.log(tickets);
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]
  console.log(uniqueCategories)
  return (
    <div className='p-5'>
      <div>
        {
          tickets && uniqueCategories.map((cat, ind)=>(
            <div key={ind} className="mb-4">
              <h2>{cat}</h2>
              <div className='grid-cols-2 md:grid xl:grid-cols-4'>
                {
                  tickets.filter((ticket)=>ticket.category === cat).map((tick, _id)=>(
                    <TicketCard
                    id={_id}
                    key={_id}
                    ticket={tick}
                    />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard