/**
 * Ultimate GDPR Cookie Consent Solution v4.2 - Advanced Edition with Dark Mode
 * - Dark mode toggle with separate styling options
 * - Automatic translation based on user's country
 * - Domain restriction controls
 * - Geo-targeting (country/city/state level controls)
 * - Complete EU language support
 * - Built-in analytics dashboard with password protection
 * - Consent Mode v2 and future-proof compliance
 * - Premium UI with enhanced UX
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
    
    // UI Configuration
    uiConfig: {
        // Dark mode configuration
        darkMode: {
            enabled: true, // Enable dark mode toggle
            default: false, // Default to light mode
            rememberPreference: true, // Remember user's preference
            togglePosition: 'banner', // 'banner' or 'floating' or 'both'
        },
        
        // Banner configuration
        banner: {
            position: 'right', // 'left' or 'right'
            width: '440px',
            borderRadius: '12px',
            padding: '24px',
            animation: {
                duration: '0.4s',
                timing: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
            }
        },
        
        // Button configuration
        buttons: {
            borderRadius: '8px',
            padding: '12px 20px',
            fontWeight: '600',
            fontSize: '14px',
            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            hoverEffect: {
                transform: 'translateY(-1px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
            }
        },
        
        // Modal configuration
        modal: {
            width: '845px',
            maxHeight: '470px',
            borderRadius: '12px',
            animation: {
                duration: '0.3s',
                timing: 'ease'
            }
        },
        
        // Floating button configuration
        floatingButton: {
            size: '60px',
            borderRadius: '50%',
            position: 'right', // 'left' or 'right'
            show: true, // Show floating button
            adminButtonPosition: 'left', // 'left' or 'right'
            showAdminButton: true // Show admin dashboard button
        },
        
        // Analytics dashboard configuration
        dashboard: {
            width: '900px',
            maxHeight: '600px',
            borderRadius: '12px'
        }
    },
    
    // Color scheme configuration (light mode)
    colors: {
        light: {
            primary: '#2ecc71',      // Green (accept button color)
            secondary: '#3498db',    // Blue (save button color)
            danger: '#e74c3c',       // Red (reject button color)
            textDark: '#2c3e50',     // Dark text
            textLight: '#7f8c8d',    // Light text
            background: '#ffffff',   // White background
            toggleActive: '#2ecc71', // Same as primary
            toggleInactive: '#bdc3c7',// Gray for inactive
            bannerBg: '#ffffff',
            modalBg: '#ffffff',
            dashboardBg: '#ffffff',
            buttonHover: {
                accept: '#27ae60',
                reject: '#c0392b',
                save: '#2980b9',
                adjust: '#f0f2f5'
            }
        },
        // Dark mode color scheme
        dark: {
            primary: '#27ae60',      // Darker green
            secondary: '#2980b9',    // Darker blue
            danger: '#c0392b',       // Darker red
            textDark: '#ecf0f1',     // Light text
            textLight: '#bdc3c7',    // Lighter text
            background: '#2c3e50',   // Dark background
            toggleActive: '#27ae60', // Same as primary
            toggleInactive: '#7f8c8d',// Gray for inactive
            bannerBg: '#34495e',
            modalBg: '#34495e',
            dashboardBg: '#34495e',
            buttonHover: {
                accept: '#2ecc71',
                reject: '#e74c3c',
                save: '#3498db',
                adjust: '#2c3e50'
            }
        }
    },
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en', // Default language if auto-detection fails
        availableLanguages: [], // Empty array = all languages available
        showLanguageSelector: true, // Show/hide language dropdown
        autoDetectLanguage: true // Auto-detect language based on country/browser
    },
    
    // Geo-targeting configuration
    geoConfig: {
        // Only show in these countries (empty array = all countries) ['US', 'CA']
        allowedCountries: [],
        
        // Only show in these regions/states (empty array = all regions)['California', 'New York']
        allowedRegions: [],
        
        // Only show in these cities (empty array = all cities)['Los Angeles', 'San Francisco']
        allowedCities: [],
        
        // Countries where banner should be hidden ['US', 'CA']
        blockedCountries: [], 
        
        // Regions where banner should be hidden ['California', 'New York']
        blockedRegions: [],
        
        // Cities where banner should be hidden ['Los Angeles', 'San Francisco']
        blockedCities: []
    },
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 30, // How long to keep analytics data
        showDashboard: true, // Show analytics dashboard button
        passwordProtect: true, // Enable password protection
        dashboardPassword: 'admin123', // Default password (should be changed per site)
        passwordCookieDuration: 365 // Days to remember password
    },
    
    // Banner behavior
    behavior: {
        autoShow: true,
        bannerDelay: 0,
        rememberLanguage: true,
        acceptOnScroll: false,
        acceptOnContinue: true,
        showFloatingButton: true,
        showAdminButton: true
    }
};

// ============== MAIN IMPLEMENTATION ============== //
// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Set default consent (deny all except security)
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
});

// Get current color scheme based on dark mode preference
function getCurrentColorScheme() {
    if (config.uiConfig.darkMode.enabled && isDarkModeEnabled()) {
        return config.colors.dark;
    }
    return config.colors.light;
}

// Check if dark mode is enabled
function isDarkModeEnabled() {
    if (config.uiConfig.darkMode.rememberPreference) {
        const darkModeCookie = getCookie('dark_mode_enabled');
        if (darkModeCookie !== null) {
            return darkModeCookie === 'true';
        }
    }
    return config.uiConfig.darkMode.default;
}

// Toggle dark mode
function toggleDarkMode(enable) {
    const currentScheme = enable ? config.colors.dark : config.colors.light;
    
    // Update cookie if remember preference is enabled
    if (config.uiConfig.darkMode.rememberPreference) {
        setCookie('dark_mode_enabled', enable.toString(), 365);
    }
    
    // Update UI elements
    updateUIForColorScheme(currentScheme);
}

// Update UI elements for color scheme
function updateUIForColorScheme(colorScheme) {
    // Update banner
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.style.backgroundColor = colorScheme.bannerBg;
        const textElements = banner.querySelectorAll('h2, p, .privacy-policy-link');
        textElements.forEach(el => {
            if (el.tagName === 'H2') el.style.color = colorScheme.textDark;
            if (el.tagName === 'P') el.style.color = colorScheme.textLight;
            if (el.classList.contains('privacy-policy-link')) el.style.color = colorScheme.secondary;
        });
    }
    
    // Update buttons
    document.querySelectorAll('.cookie-btn').forEach(button => {
        if (button.classList.contains('accept-btn')) {
            button.style.backgroundColor = colorScheme.primary;
            button.style.borderColor = colorScheme.primary;
        } else if (button.classList.contains('reject-btn')) {
            button.style.color = colorScheme.danger;
            button.style.borderColor = colorScheme.danger;
        } else if (button.classList.contains('save-btn')) {
            button.style.backgroundColor = colorScheme.secondary;
        }
    });
    
    // Update modal
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('.cookie-settings-content').style.backgroundColor = colorScheme.modalBg;
        modal.querySelectorAll('h2, h3').forEach(el => el.style.color = colorScheme.textDark);
        modal.querySelectorAll('p').forEach(el => el.style.color = colorScheme.textLight);
    }
    
    // Update floating button
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) {
        floatingButton.style.backgroundColor = colorScheme.primary;
    }
    
    // Update admin button
    const adminButton = document.getElementById('cookieAdminButton');
    if (adminButton) {
        adminButton.style.backgroundColor = colorScheme.secondary;
    }
    
    // Update dashboard
    const dashboard = document.getElementById('cookieAnalyticsModal');
    if (dashboard) {
        dashboard.querySelector('.cookie-analytics-content').style.backgroundColor = colorScheme.dashboardBg;
    }
}

// Enhanced cookie database with detailed descriptions
const cookieDatabase = {
    '_ga': { category: 'analytics', duration: '2 years', description: 'Google Analytics user distinction' },
    '_gid': { category: 'analytics', duration: '24 hours', description: 'Google Analytics user distinction' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle rate' },
    '_ga_': { category: 'analytics', duration: '2 years', description: 'GA4 session state' },
    '_fbp': { category: 'advertising', duration: '3 months', description: 'Facebook conversion tracking' },
    'fr': { category: 'advertising', duration: '3 months', description: 'Facebook targeted ads' },
    'wordpress_': { category: 'functional', duration: 'Session', description: 'WordPress authentication' },
    'wp-settings': { category: 'functional', duration: '1 year', description: 'WordPress preferences' },
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session' },
    'cookie_consent': { category: 'functional', duration: '1 year', description: 'Stores cookie consent preferences' },
    'woocommerce_items_in_cart': { category: 'functional', duration: 'Session', description: 'WooCommerce cart items tracking' },
    'woocommerce_cart_hash': { category: 'functional', duration: 'Session', description: 'WooCommerce cart hash' },
    '_gcl_au': { category: 'advertising', duration: '3 months', description: 'Google Ads conversion' },
    'IDE': { category: 'advertising', duration: '1 year', description: 'Google DoubleClick' },
    'NID': { category: 'advertising', duration: '6 months', description: 'Google user tracking' },
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' }
};

// Complete EU language translations
const translations = {
    en: {
        title: "We value your privacy",
        description: "We use cookies to improve your browsing experience, provide personalized ads or content, and analyze our traffic. By clicking \"Accept All,\" you consent to the use of cookies.",
        privacy: "Privacy Policy",
        customize: "Adjust",
        reject: "Reject all",
        accept: "Accept all",
        essential: "Essential Cookies",
        essentialDesc: "Necessary for website functionality",
        analytics: "Analytics Cookies",
        analyticsDesc: "Help understand visitor interactions",
        performance: "Performance Cookies",
        performanceDesc: "Improve website performance",
        advertising: "Advertising Cookies",
        advertisingDesc: "Deliver relevant ads",
        other: "Other Cookies",
        otherDesc: "Uncategorized cookies",
        save: "Save Preferences",
        language: "English",
        statsTitle: "Consent Statistics",
        statsAccepted: "Accepted",
        statsRejected: "Rejected",
        statsCustom: "Customized",
        statsTotal: "Total",
        statsPercentage: "Percentage",
        statsLast7Days: "Last 7 Days",
        statsLast30Days: "Last 30 Days",
        passwordPrompt: "Enter password to view analytics",
        passwordSubmit: "Submit",
        passwordIncorrect: "Incorrect password",
        dashboardTitle: "Consent Analytics Dashboard",
        darkMode: "Dark Mode"
    },
    fr: {
        title: "Nous respectons votre vie privée",
        description: "Nous utilisons des cookies pour améliorer votre expérience, fournir des publicités ou du contenu personnalisé et analyser notre trafic. En cliquant sur \"Tout accepter\", vous consentez à l'utilisation de cookies.",
        privacy: "Politique de confidentialité",
        customize: "Personnaliser",
        reject: "Tout refuser",
        accept: "Tout accepter",
        essential: "Cookies essentiels",
        essentialDesc: "Nécessaires au fonctionnement",
        analytics: "Cookies d'analyse",
        analyticsDesc: "Comprennent les interactions",
        performance: "Cookies de performance",
        performanceDesc: "Améliorent les performances",
        advertising: "Cookies publicitaires",
        advertisingDesc: "Diffusent des publicités",
        other: "Autres cookies",
        otherDesc: "Cookies non catégorisés",
        save: "Enregistrer",
        language: "Français",
        statsTitle: "Statistiques de Consentement",
        statsAccepted: "Accepté",
        statsRejected: "Rejeté",
        statsCustom: "Personnalisé",
        statsTotal: "Total",
        statsPercentage: "Pourcentage",
        statsLast7Days: "7 Derniers Jours",
        statsLast30Days: "30 Derniers Jours",
        passwordPrompt: "Entrez le mot de passe pour voir les analyses",
        passwordSubmit: "Soumettre",
        passwordIncorrect: "Mot de passe incorrect",
        dashboardTitle: "Tableau de bord des analyses de consentement",
        darkMode: "Mode Sombre"
    }
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    'AT': 'de', 'BE': 'nl', 'BE': 'fr', 'BG': 'bg', 'HR': 'hr',
    'CY': 'el', 'CZ': 'cs', 'DK': 'da', 'EE': 'et', 'FI': 'fi',
    'FR': 'fr', 'DE': 'de', 'GR': 'el', 'HU': 'hu', 'IE': 'en',
    'IT': 'it', 'LV': 'lv', 'LT': 'lt', 'LU': 'fr', 'LU': 'de',
    'MT': 'mt', 'NL': 'nl', 'PL': 'pl', 'PT': 'pt', 'RO': 'ro',
    'SK': 'sk', 'SI': 'sl', 'ES': 'es', 'SE': 'sv', 'GB': 'en',
    'US': 'en', 'CA': 'en', 'CA': 'fr', 'AU': 'en', 'NZ': 'en'
};

// Analytics data storage
let consentAnalytics = {
    total: { accepted: 0, rejected: 0, custom: 0 },
    daily: {},
    weekly: {},
    monthly: {}
};

// Password protection for analytics
let isDashboardAuthenticated = false;

// Load analytics data from localStorage
function loadAnalyticsData() {
    const savedData = localStorage.getItem('consentAnalytics');
    if (savedData) consentAnalytics = JSON.parse(savedData);
    
    const today = new Date().toISOString().split('T')[0];
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = { accepted: 0, rejected: 0, custom: 0 };
    }
    
    if (config.analytics.passwordProtect) {
        isDashboardAuthenticated = getCookie('dashboard_auth') === 'true';
    } else {
        isDashboardAuthenticated = true;
    }
}

// Save analytics data to localStorage
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Update analytics data
function updateConsentStats(status) {
    const today = new Date().toISOString().split('T')[0];
    
    if (status === 'accepted') {
        consentAnalytics.total.accepted++;
        consentAnalytics.daily[today].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.total.rejected++;
        consentAnalytics.daily[today].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.total.custom++;
        consentAnalytics.daily[today].custom++;
    }
    
    updateTimeBasedStats(today, status);
    saveAnalyticsData();
}

// Update weekly and monthly stats
function updateTimeBasedStats(date, status) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const week = getWeekNumber(dateObj);
    
    const weekKey = `${year}-W${week}`;
    if (!consentAnalytics.weekly[weekKey]) {
        consentAnalytics.weekly[weekKey] = { accepted: 0, rejected: 0, custom: 0 };
    }
    
    const monthKey = `${year}-${month}`;
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

// Helper function to get week number
function getWeekNumber(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
    const week1 = new Date(d.getFullYear(), 0, 4);
    return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

// Generate analytics dashboard HTML
function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    const total = consentAnalytics.total.accepted + consentAnalytics.total.rejected + consentAnalytics.total.custom;
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    // Get last 7 days data
    const last7Days = {};
    const dates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates.forEach(date => { last7Days[date] = consentAnalytics.daily[date]; });
    
    // Get last 30 days data
    const last30Days = {};
    const monthlyDates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    monthlyDates.forEach(date => { last30Days[date] = consentAnalytics.daily[date]; });
    
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
        </div>
    </div>`;
}

// Generate password prompt HTML
function generatePasswordPrompt(language = 'en') {
    const lang = translations[language] || translations.en;
    return `
    <div class="password-prompt">
        <h3>${lang.passwordPrompt}</h3>
        <input type="password" id="dashboardPasswordInput" placeholder="Password">
        <button id="dashboardPasswordSubmit">${lang.passwordSubmit}</button>
        <p id="passwordError" class="error-message"></p>
    </div>`;
}

// Check if current domain is allowed
function isDomainAllowed() {
    if (config.allowedDomains.length === 0) return true;
    const currentDomain = window.location.hostname;
    return config.allowedDomains.some(domain => {
        if (domain.startsWith('.')) {
            return currentDomain === domain.substring(1) || currentDomain.endsWith(domain);
        }
        return currentDomain === domain;
    });
}

// Check geo-targeting restrictions
function checkGeoTargeting(geoData) {
    if (config.geoConfig.blockedCountries.length > 0 && config.geoConfig.blockedCountries.includes(geoData.country)) return false;
    if (config.geoConfig.blockedRegions.length > 0 && config.geoConfig.blockedRegions.includes(geoData.region)) return false;
    if (config.geoConfig.blockedCities.length > 0 && config.geoConfig.blockedCities.includes(geoData.city)) return false;
    if (config.geoConfig.allowedCountries.length > 0 && !config.geoConfig.allowedCountries.includes(geoData.country)) return false;
    if (config.geoConfig.allowedRegions.length > 0 && !config.geoConfig.allowedRegions.includes(geoData.region)) return false;
    if (config.geoConfig.allowedCities.length > 0 && !config.geoConfig.allowedCities.includes(geoData.city)) return false;
    return true;
}

// Detect user language based on country and browser settings
function detectUserLanguage(geoData) {
    if (config.behavior.rememberLanguage) {
        const preferredLanguage = getCookie('preferred_language');
        if (preferredLanguage && translations[preferredLanguage]) return preferredLanguage;
    }
    
    if (config.languageConfig.autoDetectLanguage && geoData && geoData.country) {
        const countryLang = countryLanguageMap[geoData.country];
        if (countryLang && translations[countryLang]) return countryLang;
    }
    
    const browserLang = (navigator.language || 'en').split('-')[0];
    if (translations[browserLang]) return browserLang;
    
    return config.languageConfig.defaultLanguage || 'en';
}

// Get available languages for dropdown
function getAvailableLanguages() {
    if (config.languageConfig.availableLanguages.length > 0) {
        return config.languageConfig.availableLanguages.filter(lang => translations[lang]);
    }
    return Object.keys(translations);
}

// Change language dynamically
function changeLanguage(languageCode) {
    const lang = translations[languageCode] || translations.en;
    
    // Update banner text
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.querySelector('h2').textContent = lang.title;
        banner.querySelector('p').textContent = lang.description;
        banner.querySelector('.privacy-policy-link').textContent = lang.privacy;
        banner.querySelector('#acceptAllBtn').textContent = lang.accept;
        banner.querySelector('#adjustConsentBtn').textContent = lang.customize;
        banner.querySelector('#rejectAllBtn').textContent = lang.reject;
    }
    
    // Update modal text
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('h2').textContent = lang.title;
        
        const categories = {
            'functional': 'essential',
            'analytics': 'analytics',
            'performance': 'performance',
            'advertising': 'advertising',
            'uncategorized': 'other'
        };
        
        for (const [category, key] of Object.entries(categories)) {
            const categoryElement = document.querySelector(`input[data-category="${category}"]`);
            if (categoryElement) {
                const container = categoryElement.closest('.cookie-category');
                container.querySelector('h3').textContent = lang[key];
                container.querySelector('p').textContent = lang[`${key}Desc`];
            }
        }
        
        modal.querySelector('#rejectAllSettingsBtn').textContent = lang.reject;
        modal.querySelector('#saveSettingsBtn').textContent = lang.save;
        modal.querySelector('#acceptAllSettingsBtn').textContent = lang.accept;
    }
    
    // Update floating button title
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) {
        floatingButton.title = lang.title;
    }
    
    // Update analytics dashboard if visible
    const dashboard = document.querySelector('.analytics-dashboard');
    if (dashboard) {
        dashboard.innerHTML = generateAnalyticsDashboard(languageCode);
    }
    
    // Update password prompt if visible
    const passwordPrompt = document.querySelector('.password-prompt');
    if (passwordPrompt) {
        passwordPrompt.innerHTML = generatePasswordPrompt(languageCode);
        setupPasswordPromptEvents();
    }
    
    // Store selected language in cookie
    if (config.behavior.rememberLanguage) {
        setCookie('preferred_language', languageCode, 365);
    }
}

// Function to automatically categorize unknown cookies
function autoCategorizeCookies(uncategorizedCookies) {
    return uncategorizedCookies.map(cookie => {
        const category = determineCookieCategory(cookie.name);
        if (category) {
            cookieDatabase[cookie.name] = {
                category: category,
                duration: cookie.duration,
                description: cookie.description || 'Automatically categorized'
            };
        }
        return cookie;
    });
}

// Function to determine cookie category based on name patterns
function determineCookieCategory(cookieName) {
    const lowerName = cookieName.toLowerCase();
    
    if (/_ga|_gid|_gat|analytics|stats|measure|track|tk_ai/.test(lowerName)) return 'analytics';
    if (/_gcl|_fbp|fr|ad|ads|tracking|marketing|doubleclick|gclid/.test(lowerName)) return 'advertising';
    if (/sess|token|auth|login|user|pref|settings|cart|checkout|hash|items/.test(lowerName)) return 'functional';
    if (/perf|speed|optimize|cdn|cache/.test(lowerName)) return 'performance';
    return null;
}

// Enhanced cookie scanning function with better matching
function scanAndCategorizeCookies() {
    const cookies = document.cookie.split(';');
    const result = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (!name) return;
        
        let categorized = false;
        
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) || name === pattern) {
                const cookieInfo = cookieDatabase[pattern];
                result[cookieInfo.category].push({
                    name: name,
                    value: value || '',
                    duration: cookieInfo.duration || getCookieDuration(name),
                    description: cookieInfo.description || 'Unknown purpose'
                });
                categorized = true;
                break;
            }
        }
        
        if (!categorized && name !== 'cookie_consent') {
            result.uncategorized.push({
                name: name,
                value: value || '',
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });
    
    return result;
}

// Enhanced getCookieDuration function
function getCookieDuration(name) {
    const cookieMatch = document.cookie.match(new RegExp(`${name}=[^;]+(;|$)`));
    if (!cookieMatch) return "Session";
    
    const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
    if (expiresMatch && expiresMatch[1]) {
        const expiryDate = new Date(expiresMatch[1]);
        return expiryDate > new Date() ? `Expires ${expiryDate.toLocaleDateString()}` : "Expired";
    }
    return "Session";
}

function trackMarketingParameters() {
    const params = new URLSearchParams(window.location.search);
    const marketingData = {};
    
    if (params.has('gclid')) marketingData.gclid = params.get('gclid');
    if (params.has('fbclid')) marketingData.fbclid = params.get('fbclid');
    if (params.has('utm_source')) marketingData.utm_source = params.get('utm_source');
    if (params.has('utm_medium')) marketingData.utm_medium = params.get('utm_medium');
    if (params.has('utm_campaign')) marketingData.utm_campaign = params.get('utm_campaign');
    
    if (Object.keys(marketingData).length > 0) {
        window.dataLayer.push({
            'event': 'marketingParameters',
            ...marketingData
        });
    }
}

function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    const currentTheme = getCurrentColorScheme();
    
    // Generate dark mode toggle if enabled
    const darkModeToggle = config.uiConfig.darkMode.enabled ? `
    <div class="dark-mode-toggle">
        <label class="toggle-switch">
            <input type="checkbox" id="darkModeToggle" ${isDarkModeEnabled() ? 'checked' : ''}>
            <span class="toggle-slider"></span>
            <span class="toggle-label">${lang.darkMode}</span>
        </label>
    </div>` : '';
    
    // Generate cookie tables for each category
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
    
    // Generate language selector dropdown if enabled
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    // Generate admin dashboard button if analytics enabled
    const adminButton = config.analytics.enabled && config.analytics.showDashboard ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/>
        </svg>
    </div>` : '';
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${languageSelector}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            ${darkModeToggle}
            <div class="cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
            </div>
        </div>
    </div>

    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">&times;</span>
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

    <!-- Floating Settings Button -->
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
        </svg>
    </div>
    
    ${adminButton}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">&times;</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>
    
    <style>
    /* Main Banner Styles */
    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        ${config.uiConfig.banner.position === 'left' ? 'left: 20px;' : 'right: 20px;'}
        width: ${config.uiConfig.banner.width};
        background: ${currentTheme.bannerBg};
        border-radius: ${config.uiConfig.banner.borderRadius};
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        z-index: 9999;
        padding: ${config.uiConfig.banner.padding};
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: all ${config.uiConfig.banner.animation.duration} ${config.uiConfig.banner.animation.timing};
        border: none;
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
        color: ${currentTheme.textDark};
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        color: ${currentTheme.textLight};
        line-height: 1.5;
    }

    .privacy-policy-link {
        color: ${currentTheme.secondary};
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }

    .privacy-policy-link:hover {
        color: ${currentTheme.buttonHover.save};
    }

    .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
    }

    .cookie-btn {
        padding: ${config.uiConfig.buttons.padding};
        border-radius: ${config.uiConfig.buttons.borderRadius};
        cursor: pointer;
        font-weight: ${config.uiConfig.buttons.fontWeight};
        font-size: ${config.uiConfig.buttons.fontSize};
        transition: ${config.uiConfig.buttons.transition};
        text-align: center;
        border: none;
        flex: 1;
        letter-spacing: 0.2px;
    }

    .adjust-btn {
        background-color: #f8f9fa;
        color: ${currentTheme.textDark};
        border: 1px solid #e0e0e0;
    }

    .adjust-btn:hover {
        background-color: ${currentTheme.buttonHover.adjust};
        transform: ${config.uiConfig.buttons.hoverEffect.transform};
        box-shadow: ${config.uiConfig.buttons.hoverEffect.boxShadow};
    }

    .reject-btn {
        background-color: #fff;
        color: ${currentTheme.danger};
        border: 1px solid ${currentTheme.danger};
    }

    .reject-btn:hover {
        background-color: ${currentTheme.buttonHover.reject};
        transform: ${config.uiConfig.buttons.hoverEffect.transform};
        box-shadow: 0 2px 8px rgba(231, 76, 60, 0.15);
    }

    .accept-btn {
        background-color: ${currentTheme.primary};
        color: white;
        border: 1px solid ${currentTheme.primary};
        box-shadow: 0 2px 12px rgba(46, 204, 113, 0.3);
    }

    .accept-btn:hover {
        background-color: ${currentTheme.buttonHover.accept};
        transform: ${config.uiConfig.buttons.hoverEffect.transform};
        box-shadow: 0 4px 16px rgba(46, 204, 113, 0.4);
    }

    /* Dark Mode Toggle */
    .dark-mode-toggle {
        margin: 15px 0;
        display: flex;
        align-items: center;
    }

    .dark-mode-toggle .toggle-switch {
        margin-right: 10px;
    }

    .dark-mode-toggle .toggle-label {
        font-size: 14px;
        color: ${currentTheme.textLight};
    }

    /* Toggle Switch Styles */
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 26px;
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
        background-color: ${currentTheme.toggleInactive};
        transition: .4s;
        border-radius: 34px;
    }

    .toggle-slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    input:checked + .toggle-slider {
        background-color: ${currentTheme.toggleActive};
    }

    input:checked + .toggle-slider:before {
        transform: translateX(24px);
    }

    input:disabled + .toggle-slider {
        background-color: #95a5a6;
        cursor: not-allowed;
    }

    /* Language Selector Styles */
    .language-selector {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .language-selector select {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        background-color: #f8f9fa;
        font-size: 13px;
        color: #333;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .language-selector select:hover {
        border-color: ${currentTheme.secondary};
        background-color: #fff;
    }

    .language-selector select:focus {
        outline: none;
        border-color: ${currentTheme.secondary};
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }

    /* Settings Modal */
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
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-settings-content {
        background-color: ${currentTheme.modalBg};
        margin: 0 auto;
        width: ${config.uiConfig.modal.width};
        max-height: ${config.uiConfig.modal.maxHeight};
        border-radius: ${config.uiConfig.modal.borderRadius};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
    }

    .cookie-settings-modal.show .cookie-settings-content {
        transform: translateY(0);
    }

    .cookie-settings-header {
        padding: 20px 30px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f9fa;
    }

    .cookie-settings-header h2 {
        margin: 0;
        color: ${currentTheme.textDark};
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${currentTheme.textLight};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-modal:hover {
        color: ${currentTheme.danger};
    }

    .cookie-settings-body {
        padding: 25px 30px;
        background-color: #fefefe;
        overflow-y: auto;
        flex: 1;
    }

    .cookie-category {
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ecf0f1;
        transition: all 0.3s ease;
    }

    .cookie-category:hover {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
    }

    .cookie-category:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    /* Toggle Container */
    .toggle-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .toggle-container h3 {
        margin: 0;
        font-size: 1.1rem;
        color: ${currentTheme.textDark};
        font-weight: 600;
    }

    /* Cookie Details */
    .cookie-details-container {
        margin-top: 15px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .cookie-details-container:hover {
        box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        border-color: ${currentTheme.primary};
    }

    .cookie-details-header {
        background-color: #f5f5f5;
        padding: 12px 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .cookie-details-header:hover {
        background-color: #eeeeee;
    }

    .cookie-details-content {
        padding: 18px;
        background-color: #fafafa;
        border-top: 1px solid #e0e0e0;
        display: none;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .cookie-details-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .cookie-details-table th {
        text-align: left;
        padding: 10px 12px;
        background-color: #f0f0f0;
        font-weight: 600;
        border-bottom: 2px solid #e0e0e0;
        color: ${currentTheme.textDark};
    }

    .cookie-details-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #e0e0e0;
        color: ${currentTheme.textLight};
    }

    .cookie-details-table tr:last-child td {
        border-bottom: none;
    }

    .cookie-details-table tr:hover {
        background-color: #f5f5f5;
    }

    .cookie-details-table code {
        background-color: #f0f0f0;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: monospace;
        color: ${currentTheme.textDark};
    }

    .no-cookies-message {
        padding: 15px;
        text-align: center;
        color: #666;
        font-style: italic;
    }

    /* Floating Settings Button */
    .cookie-settings-button {
        position: fixed;
        bottom: 30px;
        ${config.uiConfig.floatingButton.position === 'left' ? 'left: 30px;' : 'right: 30px;'}
        width: ${config.uiConfig.floatingButton.size};
        height: ${config.uiConfig.floatingButton.size};
        background-color: ${currentTheme.primary};
        border-radius: ${config.uiConfig.floatingButton.borderRadius};
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid white;
    }

    .cookie-settings-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-settings-button:hover {
        background-color: ${currentTheme.buttonHover.accept};
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cookie-settings-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .cookie-settings-button:hover svg {
        transform: rotate(15deg);
    }

    /* Admin Button */
    .cookie-admin-button {
        position: fixed;
        ${config.uiConfig.floatingButton.adminButtonPosition === 'left' ? 
          'left: 30px; bottom: 100px;' : 
          'right: 30px; bottom: 100px;'}
        width: ${config.uiConfig.floatingButton.size};
        height: ${config.uiConfig.floatingButton.size};
        background-color: ${currentTheme.secondary};
        border-radius: ${config.uiConfig.floatingButton.borderRadius};
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9997;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid white;
    }

    .cookie-admin-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-admin-button:hover {
        background-color: ${currentTheme.buttonHover.save};
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cookie-admin-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .cookie-admin-button:hover svg {
        transform: rotate(15deg);
    }

    /* Analytics Dashboard */
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
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .cookie-analytics-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-analytics-content {
        background-color: ${currentTheme.dashboardBg};
        margin: 0 auto;
        width: ${config.uiConfig.dashboard.width};
        max-height: ${config.uiConfig.dashboard.maxHeight};
        border-radius: ${config.uiConfig.dashboard.borderRadius};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
    }

    .cookie-analytics-modal.show .cookie-analytics-content {
        transform: translateY(0);
    }

    .cookie-analytics-header {
        padding: 20px 30px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f9fa;
    }

    .cookie-analytics-header h2 {
        margin: 0;
        color: ${currentTheme.textDark};
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-analytics-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${currentTheme.textLight};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-analytics-modal:hover {
        color: ${currentTheme.danger};
    }

    .cookie-analytics-body {
        padding: 25px 30px;
        background-color: #fefefe;
        overflow-y: auto;
        flex: 1;
    }

    /* Password Prompt */
    .password-prompt {
        text-align: center;
        padding: 30px;
    }

    .password-prompt h3 {
        color: ${currentTheme.textDark};
        margin-bottom: 20px;
    }

    .password-prompt input {
        padding: 12px 15px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        width: 100%;
        max-width: 300px;
        margin-bottom: 15px;
        font-size: 14px;
    }

    .password-prompt button {
        padding: 12px 25px;
        background-color: ${currentTheme.primary};
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .password-prompt button:hover {
        background-color: ${currentTheme.buttonHover.accept};
    }

    .error-message {
        color: ${currentTheme.danger};
        margin-top: 10px;
        font-size: 14px;
    }

    /* Stats Dashboard */
    .analytics-dashboard {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .analytics-dashboard h3 {
        color: ${currentTheme.textDark};
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.3rem;
    }

    .stats-summary {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        margin-bottom: 30px;
    }

    .stat-card {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .stat-card.accepted {
        border-top: 4px solid ${currentTheme.primary};
    }

    .stat-card.rejected {
        border-top: 4px solid ${currentTheme.danger};
    }

    .stat-card.custom {
        border-top: 4px solid ${currentTheme.secondary};
    }

    .stat-card.total {
        border-top: 4px solid #9b59b6;
    }

    .stat-card h4 {
        margin: 0 0 10px 0;
        font-size: 1rem;
        color: ${currentTheme.textLight};
    }

    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: ${currentTheme.textDark};
        margin-bottom: 5px;
    }

    .stat-percentage {
        font-size: 1rem;
        color: ${currentTheme.textLight};
    }

    .time-based-stats {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .time-stat {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
    }

    .time-stat h4 {
        margin: 0 0 15px 0;
        font-size: 1.1rem;
        color: ${currentTheme.textDark};
    }

    .stat-bars {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .stat-bar-container {
        margin-bottom: 15px;
    }

    .stat-bar-label {
        font-size: 0.85rem;
        color: ${currentTheme.textLight};
        margin-bottom: 5px;
    }

    .stat-bar {
        height: 20px;
        background-color: #ecf0f1;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
    }

    .stat-bar-segment {
        height: 100%;
    }

    .stat-bar-segment.accepted {
        background-color: ${currentTheme.primary};
    }

    .stat-bar-segment.rejected {
        background-color: ${currentTheme.danger};
    }

    .stat-bar-segment.custom {
        background-color: ${currentTheme.secondary};
    }

    .stat-bar-legend {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: ${currentTheme.textLight};
        margin-top: 5px;
    }

    /* Footer Buttons */
    .cookie-settings-footer {
        padding: 20px 30px;
        background-color: #f8f9fa;
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        border-top: 1px solid #ecf0f1;
    }

    .save-btn {
        background-color: ${currentTheme.secondary};
        color: white;
        background-image: linear-gradient(to right, ${currentTheme.secondary}, #2980b9);
    }

    .save-btn:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    }

    /* Responsive Styles */
    @media (max-width: 900px) {
        .cookie-settings-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .cookie-analytics-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .stats-summary {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .cookie-consent-banner {
            width: 90%;
            ${config.uiConfig.banner.position === 'left' ? 'left: 5%;' : 'right: 5%;'}
            bottom: 10px;
            padding: 20px;
        }
        
        .cookie-consent-buttons {
            flex-direction: column;
        }
        
        .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .cookie-settings-header {
            padding: 15px 20px;
        }
        
        .cookie-settings-body {
            padding: 15px 20px;
        }
        
        .cookie-settings-footer {
            flex-direction: column;
            padding: 15px 20px;
        }
        
        .cookie-settings-footer .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-settings-footer .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .stats-summary {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 480px) {
        .cookie-consent-banner {
            padding: 15px;
            width: calc(100% - 30px);
            ${config.uiConfig.banner.position === 'left' ? 'left: 15px;' : 'right: 15px;'}
        }
        
        .cookie-consent-content h2 {
            font-size: 1.1rem;
        }
        
        .cookie-consent-content p {
            font-size: 0.85rem;
            margin-bottom: 15px;
        }
        
        .privacy-policy-link {
            margin-bottom: 15px;
        }
        
        .cookie-btn {
            padding: 10px;
            font-size: 0.85rem;
        }
        
        .cookie-settings-button {
            width: 50px;
            height: 50px;
            bottom: 15px;
            ${config.uiConfig.floatingButton.position === 'left' ? 'left: 15px;' : 'right: 15px;'}
        }
        
        .cookie-admin-button {
            width: 50px;
            height: 50px;
            ${config.uiConfig.floatingButton.position === 'left' ? 
              'left: 15px; bottom: 80px;' : 
              'right: 15px; bottom: 80px;'}
        }
        
        .cookie-settings-button svg {
            width: 22px;
            height: 22px;
        }
        
        .cookie-admin-button svg {
            width: 22px;
            height: 22px;
        }
        
        .cookie-settings-header h2 {
            font-size: 1.2rem;
        }
        
        .toggle-container h3 {
            font-size: 1rem;
        }
        
        .cookie-details-table {
            font-size: 0.8rem;
        }
        
        .cookie-details-table th, 
        .cookie-details-table td {
            padding: 8px 10px;
        }
    }
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}


function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    if (!consentGiven && config.behavior.autoShow) {
        showCookieBanner();
    } else if (consentGiven) {
        const consentData = JSON.parse(consentGiven);
        updateConsentMode(consentData);
        loadCookiesAccordingToConsent(consentData);
        showFloatingButton();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Setup dark mode toggle if enabled
    if (config.uiConfig.darkMode.enabled) {
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('change', function() {
                toggleDarkMode(this.checked);
            });
        }
    }
    
    // Setup cookie details toggles
    document.querySelectorAll('.cookie-details-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.toggle-details');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.textContent = '−';
            } else {
                content.style.display = 'none';
                toggle.textContent = '+';
            }
        });
    });
    
    // Setup language selector change event
    const languageSelect = document.getElementById('cookieLanguageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Setup admin button if enabled
    if (config.analytics.enabled && config.analytics.showDashboard && config.behavior.showAdminButton) {
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) {
            adminButton.addEventListener('click', showAnalyticsDashboard);
            setTimeout(() => {
                adminButton.style.display = 'flex';
                adminButton.classList.add('show');
            }, 100);
        }
    }
    
    // Setup password prompt events if needed
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        setupPasswordPromptEvents();
    }
}

function setupPasswordPromptEvents() {
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', function() {
            const passwordInput = document.getElementById('dashboardPasswordInput');
            const errorMessage = document.getElementById('passwordError');
            
            if (passwordInput.value === config.analytics.dashboardPassword) {
                isDashboardAuthenticated = true;
                setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                
                // Update the dashboard content
                const lang = document.getElementById('cookieLanguageSelect') ? 
                    document.getElementById('cookieLanguageSelect').value : 'en';
                document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
            } else {
                const lang = document.getElementById('cookieLanguageSelect') ? 
                    document.getElementById('cookieLanguageSelect').value : 'en';
                errorMessage.textContent = translations[lang].passwordIncorrect;
            }
        });
    }
}

function setupEventListeners() {
    document.getElementById('acceptAllBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });
    
    document.getElementById('rejectAllBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });
    
    document.getElementById('adjustConsentBtn').addEventListener('click', function() {
        showCookieSettings();
        hideCookieBanner();
    });
    
    document.getElementById('acceptAllSettingsBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.getElementById('rejectAllSettingsBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        saveCustomSettings();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.querySelector('.close-modal').addEventListener('click', function() {
        hideCookieSettings();
        if (!getCookie('cookie_consent')) {
            showCookieBanner();
        }
    });
    
    document.querySelector('.close-analytics-modal').addEventListener('click', function() {
        hideAnalyticsDashboard();
    });
    
    document.getElementById('cookieFloatingButton').addEventListener('click', function() {
        if (!document.getElementById('cookieConsentBanner').classList.contains('show')) {
            showCookieBanner();
        } else {
            hideCookieBanner();
        }
    });
}

function updateCookieTables(detectedCookies) {
    const categories = ['functional', 'analytics', 'performance', 'advertising', 'uncategorized'];
    
    categories.forEach(category => {
        const container = document.querySelector(`input[data-category="${category}"]`)?.closest('.cookie-category');
        if (container) {
            const content = container.querySelector('.cookie-details-content');
            if (content) {
                content.innerHTML = detectedCookies[category].length > 0 ? 
                    generateCookieTable(detectedCookies[category]) : 
                    '<p class="no-cookies-message">No cookies in this category detected.</p>';
            }
        }
    });
}

function generateCookieTable(cookies) {
    return `
    <table class="cookie-details-table">
        <thead>
            <tr>
                <th>Cookie Name</th>
                <th>Value</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${cookies.map(cookie => `
            <tr>
                <td><code>${cookie.name}</code></td>
                <td><code>${cookie.value.substring(0, 20)}${cookie.value.length > 20 ? '...' : ''}</code></td>
                <td>${cookie.duration}</td>
                <td>${cookie.description}</td>
            </tr>`).join('')}
        </tbody>
    </table>`;
}

function showFloatingButton() {
    if (!config.behavior.showFloatingButton) return;

    const button = document.getElementById('cookieFloatingButton');
    button.style.display = 'flex';
    setTimeout(() => {
        button.classList.add('show');
    }, 100);
}

function hideFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    button.classList.remove('show');
    setTimeout(() => {
        button.style.display = 'none';
    }, 300);
}

function showCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.style.display = 'block';
    setTimeout(() => {
        banner.classList.add('show');
    }, config.behavior.bannerDelay * 1000);
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.classList.remove('show');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 400);
}

function showCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    hideCookieBanner();
}

function hideCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function showAnalyticsDashboard() {
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        const modal = document.getElementById('cookieAnalyticsModal');
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    } else {
        const modal = document.getElementById('cookieAnalyticsModal');
        const lang = document.getElementById('cookieLanguageSelect') ? 
            document.getElementById('cookieLanguageSelect').value : 'en';
        document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function updateConsentMode(consentData) {
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': consentData.categories.functional ? 'granted' : 'denied',
        'security_storage': 'granted'
    };

    let gcsSignal = 'G100';
    
    if (consentData.status === 'accepted') {
        gcsSignal = 'G111';
    } else if (consentData.status === 'custom') {
        gcsSignal = 'G101';
    }

    gtag('consent', 'update', consentStates);
    
    window.dataLayer.push({
        'event': 'cookie_consent_update',
        'consent_mode': consentStates,
        'gcs': gcsSignal,
        'consent_status': consentData.status,
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'consent_version': '4.0',
        'consent_scope': 'global',
        'debug_info': {
            'cookies_found': scanAndCategorizeCookies(),
            'user_agent': navigator.userAgent,
            'language': navigator.language
        }
    });

    console.log('Consent Mode Updated:', {
        states: consentStates,
        gcsSignal: gcsSignal,
        categories: consentData.categories
    });
}

function acceptAllCookies() {
    const consentData = {
        status: 'accepted',
        gcs: 'G111',
        categories: {
            functional: true,
            analytics: true,
            performance: true,
            advertising: true,
            uncategorized: true
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    if (config.analytics.enabled) {
        updateConsentStats('accepted');
    }
}

function rejectAllCookies() {
    const consentData = {
        status: 'rejected',
        gcs: 'G100',
        categories: {
            functional: true,
            analytics: false,
            performance: false,
            advertising: false,
            uncategorized: false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    clearNonEssentialCookies();
    
    if (config.analytics.enabled) {
        updateConsentStats('rejected');
    }
}

function clearNonEssentialCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [nameValue] = cookie.trim().split('=');
        const name = nameValue.trim();
        let isEssential = false;
        
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) && cookieDatabase[pattern].category === 'functional') {
                isEssential = true;
                break;
            }
        }
        
        if (!isEssential && name && name !== 'cookie_consent') {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        }
    });
}

