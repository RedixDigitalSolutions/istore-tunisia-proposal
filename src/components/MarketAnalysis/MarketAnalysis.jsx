import React from 'react';
import { motion } from 'framer-motion';
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { TrendingUp, AlertTriangle, CheckCircle, Target, Shield, Zap, Users, Globe } from 'lucide-react';
import styles from './MarketAnalysis.module.css';

const MarketAnalysis = () => {
    // iPhone vs Other Brands Market Share
    const brandShareData = [
        { name: 'Samsung', value: 31.28, color: '#1428A0' },
        { name: 'Xiaomi', value: 16.57, color: '#FF6900' },
        { name: 'Apple iPhone', value: 13.84, color: '#0071e3' },
        { name: 'Infinix', value: 10.29, color: '#FF6B35' },
        { name: 'Tecno', value: 8.50, color: '#00C9A7' },
        { name: 'Others', value: 19.52, color: '#86868b' }
    ];

    // iPhone Growth Since 2020
    const iphoneGrowthData = [
        { year: '2020', marketShare: 8.2, users: 680 },
        { year: '2021', marketShare: 9.5, users: 820 },
        { year: '2022', marketShare: 10.8, users: 980 },
        { year: '2023', marketShare: 12.1, users: 1150 },
        { year: '2024', marketShare: 12.9, users: 1280 },
        { year: '2025', marketShare: 13.84, users: 1420 }
    ];

    // Gray Market Impact
    const grayMarketData = [
        { category: 'Official Dealers', value: 35, impact: 'positive' },
        { category: 'Gray Market', value: 45, impact: 'negative' },
        { category: 'Online Platforms', value: 20, impact: 'neutral' }
    ];

    const grayMarketIssues = [
        {
            icon: <AlertTriangle size={20} />,
            title: 'No Warranty',
            description: 'Gray market devices lack official Apple warranty',
            severity: 'high'
        },
        {
            icon: <Shield size={20} />,
            title: 'Quality Concerns',
            description: 'Risk of counterfeit or damaged products',
            severity: 'high'
        },
        {
            icon: <Target size={20} />,
            title: 'Price Inconsistency',
            description: 'Unpredictable pricing creates market confusion',
            severity: 'medium'
        },
        {
            icon: <Zap size={20} />,
            title: 'Lost Revenue',
            description: 'Authorized dealers lose 45% market share',
            severity: 'high'
        }
    ];

    const marketingOpportunities = [
        {
            icon: <CheckCircle size={20} />,
            title: 'Official Warranty',
            strategy: 'Emphasize full Apple warranty and support',
            impact: 'High'
        },
        {
            icon: <Shield size={20} />,
            title: 'Authenticity Guarantee',
            strategy: 'Certified genuine products with serial verification',
            impact: 'High'
        },
        {
            icon: <Users size={20} />,
            title: 'Premium Service',
            strategy: 'White-glove customer service and setup assistance',
            impact: 'Medium'
        },
        {
            icon: <Globe size={20} />,
            title: 'Trade-In Programs',
            strategy: 'Competitive trade-in values for upgrades',
            impact: 'High'
        }
    ];

    const keyInsights = [
        {
            icon: <TrendingUp size={24} />,
            stat: '693M TND',
            label: 'Market Value 2025',
            description: 'Tunisia smartphone market showing strong growth',
            trend: '+4.49%'
        },
        {
            icon: <Target size={24} />,
            stat: '13.84%',
            label: 'iPhone Market Share',
            description: 'Growing premium segment with 68% YoY increase',
            trend: '+1.74%'
        },
        {
            icon: <Users size={24} />,
            stat: '7.4M+',
            label: 'Social Media Users',
            description: 'Instagram & Facebook are primary discovery channels',
            trend: '84.9%'
        },
        {
            icon: <Globe size={24} />,
            stat: '84.9%',
            label: 'Internet Penetration',
            description: 'High digital adoption creates online opportunity',
            trend: '128%'
        }
    ];

    const COLORS = brandShareData.map(item => item.color);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.customTooltip}>
                    <p className={styles.tooltipLabel}>{payload[0].name}</p>
                    <p className={styles.tooltipValue}>{`${payload[0].value}%`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <section id="market" className={styles.market}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Market insights.</h2>
                    <p>Data-driven analysis of Tunisia's Apple products market</p>
                </motion.div>

                {/* Key Market Insights - Enhanced */}
                <motion.div
                    className={styles.insightsGrid}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {keyInsights.map((insight, index) => (
                        <motion.div
                            key={index}
                            className={styles.insightCard}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.insightIcon}>
                                {insight.icon}
                            </div>
                            <div className={styles.insightContent}>
                                <div className={styles.insightHeader}>
                                    <h3>{insight.stat}</h3>
                                    <span className={styles.trend}>{insight.trend}</span>
                                </div>
                                <h4>{insight.label}</h4>
                                <p>{insight.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Market Share Pie Chart */}
                <motion.div
                    className={styles.chartSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className={styles.chartHeader}>
                        <Target size={24} />
                        <h3>Tunisia Smartphone Market Share 2025</h3>
                    </div>
                    <p className={styles.chartDescription}>
                        iPhone captures 13.84% of the premium smartphone segment, positioning iStore Tunisia
                        as a key player in the high-value market
                    </p>
                    <div className={styles.pieChartWrapper}>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie
                                    data={brandShareData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, value }) => `${name}: ${value}%`}
                                    outerRadius={140}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {brandShareData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={styles.legendGrid}>
                        {brandShareData.map((brand, index) => (
                            <div key={index} className={styles.legendItem}>
                                <div className={styles.legendColor} style={{ background: brand.color }}></div>
                                <span>{brand.name}</span>
                                <strong>{brand.value}%</strong>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* iPhone Growth Chart */}
                <motion.div
                    className={styles.chartSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={styles.chartHeader}>
                        <TrendingUp size={24} />
                        <h3>iPhone Market Growth in Tunisia (2020-2025)</h3>
                    </div>
                    <p className={styles.chartDescription}>
                        68% growth in iPhone adoption over 5 years, demonstrating strong demand
                        for premium devices in Tunisia's evolving market
                    </p>
                    <div className={styles.chartWrapper}>
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={iphoneGrowthData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                                <XAxis dataKey="year" stroke="#86868b" style={{ fontSize: '0.875rem' }} />
                                <YAxis
                                    yAxisId="left"
                                    stroke="#86868b"
                                    style={{ fontSize: '0.875rem' }}
                                    label={{ value: 'Market Share (%)', angle: -90, position: 'insideLeft' }}
                                />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    stroke="#86868b"
                                    style={{ fontSize: '0.875rem' }}
                                    label={{ value: 'Users (K)', angle: 90, position: 'insideRight' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: 'rgba(255,255,255,0.95)',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: '12px'
                                    }}
                                />
                                <Legend />
                                <Line
                                    yAxisId="left"
                                    type="monotone"
                                    dataKey="marketShare"
                                    stroke="#0071e3"
                                    strokeWidth={3}
                                    name="Market Share (%)"
                                    dot={{ fill: '#0071e3', r: 5 }}
                                    activeDot={{ r: 7 }}
                                />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="users"
                                    stroke="#34c759"
                                    strokeWidth={3}
                                    name="Users (Thousands)"
                                    dot={{ fill: '#34c759', r: 5 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Gray Market Analysis */}
                <motion.div
                    className={styles.grayMarketSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className={styles.chartHeader}>
                        <AlertTriangle size={24} />
                        <h3>Distribution Channels & Gray Market Impact</h3>
                    </div>
                    <p className={styles.chartDescription}>
                        45% of iPhone sales occur through unofficial channels, creating significant
                        opportunity for authorized dealers to capture market share
                    </p>

                    <div className={styles.grayMarketContent}>
                        <div className={styles.chartWrapper}>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={grayMarketData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                                    <XAxis dataKey="category" stroke="#86868b" style={{ fontSize: '0.875rem' }} />
                                    <YAxis stroke="#86868b" style={{ fontSize: '0.875rem' }} />
                                    <Tooltip
                                        contentStyle={{
                                            background: 'rgba(255,255,255,0.95)',
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            borderRadius: '12px'
                                        }}
                                    />
                                    <Bar dataKey="value" name="Market Share (%)" radius={[8, 8, 0, 0]}>
                                        {grayMarketData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.impact === 'positive' ? '#34c759' : entry.impact === 'negative' ? '#ff3b30' : '#0071e3'}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className={styles.issuesGrid}>
                            <h4>Gray Market Challenges</h4>
                            {grayMarketIssues.map((issue, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.issueCard} ${styles[issue.severity]}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <div className={styles.issueIcon}>
                                        {issue.icon}
                                    </div>
                                    <div>
                                        <h5>{issue.title}</h5>
                                        <p>{issue.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Marketing Opportunities */}
                <motion.div
                    className={styles.opportunitiesSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <div className={styles.chartHeader}>
                        <Zap size={24} />
                        <h3>Strategic Marketing Opportunities</h3>
                    </div>
                    <p className={styles.chartDescription}>
                        Key differentiators to capture gray market customers and build brand loyalty
                    </p>
                    <div className={styles.opportunitiesGrid}>
                        {marketingOpportunities.map((opp, index) => (
                            <motion.div
                                key={index}
                                className={styles.opportunityCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={styles.oppIcon}>
                                    {opp.icon}
                                </div>
                                <h4>{opp.title}</h4>
                                <p>{opp.strategy}</p>
                                <span className={styles.impactBadge}>{opp.impact} Impact</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MarketAnalysis;
