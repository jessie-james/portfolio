import React from 'react'
const Contact = () => {
    return (<div className="contact-container port-body">

        <form>
            <lable>Name:</lable>
            <input type='text' placeholder="name"></input>
            <lable>Email:</lable>
            <input type='text' placeholder="email"></input>
            <lable>Message:</lable>
            <input type='text' className="message"></input>
            <button>Submit</button>
        </form>
    </div>)
}
 export default Contact