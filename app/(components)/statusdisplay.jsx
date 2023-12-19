import React from 'react'




const StatusDisplay = ({ status }) => {
  const getColor = () => {
    switch (status.toLowerCase()) {
      case "done":
        return `bg-green-500`;
      case "started":
        return `bg-yellow-500`;
      case "not started":
        return `bg-red-500`
    }
    return 'bg-slate-400'
  }
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold ${getColor()} rounded-full`}>
      { status }
    </span>
  )
}

export default StatusDisplay