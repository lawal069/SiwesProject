import React from 'react'
import Image from 'next/image';

import {ContactUsContainer,MsgBtn} from './ContactUs.styled'

const ContactUs = () => {
  return (
    <ContactUsContainer>
    <div>
      <h3>Contact us</h3>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Subject" />
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