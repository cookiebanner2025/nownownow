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
            syncWithSystem: true // Sync with OS color scheme
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
    
    // Check system preference if syncWithSystem is enabled
    if (config.uiConfig.darkMode.syncWithSystem && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
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
    
    // Update all toggle switches
    document.querySelectorAll('.toggle-switch input').forEach(toggle => {
        const slider = toggle.nextElementSibling;
        if (toggle.checked) {
            slider.style.backgroundColor = colorScheme.toggleActive;
        } else {
            slider.style.backgroundColor = colorScheme.toggleInactive;
        }
    });
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
    <div class="dark-mode-toggle-container">
        <div class="dark-mode-toggle">
            <label class="toggle-switch">
                <input type="checkbox" id="darkModeToggle" ${isDarkModeEnabled() ? 'checked' : ''}>
                <span class="toggle-slider"></span>
                <span class="toggle-label">${lang.darkMode}</span>
            </label>
        </div>
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
                <p>${lang[`${categoryKey}Desc`]}</p>
                ${!isEssential ? `
                <label class="toggle-switch">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : 'checked'}>
                    <span class="toggle-slider"></span>
                </label>` : ''}
            </div>
            ${cookies.length > 0 ? `
            <div class="cookie-table-container">
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
                            <td><code>${cookie.name}</code></td>
                            <td>${cookie.duration}</td>
                            <td>${cookie.description}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>` : `
            <p class="no-cookies">No ${category} cookies detected</p>`}
        </div>`;
    };

    // Generate language selector if enabled
    const languageSelector = config.languageConfig.showLanguageSelector && availableLanguages.length > 1 ? `
    <div class="language-selector">
        <label for="consentLanguage">Language:</label>
        <select id="consentLanguage">
            ${availableLanguages.map(langCode => `
            <option value="${langCode}" ${language === langCode ? 'selected' : ''}>
                ${translations[langCode]?.language || langCode}
            </option>`).join('')}
        </select>
    </div>` : '';

    // Main banner HTML
    const bannerHTML = `
    <div id="cookieConsentBanner" class="cookie-banner" style="display: none;">
        <div class="cookie-banner-content">
            <h2>${lang.title}</h2>
            <p>${lang.description} <a href="/privacy-policy" class="privacy-policy-link">${lang.privacy}</a></p>
            <div class="cookie-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
            </div>
        </div>
    </div>`;

    // Settings modal HTML
    const modalHTML = `
    <div id="cookieSettingsModal" class="cookie-modal" style="display: none;">
        <div class="cookie-modal-overlay"></div>
        <div class="cookie-settings-content">
            <button class="close-modal">&times;</button>
            <h2>${lang.title}</h2>
            ${darkModeToggle}
            ${languageSelector}
            
            <div class="cookie-categories">
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${generateCategorySection('uncategorized')}
            </div>
            
            <div class="cookie-settings-buttons">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>`;

    // Floating button HTML
    const floatingButtonHTML = config.behavior.showFloatingButton ? `
    <div id="cookieFloatingButton" class="cookie-floating-button" style="display: none;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
            <path d="M8.5 8.5v.01"></path>
            <path d="M16 15.5v.01"></path>
            <path d="M12 12v.01"></path>
            <path d="M11 17v.01"></path>
            <path d="M7 14v.01"></path>
        </svg>
    </div>` : '';

    // Admin button HTML
    const adminButtonHTML = config.behavior.showAdminButton ? `
    <div id="cookieAdminButton" class="cookie-admin-button" style="display: none;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3h18v18H3z"></path>
            <path d="M18 8v8"></path>
            <path d="M13 8v8"></path>
            <path d="M3 15h15"></path>
            <path d="M3 8h15"></path>
        </svg>
    </div>` : '';

    // Analytics modal HTML
    const analyticsModalHTML = config.analytics.showDashboard ? `
    <div id="cookieAnalyticsModal" class="cookie-modal" style="display: none;">
        <div class="cookie-modal-overlay"></div>
        <div class="cookie-analytics-content">
            <button class="close-modal">&times;</button>
            ${isDashboardAuthenticated ? generateAnalyticsDashboard(language) : generatePasswordPrompt(language)}
        </div>
    </div>` : '';

    // Inject all HTML elements
    document.body.insertAdjacentHTML('beforeend', bannerHTML);
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.insertAdjacentHTML('beforeend', floatingButtonHTML);
    document.body.insertAdjacentHTML('beforeend', adminButtonHTML);
    document.body.insertAdjacentHTML('beforeend', analyticsModalHTML);

    // Apply initial styling
    updateUIForColorScheme(currentTheme);
}

// Initialize event listeners
function setupEventListeners() {
    // Banner buttons
    document.getElementById('acceptAllBtn')?.addEventListener('click', acceptAllCookies);
    document.getElementById('adjustConsentBtn')?.addEventListener('click', showSettingsModal);
    document.getElementById('rejectAllBtn')?.addEventListener('click', rejectAllCookies);

    // Modal buttons
    document.getElementById('rejectAllSettingsBtn')?.addEventListener('click', rejectAllCookies);
    document.getElementById('saveSettingsBtn')?.addEventListener('click', saveCustomPreferences);
    document.getElementById('acceptAllSettingsBtn')?.addEventListener('click', acceptAllCookies);
    document.querySelector('.cookie-modal .close-modal')?.addEventListener('click', hideSettingsModal);

    // Floating button
    document.getElementById('cookieFloatingButton')?.addEventListener('click', showSettingsModal);

    // Admin button
    document.getElementById('cookieAdminButton')?.addEventListener('click', showAnalyticsDashboard);

    // Dark mode toggle
    document.getElementById('darkModeToggle')?.addEventListener('change', function() {
        toggleDarkMode(this.checked);
    });

    // Language selector
    document.getElementById('consentLanguage')?.addEventListener('change', function() {
        changeLanguage(this.value);
    });

    // Analytics password prompt
    setupPasswordPromptEvents();

    // Modal overlay click
    document.querySelector('.cookie-modal-overlay')?.addEventListener('click', function() {
        hideSettingsModal();
        hideAnalyticsDashboard();
    });

    // Scroll behavior
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollForConsent, { passive: true });
    }
}

function setupPasswordPromptEvents() {
    document.getElementById('dashboardPasswordSubmit')?.addEventListener('click', function() {
        const passwordInput = document.getElementById('dashboardPasswordInput');
        const errorElement = document.getElementById('passwordError');
        
        if (passwordInput.value === config.analytics.dashboardPassword) {
            isDashboardAuthenticated = true;
            setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
            document.querySelector('.cookie-analytics-content').innerHTML = generateAnalyticsDashboard();
        } else {
            errorElement.textContent = translations[document.getElementById('consentLanguage')?.value || 'en'].passwordIncorrect;
        }
    });
}

function handleScrollForConsent() {
    if (!getCookie('cookie_consent')) {
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 25) { // 25% scroll threshold
            acceptAllCookies();
            window.removeEventListener('scroll', handleScrollForConsent);
        }
    }
}

// Cookie consent actions
function acceptAllCookies() {
    setCookie('cookie_consent', 'all', 365);
    setConsentMode(true, true, true, true);
    updateConsentStats('accepted');
    hideBanner();
    hideSettingsModal();
    enableAllCookies();
}

function rejectAllCookies() {
    setCookie('cookie_consent', 'none', 365);
    setConsentMode(false, false, false, false);
    updateConsentStats('rejected');
    hideBanner();
    hideSettingsModal();
    disableNonEssentialCookies();
}

function saveCustomPreferences() {
    const analyticsChecked = document.querySelector('input[data-category="analytics"]').checked;
    const performanceChecked = document.querySelector('input[data-category="performance"]').checked;
    const advertisingChecked = document.querySelector('input[data-category="advertising"]').checked;
    
    setCookie('cookie_consent', `custom:${analyticsChecked ? '1' : '0'}:${performanceChecked ? '1' : '0'}:${advertisingChecked ? '1' : '0'}`, 365);
    setConsentMode(true, analyticsChecked, performanceChecked, advertisingChecked);
    updateConsentStats('custom');
    hideSettingsModal();
    
    if (!analyticsChecked) disableCookiesByCategory('analytics');
    if (!performanceChecked) disableCookiesByCategory('performance');
    if (!advertisingChecked) disableCookiesByCategory('advertising');
}

function setConsentMode(essential, analytics, performance, advertising) {
    gtag('consent', 'update', {
        'ad_storage': advertising ? 'granted' : 'denied',
        'analytics_storage': analytics ? 'granted' : 'denied',
        'ad_user_data': advertising ? 'granted' : 'denied',
        'ad_personalization': advertising ? 'granted' : 'denied',
        'personalization_storage': performance ? 'granted' : 'denied',
        'functionality_storage': essential ? 'granted' : 'denied',
        'security_storage': 'granted'
    });
}

function enableAllCookies() {
    // No action needed as cookies will be set naturally with consent
}

function disableNonEssentialCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        if (name !== 'cookie_consent' && cookieDatabase[name]?.category !== 'functional') {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        }
    });
}

function disableCookiesByCategory(category) {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        if (cookieDatabase[name]?.category === category) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        }
    });
}

// UI visibility functions
function showBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.style.display = 'block';
        setTimeout(() => {
            banner.style.opacity = '1';
            banner.style.transform = 'translateY(0)';
        }, 10);
    }
    
    if (config.behavior.showFloatingButton) {
        const floatingButton = document.getElementById('cookieFloatingButton');
        if (floatingButton) {
            floatingButton.style.display = 'block';
            setTimeout(() => {
                floatingButton.style.opacity = '1';
            }, 10);
        }
    }
    
    if (config.behavior.showAdminButton) {
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) {
            adminButton.style.display = 'block';
            setTimeout(() => {
                adminButton.style.opacity = '1';
            }, 10);
        }
    }
}

function hideBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(20px)';
        setTimeout(() => {
            banner.style.display = 'none';
        }, 300);
    }
}

function showSettingsModal() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.querySelector('.cookie-settings-content').style.opacity = '1';
            modal.querySelector('.cookie-settings-content').style.transform = 'translateY(0)';
        }, 10);
    }
}

function hideSettingsModal() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('.cookie-settings-content').style.opacity = '0';
        modal.querySelector('.cookie-settings-content').style.transform = 'translateY(20px)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function showAnalyticsDashboard() {
    if (!config.analytics.showDashboard) return;
    
    const modal = document.getElementById('cookieAnalyticsModal');
    if (modal) {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.querySelector('.cookie-analytics-content').style.opacity = '1';
            modal.querySelector('.cookie-analytics-content').style.transform = 'translateY(0)';
        }, 10);
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    if (modal) {
        modal.querySelector('.cookie-analytics-content').style.opacity = '0';
        modal.querySelector('.cookie-analytics-content').style.transform = 'translateY(20px)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Cookie helper functions
function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
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

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/';
}

// Initialize the consent manager
function initCookieConsent() {
    // Load analytics data
    loadAnalyticsData();
    
    // Check if we should show the banner
    if (!isDomainAllowed()) return;
    
    // Check geo restrictions (would need actual geo data)
    const geoData = {}; // Normally this would come from a geo lookup service
    if (!checkGeoTargeting(geoData)) return;
    
    // Detect user language
    const userLanguage = detectUserLanguage(geoData);
    
    // Scan and categorize cookies
    const detectedCookies = scanAndCategorizeCookies();
    
    // Inject HTML
    injectConsentHTML(detectedCookies, userLanguage);
    
    // Setup event listeners
    setupEventListeners();
    
    // Check if we need to show the banner
    const consentCookie = getCookie('cookie_consent');
    if (!consentCookie && config.behavior.autoShow) {
        setTimeout(() => {
            showBanner();
        }, config.behavior.bannerDelay * 1000);
    } else if (consentCookie) {
        // Apply existing consent
        if (consentCookie === 'all') {
            setConsentMode(true, true, true, true);
        } else if (consentCookie === 'none') {
            setConsentMode(false, false, false, false);
        } else if (consentCookie.startsWith('custom:')) {
            const parts = consentCookie.split(':');
            setConsentMode(true, parts[1] === '1', parts[2] === '1', parts[3] === '1');
        }
    }
    
    // Track marketing parameters from URL
    trackMarketingParameters();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
    initCookieConsent();
}

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        config,
        initCookieConsent,
        changeLanguage,
        toggleDarkMode,
        showBanner,
        hideBanner,
        getCurrentColorScheme,
        isDarkModeEnabled,
        scanAndCategorizeCookies,
        showSettingsModal,
        hideSettingsModal,
        showAnalyticsDashboard,
        hideAnalyticsDashboard,
        acceptAllCookies,
        rejectAllCookies,
        saveCustomPreferences
    };
}

// Global accessibility for CMS integration
if (typeof window !== 'undefined') {
    window.ultimateGDPR = {
        showConsentBanner: showBanner,
        hideConsentBanner: hideBanner,
        showConsentSettings: showSettingsModal,
        showConsentAnalytics: showAnalyticsDashboard,
        acceptAll: acceptAllCookies,
        rejectAll: rejectAllCookies,
        getConfig: () => config,
        updateConfig: (newConfig) => {
            Object.assign(config, newConfig);
            // Re-initialize with new config
            initCookieConsent();
        }
    };
}

// Automatic reinitialization for AJAX-loaded content
if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (!document.getElementById('cookieConsentBanner')) {
                initCookieConsent();
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Polyfill for older browsers
(function() {
    // Object.assign polyfill
    if (typeof Object.assign !== 'function') {
        Object.assign = function(target) {
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            
            const to = Object(target);
            
            for (let index = 1; index < arguments.length; index++) {
                const nextSource = arguments[index];
                
                if (nextSource != null) {
                    for (const nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        };
    }
    
    // String.prototype.startsWith polyfill
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(search, pos) {
            return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
        };
    }
    
    // Array.prototype.includes polyfill
    if (!Array.prototype.includes) {
        Array.prototype.includes = function(searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            
            const o = Object(this);
            const len = o.length >>> 0;
            
            if (len === 0) {
                return false;
            }
            
            const n = fromIndex | 0;
            let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            
            while (k < len) {
                if (o[k] === searchElement) {
                    return true;
                }
                k++;
            }
            
            return false;
        };
    }
})();

// Style injection function
function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
    .cookie-banner {
        position: fixed;
        ${config.uiConfig.banner.position === 'left' ? 'left: 20px;' : 'right: 20px;'}
        bottom: 20px;
        width: ${config.uiConfig.banner.width};
        background-color: ${config.colors.light.bannerBg};
        border-radius: ${config.uiConfig.banner.borderRadius};
        padding: ${config.uiConfig.banner.padding};
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        opacity: 0;
        transform: translateY(20px);
        transition: all ${config.uiConfig.banner.animation.duration} ${config.uiConfig.banner.animation.timing};
    }
    
    .cookie-banner h2 {
        color: ${config.colors.light.textDark};
        margin-top: 0;
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 600;
    }
    
    .cookie-banner p {
        color: ${config.colors.light.textLight};
        margin: 0 0 20px 0;
        font-size: 14px;
        line-height: 1.5;
    }
    
    .privacy-policy-link {
        color: ${config.colors.light.secondary};
        text-decoration: underline;
        cursor: pointer;
    }
    
    .cookie-buttons {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }
    
    .cookie-btn {
        border-radius: ${config.uiConfig.buttons.borderRadius};
        padding: ${config.uiConfig.buttons.padding};
        font-weight: ${config.uiConfig.buttons.fontWeight};
        font-size: ${config.uiConfig.buttons.fontSize};
        cursor: pointer;
        transition: ${config.uiConfig.buttons.transition};
        border: 1px solid transparent;
    }
    
    .accept-btn {
        background-color: ${config.colors.light.primary};
        color: white;
    }
    
    .reject-btn {
        background-color: transparent;
        color: ${config.colors.light.danger};
        border-color: ${config.colors.light.danger};
    }
    
    .adjust-btn {
        background-color: transparent;
        color: ${config.colors.light.textDark};
        border-color: ${config.colors.light.textLight};
    }
    
    .save-btn {
        background-color: ${config.colors.light.secondary};
        color: white;
    }
    
    .cookie-btn:hover {
        transform: ${config.uiConfig.buttons.hoverEffect.transform};
        box-shadow: ${config.uiConfig.buttons.hoverEffect.boxShadow};
    }
    
    .cookie-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: none;
    }
    
    .cookie-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .cookie-settings-content,
    .cookie-analytics-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${config.uiConfig.modal.width};
        max-height: ${config.uiConfig.modal.maxHeight};
        background-color: ${config.colors.light.modalBg};
        border-radius: ${config.uiConfig.modal.borderRadius};
        padding: 24px;
        overflow-y: auto;
        opacity: 0;
        transform: translate(-50%, -40%);
        transition: all ${config.uiConfig.modal.animation.duration} ${config.uiConfig.modal.animation.timing};
    }
    
    .close-modal {
        position: absolute;
        top: 12px;
        right: 12px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: ${config.colors.light.textLight};
    }
    
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
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
        background-color: ${config.colors.light.toggleInactive};
        transition: .4s;
        border-radius: 34px;
    }
    
    .toggle-slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
    
    input:checked + .toggle-slider {
        background-color: ${config.colors.light.toggleActive};
    }
    
    input:checked + .toggle-slider:before {
        transform: translateX(26px);
    }
    
    .cookie-floating-button {
        position: fixed;
        ${config.uiConfig.floatingButton.position === 'left' ? 'left: 20px;' : 'right: 20px;'}
        bottom: 20px;
        width: ${config.uiConfig.floatingButton.size};
        height: ${config.uiConfig.floatingButton.size};
        background-color: ${config.colors.light.primary};
        border-radius: ${config.uiConfig.floatingButton.borderRadius};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9998;
        opacity: 0;
        transition: opacity 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .cookie-floating-button svg {
        width: 24px;
        height: 24px;
        stroke: white;
    }
    
    .cookie-admin-button {
        position: fixed;
        ${config.uiConfig.floatingButton.adminButtonPosition === 'left' ? 'left: 90px;' : 'right: 90px;'}
        bottom: 20px;
        width: ${config.uiConfig.floatingButton.size};
        height: ${config.uiConfig.floatingButton.size};
        background-color: ${config.colors.light.secondary};
        border-radius: ${config.uiConfig.floatingButton.borderRadius};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9998;
        opacity: 0;
        transition: opacity 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .cookie-admin-button svg {
        width: 24px;
        height: 24px;
        stroke: white;
    }
    
    /* Dark mode styles */
    .dark-mode .cookie-banner,
    .dark-mode .cookie-settings-content,
    .dark-mode .cookie-analytics-content {
        background-color: ${config.colors.dark.bannerBg};
    }
    
    .dark-mode .cookie-banner h2,
    .dark-mode .cookie-settings-content h2,
    .dark-mode .cookie-settings-content h3,
    .dark-mode .cookie-analytics-content h3,
    .dark-mode .cookie-analytics-content h4 {
        color: ${config.colors.dark.textDark};
    }
    
    .dark-mode .cookie-banner p,
    .dark-mode .cookie-settings-content p,
    .dark-mode .stat-card h4,
    .dark-mode .stat-bar-label {
        color: ${config.colors.dark.textLight};
    }
    
    .dark-mode .privacy-policy-link {
        color: ${config.colors.dark.secondary};
    }
    
    .dark-mode .accept-btn {
        background-color: ${config.colors.dark.primary};
    }
    
    .dark-mode .reject-btn {
        color: ${config.colors.dark.danger};
        border-color: ${config.colors.dark.danger};
    }
    
    .dark-mode .save-btn {
        background-color: ${config.colors.dark.secondary};
    }
    
    .dark-mode .cookie-floating-button {
        background-color: ${config.colors.dark.primary};
    }
    
    .dark-mode .cookie-admin-button {
        background-color: ${config.colors.dark.secondary};
    }
    
    .dark-mode input:checked + .toggle-slider {
        background-color: ${config.colors.dark.toggleActive};
    }
    
    .dark-mode .toggle-slider {
        background-color: ${config.colors.dark.toggleInactive};
    }
    
    /* Analytics dashboard styles */
    .analytics-dashboard {
        font-family: Arial, sans-serif;
    }
    
    .analytics-dashboard h3 {
        margin-top: 0;
        color: ${config.colors.light.textDark};
    }
    
    .stats-summary {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-bottom: 24px;
    }
    
    .stat-card {
        background-color: ${config.colors.light.background};
        border-radius: 8px;
        padding: 16px;
        text-align: center;
    }
    
    .stat-card h4 {
        margin: 0 0 8px 0;
        font-size: 14px;
        font-weight: 600;
        color: ${config.colors.light.textLight};
    }
    
    .stat-value {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 4px;
        color: ${config.colors.light.textDark};
    }
    
    .stat-percentage {
        font-size: 14px;
        color: ${config.colors.light.textLight};
    }
    
    .stat-card.accepted .stat-value,
    .stat-card.accepted .stat-percentage {
        color: ${config.colors.light.primary};
    }
    
    .stat-card.rejected .stat-value,
    .stat-card.rejected .stat-percentage {
        color: ${config.colors.light.danger};
    }
    
    .stat-card.custom .stat-value,
    .stat-card.custom .stat-percentage {
        color: ${config.colors.light.secondary};
    }
    
    .time-based-stats {
        display: grid;
        gap: 24px;
    }
    
    .time-stat h4 {
        margin: 0 0 12px 0;
        font-size: 16px;
        color: ${config.colors.light.textDark};
    }
    
    .stat-bars {
        display: grid;
        gap: 12px;
    }
    
    .stat-bar-container {
        display: grid;
        gap: 4px;
    }
    
    .stat-bar-label {
        font-size: 12px;
        color: ${config.colors.light.textLight};
    }
    
    .stat-bar {
        height: 8px;
        width: 100%;
        background-color: #f0f2f5;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
    }
    
    .stat-bar-segment {
        height: 100%;
    }
    
    .stat-bar-segment.accepted {
        background-color: ${config.colors.light.primary};
    }
    
    .stat-bar-segment.rejected {
        background-color: ${config.colors.light.danger};
    }
    
    .stat-bar-segment.custom {
        background-color: ${config.colors.light.secondary};
    }
    
    .stat-bar-legend {
        display: flex;
        gap: 12px;
        font-size: 12px;
        color: ${config.colors.light.textLight};
    }
    
    .stat-bar-legend span {
        display: flex;
        align-items: center;
    }
    
    .stat-bar-legend span::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 4px;
    }
    
    .stat-bar-legend span:nth-child(1)::before {
        background-color: ${config.colors.light.primary};
    }
    
    .stat-bar-legend span:nth-child(2)::before {
        background-color: ${config.colors.light.secondary};
    }
    
    .stat-bar-legend span:nth-child(3)::before {
        background-color: ${config.colors.light.danger};
    }
    
    /* Password prompt styles */
    .password-prompt {
        text-align: center;
    }
    
    .password-prompt h3 {
        margin-top: 0;
        color: ${config.colors.light.textDark};
    }
    
    .password-prompt input {
        width: 100%;
        padding: 10px;
        margin: 12px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .password-prompt button {
        background-color: ${config.colors.light.primary};
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .error-message {
        color: ${config.colors.light.danger};
        font-size: 14px;
        margin-top: 8px;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
        .cookie-banner {
            ${config.uiConfig.banner.position === 'left' ? 'left: 10px;' : 'right: 10px;'}
            bottom: 10px;
            width: calc(100% - 40px);
            max-width: 100%;
        }
        
        .cookie-buttons {
            flex-direction: column;
        }
        
        .cookie-settings-content,
        .cookie-analytics-content {
            width: calc(100% - 40px);
            max-height: 80vh;
        }
        
        .stats-summary {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .cookie-floating-button {
            ${config.uiConfig.floatingButton.position === 'left' ? 'left: 10px;' : 'right: 10px;'}
            bottom: 10px;
        }
        
        .cookie-admin-button {
            ${config.uiConfig.floatingButton.adminButtonPosition === 'left' ? 'left: 80px;' : 'right: 80px;'}
            bottom: 10px;
        }
    }
    `;
    
    document.head.appendChild(style);
}