function saveCustomSettings() {
    const consentData = {
        status: 'custom',
        gcs: 'G101',
        categories: {
            functional: true,
            analytics: document.querySelector('input[data-category="analytics"]').checked,
            performance: document.querySelector('input[data-category="performance"]').checked,
            advertising: document.querySelector('input[data-category="advertising"]').checked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]') ? 
                document.querySelector('input[data-category="uncategorized"]').checked : false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    if (!consentData.categories.analytics) clearCategoryCookies('analytics');
    if (!consentData.categories.performance) clearCategoryCookies('performance');
    if (!consentData.categories.advertising) clearCategoryCookies('advertising');
    if (!consentData.categories.uncategorized) clearCategoryCookies('uncategorized');
    
    if (config.analytics.enabled) {
        updateConsentStats('custom');
    }
}

function clearCategoryCookies(category) {
    const cookies = scanAndCategorizeCookies()[category];
    cookies.forEach(cookie => {
        document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    });
}

function loadCookiesAccordingToConsent(consentData) {
    if (consentData.categories.analytics) {
        loadAnalyticsCookies();
    }
    
    if (consentData.categories.advertising) {
        loadAdvertisingCookies();
    }
    
    if (consentData.categories.performance) {
        loadPerformanceCookies();
    }
}

function loadAnalyticsCookies() {
    console.log('Loading analytics cookies');
    if (typeof ga === 'undefined' && typeof gtag === 'function') {
        gtag('js', new Date());
        gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
    }
}

function loadAdvertisingCookies() {
    console.log('Loading advertising cookies');
    if (typeof fbq === 'undefined') {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
    }
}

function loadPerformanceCookies() {
    console.log('Loading performance cookies');
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Main initialization with dark mode support
document.addEventListener('DOMContentLoaded', function() {
    // First check if we should run on this domain
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    // Load analytics data
    if (config.analytics.enabled) {
        loadAnalyticsData();
    }
    
    // Get geo data from dataLayer or detect
    let geoData = {};
    if (window.dataLayer && window.dataLayer.length > 0) {
        const geoItem = window.dataLayer.find(item => item.country || item.region || item.city);
        if (geoItem) {
            geoData = {
                country: geoItem.country || '',
                region: geoItem.region || '',
                city: geoItem.city || '',
                language: geoItem.language || ''
            };
        }
    }
    
    // Check geo-targeting restrictions
    if (!checkGeoTargeting(geoData)) {
        console.log('Cookie consent banner disabled for this location');
        return;
    }
    
    // Detect language
    const detectedLanguage = detectUserLanguage(geoData);
    
    const detectedCookies = scanAndCategorizeCookies();
    if (detectedCookies.uncategorized.length > 0) {
        console.log('Uncategorized cookies found:', detectedCookies.uncategorized);
        autoCategorizeCookies(detectedCookies.uncategorized).forEach(cookie => {
            const category = determineCookieCategory(cookie.name);
            if (category && category !== 'uncategorized') {
                detectedCookies[category].push(cookie);
                detectedCookies.uncategorized = detectedCookies.uncategorized.filter(c => c.name !== cookie.name);
            }
        });
    }
    
    injectConsentHTML(detectedCookies, detectedLanguage);
    initializeCookieConsent(detectedCookies, detectedLanguage);
    
    if (getCookie('cookie_consent')) {
        showFloatingButton();
    }
    
    // Track marketing parameters
    trackMarketingParameters();
    
    // Enhanced periodic cookie scan with validation
    setInterval(() => {
        const newCookies = scanAndCategorizeCookies();
        if (JSON.stringify(newCookies) !== JSON.stringify(detectedCookies)) {
            updateCookieTables(newCookies);
        }
    }, 30000);
    
    // Handle scroll-based acceptance
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollAcceptance);
    }
    
    // Apply dark mode if enabled by default
    if (config.uiConfig.darkMode.enabled && isDarkModeEnabled()) {
        toggleDarkMode(true);
    }
});




