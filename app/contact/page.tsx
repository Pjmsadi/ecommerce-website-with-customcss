'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import styles from './contact.module.css'


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.contactHeader}
      >
        <h1>Get in Touch</h1>
        <p>We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
      </motion.div>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>📍</div>
            <h3>Visit Us</h3>
            <p>123 Skincare Street</p>
            <p>Beauty City, BC 12345</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>📞</div>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon-Fri: 9am - 6pm</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>✉️</div>
            <h3>Email Us</h3>
            <p>support@skincare.com</p>
            <p>sales@skincare.com</p>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit} 
          className={styles.contactForm}
        >
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={6}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  )
}
