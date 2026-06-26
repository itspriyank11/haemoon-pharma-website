import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, Tag, MessageSquare, Send, CheckCircle2 } from 'lucide-react'

import styles from './ContactForm.module.css'

const INITIAL = { name: '', email: '', phone: '', subject: '', message: '' }

const validators = {
  name: (v) => (v.trim().length < 2 ? 'Please enter your name.' : ''),
  email: (v) =>
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
      ? 'Please enter a valid email address.'
      : '',
  phone: (v) =>
    v.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.trim())
      ? 'Please enter a valid phone number.'
      : '',
  subject: (v) => (v.trim().length < 3 ? 'Please add a subject.' : ''),
  message: (v) =>
    v.trim().length < 10 ? 'Your message should be a little longer.' : '',
}

/**
 * Accessible, client-validated contact form. On a valid submit it shows a
 * success state (no backend wired — ready to connect to an API/email service).
 */
export default function ContactForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)

  const validateField = (name, value) =>
    validators[name] ? validators[name](value) : ''

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    Object.keys(validators).forEach((key) => {
      const msg = validateField(key, values[key])
      if (msg) nextErrors[key] = msg
    })
    setErrors(nextErrors)
    setTouched(
      Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {}),
    )

    if (Object.keys(nextErrors).length === 0) {
      // TODO: connect to a backend / email service here.
      setSent(true)
      setValues(INITIAL)
      setTouched({})
    }
  }

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'Jane Doe', half: true },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'jane@email.com', half: true },
    { name: 'phone', label: 'Phone (optional)', type: 'tel', icon: Phone, placeholder: '+91 90000 00000', half: true },
    { name: 'subject', label: 'Subject', type: 'text', icon: Tag, placeholder: 'How can we help?', half: true },
  ]

  return (
    <div className={styles.card}>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            className={styles.success}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className={styles.successIcon}>
              <CheckCircle2 size={40} />
            </span>
            <h3>Thank you — message sent!</h3>
            <p>
              Our team has received your enquiry and will get back to you within
              one business day.
            </p>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setSent(false)}
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className={styles.formTitle}>Send us a message</h3>
            <p className={styles.formSub}>
              Fill in the form below and we’ll respond as soon as possible.
            </p>

            <div className={styles.row}>
              {fields.map((f) => (
                <div
                  key={f.name}
                  className={`${styles.field} ${f.half ? styles.half : ''}`}
                >
                  <label htmlFor={f.name}>{f.label}</label>
                  <div
                    className={`${styles.inputWrap} ${
                      errors[f.name] ? styles.invalid : ''
                    }`}
                  >
                    <f.icon size={18} className={styles.fieldIcon} />
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={values[f.name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors[f.name]}
                      aria-describedby={errors[f.name] ? `${f.name}-err` : undefined}
                    />
                  </div>
                  {errors[f.name] && (
                    <span id={`${f.name}-err`} className={styles.error}>
                      {errors[f.name]}
                    </span>
                  )}
                </div>
              ))}

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <div
                  className={`${styles.inputWrap} ${styles.textareaWrap} ${
                    errors.message ? styles.invalid : ''
                  }`}
                >
                  <MessageSquare size={18} className={styles.fieldIcon} />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about your enquiry…"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-err' : undefined}
                  />
                </div>
                {errors.message && (
                  <span id="message-err" className={styles.error}>
                    {errors.message}
                  </span>
                )}
              </div>
            </div>

            <button type="submit" className={`btn ${styles.submit}`}>
              Send Message
              <Send size={17} />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
