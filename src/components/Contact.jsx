import React, { useState } from "react";
import "./css/contact.css";
import { db } from "../components/firebase";
import { uid } from "uid";
import { ref, set } from "firebase/database";
import axios from "axios";

export default function Contact(e) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [textEra, setTextEra] = useState('');
  const [showMessege, setShowMessege] = useState();

  const showMessegeHandler = () => {
    setShowMessege("The information has been sent");
  };
  const isValid = (e) => {
    e.preventDefault();
    if (fullName.length > 0 && email.length > 0 && textEra.length > 0) {
      return writeToDatabase();
    }
    else if (fullName.length < 1 || email.length < 1 || textEra.length < 1) {
      console.log('fill outh field ');
      return setShowMessege('please fill out all fields ')
    }
  };
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      email,
      fullName,
      textEra,
    });
    setFullName("");
    setEmail("");
    setTextEra("");
    showMessegeHandler();
  };
  return (
    <div className="Contact-container">
      <div className="first-Para">
        <h1>CONTACT</h1>
        <p>___________________________</p>
        <br /> <br /> <h4>Have a question or want to work together ?</h4>
      </div>
      <div className="form">
        <form className="form-item" onSubmit={isValid}>
          <input
            id="inputName"
            type="text"
            placeholder="Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            id="inputText"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            onChange={(e) => setTextEra(e.target.value)}
            id="inputTextera"
            rows="18"
            cols="100"
            placeholder="Your massage"
          />
          <div className="inputBtndiv">
            <input id="inputBtnId" type="submit" value="SUBMIT" />
          </div>
        </form>
        <h4 style={{ color: "	#ffa500", fontSize: "15px" }}>{showMessege}</h4>
      </div>
    </div>
  );
}
