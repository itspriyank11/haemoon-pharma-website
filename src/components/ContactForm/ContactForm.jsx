import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

import styles from './ContactForm.module.css'

const INITIAL = { name: '', email: '', phone: '', message: '' }

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

            <button type="submit" className={`btn ${styles.submit}`}>
              Submit Now
              <Send size={17} />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
