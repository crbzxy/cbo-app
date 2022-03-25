import React, { useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/NavBar'
function Contacto() {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")


  const handleSend = async (e) => {
    setSent(true)
    try {
      await axios.post("http://localhost:4000/send_mail", {
        name, email, subject, phone, message
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="contenedor">
      <Helmet>
        <title>CBO - Contacto</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/" />
      </Helmet>
      <Navbar />
      {!sent ? (
        <form onSubmit={handleSend}>

          <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="correo@ltd" value={email} onChange={(e) => setEmail(e.target.value)} />

          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <br />
          <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />

          <textarea name="textarea" rows="10" cols="50"
            value={message} onChange={(e) => setMessage(e.target.value)}
          >Write something here</textarea>

          <button type="submit">Send Email</button>
        </form>
      )
        :
        (
          <h1> ✨ Email Sent</h1>

        )}
    </div>
  )
}


export default Contacto

