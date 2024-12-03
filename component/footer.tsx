'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './footer.module.css'

export default function Footer() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <motion.div 
            className={styles.footerSection}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Pure Glow</h3>
            <p>Natural skincare products for your daily routine.</p>
            <div className={styles.social}>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link>
              <br />
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link>
              <br />
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link>
            </div>
          </motion.div>

          <motion.div 
            className={styles.footerSection}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <nav>
              <Link href="/about">About Us</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faq">FAQ</Link>
            </nav>
          </motion.div>

          <motion.div 
            className={styles.footerSection}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4>Contact</h4>
            <address>
              <p>123 Skincare Street</p>
              <p>Beauty City, BC 12345</p>
              <p>contact@pureglow.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </motion.div>
        </div>

        <motion.div 
          className={styles.footerBottom}
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Pure Glow. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
