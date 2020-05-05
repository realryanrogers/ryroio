import React from "react"
import { navigate } from "gatsby"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function SignUpPage() {
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
    <div>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <p className="mb-2">
        <b>Subscribe for weekly extra content!</b>
      </p>
      <Form
        name="newsletter-signup"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mb-2 mr-sm-2"
      >
        <Form.Group
          controlId="formBasicEmail"
          className="mb-2 mr-sm-2 input-group"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <Form.Control
            className="mr-sm-2 col-5"
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <div class="input-group-append">
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </Form.Group>
      </Form>
      <span className="text-muted my-1 mr-sm-2">
        No Spam. Unsubscribe anytime.
      </span>
    </div>
  )
}
