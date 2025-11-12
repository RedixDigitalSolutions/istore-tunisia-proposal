import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, BarChart3, Shield, Users, Award } from 'lucide-react';
import styles from './WhyUs.module.css';

const WhyUs = () => {
    const reasons = [
        {
            icon: <Target size={28} />,
            title: 'Proven Results',
            description: '100+ successful campaigns with measurable ROI'
        },
        {
            icon: <Rocket size={28} />,
            title: 'Rapid Launch',
            description: 'Deploy campaigns within 48 hours'
        },
        {
            icon: <BarChart3 size={28} />,
            title: 'Data-Driven',
            description: 'Every decision backed by analytics'
        },
        {
            icon: <Shield size={28} />,
            title: '24/7 Support',
            description: 'Dedicated assistance always available'
        },
        {
            icon: <Users size={28} />,
            title: 'Expert Team',
            description: 'Industry-leading professionals'
        },
        {
            icon: <Award size={28} />,
            title: 'Premium Quality',
            description: 'Excellence in every detail'
        }
    ];

    return (
        <section id="whyus" className={styles.whyUs}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Why partner with us.</h2>
                    <p>Built for businesses that demand excellence</p>
                </motion.div>

                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        >
                            <div className={styles.iconBox}>
                                {reason.icon}
                            </div>
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p>Ready to transform your business?</p>
                    <a href="#packages">Explore packages</a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