function handleScrollAcceptance() {
    if (getCookie('cookie_consent')) {
        window.removeEventListener('scroll', handleScrollAcceptance);
        return;
    }
    
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > 50) {
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
        window.removeEventListener('scroll', handleScrollAcceptance);
    }
}

// Main initialization with dark mode support
document.addEventListener('DOMContentLoaded', function() {
    // First check if we should run on this domain
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    // Load analytics data
    if (config.analytics.enabled) {
        loadAnalyticsData();
    }
    
    // Get geo data from dataLayer or detect
    let geoData = {};
    if (window.dataLayer && window.dataLayer.length > 0) {
        const geoItem = window.dataLayer.find(item => item.country || item.region || item.city);
        if (geoItem) {
            geoData = {
                country: geoItem.country || '',
                region: geoItem.region || '',
                city: geoItem.city || '',
                language: geoItem.language || ''
            };
        }
    }
    
    // Check geo-targeting restrictions
    if (!checkGeoTargeting(geoData)) {
        console.log('Cookie consent banner disabled for this location');
        return;
    }
    
    // Detect language
    const detectedLanguage = detectUserLanguage(geoData);
    
    const detectedCookies = scanAndCategorizeCookies();
    if (detectedCookies.uncategorized.length > 0) {
        console.log('Uncategorized cookies found:', detectedCookies.uncategorized);
        autoCategorizeCookies(detectedCookies.uncategorized).forEach(cookie => {
            const category = determineCookieCategory(cookie.name);
            if (category && category !== 'uncategorized') {
                detectedCookies[category].push(cookie);
                detectedCookies.uncategorized = detectedCookies.uncategorized.filter(c => c.name !== cookie.name);
            }
        });
    }
    
    injectConsentHTML(detectedCookies, detectedLanguage);
    initializeCookieConsent(detectedCookies, detectedLanguage);
    
    if (getCookie('cookie_consent')) {
        showFloatingButton();
    }
    
    // Track marketing parameters
    trackMarketingParameters();
    
    // Enhanced periodic cookie scan with validation
    setInterval(() => {
        const newCookies = scanAndCategorizeCookies();
        if (JSON.stringify(newCookies) !== JSON.stringify(detectedCookies)) {
            updateCookieTables(newCookies);
        }
    }, 30000);
    
    // Handle scroll-based acceptance
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollAcceptance);
    }
    
    // Apply dark mode if enabled by default
    if (config.uiConfig.darkMode.enabled && isDarkModeEnabled()) {
        toggleDarkMode(true);
    }
});

