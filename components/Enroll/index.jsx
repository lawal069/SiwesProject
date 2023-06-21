import React from 'react'
import {EnrollContainer, EnrollBody, InputCont, MsgBtn} from './Enroll.styled'

const Enroll = () => {
  return (
    <EnrollContainer>
      <EnrollBody>
      <h3>Enroll</h3>
      <InputCont>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </InputCont>
      <InputCont>
        <input type="text" placeholder="Department (e.g: science)" />
        <input type="text" placeholder="Phone Number" />
      </InputCont>
      <InputCont>
        <input type="text" placeholder="Parent/Guardian Name" />
        <input type="text" placeholder="Parent/Guardian Phone Number" />
      </InputCont>
      
    </EnrollBody>
    </EnrollContainer>
  )
}

export default Enroll