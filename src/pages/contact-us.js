import React from "react"
import { navigate } from "gatsby-link"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import ContactMap from "../components/ContactMap"
import superpower from "../images/superpower.png"
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
      <Seo title="Contact Us" />
      <Header pageHeading="Contact Us" />
      <div className="container-fluid">
        <div className="row col-sm-12 contact-form-heading">
          <h1 className="contact-heading">Get in Touch!</h1>
        </div>
        <div className="row form-column">
          <div className="contact-form col-lg-6">
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
                <label className="label-text">
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label className="label-text">
                  Your name:
                  <br />
                  <input type="text" name="name" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label className="label-text">
                  Your email:
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    onChange={handleChange}
                  />
                </label>
              </p>
              <p>
                <label className="label-text">
                  Message:
                  <br />
                  <textarea name="message" onChange={handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
          <div className="col-lg-6 picture-column">
            <img src={superpower} alt="Keep Calm" className="keep-calm" />
          </div>
        </div>
      </div>
      <div className="container">
        <ContactMap />
      </div>
    </Layout>
  )
}