// Apply dark mode if enabled by default
// if (config.uiConfig.darkMode.enabled && isDarkModeEnabled()) {
  //  toggleDarkMode(true);
// }

// Add floating dark mode toggle if configured
if (config.uiConfig.darkMode.enabled && config.uiConfig.darkMode.togglePosition === 'floating') {
    const floatingDarkModeToggle = document.createElement('div');
    floatingDarkModeToggle.className = 'floating-dark-mode-toggle';
    floatingDarkModeToggle.innerHTML = `
        <label class="toggle-switch">
            <input type="checkbox" id="floatingDarkModeToggle" ${isDarkModeEnabled() ? 'checked' : ''}>
            <span class="toggle-slider"></span>
        </label>
    `;
    document.body.appendChild(floatingDarkModeToggle);
    
    // Position the floating toggle
    const floatingToggle = document.getElementById('floatingDarkModeToggle');
    if (floatingToggle) {
        floatingToggle.addEventListener('change', function() {
            toggleDarkMode(this.checked);
        });
    }
}

// Initialize cookie banner with proper dark mode state
const currentScheme = isDarkModeEnabled() ? config.colors.dark : config.colors.light;
updateUIForColorScheme(currentScheme);

// Handle continue browsing acceptance
if (config.behavior.acceptOnContinue) {
    document.addEventListener('click', function() {
        if (!getCookie('cookie_consent')) {
            acceptAllCookies();
            hideCookieBanner();
            showFloatingButton();
        }
    }, { once: true });
}

