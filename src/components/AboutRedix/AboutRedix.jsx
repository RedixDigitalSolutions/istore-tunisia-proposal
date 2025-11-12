import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Palette, Zap } from 'lucide-react';
import styles from './AboutRedix.module.css';

const AboutRedix = () => {
    const services = [
        {
            icon: <TrendingUp size={32} />,
            title: 'Digital Marketing',
            description: 'Strategic campaigns driving measurable growth and engagement'
        },
        {
            icon: <Code size={32} />,
            title: 'Development',
            description: 'Modern web and mobile solutions built for performance'
        },
        {
            icon: <Palette size={32} />,
            title: 'Branding & Design',
            description: 'Premium visual identities that captivate audiences'
        },
        {
            icon: <Zap size={32} />,
            title: 'Innovation',
            description: 'Cutting-edge strategies that keep you ahead'
        }
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        About
                    </motion.p>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Redix Digital Solutions
                    </motion.h2>
                    <motion.p
                        className={styles.tagline}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Your Growth, Your Strategy
                    </motion.p>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        Tunisia's premier digital agency transforming brands through innovative strategies
                        and cutting-edge technology. We deliver measurable results that drive real business growth.
                    </motion.p>
                </motion.div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutRedix;
