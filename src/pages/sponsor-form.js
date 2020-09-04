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

export default function SponsorForm() {
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
      <Seo title="Sponsor Sign Up Form" />
      <Header pageHeading="Sponsor Sign Up" />
      <div className={`container center ${styles.mainContainer}`}>
        <h2 className={styles.volFormHeading}>
          I want to become a{" "}
          <span className="font-italic text-uppercase">Sponsor!</span>{" "}
        </h2>
        <form
          name="sponsor"
          className={styles.mainForm}
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="sponsor" />
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
              Title :
              <br />
              <input
                type="text"
                name="title"
                minLength="3"
                onChange={handleChange}
                className={`${styles.isText} ${styles.isTitle}`}
              />
              <br />
            </label>
          </p>
          <p>
            <label className={styles.formLabel}>
              Company :
              <br />
              <input
                type="text"
                name="company"
                required
                minLength="3"
                onChange={handleChange}
                className={`${styles.isText} ${styles.isCompany}`}
              />
              <br />
              <span className={styles.isRequired}>*required</span>
            </label>
          </p>
          <p>
            <label className={styles.formLabel}>
              Company Address:
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
              Company Address:
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
            <label className={styles.formLabel}>
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
                required
                type="tel"
                name="phone"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handleChange}
                className={`${styles.isTel} ${styles.isPhone}`}
              />
              <br />
              <span className={styles.isRequired}>*required</span>
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
          <div className={styles.startCheck}>
            <fieldset className={styles.isFieldset}>
              <legend className={styles.checkboxLabel}>
                My Organization Can Offer:
              </legend>
              <span className={styles.checkboxDesc}>
                (Check all that apply)
              </span>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="5 volunteers"
                    onChange={handleChange}
                  />{" "}
                  5 Volunteers
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="5-10 volunteers"
                    onChange={handleChange}
                  />{" "}
                  5-10 Volunteers
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="10 or more volunteers"
                    onChange={handleChange}
                  />{" "}
                  10 or More Volunteers
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="pro plumber"
                    onChange={handleChange}
                  />{" "}
                  Professional Plumber
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="pro carpenter"
                    onChange={handleChange}
                  />{" "}
                  Professional Carpenter
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="pro electrician"
                    onChange={handleChange}
                  />{" "}
                  Professional Electrician
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="other tradesman"
                    onChange={handleChange}
                  />{" "}
                  Other Professional Tradesman
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="$250-500"
                    onChange={handleChange}
                  />{" "}
                  $250 - $500 Donation
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="$500-750"
                    onChange={handleChange}
                  />{" "}
                  $500 - $750 Donation
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="$750-1000"
                    onChange={handleChange}
                  />{" "}
                  $750 - $1000 Donation
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="offer"
                    value="$1000+"
                    onChange={handleChange}
                  />{" "}
                  $1000+ Donation
                </label>
              </p>
            </fieldset>
          </div>
          <p className={styles.sendButton}>
            <button className="btn btn-success" type="submit">
              Become a Sponsor
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}
