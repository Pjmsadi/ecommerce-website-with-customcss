'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import styles from './about.module.css'

interface Value {
  icon: string;
  title: string;
  description: string;
}

export default function AboutPage() {
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const values: Value[] = [
    {
      icon: '🌿',
      title: 'Clean Beauty',
      description: 'We use only natural, safe ingredients that deliver results',
    },
    {
      icon: '🔬',
      title: 'Science-Backed',
      description: 'All products are dermatologist tested and clinically proven',
    },
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'Eco-friendly practices from sourcing to packaging',
    },
    {
      icon: '❤️',
      title: 'Cruelty-Free',
      description: 'Never tested on animals, always kind to nature',
    },
  ]

  const skincareApproach: string[] = [
    "Personalization: We craft bespoke skincare rituals that celebrate and enhance your skin&apos;s unique beauty.",
    "Natural Ingredients: We thoughtfully select pristine botanicals and pure extracts to awaken your skin&apos;s natural radiance.",
    "Innovative Formulations: We artfully blend groundbreaking science with nature&apos;s most precious gifts to create transformative skincare.",
    "Gentle Effectiveness: We believe in the power of gentle care - our formulas nurture your skin while delivering remarkable, enduring results.",
    "Holistic Wellness: We take an integrative approach to skin health, supporting your natural beauty from within and without."
  ]

  return (
    <div className={styles.container}>
      <HeroSection fadeInUpVariants={fadeInUpVariants} />
      <MissionSection fadeInUpVariants={fadeInUpVariants} />
      <ValuesSection fadeInUpVariants={fadeInUpVariants} values={values} />
      <SkincareApproachSection fadeInUpVariants={fadeInUpVariants} skincareApproach={skincareApproach} />
    </div>
  )
}

interface SectionProps {
  fadeInUpVariants: Variants;
}

const HeroSection: React.FC<SectionProps> = ({ fadeInUpVariants }) => (
  <section className={styles.hero}>
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className={styles.heroContent}
    >
      <h1 className={styles.heroTitle}>Our Journey</h1>
      <p className={styles.heroSubtitle}>
        Pioneering Clean, Effective Skincare Since 2010
      </p>
    </motion.div>
  </section>
)

const MissionSection: React.FC<SectionProps> = ({ fadeInUpVariants }) => (
  <section className={styles.mission}>
    <div className={styles.missionContent}>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.missionText}
      >
        <h2>Our Mission</h2>
        <p>
          At Pure Glow, we harness the synergy of nature and science to create 
          transformative skincare solutions. Our mission is to deliver clean, sustainable, 
          and highly effective products that enhance your natural radiance while 
          safeguarding our planet&apos;s precious resources.
        </p>
      </motion.div>
      <motion.div 
        className={styles.missionImage}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/lab.jpg"
          alt="Our State-of-the-Art Laboratory"
          width={500}
          height={400}
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </motion.div>
    </div>
  </section>
)

interface ValuesSectionProps extends SectionProps {
  values: Value[];
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ fadeInUpVariants, values }) => (
  <section className={styles.values}>
    <motion.h2 
      className={styles.sectionTitle}
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Our Core Values
    </motion.h2>
    <div className={styles.valueGrid}>
      {values.map((value, index) => (
        <motion.div
          key={index}
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          className={styles.valueCard}
        >
          <div className={styles.valueIcon}>{value.icon}</div>
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

interface SkincareApproachSectionProps extends SectionProps {
  skincareApproach: string[];
}

const SkincareApproachSection: React.FC<SkincareApproachSectionProps> = ({ fadeInUpVariants, skincareApproach }) => (
  <section className={styles.skincareApproach}>
    <motion.h2 
      className={styles.sectionTitle}
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Our Innovative Approach to Skincare
    </motion.h2>
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={styles.skincareContent}
    >
      <p>
        At Pure Glow, we recognize the uniqueness of every individual&apos;s skin. Our approach to skincare is built on these fundamental principles:
      </p>
      <ul className={styles.approachList}>
        {skincareApproach.map((approach, index) => (
          <motion.li 
            key={index}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {approach}
          </motion.li>
        ))}
      </ul>
      <p>
        From addressing dryness and aging concerns to catering to sensitive skin, our diverse product range is meticulously crafted to tackle various skin types and issues. We&apos;re dedicated to helping you achieve your skin&apos;s full potential, naturally and effectively.
      </p>
    </motion.div>
  </section>
)
