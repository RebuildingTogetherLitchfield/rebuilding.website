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

export default function SponsorForm() {
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
      <Seo title="Sponsor Sign Up Form" />
      <Header pageHeading="Sponsor Sign Up" />
      <div className="container center">
        <h2 className="vol-form-heading">
          I want to become a{" "}
          <span className="font-italic text-uppercase">Sponsor!</span>{" "}
        </h2>
        <form
          name="sponsor"
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
              Your Name:
              <br />
              <input
                type="text"
                name="name"
                required
                minlength="3"
                onChange={handleChange}
              />
              <br />
              <span
                style={{
                  fontSize: `14px`,
                  fontWeight: `normal`,
                  color: `red`,
                  marginLeft: `5px`,
                }}
              >
                *required
              </span>
            </label>
          </p>
          <p>
            <label className="form-label">
              Title :
              <br />
              <input
                type="text"
                name="title"
                minLength="3"
                onChange={handleChange}
              />
              <br />
            </label>
          </p>
          <p>
            <label className="form-label">
              Company :
              <br />
              <input
                type="text"
                name="company"
                minLength="3"
                onChange={handleChange}
              />
              <br />
              <span
                style={{
                  fontSize: `14px`,
                  fontWeight: `normal`,
                  color: `red`,
                  marginLeft: `5px`,
                }}
              >
                *required
              </span>
            </label>
          </p>
          <p>
            <label className="form-label">
              Company Address:
              <br />
              <input
                type="text"
                name="address1"
                minLength="3"
                onChange={handleChange}
              />
              <br />
            </label>
          </p>
          <p>
            <label className="form-label">
              Company Address:
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
              <input
                type="text"
                name="zip"
                pattern="(\d{5}([\-]\d{4})?)"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label className="form-label phone">
              Phone:
              <br />
              <input
                required
                type="tel"
                name="phone"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handleChange}
              />
              <br />
              &nbsp;
            </label>
            <label className="form-label">
              Your Email:
              <br />
              <input
                type="email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={handleChange}
              />
              <br />
              <span
                style={{
                  fontSize: `14px`,
                  fontWeight: `normal`,
                  color: `red`,
                  marginLeft: `5px`,
                }}
              >
                *required
              </span>
            </label>
          </p>
          <p>
            <label className="form-label">
              Message:
              <br />
              <textarea
                name="message"
                placeholder="How would you like to volunteer?"
                required
                minLength="5"
                onChange={handleChange}
              />
              <br />
              <span
                style={{
                  fontSize: `14px`,
                  fontWeight: `normal`,
                  color: `red`,
                  marginLeft: `5px`,
                }}
              >
                *required
              </span>
            </label>
          </p>
          <p className="send-btn">
            <button className="btn btn-success" type="submit">
              Become a Sponsor
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}