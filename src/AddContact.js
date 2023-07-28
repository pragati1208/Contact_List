import React from 'react'
import './AddContact.css'
import ContactList from './ContactList'
export default function AddContact() {
    const Contacts=[
        {
            name: "Rahul",
            email: "email@gmail.com"

        },
        {
            name: "Keshav",
            email: "keshav@gmail.com"
        }
    ];
  return (
    <div className='addContact'>
      <h1>Add Contact</h1>
      <form className='details'>
        <div className='name'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Enter Your Name'/>
        </div> 
        <div className='email'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Enter Your Email Address'/>
        </div> 
        <button id='btn' type='submit'>Submit</button>
      </form>
      <hr/>
      {Contacts.map((Contact)=>{
        console.log(Contact);
        return <ContactList data={Contact}></ContactList>
      })}
      
    </div>
  )
}
