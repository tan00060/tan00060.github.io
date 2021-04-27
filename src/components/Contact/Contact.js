import { ValidationError, useForm } from "@formspree/react";
import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import React from "react";
import "./Contact.css";
import { Button, Form } from "react-bootstrap";

export default function Contact() {
  let body = (
    <div>
      <h1 className="contactMeTitle">Contact Me</h1>
      <div className="contactImgContainer">
        <GeoAlt className="imgIcons"></GeoAlt>
        <h5 className="contactInfo">
          Location: <br></br>Ottawa, ON, Canada
        </h5>
      </div>
      <div className="contactImgContainer">
        <Envelope className="imgIcons"></Envelope>
        <h5 className="contactInfo">
          Email: <br></br>tan00060@algonquinlive.com
        </h5>
      </div>
      <div className="contactImgContainer">
        <Telephone className="imgIcons"></Telephone>
        <h5 className="contactInfo">
          Phone:<br></br>613-700-9836
        </h5>
      </div>
    </div>
  );
  const [state, handleSubmit] = useForm("xbjlagaa");
  if (state.succeeded) {
    return (
      <div>
        {body}
        <p className="thanksJoin">Thanks for joining!</p>
      </div>
    );
  }
  return (
    <div>
      {body}
      <div className="formContainer">
        <Form onSubmit={handleSubmit}>
          <div className="nameEmailContainer">
            <input id="name" type="name" name="name" placeholder="Name" />
            <input id="email" type="email" name="email" placeholder="Email" />
          </div>
          <br></br>
          <div className="subjectContainer">
            <input
              id="subject"
              type="subject"
              name="subject"
              placeholder="subject"
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <br></br>
          <textarea id="message" name="message" placeholder="Message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br></br>
          <br></br>
          <Button type="submit" disabled={state.submitting} variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
