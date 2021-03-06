import React from "react"
import { navigate } from "gatsby-link"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import ContactUsMap from "../components/ContactUsMap"
import superpower from "../images/superpower.png"
import styles from "../styles/form.module.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
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
      <Seo title="Contact Us" />
      <Header pageHeading="Contact Us" />
      <div className={`container ${styles.contactMain}`}>
        <div className={`row col-sm-12 ${styles.contactFormHeading}`}>
          <h1 className={styles.contactHeading}>Have a general question?</h1>
          <div className={`col-sm-12 ${styles.infoDiv}`}>
            <h3>Rebuilding Together Litchfield County</h3>
            <p className={`${styles.infoAddress} ${styles.infoParagraph}`}>
              30 Bantam Terrace
            </p>
            <p
              className={`${styles.infoCityStateEmail} ${styles.infoParagraph}`}>
              Bantam, CT 06750
            </p>
            <p
              className={`${styles.infoCityStateEmail} ${styles.infoParagraph}`}>
              <a href="mailto:info@rebuildingtogetherlitchfield.org">
                info@rebuildingtogetherlitchfield.org
              </a>
            </p>
            <p className="call-me">
              <a href="tel:203-940-9666" className="btn btn-success">
                Click to Call us at: (203) 240-9666
              </a>
            </p>
          </div>
          <div className="col-sm-12"></div>
        </div>
        <div className={`row ${styles.formColumn}`}>
          <div className="contact-form col-lg-6">
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label className={styles.labelText} htmlFor="bot-field">
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label className={styles.labelText} htmlFor="name">
                  Your name:
                  <br />
                  <input
                    className={`${styles.isText} ${styles.isName}`}
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                </label>
              </p>
              <p>
                <label className={styles.labelText} htmlFor="email">
                  Your email:
                  <br />
                  <input
                    className={`${styles.isText} ${styles.isCompany}`}
                    type="email"
                    name="email"
                    id="contact-email"
                    onChange={handleChange}
                  />
                </label>
              </p>
              <p>
                <label className={styles.labelText} htmlFor="message">
                  Message:
                  <br />
                  <textarea
                    name="message"
                    onChange={handleChange}
                    className={styles.isTextarea}
                  />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
          <div className={`col-lg-6 ${styles.pictureColumn}`}>
            <img src={superpower} alt="Keep Calm" className={styles.keepCalm} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className={`row col-12" ${styles.contactMapContainer}`}>
          <ContactUsMap />
        </div>
      </div>
    </Layout>
  )
}
