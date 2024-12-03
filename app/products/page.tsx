'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './product.module.css'



interface ProductPageProps {}

export default function ProductPage({}: ProductPageProps) {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const usageSteps = [
    {
      step: 1,
      description: 'Cleanse face thoroughly with warm water'
    },
    {
      step: 2, 
      description: 'Apply a small amount to fingertips'
    },
    {
      step: 3,
      description: 'Gently massage into skin using circular motions'
    },
    {
      step: 4,
      description: 'Leave on for 2-3 minutes, then rinse'
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.productSection}>
        <motion.div 
          className={styles.imageContainer}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/11.jpg"
            alt="Pure Glow Serum"
            fill
            className={styles.productImage}
            priority
          />
        </motion.div>

        <motion.div 
          className={styles.productInfo}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.category}>Facial Serum</span>
          <h1 className={styles.title}>Pure Glow Vitamin C Serum</h1>
          <span className={styles.price}>$49.99</span>
          <p className={styles.description}>
            Our advanced Vitamin C serum combines the power of natural ingredients with cutting-edge skincare technology. 
            Formulated with 15% pure Vitamin C, Hyaluronic Acid, and Vitamin E, this serum helps brighten skin tone, 
            reduce fine lines, and provide deep hydration for a radiant, youthful complexion.
          </p>
          <button className={styles.addToCartButton}>
            Add to Cart
          </button>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className={styles.title}>How to Use</h2>
        <div className={styles.usageSteps}>
          {usageSteps.map((item) => (
            <div key={item.step} className={styles.step}>
              <div className={styles.stepNumber}>{item.step}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