// Initialize styles when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectStyles);
} else {
    injectStyles();
}

// Cookie category descriptions for tooltips
const categoryDescriptions = {
    functional: {
        title: "Essential Cookies",
        description: "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as logging in or filling in forms."
    },
    analytics: {
        title: "Analytics Cookies",
        description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are popular and how visitors move around the site."
    },
    performance: {
        title: "Performance Cookies",
        description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages."
    },
    advertising: {
        title: "Advertising Cookies",
        description: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant ads on other sites."
    },
    uncategorized: {
        title: "Unclassified Cookies",
        description: "These are cookies that have not yet been categorized. We are working with our providers to classify these cookies and provide more information about their purpose."
    }
};

// Add tooltips to cookie category toggles
function addCategoryTooltips() {
    document.querySelectorAll('.cookie-category').forEach(category => {
        const input = category.querySelector('input[type="checkbox"]');
        if (!input) return;
        
        const categoryType = input.dataset.category;
        const description = categoryDescriptions[categoryType];
        
        if (description) {
            const tooltip = document.createElement('div');
            tooltip.className = 'cookie-tooltip';
            tooltip.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="8"></line>
                </svg>
                <div class="tooltip-content">
                    <h4>${description.title}</h4>
                    <p>${description.description}</p>
                </div>
            `;
            
            category.querySelector('.toggle-container').appendChild(tooltip);
        }
    });
}

// Enhanced cookie scanning with duration detection
function scanCookiesWithDuration() {
    const cookies = document.cookie.split(';');
    const categorized = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (!name) return;

        let found = false;
        
        // Check against known cookie patterns
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern)) {
                const info = cookieDatabase[pattern];
                categorized[info.category].push({
                    name: name,
                    value: value || '',
                    duration: info.duration || getCookieDuration(name),
                    description: info.description || 'Unknown purpose'
                });
                found = true;
                break;
            }
        }

        if (!found && name !== 'cookie_consent') {
            categorized.uncategorized.push({
                name: name,
                value: value || '',
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });

    return categorized;
}

// Get cookie expiration duration
function getCookieDuration(name) {
    const cookie = document.cookie.match(new RegExp(`${name}=[^;]+`));
    if (!cookie) return "Session";

    const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
    if (expiresMatch && expiresMatch[1]) {
        const expiryDate = new Date(expiresMatch[1]);
        const now = new Date();
        if (expiryDate < now) return "Expired";
        
        const diffDays = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
        return diffDays === 1 ? "1 day" : `${diffDays} days`;
    }
    
    return "Session";
}

// Export cookie data for download
function exportCookieData(format = 'json') {
    const cookies = scanCookiesWithDuration();
    const consent = getCookie('cookie_consent');
    const data = {
        timestamp: new Date().toISOString(),
        consent: consent,
        cookies: cookies
    };

    if (format === 'json') {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cookie-report-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    } else if (format === 'csv') {
        let csv = "Category,Name,Value,Duration,Description\n";
        for (const [category, items] of Object.entries(cookies)) {
            items.forEach(item => {
                csv += `"${category}","${item.name}","${item.value}","${item.duration}","${item.description}"\n`;
            });
        }
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cookie-report-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Import cookie consent from external source
function importCookieConsent(consentData) {
    if (consentData.consent === 'all') {
        acceptAllCookies();
    } else if (consentData.consent === 'none') {
        rejectAllCookies();
    } else if (consentData.consent && consentData.consent.startsWith('custom:')) {
        const parts = consentData.consent.split(':');
        const analytics = parts[1] === '1';
        const performance = parts[2] === '1';
        const advertising = parts[3] === '1';
        
        setCookie('cookie_consent', consentData.consent, 365);
        setConsentMode(true, analytics, performance, advertising);
        updateConsentStats('custom');
        
        if (!analytics) disableCookiesByCategory('analytics');
        if (!performance) disableCookiesByCategory('performance');
        if (!advertising) disableCookiesByCategory('advertising');
    }
}

// Sync consent across subdomains
function syncConsentAcrossSubdomains() {
    const consent = getCookie('cookie_consent');
    if (consent) {
        const domainParts = window.location.hostname.split('.');
        if (domainParts.length > 2) {
            const rootDomain = domainParts.slice(-2).join('.');
            setCookie('cookie_consent', consent, 365, '/', '.' + rootDomain);
        }
    }
}

// Check for cookie policy updates
function checkForPolicyUpdates() {
    const lastUpdate = getCookie('cookie_policy_version');
    const currentVersion = '4.2';
    
    if (!lastUpdate || lastUpdate !== currentVersion) {
        setCookie('cookie_policy_version', currentVersion, 365);
        if (lastUpdate) {
            // Policy has changed, show banner again
            eraseCookie('cookie_consent');
            showBanner();
        }
    }
}

// Initialize accessibility features
function initAccessibility() {
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('cookieSettingsModal');
        if (modal && modal.style.display === 'block') {
            if (e.key === 'Escape') {
                hideSettingsModal();
            }
            
            // Trap focus inside modal
            if (e.key === 'Tab') {
                const focusable = modal.querySelectorAll('button, input, select, a[href]');
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                
                if (e.shiftKey && document.activeElement === first) {
                    last.focus();
                    e.preventDefault();
                } else if (!e.shiftKey && document.activeElement === last) {
                    first.focus();
                    e.preventDefault();
                }
            }
        }
    });
    
    // Add ARIA attributes
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-labelledby', 'cookieBannerTitle');
        banner.setAttribute('aria-describedby', 'cookieBannerDesc');
        
        const title = banner.querySelector('h2');
        if (title) title.id = 'cookieBannerTitle';
        
        const desc = banner.querySelector('p');
        if (desc) desc.id = 'cookieBannerDesc';
    }
    
    // Add focus styles
    const style = document.createElement('style');
    style.textContent = `
    .cookie-btn:focus, .toggle-switch input:focus + .toggle-slider {
        outline: 2px solid ${config.colors.light.secondary};
        outline-offset: 2px;
    }
    .dark-mode .cookie-btn:focus, .dark-mode .toggle-switch input:focus + .toggle-slider {
        outline-color: ${config.colors.dark.secondary};
    }`;
    document.head.appendChild(style);
}

// Final initialization wrapper
function finalInit() {
    // Check domain restrictions
    if (!isDomainAllowed()) return;
    
    // Load analytics data
    loadAnalyticsData();

    // Check geo restrictions
    const geoData = {}; // Would normally come from geo API
    if (!checkGeoTargeting(geoData)) return;

    // Detect language
    const language = detectUserLanguage(geoData);

    // Scan cookies
    const cookies = scanCookiesWithDuration();

    // Check for policy updates
    checkForPolicyUpdates();

    // Sync consent across subdomains
    syncConsentAcrossSubdomains();

    // Inject HTML
    injectConsentHTML(cookies, language);

    // Setup event listeners
    setupEventListeners();
    
    // Add tooltips to cookie categories
    addCategoryTooltips();
    
    // Initialize accessibility features
    initAccessibility();

    // Show banner if no consent exists
    const consent = getCookie('cookie_consent');
    if (!consent && config.behavior.autoShow) {
        setTimeout(() => showBanner(), config.behavior.bannerDelay * 1000);
    }

    // Apply existing consent settings
    if (consent === 'all') {
        setConsentMode(true, true, true, true);
    } else if (consent === 'none') {
        setConsentMode(false, false, false, false);
    } else if (consent?.startsWith('custom:')) {
        const parts = consent.split(':');
        setConsentMode(true, parts[1] === '1', parts[2] === '1', parts[3] === '1');
    }

    // Track any marketing parameters in URL
    trackMarketingParameters();
}

// Replace original initialization with final version
function initCookieConsent() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', finalInit);
    } else {
        finalInit();
    }
}

// Extend public API
if (typeof window.ultimateGDPR === 'object') {
    window.ultimateGDPR = {
        ...window.ultimateGDPR,
        exportData: exportCookieData,
        importConsent: importCookieConsent,
        scanCookies: scanCookiesWithDuration,
        getConfig: () => JSON.parse(JSON.stringify(config)),
        updateConfig: (newConfig) => {
            Object.assign(config, newConfig);
            // Reinitialize with updated config
            initCookieConsent();
        },
        showBanner: showBanner,
        hideBanner: hideBanner,
        showSettings: showSettingsModal,
        getConsentStatus: () => getCookie('cookie_consent')
    };
}

// Self-test function to verify initialization
(function selfTest() {
    try {
        if (typeof config !== 'object') throw new Error('Configuration missing');
        if (typeof translations !== 'object') throw new Error('Translations missing');
        if (typeof cookieDatabase !== 'object') throw new Error('Cookie database missing');
        
        // Verify essential functions exist
        ['getCookie', 'setCookie', 'eraseCookie', 'setConsentMode'].forEach(fn => {
            if (typeof window[fn] !== 'function') throw new Error(`Function ${fn} missing`);
        });
        
        console.log('GDPR Cookie Consent initialization checks passed');
    } catch (e) {
        console.error('GDPR Cookie Consent initialization error:', e);
    }
})();
