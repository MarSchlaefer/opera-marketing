import React from 'react';

const Contact = () => {

  return(
    <div className="contact">
      <h1>Contact</h1>
      <form>
        <label>
          <span>Name</span>
          <input type="text"></input>
        </label>
        <br/>
        <label>
          <span>Email</span>
          <input type="text"></input>
        </label>
        <br/>
        <label>
          <span>Subject</span>
          <input type="text"></input>
        </label>
        <br/>
        <label>
          <span>Message</span>
          <textarea type="textarea" ></textarea>
        </label>
      </form>
    </div>
  )
}

export default Contact
