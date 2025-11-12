import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import styles from './Packages.module.css';

const Packages = () => {
    const packages = [
        {
            name: 'Basic',
            price: '600',
            icon: <Zap size={28} />,
            features: [
                'Professional ads manager',
                '1 video shooting session',
                '2 videos with simple editing',
                '4 animated posts',
                'Content roadmap',
                'Meta ads sponsoring $20',
                'Scripting + video ideas',
                'Social media management',
                'Marketing strategy',
                'Posting times analysis',
                'Monitoring & reporting'
            ]
        },
        {
            name: 'Professional',
            price: '800',
            icon: <Star size={28} />,
            popular: true,
            features: [
                'Professional ads manager',
                '1 video shooting session',
                '4 videos with PRO editing',
                '4 animated posts',
                'Content roadmap',
                'Meta ads sponsoring $40',
                'Scripting + video ideas',
                'Social media management',
                'Marketing strategy',
                'Posting times analysis',
                'Monitoring & reporting'
            ]
        },
        {
            name: 'Premium',
            price: '1000',
            icon: <Crown size={28} />,
            features: [
                'Professional ads manager',
                '1 video shooting session',
                '4 videos with PRO editing',
                '8 animated posts',
                'Content roadmap',
                'Meta ads sponsoring $55',
                'Scripting + video ideas',
                'Social media management',
                'Marketing strategy',
                'Posting times analysis',
                'Monitoring & reporting'
            ]
        }
    ];

    return (
        <section id="packages" className={styles.packages}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Choose your plan.</h2>
                    <p>Flexible packages designed for growth</p>
                </motion.div>

                <div className={styles.packagesGrid}>
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            {pkg.popular && (
                                <div className={styles.popularBadge}>MOST POPULAR</div>
                            )}

                            <div className={styles.packageHeader}>
                                <div className={styles.iconWrapper}>
                                    {pkg.icon}
                                </div>
                                <h3>{pkg.name}</h3>
                            </div>

                            <div className={styles.pricing}>
                                <span className={styles.amount}>{pkg.price}</span>
                                <span className={styles.currency}>TND</span>
                                <span className={styles.period}>/month</span>
                            </div>

                            <ul className={styles.features}>
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={18} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                href="#contact"
                                className={styles.ctaButton}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get Started
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.note}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p>All packages include complete management — you only reply to messages</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Packages;
