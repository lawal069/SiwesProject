import { useState } from "react";
import axios from "axios";

import {
  EnrollContainer,
  EnrollBody,
  InputCont,
  MsgBtn,
} from "./Enroll.styled";

const Enroll = () => {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPName, setInputPName] = useState("");
  const [inputPNumber, setInputPNumber] = useState("");
  const [inputOccupation, setInputOccupation] = useState("");
  const [inputRelationship, setInputRelationship] = useState("");
  const [inputPAddress, setInputPAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/api/enroll`, {
        firstName: inputFirstName,
        lastName: inputLastName,
        department: inputDepartment,
        phoneNumber: inputPhoneNumber,
        gender: inputGender,
        email: inputEmail,
        address: inputAddress,
        pName: inputPName,
        pNumber: inputPNumber,
        occupation: inputOccupation,
        relationship: inputRelationship,
        pAddress: inputPAddress,
      })
      .then((res) => {
        console.log(res);
        setInputFirstName('');
        setInputLastName('');
        setInputDepartment('');
        setInputPhoneNumber('');
        setInputGender('');
        setInputEmail('');
        setInputAddress('');
        setInputPName('');
        setInputPNumber('');
        setInputOccupation('');
        setInputRelationship('');
        setInputPAddress('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <EnrollContainer>
      <EnrollBody>
        <h3>Personal Information</h3>
        <InputCont>
          <input
            type="text"
            placeholder="First Name"
            value={inputFirstName}
            onChange={(e) => setInputFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={inputLastName}
            onChange={(e) => setInputLastName(e.target.value)}
          />
        </InputCont>
        <InputCont>
          <input
            type="text"
            placeholder="Department (e.g: science)"
            value={inputDepartment}
            onChange={(e) => setInputDepartment(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={inputPhoneNumber}
            onChange={(e) => setInputPhoneNumber(e.target.value)}
          />
        </InputCont>
        <InputCont>
          <input
            type="text"
            placeholder="Gender (e.g: Male)"
            value={inputGender}
            onChange={(e) => setInputGender(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </InputCont>
        <input
          type="tel"
          placeholder="Home Address"
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
        />
        <h3>Parent/Guardian Information</h3>
        <InputCont>
          <input
            type="text"
            placeholder="Parent/Guardian Name"
            value={inputPName}
            onChange={(e) => setInputPName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Parent/Guardian Phone Number"
            value={inputPNumber}
            onChange={(e) => setInputPNumber(e.target.value)}
          />
        </InputCont>
        <InputCont>
          <input
            type="text"
            placeholder="Occupation"
            value={inputOccupation}
            onChange={(e) => setInputOccupation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Relationship with the Student"
            value={inputRelationship}
            onChange={(e) => setInputRelationship(e.target.value)}
          />
        </InputCont>
        <input
          type="tel"
          placeholder="Parent/Guardian Home Address"
          value={inputPAddress}
          onChange={(e) => setInputPAddress(e.target.value)}
        />
        <MsgBtn onClick={handleSubmit}>Submit</MsgBtn>
      </EnrollBody>
    </EnrollContainer>
  );
};

export default Enroll;