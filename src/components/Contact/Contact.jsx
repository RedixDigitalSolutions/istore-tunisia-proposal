import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, CheckCircle, XCircle, Loader } from 'lucide-react';
import { sendToTelegram, validateTelegramConfig } from '../../utils/sendToTelegram';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        package: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear status when user types
        if (status.success || status.error) {
            setStatus({ loading: false, success: false, error: false, message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate Telegram configuration
        if (!validateTelegramConfig()) {
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Configuration error. Please contact administrator.'
            });
            return;
        }

        // Set loading state
        setStatus({
            loading: true,
            success: false,
            error: false,
            message: 'Sending message...'
        });

        try {
            // Send to Telegram
            await sendToTelegram(formData);

            // Success
            setStatus({
                loading: false,
                success: true,
                error: false,
                message: 'Message sent successfully! We will contact you soon.'
            });

            // Clear form
            setFormData({
                name: '',
                email: '',
                phone: '',
                package: '',
                message: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setStatus({ loading: false, success: false, error: false, message: '' });
            }, 5000);

        } catch (error) {
            console.error('Submission error:', error);
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Failed to send message. Please try again or contact us directly.'
            });

            // Clear error message after 5 seconds
            setTimeout(() => {
                setStatus({ loading: false, success: false, error: false, message: '' });
            }, 5000);
        }
    };

    const contactInfo = [
        {
            icon: <MapPin size={20} />,
            title: 'Location',
            content: 'Smart Technopark Manouuba, Tunisia'
        },
        {
            icon: <Mail size={20} />,
            title: 'Email',
            content: 'contact@redixsolutions.pro',
            link: 'mailto:contact@redixsolutions.pro'
        },
        {
            icon: <Globe size={20} />,
            title: 'Website',
            content: 'redixsolutions.pro',
            link: 'https://redixsolutions.pro'
        },
        {
            icon: <Phone size={20} />,
            title: 'Phone',
            content: '+216 92 861 655',
            link: 'tel:+21692861655'
        }
    ];

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Let's work together.</h2>
                    <p>Ready to transform your digital presence? Get in touch.</p>
                </motion.div>

                <div className={styles.contentWrapper}>
                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>Get in touch</h3>
                        <p className={styles.infoDescription}>
                            We're here to help you succeed. Let's discuss how we can elevate your brand.
                        </p>

                        <div className={styles.infoList}>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.infoItem}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <div className={styles.infoIcon}>
                                        {info.icon}
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h4>{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link}>{info.content}</a>
                                        ) : (
                                            <p>{info.content}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Status Messages */}
                        {status.message && (
                            <motion.div
                                className={`${styles.statusMessage} ${status.success ? styles.success : status.error ? styles.error : ''
                                    }`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                {status.success && <CheckCircle size={20} />}
                                {status.error && <XCircle size={20} />}
                                {status.loading && <Loader size={20} className={styles.spinner} />}
                                <span>{status.message}</span>
                            </motion.div>
                        )}

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status.loading}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status.loading}
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+216 XX XXX XXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    disabled={status.loading}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="package">Package</label>
                                <select
                                    id="package"
                                    name="package"
                                    value={formData.package}
                                    onChange={handleChange}
                                    required
                                    disabled={status.loading}
                                >
                                    <option value="">Select package</option>
                                    <option value="Basic Package - 600 TND">Basic - 600 TND</option>
                                    <option value="Professional Package - 800 TND">Professional - 800 TND</option>
                                    <option value="Premium Package - 1000 TND">Premium - 1000 TND</option>
                                    <option value="Custom Solution">Custom solution</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                disabled={status.loading}
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className={styles.submitBtn}
                            whileHover={{ scale: status.loading ? 1 : 1.02 }}
                            whileTap={{ scale: status.loading ? 1 : 0.98 }}
                            disabled={status.loading}
                        >
                            <span>{status.loading ? 'Sending...' : 'Send message'}</span>
                            {status.loading ? (
                                <Loader size={18} className={styles.spinner} />
                            ) : (
                                <Send size={18} />
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
