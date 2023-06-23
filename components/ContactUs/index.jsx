import React, {useState} from 'react'
import axios from 'axios'
import Image from 'next/image';

import {ContactUsContainer,MsgBtn} from './ContactUs.styled'

const ContactUs = () => {

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('')
  const [inputSubject, setInputSubject] = useState('')
  const [inputMessage, setInputMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post(`/api/contact`, {
      name: inputName, 
      email: inputEmail, 
      subject: inputSubject, 
      message: inputMessage,
    })
    .then((res)=> {console.log(res)})
    .catch((err) => console.log(err));
  }

  return (
    <ContactUsContainer>
      {/* <h3>Contact us</h3> */}
    <form>
      <label>Name: </label>
      <input type="text" placeholder="Name" value={inputName} onChange={(e) => setInputName(e.target.value)} />
      <label>Email: </label>
      <input type="email" placeholder="Email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
      <label>Subject: </label>
      <input type="text" placeholder="Subject" value={inputSubject} onChange={(e) => setInputSubject(e.target.value)} />
      <label>Write your message: </label>
      <textarea
        value={inputMessage}
        cols={30}
        rows={8}
        placeholder="Write your message"
        onChange={(e) => setInputMessage(e.target.value)}
      ></textarea>
      <MsgBtn onClick={handleSubmit}>Message</MsgBtn>
    </form>
</ContactUsContainer>
  )
}

export default ContactUs