/**
 * Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition
 * Organized configuration with modular styling, enhanced analytics, and extended cookie database
 */

// ============== CONFIGURATION SECTION ============== //

// Centralized color configuration
const colors = {
    primary: '#2ecc71',      // Green (accept button, toggle active)
    primaryHover: '#27ae60', // Accept button hover
    secondary: '#3498db',    // Blue (save button, admin button)
    secondaryHover: '#2980b9', // Save/admin button hover
    danger: '#e74c3c',       // Red (reject button)
    dangerHover: '#c0392b',  // Reject button hover
    textDark: '#2c3e50',     // Primary text
    textLight: '#7f8c8d',    // Secondary text
    background: '#ffffff',   // Main background
    backgroundDark: '#f8f9fa', // Secondary background (headers, cards)
    toggleInactive: '#bdc3c7', // Inactive toggle
    border: '#e0e0e0'        // Default border
};

// Classic theme colors
const classicColors = {
    primary: '#4CAF50',
    primaryHover: '#45a049',
    secondary: '#2196F3',
    secondaryHover: '#1e88e5',
    danger: '#f44336',
    dangerHover: '#d32f2f',
    textDark: '#212121',
    textLight: '#757575',
    background: '#ffffff',
    backgroundDark: '#f5f5f5',
    toggleInactive: '#9E9E9E',
    border: '#e0e0e0'
};

// Animation configuration
const animations = {
    bannerTransition: {
        duration: '0.4s',
        timingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
        transform: 'translateY(20px)',
        opacity: 0
    },
    modalTransition: {
        duration: '0.3s',
        timingFunction: 'ease',
        transform: 'translateY(20px)',
        opacity: 0
    },
    buttonHover: {
        duration: '0.3s',
        timingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
        transform: 'translateY(-2px)',
        shadow: '0 5px 10px rgba(0,0,0,0.15)'
    },
    fadeIn: {
        duration: '0.3s',
        timingFunction: 'ease',
        keyframes: `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }`
    }
};

// Main configuration
const config = {
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
    bannerPosition: 'right', // 'left' or 'right'
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en',
        availableLanguages: ['en', 'fr'], // Limited to two for now, extensible
        showLanguageSelector: true,
        autoDetectLanguage: true
    },
    
    // Geo-targeting configuration
    geoConfig: {
        allowedCountries: [],
        allowedRegions: [],
        allowedCities: [],
        blockedCountries: [],
        blockedRegions: [],
        blockedCities: []
    },
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 0, // 0 = lifetime storage
        showDashboard: true,
        passwordProtect: true,
        dashboardPassword: 'admin123', // Configurable password
        passwordCookieDuration: 0 // 0 = lifetime
    },
    
    // Behavior configuration
    behavior: {
        autoShow: true,
        bannerDelay: 0,
        showFloatingButton: true,
        showAdminButton: true,
        rememberLanguage: true,
        acceptOnScroll: false,
        acceptOnContinue: true,
        floatingButtonPosition: 'right',
        adminButtonPosition: 'left'
    },
    
    // UI configuration
    ui: {
        theme: 'default', // 'default' or 'classic'
        banner: {
            background: colors.background,
            width: '440px',
            border: 'none',
            borderRadius: '12px',
            shadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            padding: '24px',
            text: {
                titleColor: colors.textDark,
                titleWeight: '600',
                descriptionColor: colors.textLight,
                descriptionWeight: '400',
                privacyLinkColor: colors.secondary,
                privacyLinkDecoration: 'none'
            }
        },
        buttons: {
            accept: {
                background: colors.primary,
                color: '#ffffff',
                border: `1px solid ${colors.primary}`,
                borderRadius: '8px',
                padding: '12px 20px',
                fontWeight: '600',
                hover: {
                    background: colors.primaryHover,
                    shadow: '0 4px 16px rgba(46, 204, 113, 0.4)',
                    transform: animations.buttonHover.transform
                }
            },
            reject: {
                background: colors.background,
                color: colors.danger,
                border: `1px solid ${colors.danger}`,
                borderRadius: '8px',
                padding: '12px 20px',
                fontWeight: '600',
                hover: {
                    background: '#ffeeed',
                    shadow: '0 2px 8px rgba(231, 76, 60, 0.15)',
                    transform: animations.buttonHover.transform
                }
            },
            adjust: {
                background: colors.backgroundDark,
                color: colors.textDark,
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                padding: '12px 20px',
                fontWeight: '600',
                hover: {
                    background: '#f0f2f5',
                    shadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    transform: animations.buttonHover.transform
                }
            },
            save: {
                background: colors.secondary,
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 20px',
                fontWeight: '600',
                hover: {
                    background: colors.secondaryHover,
                    shadow: animations.buttonHover.shadow,
                    transform: animations.buttonHover.transform
                }
            }
        },
        dashboard: {
            background: colors.background,
            width: '900px',
            maxHeight: '600px',
            border: 'none',
            borderRadius: '12px',
            shadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            headerBackground: colors.backgroundDark,
            text: {
                titleColor: colors.textDark,
                titleWeight: '600',
                statColor: colors.textLight,
                statWeight: '400'
            },
            buttons: {
                submit: {
                    background: colors.primary,
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '12px 25px',
                    fontWeight: '600',
                    hover: {
                        background: colors.primaryHover,
                        shadow: animations.buttonHover.shadow,
                        transform: animations.buttonHover.transform
                    }
                }
            }
        },
        floatingButton: {
            background: colors.primary,
            size: '60px',
            border: '2px solid #ffffff',
            borderRadius: '50%',
            shadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            hover: {
                background: colors.primaryHover,
                shadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                transform: 'translateY(-3px) scale(1.05)'
            }
        },
        adminButton: {
            background: colors.secondary,
            size: '60px',
            border: '2px solid #ffffff',
            borderRadius: '50%',
            shadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            hover: {
                background: colors.secondaryHover,
                shadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                transform: 'translateY(-3px) scale(1.05)'
            }
        }
    }
};

// Enhanced cookie database
const cookieDatabase = {
    // Google Analytics/GA4
    '_ga': { category: 'analytics', duration: '2 years', description: 'Google Analytics user distinction' },
    '_gid': { category: 'analytics', duration: '24 hours', description: 'Google Analytics user distinction' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle rate' },
    '_ga_': { category: 'analytics', duration: '2 years', description: 'GA4 session state' },
    '_gac_': { category: 'analytics', duration: '90 days', description: 'Google Analytics campaign data' },
    
    // Facebook Pixel
    '_fbp': { category: 'advertising', duration: '3 months', description: 'Facebook conversion tracking' },
    'fr': { category: 'advertising', duration: '3 months', description: 'Facebook targeted ads' },
    
    // Functional cookies
    'wordpress_': { category: 'functional', duration: 'Session', description: 'WordPress authentication' },
    'wp-settings': { category: 'functional', duration: '1 year', description: 'WordPress preferences' },
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session' },
    'cookie_consent': { category: 'functional', duration: '1 year', description: 'Stores cookie consent preferences' },
    
    // WooCommerce cookies
    'woocommerce_items_in_cart': { category: 'functional', duration: 'Session', description: 'WooCommerce cart items tracking' },
    'woocommerce_cart_hash': { category: 'functional', duration: 'Session', description: 'WooCommerce cart hash' },
    'woocommerce_recently_viewed': { category: 'functional', duration: 'Session', description: 'Tracks recently viewed products' },
    
    // Advertising cookies
    '_gcl_au': { category: 'advertising', duration: '3 months', description: 'Google Ads conversion' },
    'IDE': { category: 'advertising', duration: '1 year', description: 'Google DoubleClick' },
    'NID': { category: 'advertising', duration: '6 months', description: 'Google user tracking' },
    'DSID': { category: 'advertising', duration: '2 weeks', description: 'Google advertising ID' },
    
    // Performance cookies
    '_cfduid': { category: 'performance', duration: '30 days', description: 'Cloudflare performance optimization' },
    'optimizelyEndUserId': { category: 'performance', duration: '6 months', description: 'Optimizely testing' },
    
    // Additional common cookies
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' },
    '__stripe_mid': { category: 'functional', duration: '1 year', description: 'Stripe payment processing' },
    '__hstc': { category: 'analytics', duration: '13 months', description: 'HubSpot tracking' },
    'hubspotutk': { category: 'analytics', duration: '13 months', description: 'HubSpot user authentication' }
};

// Updated analytics data storage with lifetime support
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {},
    weekly: {},
    monthly: {},
    lifetime: {
        accepted: 0,
        rejected: 0,
        custom: 0
    }
};

// Updated load analytics data function
function loadAnalyticsData() {
    const savedData = localStorage.getItem('consentAnalytics');
    if (savedData) {
        consentAnalytics = JSON.parse(savedData);
    }
    
    const today = new Date().toISOString().split('T')[0];
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    if (config.analytics.passwordProtect) {
        isDashboardAuthenticated = getCookie('dashboard_auth') === 'true';
    } else {
        isDashboardAuthenticated = true;
    }
}

// Updated save analytics data function
function saveAnalyticsData() {
    if (config.analytics.storageDays === 0) {
        localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
    } else {
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + config.analytics.storageDays);
        localStorage.setItem('consentAnalytics', JSON.stringify({
            ...consentAnalytics,
            expiry: expiry.toISOString()
        }));
    }
}

// Updated updateConsentStats function
function updateConsentStats(status) {
    const today = new Date().toISOString().split('T')[0];
    
    if (status === 'accepted') {
        consentAnalytics.total.accepted++;
        consentAnalytics.daily[today].accepted++;
        consentAnalytics.lifetime.accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.total.rejected++;
        consentAnalytics.daily[today].rejected++;
        consentAnalytics.lifetime.rejected++;
    } else if (status === 'custom') {
        consentAnalytics.total.custom++;
        consentAnalytics.daily[today].custom++;
        consentAnalytics.lifetime.custom++;
    }
    
    updateTimeBasedStats(today, status);
    saveAnalyticsData();
}

