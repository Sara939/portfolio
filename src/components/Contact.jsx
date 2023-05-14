import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

  const [emailsent, setEmailsent]= useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_c6obkp1','template_do4r24l',e.target,'iTwUCWwLWZIYMM77G')
    setEmailsent(true);
  };
  
  if (emailsent){
    return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Thank you for your interest!</p>
            <p className='text-gray-300 py-4'>The message was sent successfully!</p>
          </div>
        </div>
    </div>
    )
  }

  return (
    <form
    onSubmit={handleSubmit}
    target="_blank"
  >
      <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center p-4'>
          <div className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                  <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                  <p className='text-gray-300 py-4'>Send me a message</p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button type="submit" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </div>
      </div>
    </form>
  )
}


export default Contact