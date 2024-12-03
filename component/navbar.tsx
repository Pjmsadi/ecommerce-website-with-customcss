'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Pure Glow
        </Link>

        {isMobile && (
          <button 
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} />
          </button>
        )}

        <AnimatePresence>
          {(!isMobile || isOpen) && (
            <motion.div
              className={`${styles.navLinks} ${isMobile ? styles.active : ''}`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
              <Link href="/products" className={styles.navLink}>
                Products
              </Link>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {!isMobile && (
          <div className={styles.navButtons}>
            <Link href="/cart" className={styles.cartButton}>
              Cart (0)
            </Link>
            <Link href="/account" className={styles.accountButton}>
              Account
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
