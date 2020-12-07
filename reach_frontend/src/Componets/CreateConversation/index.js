import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

import './Css/convo_flex-slider.css'
import './Css/convo_font-awesome.css'
import './Css/convo_owl-carousel.css'
import './Css/convo_templatemo-lava.css'


export default function Index() {

    let history = useHistory();

    function pathMessenger() {
        history.push("/messenger");
    }

    // create local state
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    
    // controll form
    const changeHandler = (event) =>{
        const key = event.target.name
        
        switch (key) {
          case 'name':
              setName(event.target.value)
              break;
          case 'number':
              setNumber(event.target.value)
              break;
          case 'message':
            setMessage(event.target.value)
              break;
          default:
              break;
          }
      }

      // Create new Conversation
        
      const submitHandler = (event) =>{
        event.preventDefault()
        console.log(`Name: ${name} || Number: ${number}`)
        createVoter()
        createMessage()
        pathMessenger()
    }

        // Create new Voter in DataBase
        const createVoter = () => {
            const data = {name: name, number: number}
            const options = {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(data)}
            fetch('http://localhost:3000/voters/new_voter', options)
        }

        // Create new Message in DataBase
        const createMessage = () => {
        // User ID default 1. This is the clients user ID
        // Voter ID set on back end. specifically last voter created ID to link to newly created Voter
        const data = {body: message}
        const options = {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(data)}
        fetch('http://localhost:3000/messages/new_convo', options)
    }
      
    return (
        <>
        {/* <!-- ***** Footer Start ***** --> */}
        <div>
            <div class="container" style={{marginTop:'200px'}}>
                <div class="convo-foot-content">
                    <div class="row">
                        <div class="right-content col-lg-6 col-md-12 col-sm-12" style={{paddingBottom:'20px'}}>
                            <h2><em>Reach</em> Out Now </h2>
                            <p>
                                Start a conversation now with someone new! Reach out by filling in their name, number, and the first message you want to send them.
                            </p>
                        </div>
                            
                        {/* <!-- ***** Contact Form Start ***** --> */}
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <form class="contact-form">
                                <form id="contact" action="" method="post"/>
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Full Name" required="" style={{backgroundColor: `rgba(250,250,250,0.3)`}}
                                            onChange={changeHandler}/>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="number" type="text" id="number" placeholder="Phone Number" required="" style={{backgroundColor: `rgba(250,250,250,0.3)`}}
                                            onChange={changeHandler}/>
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" id="message" placeholder="Your Message" required="" style={{backgroundColor: `rgba(250,250,250,0.3)`}}
                                            onChange={changeHandler}></textarea>
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" class="main-button" onClick={submitHandler}>Send Message Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!-- ***** Contact Form End ***** --> */}
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}
