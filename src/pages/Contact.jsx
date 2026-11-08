import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const empty = { name: '', email: '', topic: 'General question', message: '' }

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Please enter a valid email, e.g. name@mail.com.'
  if (form.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSent(true)
      setForm(empty)
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello"
        text="Questions, catering requests or feedback. We reply within one working day."
      />

      <section className="section">
        <div className="contact">
          <div className="contact-info">
            <div>
              <h3>Visit</h3>
              <p>123 Coffee Street, City Center</p>
            </div>
            <div>
              <h3>Call</h3>
              <p>+961 1 234 567</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>hello@beanandbrew.com</p>
            </div>
            <div>
              <h3>Hours</h3>
              <p>Mon – Sat 7:00 AM – 11:00 PM<br />Sunday 8:00 AM – 10:00 PM</p>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="c-name">Name</label>
            <input id="c-name" name="name" value={form.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="c-topic">Topic</label>
            <select id="c-topic" name="topic" value={form.topic} onChange={handleChange}>
              <option>General question</option>
              <option>Catering request</option>
              <option>Feedback</option>
            </select>

            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows="5" value={form.message} onChange={handleChange} />
            {errors.message && <p className="error">{errors.message}</p>}

            <button className="btn" type="submit">Send message</button>
            {sent && <p className="success">Thanks! Your message was sent. We will reply soon.</p>}
          </form>
        </div>
      </section>
    </>
  )
}
