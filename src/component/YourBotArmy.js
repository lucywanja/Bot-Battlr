import React from 'react'


function YourBotArmy({ army, releaseBot , handleDelete }) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
    <ul role="list" className="divide-y divide-gray-100">
        {
          army.map((item) => (
            <li key={item.id} className="flex justify-between gap-x-6 p-5 m-2 border shadow" onClick={() => releaseBot(item) }>
              
              <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={item.avatar_url} alt=""/>

              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.bot_class}</p>
              </div>
            </div>

            
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p><button className='bg-red-500 text-white p-1 w-full' onClick={(e)=>{ e.stopPropagation(); handleDelete(item)  }}>x</button></p>

              <p className="text-sm leading-6 text-gray-900"> <span><strong>Health : </strong></span>{item.health}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500"><span><strong>Damage :</strong> </span>{item.damage}</p>
              <p className="text-sm leading-6 text-gray-900"><span><strong>Armor :</strong></span>{item.armor}</p>
            </div>

            </li>
          ))
        }
      

      
    </ul>
  </div>
  )
}

export default YourBotArmy