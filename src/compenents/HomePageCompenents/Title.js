import React from 'react'

export default function Title({title,prime}) {
  return (
    <div className='TitleCon mb-4 font-bold text-xl mt-12'>
       {prime ? ( <span className='text-[#1a98ff] mr-2'>Prime</span>) : ''}  {title}
    </div>
  )
}