// Add event listener for dark mode toggle in banner if exists
const bannerDarkModeToggle = document.getElementById('darkModeToggle');
if (bannerDarkModeToggle) {
    bannerDarkModeToggle.addEventListener('change', function() {
        toggleDarkMode(this.checked);
    });
}

// Enhanced cookie scanning for newly added cookies
function scanForNewCookies() {
    const currentCookies = scanAndCategorizeCookies();
    const knownCookies = Object.keys(cookieDatabase);
    
    currentCookies.uncategorized.forEach(cookie => {
        if (!knownCookies.includes(cookie.name)) {
            const category = determineCookieCategory(cookie.name);
            if (category) {
                cookieDatabase[cookie.name] = {
                    category: category,
                    duration: cookie.duration,
                    description: 'Automatically categorized'
                };
                updateCookieTables(scanAndCategorizeCookies());
            }
        }
    });
}

// Periodically check for new cookies
setInterval(scanForNewCookies, 60000);

// Final initialization checks
if (typeof gtag !== 'undefined') {
    gtag('event', 'cookie_consent_initialized', {
        'event_category': 'cookie_consent',
        'event_label': 'v4.2',
        'dark_mode': isDarkModeEnabled() ? 'enabled' : 'disabled'
    });
}










// Export functions for external access if needed
window.cookieConsent = {
    showBanner: showCookieBanner,
    hideBanner: hideCookieBanner,
    showSettings: showCookieSettings,
    showAnalytics: showAnalyticsDashboard,
    toggleDarkMode: toggleDarkMode,
    isDarkMode: isDarkModeEnabled,
    getConfig: () => config,
    updateConfig: (newConfig) => {
        config = {...config, ...newConfig};
        // Reinitialize with new config
        initializeCookieConsent(scanAndCategorizeCookies(), 
            document.getElementById('cookieLanguageSelect')?.value || 'en');
        
        // Update UI if dark mode changed
        if (newConfig.uiConfig?.darkMode?.enabled !== undefined || 
            newConfig.colors?.dark !== undefined || 
            newConfig.colors?.light !== undefined) {
            const currentScheme = isDarkModeEnabled() ? config.colors.dark : config.colors.light;
            updateUIForColorScheme(currentScheme);
        }
    },
    getCurrentConsent: () => {
        const consent = getCookie('cookie_consent');
        return consent ? JSON.parse(consent) : null;
    },
    resetConsent: () => {
        // Clear all consent cookies
        document.cookie = 'cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = 'dashboard_auth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = 'preferred_language=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = 'dark_mode_enabled=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        
        // Clear analytics data
        if (config.analytics.enabled) {
            localStorage.removeItem('consentAnalytics');
            consentAnalytics = {
                total: { accepted: 0, rejected: 0, custom: 0 },
                daily: {},
                weekly: {},
                monthly: {}
            };
        }
        
        // Reset consent mode
        gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'personalization_storage': 'denied',
            'functionality_storage': 'denied',
            'security_storage': 'granted'
        });
        
        // Show banner again if autoShow is enabled
        if (config.behavior.autoShow) {
            showCookieBanner();
        }
        
        // Hide floating buttons
        hideFloatingButton();
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) {
            adminButton.style.display = 'none';
        }
    },
    scanCookies: scanAndCategorizeCookies,
    getCookieDetails: (name) => {
        return cookieDatabase[name] || null;
    },
    addCustomCookie: (name, details) => {
        if (name && details && details.category) {
            cookieDatabase[name] = details;
            updateCookieTables(scanAndCategorizeCookies());
            return true;
        }
        return false;
    }
};

