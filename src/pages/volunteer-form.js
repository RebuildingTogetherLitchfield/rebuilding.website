import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import "../styles/volunteer-form.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <Seo title="Volunteer Sign Up Form" />
      <Header pageHeading="Volunteer Sign Up" />
      <div className="container center">
        <h2 className="vol-form-heading">Become a Volunteer!</h2>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label className="form-label">
              Your name:
              <br />
              <input type="text" name="name" required onChange={handleChange} />
            </label>
          </p>
          <p>
            <label className="form-label">
              Address:
              <br />
              <input
                type="text"
                name="address1"
                required
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label className="form-label">
              Address:
              <br />
              <input type="text" name="address2" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label className="form-label city">
              City:
              <br />
              <input type="text" name="city" onChange={handleChange} />
            </label>
            <label className="form-label state">
              State:
              <br />
              <input type="text" name="state" onChange={handleChange} />
            </label>
            <label className="form-label zip">
              Zip Code:
              <br />
              <input type="number" name="zip" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label className="form-label phone">
              Phone:
              <br />
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                onChange={handleChange}
              />
            </label>
            <label className="form-label">
              Your email:
              <br />
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label className="form-label">
              Message:
              <br />
              <textarea
                name="message"
                placeholder="How would you like to volunteer?"
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="send-btn">
            <button className="btn btn-success" type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}
