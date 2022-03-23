import React from "react";
import { IoLocation, IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="title">
        <h1>contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          adipisci mollitia nostrum odio atque corrupti sequi molestiae aperiam,
          expedita earum.
        </p>
      </div>

      <div className="contact-details">
        <div className="address">
          <div className="address-item">
            <span>
              <IoLocation />
            </span>
            <p>kanda/441, Accra</p>
          </div>
          <div className="address-item">
            <span>
              {" "}
              <BiTime />
            </span>
            <p>around the clock</p>
          </div>
          <div className="address-item">
            <span>
              {" "}
              <IoCall />
            </span>
            <p>02438743994</p>
          </div>
          <div className="address-item">
            <span>
              {" "}
              <FaEnvelope />
            </span>
            <p> abdul@gmail.com</p>
          </div>
        </div>

        <div className="form">
          <form>
            <div className="details">
              <div className="name">
                <label htmlFor="name">full name</label>
                <input type="text" />
              </div>

              <div className="phone">
                <label htmlFor="phone">phone</label>
                <input type="text" />
              </div>

              <div className="email">
                <label htmlFor="email">email</label>
                <input type="text" />
              </div>
            </div>

            <div className="feedback">
              <label htmlFor="feedback"> Your Feedback</label>
              <textarea
                name="feedback"
                id="feedback"
                cols="40"
                rows="10"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
