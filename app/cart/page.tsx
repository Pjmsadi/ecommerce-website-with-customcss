'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './cart.module.css'

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Pure Glow Vitamin C Serum',
      price: 49.99,
      quantity: 1,
      image: '/11.jpg'
    },
    {
      id: 2,
      name: 'Hydrating Night Cream',
      price: 39.99,
      quantity: 2,
      image: '/4.jpg'
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 5.99
  const total = subtotal + shipping

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={styles.container}>
      <motion.h1 
        className={styles.title}
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        Shopping Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <motion.div 
          className={styles.emptyCart}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <p>Your cart is empty</p>
          <Link href="/products" className={styles.continueShoppingButton}>
            Continue Shopping
          </Link>
        </motion.div>
      ) : (
        <motion.div 
          className={styles.cartContent}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p className={styles.price}>${item.price.toFixed(2)}</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
            <Link href="/products" className={styles.continueShoppingLink}>
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  )
}
