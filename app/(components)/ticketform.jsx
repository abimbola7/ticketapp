"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Ticketform = () => {
  const router = useRouter();
  const startingTicketData =  {
    title : "",
    description : "",
    category : "Hardware Problem",
    priority : 1,
    progress : 0,
    status : "not started",
    // active : ""
  }
  const [ formData, setFormData ] = React.useState(startingTicketData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name  = e.target.name;

    setFormData(prevState=>({
      ...prevState,
      [name] : value      
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const res = await fetch("/api/ticket", {
      method :"POST",
      body : JSON.stringify({formData}),
      "content-type" : "application/json",
    });
    
    if (!res.ok) {
      throw new Error("failed to create ticket")
    }
    
    router.refresh()
    router.push("/")
  }
  
  return (
    <div className='flex jutsify-center '>
      <form 
      className='flex flex-col w-1/2 gap-3'
      onSubmit={handleSubmit}
      >
          <h3>Create Your Ticket</h3>
          <label>Title</label>
          <input 
          id="title" 
          name="title"
          onChange={handleChange} 
          required={true} 
          value={formData.title}             
          />
          
          <label>Description</label>
          <textarea 
          id="description" 
          name="description"
          onChange={handleChange} 
          required={true} 
          value={formData.description}
          rows={5}
          />
          
          <label>Category</label>
          <select name="category" id="category" value={formData.category} onChange={handleChange}>
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Project">Project</option>
          </select> 
          
          <label>Priority</label>
          <div>
            <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
            />
            <label>1</label>
            <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
            />
            <label>2</label>
            <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
            />
            <label>3</label>
            <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
            />
            <label>4</label>
            <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
            />
            <label>5</label>
          </div>
          <label>Progress</label>
          <input 
          type='range'
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}  
          />
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="Started">Started</option>
            <option value="Done">Done</option>
          </select>
          <button className='btn'>Create Ticket</button>
      </form>
    </div>
  )
}

export default Ticketform