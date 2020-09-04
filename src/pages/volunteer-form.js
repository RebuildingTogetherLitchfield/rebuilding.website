import { navigate } from "gatsby"
import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styles from "../styles/form.module.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function VolunteerForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    console.log(state)
  }

  const handleSubmit = (e) => {
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
      .catch((error) => alert(error))
  }
  return (
    <Layout>
      <Seo title="Volunteer Sign Up Form" />
      <Header pageHeading="Volunteer Sign Up" />
      <div className={`container center ${styles.mainContainer}`}>
        <h2 className={styles.volFormHeading}>
          I want to become a{" "}
          <span className="font-italic text-uppercase">Volunteer!</span>{" "}
        </h2>
        <form
          name="volunteer"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className={styles.mainForm}>
          <input type="hidden" name="form-name" value="volunteer" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label className={styles.formLabel}>
              Your Name:
              <br />
              <input
                type="text"
                name="name"
                required
                minLength="3"
                onChange={handleChange}
                className={`${styles.isText} ${styles.isName}`}
              />
              <br />
              <span className={styles.isRequired}>*required</span>
            </label>
          </p>
          <p>
            <label className={styles.formLabel}>
              Address:
              <br />
              <input
                type="text"
                name="address1"
                minLength="3"
                onChange={handleChange}
                className={`${styles.isText} ${styles.isAddress1}`}
              />
              <br />
            </label>
          </p>
          <p>
            <label className={styles.formLabel}>
              Address:
              <br />
              <input
                type="text"
                name="address2"
                onChange={handleChange}
                className={`${styles.isText} ${styles.isAddress2}`}
              />
            </label>
          </p>
          <p>
            <label className={`pr-2 ${styles.formLabel}`}>
              City:
              <br />
              <input
                type="text"
                name="city"
                onChange={handleChange}
                className={`${styles.isText} ${styles.isCity}`}
              />
            </label>
            <label className={`pr-2 ${styles.formLabel}`}>
              State:
              <br />
              <input
                type="text"
                name="state"
                onChange={handleChange}
                className={`${styles.isText} ${styles.isState}`}
              />
            </label>
            <label className={`zip ${styles.formLabel}`}>
              Zip Code:
              <br />
              <input
                type="text"
                name="zip"
                pattern="(\d{5}([\-]\d{4})?)"
                onChange={handleChange}
                className={`${styles.isText} ${styles.isZip}`}
              />
            </label>
          </p>
          <p>
            <label className={`pr-2 ${styles.formLabel}`}>
              Phone:
              <br />
              <input
                type="tel"
                name="phone"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handleChange}
                className={`${styles.isTel} ${styles.isPhone}`}
              />
              <br />
              &nbsp;
            </label>
            <label className={styles.formLabel}>
              Your Email:
              <br />
              <input
                type="email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={handleChange}
                className={`${styles.isEmail} ${styles.myEmail}`}
              />
              <br />
              <span className={styles.isRequired}>*required</span>
            </label>
          </p>
          <p>
            <label className={styles.formLabel}>
              Message:
              <br />
              <textarea
                name="message"
                placeholder="How would you like to volunteer?"
                required
                minLength="5"
                onChange={handleChange}
                className={styles.isTextarea}
              />
              <br />
              <span className={styles.isRequired}>*required</span>
            </label>
          </p>
          <p className={styles.sendButton}>
            <button className="btn btn-success" type="submit">
              Volunteer
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}
