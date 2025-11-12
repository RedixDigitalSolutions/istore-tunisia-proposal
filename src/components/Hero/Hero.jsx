import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    // Apple logo SVG
    const AppleLogo = () => (
        <svg viewBox="0 0 814 1000" className={styles.appleLogo}>
            <path fill="currentColor" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
        </svg>
    );

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <AppleLogo />
                        <span>Proposal for iStore Tunisia</span>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Think different.
                        <br />
                        <span className={styles.gradient}>Grow exceptional.</span>
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Transform your digital presence with data-driven strategies that deliver measurable results.
                        Partner with Tunisia's premier digital agency.
                    </motion.p>

                    <motion.div
                        className={styles.stats}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <div className={styles.stat}>
                            <div className={styles.statIcon}>
                                <TrendingUp size={24} />
                            </div>
                            <div className={styles.statContent}>
                                <h3>693M TND</h3>
                                <p>Market Value 2025</p>
                            </div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statIcon}>
                                <Users size={24} />
                            </div>
                            <div className={styles.statContent}>
                                <h3>7.4M+</h3>
                                <p>Social Media Users</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.cta}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <a href="#packages" className={styles.primaryBtn}>
                            <span>Explore packages</span>
                            <ArrowRight size={18} />
                        </a>
                        <a href="#market" className={styles.secondaryBtn}>
                            View market analysis
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className={styles.glassCard}>
                        <div className={styles.appleLogoLarge}>
                            <AppleLogo />
                        </div>
                        <div className={styles.orb}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