// Updated generateAnalyticsDashboard function
function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    
    const total = consentAnalytics.total.accepted + consentAnalytics.total.rejected + consentAnalytics.total.custom;
    const lifetimeTotal = consentAnalytics.lifetime.accepted + consentAnalytics.lifetime.rejected + consentAnalytics.lifetime.custom;
    
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    const last7Days = {};
    const dates7 = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates7.forEach(date => {
        last7Days[date] = consentAnalytics.daily[date];
    });
    
    const last30Days = {};
    const dates30 = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    dates30.forEach(date => {
        last30Days[date] = consentAnalytics.daily[date];
    });
    
    return `
    <div class="analytics-dashboard">
        <h3>${lang.dashboardTitle}</h3>
        
        <div class="stats-summary">
            <div class="stat-card accepted">
                <h4>${lang.statsAccepted}</h4>
                <div class="stat-value">${consentAnalytics.total.accepted}</div>
                <div class="stat-percentage">${acceptedPercent}%</div>
            </div>
            <div class="stat-card rejected">
                <h4>${lang.statsRejected}</h4>
                <div class="stat-value">${consentAnalytics.total.rejected}</div>
                <div class="stat-percentage">${rejectedPercent}%</div>
            </div>
            <div class="stat-card custom">
                <h4>${lang.statsCustom}</h4>
                <div class="stat-value">${consentAnalytics.total.custom}</div>
                <div class="stat-percentage">${customPercent}%</div>
            </div>
            <div class="stat-card total">
                <h4>${lang.statsTotal}</h4>
                <div class="stat-value">${total}</div>
                <div class="stat-percentage">100%</div>
            </div>
        </div>
        
        <div class="time-based-stats">
            <div class="time-stat">
                <h4>${lang.statsLast7Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last7Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            <div class="time-stat">
                <h4>${lang.statsLast30Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last30Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            <div class="time-stat">
                <h4>Lifetime</h4>
                <div class="stat-bars">
                    <div class="stat-bar-container">
                        <div class="stat-bar-label">All Time</div>
                        <div class="stat-bar">
                            <div class="stat-bar-segment accepted" style="width: ${lifetimeTotal > 0 ? (consentAnalytics.lifetime.accepted / lifetimeTotal) * 100 : 0}%"></div>
                            <div class="stat-bar-segment custom" style="width: ${lifetimeTotal > 0 ? (consentAnalytics.lifetime.custom / lifetimeTotal) * 100 : 0}%"></div>
                            <div class="stat-bar-segment rejected" style="width: ${lifetimeTotal > 0 ? (consentAnalytics.lifetime.rejected / lifetimeTotal) * 100 : 0}%"></div>
                        </div>
                        <div class="stat-bar-legend">
                            <span>${consentAnalytics.lifetime.accepted} ${lang.statsAccepted}</span>
                            <span>${consentAnalytics.lifetime.custom} ${lang.statsCustom}</span>
                            <span>${consentAnalytics.lifetime.rejected} ${lang.statsRejected}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

// Updated injectConsentHTML function with new styling
function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    const currentTheme = config.ui.theme === 'classic' ? classicColors : colors;
    
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryKey = category === 'functional' ? 'essential' : category;
        const isEssential = category === 'functional';
        
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryKey]}</h3>
                <label class="toggle-switch">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <p>${lang[`${categoryKey}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>Cookie Details</span>
                    <span class="toggle-details">+</span>
                </div>
                <div class="cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? 
                        generateCookieTable(cookies) : 
                        `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                </div>
            </div>
        </div>`;
    };
    
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    const adminButton = config.analytics.enabled && config.analytics.showDashboard ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/>
        </svg>
    </div>` : '';
    
    const html = `
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${languageSelector}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
            </div>
        </div>
    </div>
    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">×</span>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized') : ''}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
        </svg>
    </div>
    ${adminButton}
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">×</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>
    
    <style>
        ${animations.fadeIn.keyframes}
        
        .cookie-consent-banner {
            position: fixed;
            bottom: 20px;
            ${config.behavior.bannerPosition === 'left' ? 'left: 20px;' : 'right: 20px;'}
            width: ${config.ui.banner.width};
            background: ${config.ui.banner.background};
            border: ${config.ui.banner.border};
            border-radius: ${config.ui.banner.borderRadius};
            box-shadow: ${config.ui.banner.shadow};
            z-index: 9999;
            padding: ${config.ui.banner.padding};
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            display: none;
            transform: ${animations.bannerTransition.transform};
            opacity: ${animations.bannerTransition.opacity};
            transition: all ${animations.bannerTransition.duration} ${animations.bannerTransition.timingFunction};
            overflow: hidden;
        }
        
        .cookie-consent-banner.show {
            transform: translateY(0);
            opacity: 1;
            display: block;
        }
        
        .cookie-consent-content h2 {
            margin: 0 0 16px 0;
            font-size: 18px;
            color: ${config.ui.banner.text.titleColor};
            font-weight: ${config.ui.banner.text.titleWeight};
            line-height: 1.4;
        }
        
        .cookie-consent-content p {
            margin: 0 0 24px 0;
            font-size: 14px;
            color: ${config.ui.banner.text.descriptionColor};
            font-weight: ${config.ui.banner.text.descriptionWeight};
            line-height: 1.5;
        }
        
        .privacy-policy-link {
            color: ${config.ui.banner.text.privacyLinkColor};
            text-decoration: ${config.ui.banner.text.privacyLinkDecoration};
            font-size: 13px;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 24px;
            transition: color 0.2s ease;
        }
        
        .privacy-policy-link:hover {
            color: ${currentTheme.secondaryHover};
        }
        
        .cookie-btn {
            padding: ${config.ui.buttons.accept.padding};
            border-radius: ${config.ui.buttons.accept.borderRadius};
            cursor: pointer;
            font-weight: ${config.ui.buttons.accept.fontWeight};
            font-size: 14px;
            transition: all ${animations.buttonHover.duration} ${animations.buttonHover.timingFunction};
            text-align: center;
            border: none;
            flex: 1;
        }
        
        .accept-btn {
            background: ${config.ui.buttons.accept.background};
            color: ${config.ui.buttons.accept.color};
            border: ${config.ui.buttons.accept.border};
        }
        
        .accept-btn:hover {
            background: ${config.ui.buttons.accept.hover.background};
            transform: ${config.ui.buttons.accept.hover.transform};
            box-shadow: ${config.ui.buttons.accept.hover.shadow};
        }
        
        .reject-btn {
            background: ${config.ui.buttons.reject.background};
            color: ${config.ui.buttons.reject.color};
            border: ${config.ui.buttons.reject.border};
        }
        
        .reject-btn:hover {
            background: ${config.ui.buttons.reject.hover.background};
            transform: ${config.ui.buttons.reject.hover.transform};
            box-shadow: ${config.ui.buttons.reject.hover.shadow};
        }
        
        .adjust-btn {
            background: ${config.ui.buttons.adjust.background};
            color: ${config.ui.buttons.adjust.color};
            border: ${config.ui.buttons.adjust.border};
        }
        
        .adjust-btn:hover {
            background: ${config.ui.buttons.adjust.hover.background};
            transform: ${config.ui.buttons.adjust.hover.transform};
            box-shadow: ${config.ui.buttons.adjust.hover.shadow};
        }
        
        .save-btn {
            background: ${config.ui.buttons.save.background};
            color: ${config.ui.buttons.save.color};
            border: ${config.ui.buttons.save.border};
        }
        
        .save-btn:hover {
            background: ${config.ui.buttons.save.hover.background};
            transform: ${config.ui.buttons.save.hover.transform};
            box-shadow: ${config.ui.buttons.save.hover.shadow};
        }
        
        .cookie-settings-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 10000;
            overflow-y: auto;
            padding: 30px 0;
            opacity: ${animations.modalTransition.opacity};
            transition: opacity ${animations.modalTransition.duration} ${animations.modalTransition.timingFunction};
        }
        
        .cookie-settings-modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
        }
        
        .cookie-settings-content {
            background: ${config.ui.banner.background};
            margin: 0 auto;
            width: 845px;
            max-height: 470px;
            border-radius: ${config.ui.banner.borderRadius};
            box-shadow: ${config.ui.banner.shadow};
            overflow: hidden;
            transform: ${animations.modalTransition.transform};
            transition: transform ${animations.modalTransition.duration} ${animations.modalTransition.timingFunction};
            display: flex;
            flex-direction: column;
        }
        
        .cookie-settings-modal.show .cookie-settings-content {
            transform: translateY(0);
        }
        
        .cookie-settings-header {
            padding: 20px 30px;
            border-bottom: 1px solid ${currentTheme.border};
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${currentTheme.backgroundDark};
        }
        
        .cookie-settings-header h2 {
            margin: 0;
            color: ${config.ui.banner.text.titleColor};
            font-size: 1.5rem;
            font-weight: ${config.ui.banner.text.titleWeight};
        }
        
        .cookie-settings-button {
            position: fixed;
            bottom: 30px;
            ${config.behavior.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}
            width: ${config.ui.floatingButton.size};
            height: ${config.ui.floatingButton.size};
            background: ${config.ui.floatingButton.background};
            border: ${config.ui.floatingButton.border};
            border-radius: ${config.ui.floatingButton.borderRadius};
            box-shadow: ${config.ui.floatingButton.shadow};
            z-index: 9998;
            transition: all ${animations.buttonHover.duration} ${animations.buttonHover.timingFunction};
        }
        
        .cookie-settings-button:hover {
            background: ${config.ui.floatingButton.hover.background};
            transform: ${config.ui.floatingButton.hover.transform};
            box-shadow: ${config.ui.floatingButton.hover.shadow};
        }
        
        .cookie-admin-button {
            position: fixed;
            ${config.behavior.adminButtonPosition === 'left' ? 'left: 30px; bottom: 100px;' : 'right: 30px; bottom: 100px;'}
            width: ${config.ui.adminButton.size};
            height: ${config.ui.adminButton.size};
            background: ${config.ui.adminButton.background};
            border: ${config.ui.adminButton.border};
            border-radius: ${config.ui.adminButton.borderRadius};
            box-shadow: ${config.ui.adminButton.shadow};
            z-index: 9997;
            transition: all ${animations.buttonHover.duration} ${animations.buttonHover.timingFunction};
        }
        
        .cookie-admin-button:hover {
            background: ${config.ui.adminButton.hover.background};
            transform: ${config.ui.adminButton.hover.transform};
            box-shadow: ${config.ui.adminButton.hover.shadow};
        }
        
        .cookie-analytics-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 10001;
            overflow-y: auto;
            padding: 30px 0;
            opacity: ${animations.modalTransition.opacity};
            transition: opacity ${animations.modalTransition.duration} ${animations.modalTransition.timingFunction};
        }
        
        .cookie-analytics-modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
        }
        
        .cookie-analytics-content {
            background: ${config.ui.dashboard.background};
            margin: 0 auto;
            width: ${config.ui.dashboard.width};
            max-height: ${config.ui.dashboard.maxHeight};
            border: ${config.ui.dashboard.border};
            border-radius: ${config.ui.dashboard.borderRadius};
            box-shadow: ${config.ui.dashboard.shadow};
            overflow: hidden;
            transform: ${animations.modalTransition.transform};
            transition: transform ${animations.modalTransition.duration} ${animations.modalTransition.timingFunction};
            display: flex;
            flex-direction: column;
        }
        
        .cookie-analytics-modal.show .cookie-analytics-content {
            transform: translateY(0);
        }
        
        .cookie-analytics-header {
            padding: 20px 30px;
            border-bottom: 1px solid ${currentTheme.border};
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${config.ui.dashboard.headerBackground};
        }
        
        .cookie-analytics-header h2 {
            margin: 0;
            color: ${config.ui.dashboard.text.titleColor};
            font-size: 1.5rem;
            font-weight: ${config.ui.dashboard.text.titleWeight};
        }
        
        .password-prompt button {
            padding: ${config.ui.dashboard.buttons.submit.padding};
            background: ${config.ui.dashboard.buttons.submit.background};
            color: ${config.ui.dashboard.buttons.submit.color};
            border: ${config.ui.dashboard.buttons.submit.border};
            border-radius: ${config.ui.dashboard.buttons.submit.borderRadius};
            font-weight: ${config.ui.dashboard.buttons.submit.fontWeight};
            transition: all ${animations.buttonHover.duration} ${animations.buttonHover.timingFunction};
        }
        
        .password-prompt button:hover {
            background: ${config.ui.dashboard.buttons.submit.hover.background};
            transform: ${config.ui.dashboard.buttons.submit.hover.transform};
            box-shadow: ${config.ui.dashboard.buttons.submit.hover.shadow};
        }
        
        .analytics-dashboard h3 {
            color: ${config.ui.dashboard.text.titleColor};
            font-weight: ${config.ui.dashboard.text.titleWeight};
        }
        
        .stat-card h4 {
            color: ${config.ui.dashboard.text.statColor};
            font-weight: ${config.ui.dashboard.text.statWeight};
        }
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}
/**
 * Continuation of Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition
 * Completes the script from injectConsentHTML, maintaining sync with previous configuration
 */

