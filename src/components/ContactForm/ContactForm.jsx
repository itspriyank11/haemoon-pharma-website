import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

import styles from './ContactForm.module.css'

const INITIAL = { name: '', email: '', phone: '', message: '' }

// Web3Forms access key — set VITE_WEB3FORMS_KEY in your .env / Vercel env vars.
// The placeholder value counts as "not configured" so demo mode kicks in.
const RAW_KEY = import.meta.env.VITE_WEB3FORMS_KEY
const WEB3FORMS_KEY =
  RAW_KEY && RAW_KEY !== 'your-web3forms-access-key-here' ? RAW_KEY : ''

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
  message: () => '',
}

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email ID', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
]

/**
 * Accessible, client-validated contact form styled as a "Connect with us"
 * panel. Name and email are mandatory; on a valid submit it shows a success
 * state (no backend wired — ready to connect to an API/email service).
 *
 * @param {boolean} withHeader  show the "Connect with us" heading
 */
export default function ContactForm({ withHeader = false }) {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    const nextErrors = {}
    Object.keys(validators).forEach((key) => {
      const msg = validateField(key, values[key])
      if (msg) nextErrors[key] = msg
    })
    setErrors(nextErrors)
    setTouched(
      Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {}),
    )

    if (Object.keys(nextErrors).length > 0) return

    // No key configured yet — fall back to the demo success state so local
    // builds still work, but log a clear warning.
    if (!WEB3FORMS_KEY) {
      console.warn(
        'VITE_WEB3FORMS_KEY is not set — the contact form is in demo mode and will not deliver messages.',
      )
      setSent(true)
      setValues(INITIAL)
      setTouched({})
      return
    }

    setSending(true)
    try {
      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_KEY)
      formData.append('subject', 'New enquiry from Haemoon Pharma website')
      formData.append('from_name', 'Haemoon Pharma Website')
      formData.append('name', values.name)
      formData.append('email', values.email)
      formData.append('phone', values.phone || 'Not provided')
      formData.append('message', values.message || 'No message provided')

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        setSent(true)
        setValues(INITIAL)
        setTouched({})
      } else {
        setSubmitError(
          data.message || 'Something went wrong. Please try again.',
        )
      }
    } catch {
      setSubmitError(
        'Could not send your message. Please check your connection and try again.',
      )
    } finally {
      setSending(false)
    }
  }

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
            {withHeader && (
              <div className={styles.header}>
                <h3 className={styles.formTitle}>Connect with us</h3>
                <p className={styles.formSub}>
                  Fill out this form and we’ll get back to you right away.
                </p>
              </div>
            )}

            <div className={styles.fields}>
              {FIELDS.map((f) => (
                <div
                  key={f.name}
                  className={`${styles.field} ${f.half ? styles.half : ''}`}
                >
                  <div
                    className={`${styles.inputWrap} ${
                      errors[f.name] ? styles.invalid : ''
                    }`}
                  >
                    <label htmlFor={f.name}>
                      {f.label}
                      {f.required && <span className={styles.req}>*</span>}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
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
                <div
                  className={`${styles.inputWrap} ${styles.textareaWrap} ${
                    errors.message ? styles.invalid : ''
                  }`}
                >
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>

            <p className={styles.mandatory}>
              <span className={styles.req}>*</span> Mandatory fields to be filled
            </p>

            {submitError && (
              <p className={styles.submitError} role="alert">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              className={`btn ${styles.submit}`}
              disabled={sending}
            >
              {sending ? 'Sending…' : 'Submit Now'}
              <Send size={17} />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
