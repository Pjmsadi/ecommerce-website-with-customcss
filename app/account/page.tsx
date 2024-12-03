'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './account.module.css'

interface AccountDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function AccountPage() {
  const [accountDetails, setAccountDetails] = useState<AccountDetails>({
    name: 'John Doe',
    email: 'john@example.com', 
    phone: '(555) 123-4567',
    address: '123 Main St, City, State 12345'
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    // Save account details
    setIsEditing(false)
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.accountContent}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>My Account</h1>

        <div className={styles.accountSection}>
          <div className={styles.sectionHeader}>
            <h2>Account Details</h2>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={styles.editButton}
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          {isEditing ? (
            <div className={styles.editForm}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input 
                  type="text"
                  value={accountDetails.name}
                  onChange={(e) => setAccountDetails({...accountDetails, name: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input 
                  type="email"
                  value={accountDetails.email}
                  onChange={(e) => setAccountDetails({...accountDetails, email: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input 
                  type="tel"
                  value={accountDetails.phone}
                  onChange={(e) => setAccountDetails({...accountDetails, phone: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Address</label>
                <input 
                  type="text"
                  value={accountDetails.address}
                  onChange={(e) => setAccountDetails({...accountDetails, address: e.target.value})}
                />
              </div>
              <button onClick={handleSave} className={styles.saveButton}>
                Save Changes
              </button>
            </div>
          ) : (
            <div className={styles.detailsView}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Name:</span>
                <span>{accountDetails.name}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Email:</span>
                <span>{accountDetails.email}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Phone:</span>
                <span>{accountDetails.phone}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Address:</span>
                <span>{accountDetails.address}</span>
              </div>
            </div>
          )}
        </div>

        <div className={styles.accountSection}>
          <h2>Order History</h2>
          <div className={styles.orderList}>
            <p className={styles.emptyMessage}>No orders yet</p>
          </div>
        </div>

        <button className={styles.logoutButton}>
          Log Out
        </button>
      </motion.div>
    </div>
  )
}
