import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

// Import logo
const redixLogo = process.env.PUBLIC_URL + '/redix_logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const services = [
        'Social Media Marketing',
        'Branding & Design',
        'Content Creation',
        'Web & Mobile Development',
        'Digital Advertising',
        'SEO Optimization',
        'Event Coverage',
        'Video Production'
    ];

    const quickLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Portfolio', href: '#' },
        { name: 'Market Analysis', href: '#market' },
        { name: 'Strategy', href: '#strategy' },
        { name: 'Packages', href: '#packages' },
        { name: 'Main Website', href: 'https://redixsolutions.pro' }
    ];

    const socialMedia = [
        {
            icon: <Facebook size={18} />,
            href: 'https://www.facebook.com/profile.php?id=61560535962106',
            name: 'Facebook'
        },
        {
            icon: <Instagram size={18} />,
            href: 'https://www.instagram.com/redixdigitalsolutions/',
            name: 'Instagram'
        },
        {
            icon: <Linkedin size={18} />,
            href: 'https://www.linkedin.com/company/redix-digital-solutions/posts/?feedView=all',
            name: 'LinkedIn'
        },
        {
            icon: <MessageCircle size={18} />,
            href: 'https://api.whatsapp.com/send/?phone=21692861655&text&type=phone_number&app_absent=0',
            name: 'WhatsApp'
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <motion.div
                        className={styles.column}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.logoWrapper}>
                            <img src={redixLogo} alt="Redix Digital Solutions" className={styles.logoImage} />
                            <div className={styles.logo}>
                                <span className={styles.logoText}>Redix</span>
                                <span className={styles.logoSubtext}>Digital Solutions</span>
                            </div>
                        </div>
                        <p className={styles.tagline}>Your Growth, Our Strategy</p>
                        <p className={styles.description}>
                            Redix Digital Solutions helps brands grow with tailored strategies,
                            creative content, and innovative technology that deliver measurable results.
                        </p>
                        <div className={styles.social}>
                            <h4>Follow Us</h4>
                            <div className={styles.socialIcons}>
                                {socialMedia.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialIcon}
                                        whileHover={{ y: -3, scale: 1.05 }}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.column}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3>Services</h3>
                        <ul>
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href="#services">{service}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className={styles.column}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>Quick Links</h3>
                        <ul>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className={styles.column}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3>Contact</h3>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <MapPin size={16} />
                                <p>Smart Technopark Manouuba, Tunisia</p>
                            </div>
                            <div className={styles.contactItem}>
                                <Mail size={16} />
                                <a href="mailto:contact@redixsolutions.pro">contact@redixsolutions.pro</a>
                            </div>
                            <div className={styles.contactItem}>
                                <Globe size={16} />
                                <a href="https://redixsolutions.pro" target="_blank" rel="noopener noreferrer">redixsolutions.pro</a>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={16} />
                                <a href="tel:+21692861655">+216 92 861 655</a>
                            </div>
                            <div className={styles.contactItem}>
                                <MessageCircle size={16} />
                                <a href="https://api.whatsapp.com/send/?phone=21692861655&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.bottom}>
                    <p>© {currentYear} Redix Digital Solutions. All rights reserved.</p>
                    <p className={styles.prepared}>
                        Prepared for <span>iStore Tunisia</span> by CIMEF
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
