import React from 'react'
import Image from 'next/image';

import {ContactUsContainer,MsgBtn} from './ContactUs.styled'

const ContactUs = () => {
  return (
    <ContactUsContainer>
    <div>
      <h3>Contact us</h3>
      <label>Name: </label>
      <input type="text" placeholder="Name" />
      <label>Email: </label>
      <input type="email" placeholder="Email" />
      <label>Subject: </label>
      <input type="text" placeholder="Subject" />
      <label>Write your message: </label>
      <textarea
        name=""
        id=""
        cols={30}
        rows={8}
        placeholder="Write your message"
      ></textarea>
      <MsgBtn>Message</MsgBtn>
    </div>
</ContactUsContainer>
  )
}

export default ContactUs