'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import css from 'styled-jsx/css'
import Navbar from '@/component/navbar'
import Footer from '@/component/footer'


import styles from './home.module.css'

export default function HomePage() {
  const [email, setEmail] = useState('')

  const featuredProducts = [
    {
      id: 1,
      name: 'Hydrating Serum',
      price: 49.99,
      image: '/1.jpg',
      category: 'serums'
    },
    {
      id: 2, 
      name: 'Gentle Cleanser',
      price: 29.99,
      image: '/cleanser.jpg',
      category: 'cleansers'
    },
    {
      id: 3,
      name: 'Night Cream',
      price: 39.99,
      image: '/4.jpg',
      category: 'moisturizers'
    },
    {
      id: 4,
      name: 'Vitamin C Serum',
      price: 54.99,
      image: '/serum.jpg',
      category: 'serums'
    },
  ]

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/background.avif"
          alt="Skincare products"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.heroBackgroundImage}
        />
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroTitle}
          >
            Discover Your Natural Radiance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Nourish your skin with our clean, effective skincare solutions
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.ctaButton}
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <div className={styles.categoryGrid}>
          {[
            { name: 'Masks', image: 'mask.jpg' },
            { name: 'Serums', image: '1.jpg' },
            { name: 'Cleansers', image: 'cleanser.jpg' },
            { name: 'Moisturizers', image: '4.jpg' }
          ].map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              className={styles.categoryCard}
            >
              <div className={styles.categoryImageWrapper}>
                <Image
                  src={`/${category.image}`}
                  alt={category.name}
                  fill
                  className={styles.categoryImage}
                />
              </div>
              <h3 className={styles.categoryTitle}>{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featuredProducts}>
        <h2 className={styles.sectionTitle}>Bestsellers</h2>
        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className={styles.productCard}
            >
              <div className={styles.productImageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.productImage}
                />
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>${product.price}</p>
              <button className={styles.addToCartButton}>
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.benefitGrid}>
          {[
            {
              title: 'Clean Ingredients',
              description: 'All natural, vegan-friendly formulations',
              icon: '🌿'
            },
            {
              title: 'Cruelty Free',
              description: 'Never tested on animals',
              icon: '🐰'
            },
            {
              title: 'Sustainable',
              description: 'Eco-friendly packaging and practices',
              icon: '♻️'
            }
          ].map((benefit) => (
            <div key={benefit.title} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <h2 className={styles.newsletterTitle}>Join Our Newsletter</h2>
        <p className={styles.newsletterDescription}>
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <form onSubmit={handleSubmit} className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className={styles.newsletterInput}
            required
          />
          <button type="submit" className={styles.newsletterButton}>
            Subscribe
          </button>
        </form>
      </section>
    </div>
  )
}
