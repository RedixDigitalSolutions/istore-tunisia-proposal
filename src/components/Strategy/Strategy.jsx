import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Target, BarChart3, Zap, Calendar, Sparkles } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import styles from './Strategy.module.css';

const Strategy = () => {
    const platforms = [
        {
            icon: <FaTiktok size={36} />,
            name: 'TikTok',
            color: '#000000',
            description: 'Viral content targeting Gen Z'
        },
        {
            icon: <Instagram size={36} />,
            name: 'Instagram',
            color: '#E4405F',
            description: 'Visual storytelling with Reels'
        },
        {
            icon: <Facebook size={36} />,
            name: 'Facebook',
            color: '#1877F2',
            description: 'Broad reach advertising'
        }
    ];

    const metaFeatures = [
        {
            icon: <Target />,
            title: 'Advanced Targeting',
            description: 'Precision audience segmentation'
        },
        {
            icon: <BarChart3 />,
            title: 'Performance Tracking',
            description: 'Real-time analytics and ROI'
        },
        {
            icon: <Zap />,
            title: 'A/B Testing',
            description: 'Data-driven optimization'
        },
        {
            icon: <Calendar />,
            title: 'Smart Scheduling',
            description: 'Optimal posting times'
        }
    ];

    const opportunities = [
        'Website Performance Optimization',
        'Mobile-First Responsive Design',
        'Enhanced User Experience (UX/UI)',
        'SEO & Local Search Optimization',
        'Social Media Integration',
        'E-commerce Functionality'
    ];

    return (
        <section id="strategy" className={styles.strategy}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Marketing strategy.</h2>
                    <p>Multi-platform approach to maximize reach</p>
                </motion.div>

                <motion.div
                    className={styles.platformsSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3>Triple-Platform Strategy</h3>
                    <div className={styles.platformsGrid}>
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                className={styles.platformCard}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            >
                                <div className={styles.platformIcon} style={{ background: platform.color }}>
                                    {platform.icon}
                                </div>
                                <h4>{platform.name}</h4>
                                <p>{platform.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.metaSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className={styles.metaHeader}>
                        <Sparkles size={28} />
                        <h3>Meta Ads Advanced Strategy</h3>
                    </div>
                    <p className={styles.metaDescription}>
                        Leverage Advantage+ campaigns, dynamic creatives, and precision targeting
                        to maximize ROI and drive conversions.
                    </p>
                    <div className={styles.metaGrid}>
                        {metaFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.metaCard}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.metaIcon}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.opportunitiesSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3>Growth Opportunities</h3>
                    <p className={styles.opportunitiesSubtitle}>
                        Strategic enhancements for iStore Tunisia's digital dominance
                    </p>
                    <div className={styles.opportunitiesGrid}>
                        {opportunities.map((opportunity, index) => (
                            <motion.div
                                key={index}
                                className={styles.opportunityCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className={styles.opportunityNumber}>{index + 1}</span>
                                <p>{opportunity}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Strategy;
