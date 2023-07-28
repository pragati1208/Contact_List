import React from 'react'
import './ContactList.css'
export default function ContactList(props) {
    console.log(props.data);
  return (
    <div className='contactList'>
      <div className="list">
        <p className='nameDisplay'>{props.data.name}</p>
        <p className='emailDisplay'>{props.data.email}</p>
        <button id='delete'>Delete</button>
      </div>
    </div>
  )
}