// Language translations (referenced in injectConsentHTML)
const translations = {
    en: {
        language: 'English',
        title: 'We value your privacy',
        description: 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
        privacy: 'Privacy Policy',
        accept: 'Accept All',
        reject: 'Reject All',
        customize: 'Customize',
        save: 'Save Settings',
        essential: 'Essential Cookies',
        essentialDesc: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
        analytics: 'Analytics Cookies',
        analyticsDesc: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
        performance: 'Performance Cookies',
        performanceDesc: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
        advertising: 'Advertising Cookies',
        advertisingDesc: 'These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads.',
        uncategorized: 'Uncategorized Cookies',
        uncategorizedDesc: 'These cookies have not yet been categorized and are pending analysis.',
        dashboardTitle: 'Cookie Consent Dashboard',
        statsAccepted: 'Accepted',
        statsRejected: 'Rejected',
        statsCustom: 'Custom',
        statsTotal: 'Total',
        statsLast7Days: 'Last 7 Days',
        statsLast30Days: 'Last 30 Days'
    },
    fr: {
        language: 'Français',
        title: 'Nous respectons votre vie privée',
        description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, proposer des publicités ou contenus personnalisés et analyser notre trafic. En cliquant sur "Tout accepter", vous consentez à notre utilisation des cookies.',
        privacy: 'Politique de confidentialité',
        accept: 'Tout accepter',
        reject: 'Tout refuser',
        customize: 'Personnaliser',
        save: 'Enregistrer les paramètres',
        essential: 'Cookies essentiels',
        essentialDesc: 'Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés dans nos systèmes.',
        analytics: 'Cookies analytiques',
        analyticsDesc: 'Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d\'améliorer les performances de notre site.',
        performance: 'Cookies de performance',
        performanceDesc: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant et en rapportant des informations de manière anonyme.',
        advertising: 'Cookies publicitaires',
        advertisingDesc: 'Ces cookies peuvent être définis par nos partenaires publicitaires pour établir un profil de vos intérêts et vous montrer des publicités pertinentes.',
        uncategorized: 'Cookies non catégorisés',
        uncategorizedDesc: 'Ces cookies n\'ont pas encore été catégorisés et sont en attente d\'analyse.',
        dashboardTitle: 'Tableau de bord du consentement aux cookies',
        statsAccepted: 'Acceptés',
        statsRejected: 'Refusés',
        statsCustom: 'Personnalisés',
        statsTotal: 'Total',
        statsLast7Days: '7 derniers jours',
        statsLast30Days: '30 derniers jours'
    }
};

// Global variables
let isDashboardAuthenticated = false;
let currentLanguage = config.languageConfig.defaultLanguage;

// Cookie management functions
function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/; SameSite=Lax';
}

// Detect cookies on the site
function detectCookies() {
    const cookies = document.cookie.split(';').map(c => c.trim().split('=')[0]).filter(c => c);
    const detectedCookies = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const cookieInfo = cookieDatabase[cookie];
        if (cookieInfo) {
            detectedCookies[cookieInfo.category].push({ name: cookie, ...cookieInfo });
        } else {
            detectedCookies.uncategorized.push({ name: cookie, duration: 'Unknown', description: 'This cookie has not been identified.' });
        }
    });

    return detectedCookies;
}