// Initialize Google Consent Mode with current settings
const currentConsent = window.cookieConsent.getCurrentConsent();
if (currentConsent) {
    updateConsentMode(currentConsent);
}

// Dispatch event when fully loaded
document.dispatchEvent(new CustomEvent('cookieConsentLoaded', {
    detail: {
        version: '4.2',
        config: config,
        darkMode: isDarkModeEnabled()
    }
}));





// Make config immutable
Object.freeze(config);

// Add mutation observer to watch for dynamic content changes
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (!mutation.addedNodes) return;
        
        // Check if new nodes contain elements that might set cookies
        Array.from(mutation.addedNodes).forEach(function(node) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const scripts = node.querySelectorAll('script[src], iframe[src]');
                scripts.forEach(function(el) {
                    if (el.src && !getCookie('cookie_consent')) {
                        console.log('Potential cookie-setting element detected:', el);
                        // You might want to show the banner again here
                        // or take other appropriate action
                    }
                });
            }
        });
    });
});

// Start observing the document with the configured parameters
observer.observe(document, {
    childList: true,
    subtree: true
});

// Add beforeunload handler to ensure consent is saved
window.addEventListener('beforeunload', function() {
    const consent = getCookie('cookie_consent');
    if (!consent && config.behavior.autoShow) {
        // User is leaving without making a choice - apply conservative defaults
        const defaultConsent = {
            status: 'rejected',
            gcs: 'G100',
            categories: {
                functional: true,
                analytics: false,
                performance: false,
                advertising: false,
                uncategorized: false
            },
            timestamp: new Date().getTime()
        };
        setCookie('cookie_consent', JSON.stringify(defaultConsent), 365);
        updateConsentMode(defaultConsent);
    }
});

// Add support for prefers-color-scheme media query
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (config.uiConfig.darkMode.enabled && config.uiConfig.darkMode.syncWithSystem) {
        toggleDarkMode(e.matches);
    }
});

// Add debug mode if URL parameter is present
if (window.location.search.includes('debugCookieConsent=true')) {
    window.cookieConsentDebug = {
        cookies: scanAndCategorizeCookies(),
        analytics: consentAnalytics,
        config: JSON.parse(JSON.stringify(config)) // Deep clone for inspection
    };
    console.log('Cookie Consent Debug Mode Activated', window.cookieConsentDebug);
}

// Final console log indicating successful initialization
console.log('Ultimate GDPR Cookie Consent v4.2 initialized successfully', {
    darkMode: isDarkModeEnabled(),
    language: document.getElementById('cookieLanguageSelect')?.value || 'en',
    consent: window.cookieConsent.getCurrentConsent()
});

