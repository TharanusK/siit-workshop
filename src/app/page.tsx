'use client';

import { Header } from '@/components/Header';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <motion.main 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={fadeInUp}>
        <Header />
      </motion.div>
      <div className="grid gap-12">
        <motion.div variants={fadeInUp}>
          <ExperienceSection />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <SkillsSection />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <EducationSection />
        </motion.div>
      </div>
    </motion.main>
  );
}