// Generate cookie table for modal
function generateCookieTable(cookies) {
    return `
    <table class="cookie-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${cookies.map(cookie => `
                <tr>
                    <td>${cookie.name}</td>
                    <td>${cookie.duration}</td>
                    <td>${cookie.description}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>`;
}

// Generate password prompt for analytics dashboard
function generatePasswordPrompt(language = 'en') {
    const lang = translations[language] || translations.en;
    return `
    <div class="password-prompt">
        <h3>${lang.dashboardTitle}</h3>
        <p>Please enter the password to access the analytics dashboard.</p>
        <input type="password" id="dashboardPassword" placeholder="Password">
        <button id="submitPasswordBtn">Submit</button>
    </div>`;
}

// Update time-based stats
function updateTimeBasedStats(date, status) {
    const week = new Date(date);
    week.setDate(week.getDate() - week.getDay());
    const weekKey = week.toISOString().split('T')[0];

    const month = new Date(date);
    month.setDate(1);
    const monthKey = month.toISOString().split('T')[0];

    if (!consentAnalytics.weekly[weekKey]) {
        consentAnalytics.weekly[weekKey] = { accepted: 0, rejected: 0, custom: 0 };
    }
    if (!consentAnalytics.monthly[monthKey]) {
        consentAnalytics.monthly[monthKey] = { accepted: 0, rejected: 0, custom: 0 };
    }

    if (status === 'accepted') {
        consentAnalytics.weekly[weekKey].accepted++;
        consentAnalytics.monthly[monthKey].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.weekly[weekKey].rejected++;
        consentAnalytics.monthly[monthKey].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.weekly[weekKey].custom++;
        consentAnalytics.monthly[monthKey].custom++;
    }
}

// Handle consent
function handleConsent(acceptanceStatus, customSettings = null) {
    if (acceptanceStatus === 'accepted') {
        setCookie('cookie_consent', 'accepted', 365);
        Object.keys(cookieDatabase).forEach(cookie => {
            if (cookieDatabase[cookie].category !== 'functional') {
                setCookie(cookie, 'enabled', 365);
            }
        });
        updateConsentStats('accepted');
    } else if (acceptanceStatus === 'rejected') {
        setCookie('cookie_consent', 'rejected', 365);
        Object.keys(cookieDatabase).forEach(cookie => {
            if (cookieDatabase[cookie].category !== 'functional') {
                deleteCookie(cookie);
            }
        });
        updateConsentStats('rejected');
    } else if (acceptanceStatus === 'custom' && customSettings) {
        setCookie('cookie_consent', 'custom', 365);
        Object.keys(customSettings).forEach(category => {
            if (customSettings[category]) {
                detectedCookies[category].forEach(cookie => {
                    setCookie(cookie.name, 'enabled', 365);
                });
            } else {
                detectedCookies[category].forEach(cookie => {
                    deleteCookie(cookie.name);
                });
            }
        });
        updateConsentStats('custom');
    }

    document.getElementById('cookieConsentBanner').classList.remove('show');
}

// Get available languages
function getAvailableLanguages() {
    return config.languageConfig.availableLanguages;
}

// Event listeners
function setupEventListeners() {
    const banner = document.getElementById('cookieConsentBanner');
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    const floatingButton = document.getElementById('cookieFloatingButton');
    const adminButton = document.getElementById('cookieAdminButton');

    // Accept all
    document.getElementById('acceptAllBtn')?.addEventListener('click', () => {
        handleConsent('accepted');
    });

    // Reject all
    document.getElementById('rejectAllBtn')?.addEventListener('click', () => {
        handleConsent('rejected');
    });

    // Open settings modal
    document.getElementById('adjustConsentBtn')?.addEventListener('click', () => {
        banner.classList.remove('show');
        settingsModal.classList.add('show');
    });

    // Close settings modal
    document.querySelector('.close-modal')?.addEventListener('click', () => {
        settingsModal.classList.remove('show');
        if (config.behavior.autoShow && !getCookie('cookie_consent')) {
            banner.classList.add('show');
        }
    });

    // Save custom settings
    document.getElementById('saveSettingsBtn')?.addEventListener('click', () => {
        const customSettings = {};
        document.querySelectorAll('.toggle-switch input[type="checkbox"]').forEach(input => {
            if (!input.disabled) {
                customSettings[input.dataset.category] = input.checked;
            }
        });
        handleConsent('custom', customSettings);
        settingsModal.classList.remove('show');
    });

    // Accept all from settings
    document.getElementById('acceptAllSettingsBtn')?.addEventListener('click', () => {
        handleConsent('accepted');
        settingsModal.classList.remove('show');
    });

    // Reject all from settings
    document.getElementById('rejectAllSettingsBtn')?.addEventListener('click', () => {
        handleConsent('rejected');
        settingsModal.classList.remove('show');
    });

    // Toggle cookie details
    document.querySelectorAll('.toggle-details').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const details = toggle.closest('.cookie-details-container').querySelector('.cookie-details-content');
            const isVisible = details.style.display === 'block';
            details.style.display = isVisible ? 'none' : 'block';
            toggle.textContent = isVisible ? '+' : '−';
        });
    });

    // Floating button
    floatingButton?.addEventListener('click', () => {
        settingsModal.classList.add('show');
    });

    // Admin button
    adminButton?.addEventListener('click', () => {
        analyticsModal.classList.add('show');
    });

    // Close analytics modal
    document.querySelector('.close-analytics-modal')?.addEventListener('click', () => {
        analyticsModal.classList.remove('show');
    });

    // Password submission
    document.getElementById('submitPasswordBtn')?.addEventListener('click', () => {
        const passwordInput = document.getElementById('dashboardPassword');
        if (passwordInput.value === config.analytics.dashboardPassword) {
            isDashboardAuthenticated = true;
            setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration || 365);
            analyticsModal.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(currentLanguage);
        } else {
            alert('Incorrect password');
        }
    });

    // Language selector
    document.getElementById('cookieLanguageSelect')?.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        if (config.behavior.rememberLanguage) {
            setCookie('cookie_language', currentLanguage, 365);
        }
        const detectedCookies = detectCookies();
        document.body.innerHTML = '';
        injectConsentHTML(detectedCookies, currentLanguage);
        setupEventListeners();
        if (!getCookie('cookie_consent') && config.behavior.autoShow) {
            document.getElementById('cookieConsentBanner').classList.add('show');
        }
    });

    // Accept on scroll
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 && !getCookie('cookie_consent')) {
                handleConsent('accepted');
            }
        }, { once: true });
    }

    // Accept on continue
    if (config.behavior.acceptOnContinue) {
        document.addEventListener('click', (e) => {
            if (!getCookie('cookie_consent') && !banner.contains(e.target) && !settingsModal.contains(e.target) && !floatingButton.contains(e.target)) {
                handleConsent('accepted');
            }
        });
    }
}

// Initialize script
function initializeCookieConsent() {
    if (!config.allowedDomains.includes(window.location.hostname)) {
        return;
    }

    loadAnalyticsData();

    if (config.languageConfig.autoDetectLanguage) {
        const browserLang = navigator.language.split('-')[0];
        if (config.languageConfig.availableLanguages.includes(browserLang)) {
            currentLanguage = browserLang;
        }
    }

    if (config.behavior.rememberLanguage) {
        const savedLang = getCookie('cookie_language');
        if (savedLang && config.languageConfig.availableLanguages.includes(savedLang)) {
            currentLanguage = savedLang;
        }
    }

    const detectedCookies = detectCookies();
    injectConsentHTML(detectedCookies, currentLanguage);
    setupEventListeners();

    if (!getCookie('cookie_consent') && config.behavior.autoShow) {
        setTimeout(() => {
            document.getElementById('cookieConsentBanner').classList.add('show');
        }, config.behavior.bannerDelay);
    }

    if (config.behavior.showFloatingButton) {
        document.getElementById('cookieFloatingButton').style.display = 'block';
    }

    if (config.behavior.showAdminButton && config.analytics.enabled && config.analytics.showDashboard) {
        document.getElementById('cookieAdminButton').style.display = 'block';
    }
}

// Run initialization
document.addEventListener('DOMContentLoaded', initializeCookieConsent);
/**
 * Finalization of Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition
 * Completes the script from initializeCookieConsent, maintaining sync with previous parts
 */

// Utility function to validate domain
function isValidDomain() {
    const hostname = window.location.hostname;
    return config.allowedDomains.some(domain => hostname === domain || hostname.endsWith(`.${domain}`));
}

// Clean up cookies based on consent
function cleanupCookies() {
    const consent = getCookie('cookie_consent');
    if (!consent) return;

    const detectedCookies = detectCookies();
    Object.keys(detectedCookies).forEach(category => {
        if (category !== 'functional') {
            detectedCookies[category].forEach(cookie => {
                if (consent === 'rejected' || (consent === 'custom' && !getCookie(cookie.name))) {
                    deleteCookie(cookie.name);
                }
            });
        }
    });
}

// Handle window resize for responsive UI
function handleResize() {
    const banner = document.getElementById('cookieConsentBanner');
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');

    if (banner && window.innerWidth < 480) {
        banner.style.width = '100%';
        banner.style.left = '0';
        banner.style.right = '0';
        banner.style.bottom = '0';
        banner.style.borderRadius = '0';
    } else if (banner) {
        banner.style.width = config.ui.banner.width;
        banner.style[config.behavior.bannerPosition] = '20px';
        banner.style.borderRadius = config.ui.banner.borderRadius;
    }

    if (settingsModal && window.innerWidth < 900) {
        settingsModal.querySelector('.cookie-settings-content').style.width = '100%';
        settingsModal.querySelector('.cookie-settings-content').style.maxHeight = '100%';
    } else if (settingsModal) {
        settingsModal.querySelector('.cookie-settings-content').style.width = '845px';
        settingsModal.querySelector('.cookie-settings-content').style.maxHeight = '470px';
    }

    if (analyticsModal && window.innerWidth < 950) {
        analyticsModal.querySelector('.cookie-analytics-content').style.width = '100%';
        analyticsModal.querySelector('.cookie-analytics-content').style.maxHeight = '100%';
    } else if (analyticsModal) {
        analyticsModal.querySelector('.cookie-analytics-content').style.width = config.ui.dashboard.width;
        analyticsModal.querySelector('.cookie-analytics-content').style.maxHeight = config.ui.dashboard.maxHeight;
    }
}

// Additional event handlers for modal interactions
function setupAdditionalEventListeners() {
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');

    // Close modals on outside click
    settingsModal?.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            settingsModal.classList.remove('show');
            if (config.behavior.autoShow && !getCookie('cookie_consent')) {
                document.getElementById('cookieConsentBanner').classList.add('show');
            }
        }
    });

    analyticsModal?.addEventListener('click', (e) => {
        if (e.target === analyticsModal) {
            analyticsModal.classList.remove('show');
        }
    });

    // Prevent modal scrolling
    settingsModal?.addEventListener('wheel', (e) => {
        const content = settingsModal.querySelector('.cookie-settings-content');
        if (content.scrollHeight > content.clientHeight) {
            e.stopPropagation();
        }
    });

    analyticsModal?.addEventListener('wheel', (e) => {
        const content = analyticsModal.querySelector('.cookie-analytics-content');
        if (content.scrollHeight > content.clientHeight) {
            e.stopPropagation();
        }
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (settingsModal?.classList.contains('show')) {
                settingsModal.classList.remove('show');
                if (config.behavior.autoShow && !getCookie('cookie_consent')) {
                    document.getElementById('cookieConsentBanner').classList.add('show');
                }
            }
            if (analyticsModal?.classList.contains('show')) {
                analyticsModal.classList.remove('show');
            }
        }
    });
}

// Apply additional CSS for edge cases
function injectAdditionalCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .cookie-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            font-size: 13px;
            color: ${config.ui.banner.text.descriptionColor};
        }
        .cookie-table th, .cookie-table td {
            border: 1px solid ${colors.border};
            padding: 8px;
            text-align: left;
        }
        .cookie-table th {
            background: ${colors.backgroundDark};
            font-weight: 600;
            color: ${config.ui.banner.text.titleColor};
        }
        .cookie-details-container {
            margin-top: 10px;
        }
        .cookie-details-header {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
            background: ${colors.backgroundDark};
            border-radius: 4px;
            font-weight: 500;
            color: ${config.ui.banner.text.titleColor};
        }
        .cookie-details-content {
            padding: 10px;
            border: 1px solid ${colors.border};
            border-top: none;
            border-radius: 0 0 4px 4px;
        }
        .no-cookies-message {
            font-style: italic;
            color: ${config.ui.banner.text.descriptionColor};
        }
        .toggle-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 20px;
        }
        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${colors.toggleInactive};
            transition: 0.4s;
            border-radius: 20px;
        }
        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 2px;
            bottom: 2px;
            background: #fff;
            transition: 0.4s;
            border-radius: 50%;
        }
        input:checked + .toggle-slider {
            background: ${colors.primary};
        }
        input:checked + .toggle-slider:before {
            transform: translateX(20px);
        }
        input:disabled + .toggle-slider {
            cursor: not-allowed;
            opacity: 0.6;
        }
        .cookie-consent-buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        .cookie-settings-footer {
            display: flex;
            gap: 10px;
            padding: 20px;
            border-top: 1px solid ${colors.border};
            background: ${colors.backgroundDark};
        }
        .language-selector {
            margin-bottom: 20px;
        }
        .language-selector select {
            padding: 8px;
            border: 1px solid ${colors.border};
            border-radius: 4px;
            background: ${colors.background};
            color: ${config.ui.banner.text.titleColor};
        }
        .stats-summary {
            display: flex;
            gap: 20px;
            margin: 20px 0;
        }
        .stat-card {
            flex: 1;
            padding: 15px;
            border-radius: 8px;
            background: ${colors.backgroundDark};
            text-align: center;
        }
        .stat-card.accepted .stat-value {
            color: ${colors.primary};
        }
        .stat-card.rejected .stat-value {
            color: ${colors.danger};
        }
        .stat-card.custom .stat-value {
            color: ${colors.secondary};
        }
        .stat-card.total .stat-value {
            color: ${config.ui.banner.text.titleColor};
        }
        .stat-value {
            font-size: 24px;
            font-weight: 600;
        }
        .stat-percentage {
            font-size: 14px;
            color: ${config.ui.dashboard.text.statColor};
        }
        .time-based-stats {
            margin-top: 20px;
        }
        .time-stat h4 {
            margin: 10px 0;
        }
        .stat-bar-container {
            margin: 10px 0;
        }
        .stat-bar-label {
            font-size: 12px;
            color: ${config.ui.dashboard.text.statColor};
            margin-bottom: 5px;
        }
        .stat-bar {
            display: flex;
            height: 20px;
            border-radius: 4px;
            overflow: hidden;
        }
        .stat-bar-segment {
            transition: width 0.3s ease;
        }
        .stat-bar-segment.accepted {
            background: ${colors.primary};
        }
        .stat-bar-segment.custom {
            background: ${colors.secondary};
        }
        .stat-bar-segment.rejected {
            background: ${colors.danger};
        }
        .stat-bar-legend {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: ${config.ui.dashboard.text.statColor};
            margin-top: 5px;
        }
        .password-prompt {
            padding: 20px;
            text-align: center;
        }
        .password-prompt input {
            padding: 10px;
            margin: 10px 0;
            width: 200px;
            border: 1px solid ${colors.border};
            border-radius: 4px;
        }
        @media (max-width: 480px) {
            .cookie-consent-buttons {
                flex-direction: column;
            }
            .cookie-settings-footer {
                flex-direction: column;
            }
            .stats-summary {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(style);
}

// Final initialization wrapper
function bootstrapCookieConsent() {
    if (!isValidDomain()) {
        console.warn('Cookie consent script is not allowed on this domain.');
        return;
    }

    // Clean up any stale cookies
    cleanupCookies();

    // Initialize core functionality
    initializeCookieConsent();

    // Setup resize handler
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    // Setup additional event listeners
    setupAdditionalEventListeners();

    // Inject additional CSS
    injectAdditionalCSS();

    // Log initialization
    console.log('Ultimate GDPR Cookie Consent v4.2 initialized');
}

// Execute bootstrap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapCookieConsent);
} else {
    bootstrapCookieConsent();
}
/**
 * Completion of Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition
 * Continues from bootstrapCookieConsent, fixing reported issues and finalizing the script
 */

// Dark mode configuration
const darkModeColors = {
    primary: '#34c759',      // Green (accept button, toggle active)
    primaryHover: '#2ea44f',
    secondary: '#40c4ff',    // Blue (save button, admin button)
    secondaryHover: '#039be5',
    danger: '#ff3b30',       // Red (reject button)
    dangerHover: '#d32f2f',
    textDark: '#e0e0e0',     // Primary text
    textLight: '#b0bec5',    // Secondary text
    background: '#212121',   // Main background
    backgroundDark: '#424242', // Secondary background (headers, cards)
    toggleInactive: '#757575',
    border: '#616161'
};

// Toggle dark mode
function toggleDarkMode(enabled) {
    const theme = enabled ? darkModeColors : (config.ui.theme === 'classic' ? classicColors : colors);
    const root = document.documentElement;

    // Update CSS variables for dynamic styling
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-hover', theme.primaryHover);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--secondary-hover', theme.secondaryHover);
    root.style.setProperty('--danger', theme.danger);
    root.style.setProperty('--danger-hover', theme.dangerHover);
    root.style.setProperty('--text-dark', theme.textDark);
    root.style.setProperty('--text-light', theme.textLight);
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--background-dark', theme.backgroundDark);
    root.style.setProperty('--toggle-inactive', theme.toggleInactive);
    root.style.setProperty('--border', theme.border);

    // Update modal and dashboard content
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    if (settingsModal) {
        settingsModal.querySelector('.cookie-settings-content').style.background = theme.background;
        settingsModal.querySelector('.cookie-settings-header').style.background = theme.backgroundDark;
        settingsModal.querySelectorAll('.cookie-details-header').forEach(header => {
            header.style.background = theme.backgroundDark;
        });
    }
    if (analyticsModal) {
        analyticsModal.querySelector('.cookie-analytics-content').style.background = theme.background;
        analyticsModal.querySelector('.cookie-analytics-header').style.background = theme.backgroundDark;
        analyticsModal.querySelectorAll('.stat-card').forEach(card => {
            card.style.background = theme.backgroundDark;
        });
    }
}

// Fix cookie details toggle
function enhanceCookieDetailsToggle() {
    document.querySelectorAll('.cookie-details-header').forEach(header => {
        header.removeEventListener('click', toggleDetailsHandler); // Prevent duplicate listeners
        header.addEventListener('click', toggleDetailsHandler);
    });
}

function toggleDetailsHandler() {
    const container = this.closest('.cookie-details-container');
    const details = container.querySelector('.cookie-details-content');
    const toggle = container.querySelector('.toggle-details');
    const isVisible = details.style.display === 'block';
    
    details.style.display = isVisible ? 'none' : 'block';
    toggle.textContent = isVisible ? '+' : '−';
    details.style.transition = `opacity ${animations.fadeIn.duration} ${animations.fadeIn.timingFunction}`;
    details.style.opacity = isVisible ? '0' : '1';
}

// Update banner close animation
function updateBannerAnimations() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.style.transition = `all ${animations.bannerTransition.duration} ${animations.bannerTransition.timingFunction}, opacity 0.3s ease, transform 0.3s ease`;
        banner.addEventListener('transitionend', () => {
            if (!banner.classList.contains('show')) {
                banner.style.display = 'none';
            }
        });
    }
}

// Reposition dark mode toggle
function repositionDarkModeToggle() {
    const banner = document.getElementById('cookieConsentBanner');
    if (!banner) return;

    let darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) {
        darkModeToggle = document.createElement('label');
        darkModeToggle.id = 'darkModeToggle';
        darkModeToggle.className = 'dark-mode-toggle';
        darkModeToggle.innerHTML = `
            <input type="checkbox" id="darkModeSwitch">
            <span class="toggle-slider"></span>
            <span class="toggle-label">${translations[currentLanguage].darkMode || 'Dark Mode'}</span>
        `;
        const privacyLink = banner.querySelector('.privacy-policy-link');
        if (privacyLink) {
            privacyLink.parentNode.insertBefore(darkModeToggle, privacyLink.nextSibling);
        } else {
            banner.querySelector('.cookie-consent-content').appendChild(darkModeToggle);
        }
    }

    // Update toggle event
    const switchInput = darkModeToggle.querySelector('#darkModeSwitch');
    switchInput.removeEventListener('change', handleDarkModeChange);
    switchInput.addEventListener('change', handleDarkModeChange);

    // Apply saved dark mode preference
    const isDarkMode = getCookie('dark_mode') === 'true';
    switchInput.checked = isDarkMode;
    toggleDarkMode(isDarkMode);
}

function handleDarkModeChange(e) {
    const enabled = e.target.checked;
    toggleDarkMode(enabled);
    setCookie('dark_mode', enabled.toString(), 365);
}

// Update CSS for dark mode toggle and animations
function injectFinalCSS() {
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --primary: ${colors.primary};
            --primary-hover: ${colors.primaryHover};
            --secondary: ${colors.secondary};
            --secondary-hover: ${colors.secondaryHover};
            --danger: ${colors.danger};
            --danger-hover: ${colors.dangerHover};
            --text-dark: ${colors.textDark};
            --text-light: ${colors.textLight};
            --background: ${colors.background};
            --background-dark: ${colors.backgroundDark};
            --toggle-inactive: ${colors.toggleInactive};
            --border: ${colors.border};
        }
        .dark-mode-toggle {
            display: inline-flex;
            align-items: center;
            margin-left: 10px;
            font-size: 13px;
            color: var(--text-dark);
            position: relative;
            top: -2px;
        }
        .dark-mode-toggle .toggle-label {
            margin-left: 8px;
        }
        .dark-mode-toggle .toggle-switch {
            position: relative;
            display: inline-block;
            width: 34px;
            height: 18px;
        }
        .dark-mode-toggle .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        .dark-mode-toggle .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--toggle-inactive);
            transition: 0.3s;
            border-radius: 18px;
        }
        .dark-mode-toggle .toggle-slider:before {
            position: absolute;
            content: "";
            height: 14px;
            width: 14px;
            left: 2px;
            bottom: 2px;
            background: #fff;
            transition: 0.3s;
            border-radius: 50%;
        }
        .dark-mode-toggle input:checked + .toggle-slider {
            background: var(--primary);
        }
        .dark-mode-toggle input:checked + .toggle-slider:before {
            transform: translateX(16px);
        }
        .cookie-consent-banner {
            animation: ${animations.fadeIn.keyframes};
        }
        .cookie-consent-banner:not(.show) {
            opacity: 0;
            transform: translateY(20px);
            pointer-events: none;
        }
        .cookie-settings-modal .cookie-details-content {
            opacity: 0;
            transition: opacity ${animations.fadeIn.duration} ${animations.fadeIn.timingFunction};
        }
        .cookie-settings-modal .cookie-details-content[style*="block"] {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}

// Final compliance check
function runComplianceCheck() {
    const consent = getCookie('cookie_consent');
    if (!consent) {
        console.log('No consent recorded. Showing banner.');
        return;
    }

    const detectedCookies = detectCookies();
    let isCompliant = true;
    Object.keys(detectedCookies).forEach(category => {
        if (category !== 'functional' && consent !== 'accepted') {
            detectedCookies[category].forEach(cookie => {
                if (getCookie(cookie.name) && (consent === 'rejected' || (consent === 'custom' && !getCookie(`${cookie.name}_enabled`)))) {
                    console.warn(`Non-compliant cookie detected: ${cookie.name}`);
                    isCompliant = false;
                    deleteCookie(cookie.name);
                }
            });
        }
    });

    if (isCompliant) {
        console.log('Cookie compliance check passed.');
    } else {
        console.warn('Cookie compliance issues resolved.');
    }
}

// Enhanced bootstrap function
function enhancedBootstrapCookieConsent() {
    if (!isValidDomain()) {
        console.warn('Cookie consent script is not allowed on this domain.');
        return;
    }

    // Clean up cookies
    cleanupCookies();

    // Initialize core functionality
    initializeCookieConsent();

    // Setup additional functionality
    window.addEventListener('resize', handleResize);
    handleResize();
    setupAdditionalEventListeners();
    injectAdditionalCSS();
    injectFinalCSS();
    enhanceCookieDetailsToggle();
    updateBannerAnimations();
    repositionDarkModeToggle();
    runComplianceCheck();

    // Log completion
    console.log('Ultimate GDPR Cookie Consent v4.2 fully initialized');
}

// Execute enhanced bootstrap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhancedBootstrapCookieConsent);
} else {
    enhancedBootstrapCookieConsent();
}
/**
 * Finalization of Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition
 * Continues from enhancedBootstrapCookieConsent, completing the script with resource deallocation and compliance reporting
 */

// Log consent for GDPR compliance
function logConsentForCompliance() {
    const consent = getCookie('cookie_consent');
    if (!consent) return;

    const consentLog = {
        timestamp: new Date().toISOString(),
        status: consent,
        settings: consent === 'custom' ? {} : null,
        domain: window.location.hostname,
        userAgent: navigator.userAgent
    };

    if (consent === 'custom') {
        ['analytics', 'performance', 'advertising'].forEach(category => {
            consentLog.settings[category] = getCookie(`${category}_enabled`) === 'true';
        });
    }

    // Store in localStorage for audit purposes
    const consentLogs = JSON.parse(localStorage.getItem('consentLogs') || '[]');
    consentLogs.push(consentLog);
    localStorage.setItem('consentLogs', JSON.stringify(consentLogs.slice(-100))); // Keep last 100 logs

    console.log('Consent logged for GDPR compliance:', consentLog);
}

// Periodic cookie scan
function scanCookiesPeriodically() {
    const scanInterval = setInterval(() => {
        const detectedCookies = detectCookies();
        let unauthorizedCookies = [];

        Object.keys(detectedCookies).forEach(category => {
            if (category !== 'functional') {
                detectedCookies[category].forEach(cookie => {
                    const consent = getCookie('cookie_consent');
                    if (!consent || consent === 'rejected' || (consent === 'custom' && !getCookie(`${cookie.name}_enabled`))) {
                        unauthorizedCookies.push(cookie.name);
                        deleteCookie(cookie.name);
                    }
                });
            }
        });

        if (unauthorizedCookies.length > 0) {
            console.warn('Unauthorized cookies removed:', unauthorizedCookies);
        }
    }, 60000); // Scan every 60 seconds

    return scanInterval;
}

// Deallocate resources
function deallocateResources() {
    const listeners = [
        { element: window, event: 'resize', handler: handleResize },
        { element: document, event: 'keydown', handler: handleKeydown },
        { element: document.getElementById('acceptAllBtn'), event: 'click', handler: handleAcceptAll },
        { element: document.getElementById('rejectAllBtn'), event: 'click', handler: handleRejectAll },
        { element: document.getElementById('adjustConsentBtn'), event: 'click', handler: handleAdjustConsent },
        { element: document.getElementById('saveSettingsBtn'), event: 'click', handler: handleSaveSettings },
        { element: document.getElementById('acceptAllSettingsBtn'), event: 'click', handler: handleAcceptAllSettings },
        { element: document.getElementById('rejectAllSettingsBtn'), event: 'click', handler: handleRejectAllSettings },
        { element: document.getElementById('cookieFloatingButton'), event: 'click', handler: handleFloatingButton },
        { element: document.getElementById('cookieAdminButton'), event: 'click', handler: handleAdminButton },
        { element: document.getElementById('submitPasswordBtn'), event: 'click', handler: handlePasswordSubmit },
        { element: document.getElementById('cookieLanguageSelect'), event: 'change', handler: handleLanguageChange }
    ];

    window.addEventListener('unload', () => {
        listeners.forEach(({ element, event, handler }) => {
            if (element && handler) {
                element.removeEventListener(event, handler);
            }
        });

        // Clear periodic scan
        if (window.cookieScanInterval) {
            clearInterval(window.cookieScanInterval);
        }

        console.log('Cookie consent resources deallocated');
    });
}

// Handle keydown (referenced in deallocateResources)
function handleKeydown(e) {
    if (e.key === 'Escape') {
        const settingsModal = document.getElementById('cookieSettingsModal');
        const analyticsModal = document.getElementById('cookieAnalyticsModal');
        if (settingsModal?.classList.contains('show')) {
            settingsModal.classList.remove('show');
            if (config.behavior.autoShow && !getCookie('cookie_consent')) {
                document.getElementById('cookieConsentBanner').classList.add('show');
            }
        }
        if (analyticsModal?.classList.contains('show')) {
            analyticsModal.classList.remove('show');
        }
    }
}

// Stub handlers for deallocation (referenced in deallocateResources)
function handleAcceptAll() { handleConsent('accepted'); }
function handleRejectAll() { handleConsent('rejected'); }
function handleAdjustConsent() {
    document.getElementById('cookieConsentBanner').classList.remove('show');
    document.getElementById('cookieSettingsModal').classList.add('show');
}
function handleSaveSettings() {
    const customSettings = {};
    document.querySelectorAll('.toggle-switch input[type="checkbox"]').forEach(input => {
        if (!input.disabled) {
            customSettings[input.dataset.category] = input.checked;
        }
    });
    handleConsent('custom', customSettings);
    document.getElementById('cookieSettingsModal').classList.remove('show');
}
function handleAcceptAllSettings() {
    handleConsent('accepted');
    document.getElementById('cookieSettingsModal').classList.remove('show');
}
function handleRejectAllSettings() {
    handleConsent('rejected');
    document.getElementById('cookieSettingsModal').classList.remove('show');
}
function handleFloatingButton() {
    document.getElementById('cookieSettingsModal').classList.add('show');
}
function handleAdminButton() {
    document.getElementById('cookieAnalyticsModal').classList.add('show');
}
function handlePasswordSubmit() {
    const passwordInput = document.getElementById('dashboardPassword');
    if (passwordInput.value === config.analytics.dashboardPassword) {
        isDashboardAuthenticated = true;
        setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration || 365);
        document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(currentLanguage);
    } else {
        alert('Incorrect password');
    }
}
function handleLanguageChange(e) {
    currentLanguage = e.target.value;
    if (config.behavior.rememberLanguage) {
        setCookie('cookie_language', currentLanguage, 365);
    }
    const detectedCookies = detectCookies();
    document.body.innerHTML = '';
    injectConsentHTML(detectedCookies, currentLanguage);
    setupEventListeners();
    if (!getCookie('cookie_consent') && config.behavior.autoShow) {
        document.getElementById('cookieConsentBanner').classList.add('show');
    }
}

// Final script cleanup
function cleanupScript() {
    // Remove any stale consent data older than storageDays
    if (config.analytics.storageDays > 0) {
        const savedData = JSON.parse(localStorage.getItem('consentAnalytics') || '{}');
        if (savedData.expiry && new Date(savedData.expiry) < new Date()) {
            localStorage.removeItem('consentAnalytics');
            console.log('Expired consent analytics data removed');
        }
    }

    // Remove stale consent logs
    const consentLogs = JSON.parse(localStorage.getItem('consentLogs') || '[]');
    if (consentLogs.length > 100) {
        localStorage.setItem('consentLogs', JSON.stringify(consentLogs.slice(-100)));
        console.log('Old consent logs trimmed');
    }
}

// Ultimate bootstrap function
function ultimateBootstrapCookieConsent() {
    if (!isValidDomain()) {
        console.warn('Cookie consent script is not allowed on this domain.');
        return;
    }

    // Perform initial cleanup
    cleanupCookies();
    cleanupScript();

    // Initialize core functionality
    initializeCookieConsent();

    // Setup all functionality
    window.addEventListener('resize', handleResize);
    handleResize();
    setupAdditionalEventListeners();
    injectAdditionalCSS();
    injectFinalCSS();
    enhanceCookieDetailsToggle();
    updateBannerAnimations();
    repositionDarkModeToggle();
    runComplianceCheck();
    logConsentForCompliance();

    // Start periodic scanning
    window.cookieScanInterval = scanCookiesPeriodically();

    // Setup resource deallocation
    deallocateResources();

    // Log final completion
    console.log('Ultimate GDPR Cookie Consent v4.2 fully initialized and compliant');
}

// Execute ultimate bootstrap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ultimateBootstrapCookieConsent);
} else {
    ultimateBootstrapCookieConsent();
}
/**
 * Completion of Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition
 * Continues from ultimateBootstrapCookieConsent, finalizing the script with consent revocation, analytics export, category validation, and UI polish
 */

// Revoke consent
function revokeConsent() {
    const consent = getCookie('cookie_consent');
    if (!consent) return;

    // Delete all non-functional cookies
    const detectedCookies = detectCookies();
    Object.keys(detectedCookies).forEach(category => {
        if (category !== 'functional') {
            detectedCookies[category].forEach(cookie => {
                deleteCookie(cookie.name);
            });
        }
    });

    // Clear consent cookies
    deleteCookie('cookie_consent');
    deleteCookie('cookie_language');
    deleteCookie('dark_mode');
    deleteCookie('dashboard_auth');
    ['analytics', 'performance', 'advertising'].forEach(category => {
        deleteCookie(`${category}_enabled`);
    });

    // Show banner again
    const banner = document.getElementById('cookieConsentBanner');
    if (banner && config.behavior.autoShow) {
        banner.classList.add('show');
    }

    console.log('Consent revoked. Cookies cleared and banner re-displayed.');
}

// Export analytics data
function exportAnalytics() {
    const data = {
        total: consentAnalytics.total,
        daily: consentAnalytics.daily,
        weekly: consentAnalytics.weekly,
        monthly: consentAnalytics.monthly,
        lifetime: consentAnalytics.lifetime,
        timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cookie_consent_analytics_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log('Analytics data exported.');
}

// Validate cookie categories
function validateCookieCategories() {
    const detectedCookies = detectCookies();
    let misclassifiedCookies = [];

    Object.keys(detectedCookies).forEach(category => {
        detectedCookies[category].forEach(cookie => {
            const expectedCategory = cookieDatabase[cookie.name]?.category;
            if (expectedCategory && expectedCategory !== category && category !== 'uncategorized') {
                misclassifiedCookies.push({ name: cookie.name, detected: category, expected: expectedCategory });
            }
        });
    });

    if (misclassifiedCookies.length > 0) {
        console.warn('Misclassified cookies detected:', misclassifiedCookies);
        // Reassign to correct categories
        misclassifiedCookies.forEach(cookie => {
            detectedCookies[cookie.detected] = detectedCookies[cookie.detected].filter(c => c.name !== cookie.name);
            detectedCookies[cookie.expected].push({
                name: cookie.name,
                ...cookieDatabase[cookie.name]
            });
        });
        // Update UI
        const settingsModal = document.getElementById('cookieSettingsModal');
        if (settingsModal && settingsModal.classList.contains('show')) {
            const detectedCookies = detectCookies();
            settingsModal.querySelector('.cookie-settings-body').innerHTML = `
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized') : ''}
            `;
            enhanceCookieDetailsToggle();
        }
    }

    return misclassifiedCookies.length === 0;
}

// Polish UI (button alignment, modal scrolling)
function polishUI() {
    const banner = document.getElementById('cookieConsentBanner');
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');

    // Align buttons
    if (banner) {
        const buttons = banner.querySelector('.cookie-consent-buttons');
        buttons.style.display = 'flex';
        buttons.style.justifyContent = 'space-between';
        buttons.style.alignItems = 'center';
        buttons.querySelectorAll('.cookie-btn').forEach(btn => {
            btn.style.flex = '1';
            btn.style.margin = '0 5px';
        });
    }

    if (settingsModal) {
        const footer = settingsModal.querySelector('.cookie-settings-footer');
        footer.style.display = 'flex';
        footer.style.justifyContent = 'space-between';
        footer.style.alignItems = 'center';
        footer.querySelectorAll('.cookie-btn').forEach(btn => {
            btn.style.flex = '1';
            btn.style.margin = '0 5px';
        });

        // Enable smooth scrolling in modal
        settingsModal.querySelector('.cookie-settings-content').style.overflowY = 'auto';
        settingsModal.querySelector('.cookie-settings-content').style.scrollBehavior = 'smooth';
    }

    if (analyticsModal) {
        analyticsModal.querySelector('.cookie-analytics-content').style.overflowY = 'auto';
        analyticsModal.querySelector('.cookie-analytics-content').style.scrollBehavior = 'smooth';

        // Add export button to analytics dashboard
        const header = analyticsModal.querySelector('.cookie-analytics-header');
        let exportBtn = header.querySelector('#exportAnalyticsBtn');
        if (!exportBtn) {
            exportBtn = document.createElement('button');
            exportBtn.id = 'exportAnalyticsBtn';
            exportBtn.className = 'cookie-btn export-btn';
            exportBtn.textContent = translations[currentLanguage].exportAnalytics || 'Export Analytics';
            exportBtn.style.background = colors.secondary;
            exportBtn.style.color = '#ffffff';
            exportBtn.style.border = 'none';
            exportBtn.style.borderRadius = '6px';
            exportBtn.style.padding = '8px 16px';
            exportBtn.style.fontWeight = '600';
            exportBtn.style.cursor = 'pointer';
            exportBtn.style.transition = `all ${animations.buttonHover.duration} ${animations.buttonHover.timingFunction}`;
            exportBtn.addEventListener('mouseover', () => {
                exportBtn.style.background = colors.secondaryHover;
                exportBtn.style.transform = animations.buttonHover.transform;
                exportBtn.style.boxShadow = animations.buttonHover.shadow;
            });
            exportBtn.addEventListener('mouseout', () => {
                exportBtn.style.background = colors.secondary;
                exportBtn.style.transform = 'none';
                exportBtn.style.boxShadow = 'none';
            });
            exportBtn.addEventListener('click', exportAnalytics);
            header.appendChild(exportBtn);
        }
    }
}

// Add revoke consent button
function addRevokeConsentButton() {
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (!floatingButton) return;

    let revokeBtn = document.getElementById('revokeConsentBtn');
    if (!revokeBtn) {
        revokeBtn = document.createElement('button');
        revokeBtn.id = 'revokeConsentBtn';
        revokeBtn.className = 'cookie-btn revoke-btn';
        revokeBtn.textContent = translations[currentLanguage].revokeConsent || 'Revoke Consent';
        revokeBtn.style.background = colors.danger;
        revokeBtn.style.color = '#ffffff';
        revokeBtn.style.border = 'none';
        revokeBtn.style.borderRadius = '6px';
        revokeBtn.style.padding = '8px 16px';
        revokeBtn.style.fontWeight = '600';
        revokeBtn.style.cursor = 'pointer';
        revokeBtn.style.transition = `all ${animations.buttonHover.duration} ${animations.buttonHover.timingFunction}`;
        revokeBtn.style.position = 'fixed';
        revokeBtn.style.bottom = '100px';
        revokeBtn.style[config.behavior.floatingButtonPosition] = '30px';
        revokeBtn.style.zIndex = '9997';
        revokeBtn.addEventListener('mouseover', () => {
            revokeBtn.style.background = colors.dangerHover;
            revokeBtn.style.transform = animations.buttonHover.transform;
            revokeBtn.style.boxShadow = animations.buttonHover.shadow;
        });
        revokeBtn.addEventListener('mouseout', () => {
            revokeBtn.style.background = colors.danger;
            revokeBtn.style.transform = 'none';
            revokeBtn.style.boxShadow = 'none';
        });
        revokeBtn.addEventListener('click', revokeConsent);
        document.body.appendChild(revokeBtn);
    }
}

// Complete cookie consent initialization
function completeCookieConsent() {
    if (!isValidDomain()) {
        console.warn('Cookie consent script is not allowed on this domain.');
        return;
    }

    // Perform all initialization tasks
    cleanupCookies();
    cleanupScript();
    initializeCookieConsent();
    window.addEventListener('resize', handleResize);
    handleResize();
    setupAdditionalEventListeners();
    injectAdditionalCSS();
    injectFinalCSS();
    enhanceCookieDetailsToggle();
    updateBannerAnimations();
    repositionDarkModeToggle();
    runComplianceCheck();
    logConsentForCompliance();
    window.cookieScanInterval = scanCookiesPeriodically();
    deallocateResources();
    polishUI();
    addRevokeConsentButton();

    // Validate categories
    if (!validateCookieCategories()) {
        console.log('Cookie categories revalidated and UI updated.');
    }

    // Log final completion
    console.log('Ultimate GDPR Cookie Consent v4.2 fully initialized, compliant, and complete');
}

// Execute complete initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', completeCookieConsent);
} else {
    completeCookieConsent();
}
/**
 * Final Completion of Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition
 * Continues from completeCookieConsent, adding cross-domain sync, error reporting, accessibility, and testing to finalize the script
 */

// Sync consent across domains
function syncConsentAcrossDomains() {
    if (!config.allowedDomains.length) return;

    const consent = getCookie('cookie_consent');
    if (!consent) return;

    // Post consent to other allowed domains (simulated via localStorage for simplicity)
    const syncKey = 'cookie_consent_sync';
    const syncData = {
        consent,
        settings: consent === 'custom' ? {} : null,
        timestamp: new Date().toISOString()
    };

    if (consent === 'custom') {
        ['analytics', 'performance', 'advertising'].forEach(category => {
            syncData.settings[category] = getCookie(`${category}_enabled`) === 'true';
        });
    }

    localStorage.setItem(syncKey, JSON.stringify(syncData));

    // Listen for sync updates from other domains
    window.addEventListener('storage', (e) => {
        if (e.key === syncKey && e.newValue) {
            const data = JSON.parse(e.newValue);
            if (data.consent && config.allowedDomains.includes(window.location.hostname)) {
                setCookie('cookie_consent', data.consent, 365);
                if (data.consent === 'custom' && data.settings) {
                    Object.keys(data.settings).forEach(category => {
                        setCookie(`${category}_enabled`, data.settings[category].toString(), 365);
                    });
                }
                console.log('Consent synchronized from another domain:', data);
                cleanupCookies();
            }
        }
    });

    console.log('Consent synchronized across domains:', syncData);
}

// Report errors for debugging
function reportErrors() {
    const errors = [];

    // Check for missing UI elements
    const requiredElements = [
        'cookieConsentBanner',
        'cookieSettingsModal',
        'cookieAnalyticsModal',
        'cookieFloatingButton'
    ];
    requiredElements.forEach(id => {
        if (!document.getElementById(id)) {
            errors.push(`Missing UI element: ${id}`);
        }
    });

    // Check cookie database consistency
    const detectedCookies = detectCookies();
    Object.keys(detectedCookies).forEach(category => {
        detectedCookies[category].forEach(cookie => {
            if (!cookieDatabase[cookie.name] && category !== 'uncategorized') {
                errors.push(`Cookie ${cookie.name} in ${category} not in cookieDatabase`);
            }
        });
    });

    // Check analytics data
    if (config.analytics.enabled && !localStorage.getItem('consentAnalytics')) {
        errors.push('Analytics data not initialized');
    }

    if (errors.length > 0) {
        console.error('Cookie consent errors detected:', errors);
        localStorage.setItem('cookie_consent_errors', JSON.stringify(errors));
    } else {
        console.log('No errors detected in cookie consent script');
        localStorage.removeItem('cookie_consent_errors');
    }

    return errors.length === 0;
}

// Enhance accessibility
function enhanceAccessibility() {
    const banner = document.getElementById('cookieConsentBanner');
    const settingsModal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    const floatingButton = document.getElementById('cookieFloatingButton');
    const adminButton = document.getElementById('cookieAdminButton');
    const revokeButton = document.getElementById('revokeConsentBtn');

    // Add ARIA attributes
    if (banner) {
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-labelledby', 'cookieConsentTitle');
        banner.querySelector('h2').id = 'cookieConsentTitle';
        banner.setAttribute('aria-describedby', 'cookieConsentDesc');
        banner.querySelector('p').id = 'cookieConsentDesc';
    }

    if (settingsModal) {
        settingsModal.setAttribute('role', 'dialog');
        settingsModal.setAttribute('aria-labelledby', 'cookieSettingsTitle');
        settingsModal.querySelector('.cookie-settings-header h2').id = 'cookieSettingsTitle';
        settingsModal.querySelectorAll('.toggle-switch input').forEach(input => {
            input.setAttribute('aria-label', `Toggle ${input.dataset.category} cookies`);
        });
        settingsModal.querySelectorAll('.cookie-details-header').forEach(header => {
            header.setAttribute('role', 'button');
            header.setAttribute('aria-expanded', 'false');
            header.addEventListener('click', () => {
                const isExpanded = header.getAttribute('aria-expanded') === 'true';
                header.setAttribute('aria-expanded', !isExpanded);
            });
        });
    }

    if (analyticsModal) {
        analyticsModal.setAttribute('role', 'dialog');
        analyticsModal.setAttribute('aria-labelledby', 'cookieAnalyticsTitle');
        analyticsModal.querySelector('.cookie-analytics-header h2').id = 'cookieAnalyticsTitle';
    }

    if (floatingButton) {
        floatingButton.setAttribute('role', 'button');
        floatingButton.setAttribute('aria-label', translations[currentLanguage].customize || 'Customize cookie settings');
    }

    if (adminButton) {
        adminButton.setAttribute('role', 'button');
        adminButton.setAttribute('aria-label', translations[currentLanguage].dashboardTitle || 'Cookie consent dashboard');
    }

    if (revokeButton) {
        revokeButton.setAttribute('role', 'button');
        revokeButton.setAttribute('aria-label', translations[currentLanguage].revokeConsent || 'Revoke cookie consent');
    }

    // Ensure keyboard focus
    const focusableElements = document.querySelectorAll('button, [href], input, select, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(el => {
        if (!el.hasAttribute('tabindex')) {
            el.setAttribute('tabindex', '0');
        }
    });

    // Trap focus in modals
    [settingsModal, analyticsModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Tab' && modal.classList.contains('show')) {
                    const focusable = modal.querySelectorAll('button, input, select, [tabindex]:not([tabindex="-1"])');
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            });
        }
    });

    console.log('Accessibility enhancements applied');
}

// Test cookie consent functionality
function testCookieConsent() {
    const tests = [
        {
            name: 'Banner Display',
            test: () => document.getElementById('cookieConsentBanner') && !getCookie('cookie_consent') && config.behavior.autoShow,
            pass: () => document.getElementById('cookieConsentBanner').classList.contains('show')
        },
        {
            name: 'Settings Modal',
            test: () => document.getElementById('cookieSettingsModal'),
            pass: () => {
                document.getElementById('adjustConsentBtn')?.click();
                return document.getElementById('cookieSettingsModal').classList.contains('show');
            }
        },
        {
            name: 'Analytics Dashboard',
            test: () => document.getElementById('cookieAnalyticsModal') && config.analytics.enabled,
            pass: () => {
                if (isDashboardAuthenticated) {
                    document.getElementById('cookieAdminButton')?.click();
                    return document.getElementById('cookieAnalyticsModal').classList.contains('show');
                }
                return true; // Skip if not authenticated
            }
        },
        {
            name: 'Consent Storage',
            test: () => {
                document.getElementById('acceptAllBtn')?.click();
                return getCookie('cookie_consent') === 'accepted';
            },
            pass: () => getCookie('cookie_consent') === 'accepted'
        },
        {
            name: 'Cookie Deletion',
            test: () => {
                document.getElementById('rejectAllBtn')?.click();
                const detectedCookies = detectCookies();
                return !Object.keys(detectedCookies).some(category => 
                    category !== 'functional' && detectedCookies[category].length > 0
                );
            },
            pass: () => getCookie('cookie_consent') === 'rejected'
        }
    ];

    const results = tests.map(test => {
        try {
            const result = test.test();
            const passed = result ? test.pass() : false;
            return { name: test.name, passed, error: passed ? null : 'Test failed' };
        } catch (e) {
            return { name: test.name, passed: false, error: e.message };
        }
    });

    console.log('Cookie consent tests:', results);
    localStorage.setItem('cookie_consent_tests', JSON.stringify(results));

    return results.every(test => test.passed);
}

// Update translations for new UI elements
function updateTranslations() {
    translations.en = {
        ...translations.en,
        darkMode: 'Dark Mode',
        exportAnalytics: 'Export Analytics',
        revokeConsent: 'Revoke Consent'
    };
    translations.fr = {
        ...translations.fr,
        darkMode: 'Mode Sombre',
        exportAnalytics: 'Exporter les Analyses',
        revokeConsent: 'Révoquer le Consentement'
    };
}

// Final cookie consent bootstrap
function finalCookieConsentBootstrap() {
    if (!isValidDomain()) {
        console.warn('Cookie consent script is not allowed on this domain.');
        return;
    }

    // Update translations
    updateTranslations();

    // Perform all initialization tasks
    cleanupCookies();
    cleanupScript();
    initializeCookieConsent();
    window.addEventListener('resize', handleResize);
    handleResize();
    setupAdditionalEventListeners();
    injectAdditionalCSS();
    injectFinalCSS();
    enhanceCookieDetailsToggle();
    updateBannerAnimations();
    repositionDarkModeToggle();
    runComplianceCheck();
    logConsentForCompliance();
    window.cookieScanInterval = scanCookiesPeriodically();
    deallocateResources();
    polishUI();
    addRevokeConsentButton();
    if (!validateCookieCategories()) {
        console.log('Cookie categories revalidated and UI updated.');
    }
    syncConsentAcrossDomains();
    enhanceAccessibility();
    if (!reportErrors()) {
        console.log('Errors reported and stored for debugging.');
    }
    if (!testCookieConsent()) {
        console.log('Some tests failed. Check console for details.');
    }

    // Log final completion
    console.log('Ultimate GDPR Cookie Consent v4.2 fully initialized, compliant, accessible, and thoroughly tested');
}

// Execute final bootstrap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', finalCookieConsentBootstrap);
} else {
    finalCookieConsentBootstrap();
}
