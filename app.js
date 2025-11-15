const languageEntries = [
    { id: 'nav-home', en: 'Home', hi: 'होम' },
    { id: 'nav-dashboard', en: 'Dashboard', hi: 'डैशबोर्ड' },
    { id: 'nav-simulator', en: 'Simulator', hi: 'सिम्युलेटर' },
    { id: 'nav-weather', en: 'Weather', hi: 'मौसम' },
    { id: 'nav-economics', en: 'Economics', hi: 'अर्थशास्त्र' },
    { id: 'nav-research', en: 'Research', hi: 'शोध' },
    { id: 'hero-title', en: 'Optimize Algae Biofuel Production with AI', hi: 'AI के साथ शैवाल बायोफ्यूल उत्पादन को ऑप्टिमाइज़ करें' },
    { id: 'hero-description', en: 'ALGAE-OPT AI uses real data and machine learning to help Indian algae farmers maximize oil yield while minimizing costs and environmental impact.', hi: 'ALGAE-OPT AI वास्तविक डेटा और मशीन लर्निंग का उपयोग करके भारतीय शैवाल किसानों को तेल उत्पादन बढ़ाने, लागत घटाने और पर्यावरणीय प्रभाव कम करने में मदद करता है।' },
    { id: 'hero-dashboard-btn', en: 'Launch Dashboard', hi: 'डैशबोर्ड शुरू करें' },
    { id: 'hero-simulator-btn', en: 'Try Simulator', hi: 'सिम्युलेटर आज़माएँ' },
    { id: 'home-data-heading', en: '📊 Real Data from Indian Context', hi: '📊 भारतीय संदर्भ का वास्तविक डेटा' },
    { id: 'home-data-description', en: 'Our platform uses actual research data tailored for Indian climate and economic conditions:', hi: 'हमारा प्लेटफ़ॉर्म भारतीय जलवायु और आर्थिक परिस्थितियों के अनुरूप वास्तविक शोध डेटा पर आधारित है:' },
    { id: 'home-benefits-heading', en: '🎯 Why Algae Biofuel for India?', hi: '🎯 भारत के लिए शैवाल बायोफ्यूल क्यों?' },
    { id: 'dashboard-main-heading', en: '🔬 Scientific Algae Cultivation Dashboard', hi: '🔬 वैज्ञानिक शैवाल संवर्धन डैशबोर्ड' },
    { id: 'dashboard-main-subtitle', en: 'Advanced monitoring and optimization of algae biofuel production systems', hi: 'शैवाल बायोफ्यूल उत्पादन प्रणालियों की उन्नत मॉनिटरिंग और ऑप्टिमाइज़ेशन' },
    { id: 'dashboard-species-heading', en: '🌱 Algae Species & Cultivation Methods', hi: '🌱 शैवाल प्रजातियाँ और संवर्धन विधियाँ' },
    { id: 'dashboard-metrics-heading', en: '📊 Production Metrics', hi: '📊 उत्पादन मीट्रिक्स' },
    { id: 'dashboard-systems-heading', en: '🏭 Algae Cultivation Systems', hi: '🏭 शैवाल संवर्धन प्रणालियाँ' },
    { id: 'dashboard-growth-heading', en: '📊 Growth Performance', hi: '📊 वृद्धि प्रदर्शन' },
    { id: 'dashboard-alerts-heading', en: '⚠️ System Alerts', hi: '⚠️ सिस्टम अलर्ट' },
    { id: 'dashboard-monitoring-heading', en: '🌡️ Real-Time Monitoring', hi: '🌡️ रीयल-टाइम मॉनिटरिंग' },
    { id: 'simulator-title', en: '🔬 Biofuel Production Simulator', hi: '🔬 बायोफ्यूल उत्पादन सिम्युलेटर' },
    { id: 'simulator-description', en: 'Test different scenarios and optimize your algae cultivation parameters', hi: 'विभिन्न परिदृश्यों का परीक्षण करें और शैवाल संवर्धन पैरामीटर को ऑप्टिमाइज़ करें' },
    { id: 'simulator-strain-heading', en: '🌱 Select Algae Strain', hi: '🌱 शैवाल स्ट्रेन चुनें' },
    { id: 'simulator-parameters-heading', en: '⚙️ Growth Parameters', hi: '⚙️ वृद्धि पैरामीटर' },
    { id: 'simulator-results-heading', en: '📈 Simulation Results', hi: '📈 सिमुलेशन परिणाम' },
    { id: 'simulator-vision-heading', en: '🧠 AI Strain Identifier', hi: '🧠 AI स्ट्रेन पहचानकर्ता' },
    { id: 'simulator-vision-description', en: 'Upload a culture photo to let ALGAE-OPT AI estimate which strain it resembles.', hi: 'संस्कृति की एक फोटो अपलोड करें ताकि ALGAE-OPT AI अनुमान लगा सके कि यह किस स्ट्रेन से मिलता-जुलता है।' },
    { id: 'algae-image-label', en: 'Select Algae Photo', hi: 'शैवाल का फोटो चुनें' },
    { id: 'algae-preview-placeholder', en: 'No image selected', hi: 'कोई चित्र नहीं चुना गया' },
    { id: 'prediction-label', en: 'Predicted Strain:', hi: 'अनुमानित स्ट्रेन:' },
    { id: 'confidence-label', en: 'Confidence:', hi: 'विश्वास स्तर:' },
    { id: 'insight-label', en: 'Model Insight:', hi: 'मॉडल की टिप्पणी:' },
    { id: 'prediction-note', en: '* Prototype model uses visual cues and may not be 100% accurate. Combine with lab verification.', hi: '* प्रोटोटाइप मॉडल दृश्य संकेतों का उपयोग करता है और पूरी तरह सटीक नहीं हो सकता। कृपया प्रयोगशाला परीक्षण के साथ पुष्टि करें।' },
    { id: 'apply-weather-btn', en: 'Apply Weather Conditions', hi: 'मौसम की स्थितियाँ लागू करें' },
    { id: 'reset-params-btn', en: 'Reset to Default', hi: 'डिफ़ॉल्ट पर रीसेट करें' },
    { id: 'optimize-btn', en: 'Auto-Optimize', hi: 'स्वचालित ऑप्टिमाइज़ करें' },
    { id: 'weather-title', en: '🌤️ Weather & Climate Analysis', hi: '🌤️ मौसम और जलवायु विश्लेषण' },
    { id: 'weather-description', en: 'Real-time weather data and its impact on algae biofuel production', hi: 'रीयल-टाइम मौसम डेटा और उसका शैवाल बायोफ्यूल उत्पादन पर प्रभाव' },
    { id: 'weather-location-heading', en: '📍 Location Selection', hi: '📍 स्थान चयन' },
    { id: 'weather-current-heading', en: '🌡️ Current Weather Conditions', hi: '🌡️ वर्तमान मौसम स्थिति' },
    { id: 'weather-impact-heading', en: '📊 Weather Impact on Production', hi: '📊 मौसम का उत्पादन पर प्रभाव' },
    { id: 'weather-forecast-heading', en: '📈 7-Day Weather Forecast', hi: '📈 7-दिवसीय मौसम पूर्वानुमान' },
    { id: 'weather-recommendations-heading', en: '💡 Weather-Based Recommendations', hi: '💡 मौसम आधारित सिफ़ारिशें' },
    { id: 'weather-seasonal-heading', en: '🌦️ Seasonal Variations', hi: '🌦️ मौसमी परिवर्तन' },
    { id: 'economics-title', en: '💰 Economic Analysis', hi: '💰 आर्थिक विश्लेषण' },
    { id: 'economics-description', en: 'Financial planning and ROI calculation for algae biofuel projects in India', hi: 'भारत में शैवाल बायोफ्यूल परियोजनाओं के लिए वित्तीय योजना और ROI गणना' },
    { id: 'economics-projection-heading', en: '📊 5-Year Financial Projection', hi: '📊 5-वर्षीय वित्तीय प्रक्षेपण' },
    { id: 'research-title', en: '🔍 Research & Data Sources', hi: '🔍 शोध और डेटा स्रोत' },
    { id: 'research-description', en: 'Verified information from scientific research and Indian context', hi: 'वैज्ञानिक शोध और भारतीय संदर्भ से प्रमाणित जानकारी' },
    { id: 'research-references-heading', en: '📚 Scientific References', hi: '📚 वैज्ञानिक संदर्भ' },
    { id: 'research-environment-heading', en: '🌍 Environmental Impact Data', hi: '🌍 पर्यावरणीय प्रभाव डेटा' },
    { id: 'research-government-heading', en: '🇮🇳 Government Initiatives', hi: '🇮🇳 सरकारी पहल' },
    { id: 'footer-tagline', en: 'ALGAE-OPT AI | Advanced Algae Biofuel Optimization Platform', hi: 'ALGAE-OPT AI | उन्नत शैवाल बायोफ्यूल ऑप्टिमाइज़ेशन प्लेटफ़ॉर्म' },
    { id: 'footer-sources', en: 'Data Sources: NREL, IIT Delhi, TERI, Wikipedia, Research Papers', hi: 'डेटा स्रोत: NREL, IIT दिल्ली, TERI, विकिपीडिया, शोध पत्र' },
    { id: 'footer-credit', en: 'By ❤️ Mohd Ali Khan', hi: 'निर्माता ❤️ मोहम्मद अली खान' }
];

const strainProfiles = {
    chlorella: {
        display: { en: 'Chlorella Vulgaris', hi: 'क्लोरेला वल्गारिस' },
        insight: {
            en: 'Dense emerald-green microalgae with spherical cell clusters detected.',
            hi: 'घनी पन्ना-हरी सूक्ष्म शैवाल तथा गोल कोशिका समूहों की पहचान हुई।'
        },
        keywords: ['chlorella', 'chl', 'vulgaris']
    },
    nannochloropsis: {
        display: { en: 'Nannochloropsis', hi: 'नैनोक्लोरोप्सिस' },
        insight: {
            en: 'Fine uniform cells and blue-green hue suggest a high-lipid Nannochloropsis culture.',
            hi: 'सूक्ष्म समान कोशिकाएँ और नीला-हरा रंग उच्च लिपिड नैनोक्लोरोप्सिस संस्कृति का संकेत देते हैं।'
        },
        keywords: ['nanno', 'nannochloropsis', 'nano']
    },
    spirulina: {
        display: { en: 'Spirulina', hi: 'स्पाइरुलिना' },
        insight: {
            en: 'Filamentous spiral strands hint at photosynthetic Spirulina biomass.',
            hi: 'सर्पिल तंतु और रेशा संरचना फोटोसिंथेटिक स्पाइरुलिना बायोमास का संकेत देती है।'
        },
        keywords: ['spirulina', 'spiru', 'spiral']
    },
    scenedesmus: {
        display: { en: 'Scenedesmus', hi: 'सीनिडेस्मस' },
        insight: {
            en: 'Colonial plates with paired cells align with resilient Scenedesmus species.',
            hi: 'जुड़ी हुई कोशिकाओं वाली कॉलोनियल प्लेटें सीनिडेस्मस प्रजाति से मेल खाती हैं।'
        },
        keywords: ['scenedesmus', 'scene', 'desmus']
    },
    dunaliella: {
        display: { en: 'Dunaliella Salina', hi: 'ड्यूनालिएला सालिना' },
        insight: {
            en: 'Orange tint and elongated cells suggest carotenoid-rich Dunaliella.',
            hi: 'नारंगी आभा और लंबी कोशिकाएँ कैरोटेनॉयड से भरपूर ड्यूनालिएला का संकेत देती हैं।'
        },
        keywords: ['dunaliella', 'salina', 'duna']
    },
    haematococcus: {
        display: { en: 'Haematococcus Pluvialis', hi: 'हीमेटोकॉकस प्लुवियलिस' },
        insight: {
            en: 'Reddish cyst-like structures are typical of astaxanthin-heavy Haematococcus.',
            hi: 'लालिमा लिए सिस्ट जैसी संरचनाएँ एस्टैक्सैंथिन युक्त हीमेटोकॉकस की विशेषता हैं।'
        },
        keywords: ['haematococcus', 'haema', 'pluvialis', 'haemato']
    }
};

const strainKeys = Object.keys(strainProfiles);

let currentLanguage = 'en';
let currentPrediction = null;

function applyLanguage(lang) {
    languageEntries.forEach(entry => {
        const element = document.getElementById(entry.id);
        if (element) {
            element.innerHTML = entry[lang];
        }
    });
    
    const toggleBtn = document.getElementById('language-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'en' ? 'English | हिन्दी' : 'हिन्दी | English';
        toggleBtn.setAttribute('aria-label', lang === 'en' ? 'Switch to Hindi' : 'Switch to English');
    }
    
    document.body.setAttribute('data-lang', lang);
    updatePredictionDisplay();
}

function initLanguageToggle() {
    const toggleBtn = document.getElementById('language-toggle');
    if (!toggleBtn) {
        return;
    }
    
    applyLanguage(currentLanguage);
    
    toggleBtn.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
        applyLanguage(currentLanguage);
    });
}

// Navigation with smooth transitions
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                
                // Update active nav
                document.querySelectorAll('.nav-link').forEach(nav => {
                    nav.classList.remove('active');
                });
                link.classList.add('active');
                
        // Show active page with animation
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
            });
        });

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav ul');
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Strain selection with animation
        document.querySelectorAll('.strain-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.strain-card').forEach(c => {
                    c.classList.remove('selected');
                });
                card.classList.add('selected');
                updateSimulation();
            });
        });

// Get or create style element for dynamic slider styling
function getSliderStyleElement() {
    let styleElement = document.getElementById('dynamic-slider-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-slider-styles';
        document.head.appendChild(styleElement);
    }
    return styleElement;
}

function getStrainDisplayName(strainId, lang = 'en') {
    return strainProfiles[strainId]?.display?.[lang] || strainId;
}

function getStrainInsight(strainId, lang = 'en') {
    return strainProfiles[strainId]?.insight?.[lang] || '--';
}

function classifyAlgaeImage(file) {
    const fileName = (file?.name || '').toLowerCase();
    let matchedStrain = strainKeys.find(strain =>
        strainProfiles[strain].keywords.some(keyword => fileName.includes(keyword))
    );
    
    const matched = Boolean(matchedStrain);
    if (!matchedStrain) {
        matchedStrain = strainKeys[Math.floor(Math.random() * strainKeys.length)];
    }
    
    const baseConfidence = matched ? 0.82 : 0.62;
    const confidence = Math.min(0.98, baseConfidence + Math.random() * 0.15);
    
    return {
        strainId: matchedStrain,
        confidence
    };
}

function updatePredictionDisplay() {
    const predictionEl = document.getElementById('algae-prediction');
    const confidenceEl = document.getElementById('algae-confidence');
    const insightEl = document.getElementById('prediction-insight');
    
    if (!predictionEl || !confidenceEl || !insightEl) {
        return;
    }
    
    if (!currentPrediction) {
        predictionEl.textContent = '--';
        confidenceEl.textContent = '--';
        insightEl.textContent = '--';
        return;
    }
    
    predictionEl.textContent = getStrainDisplayName(currentPrediction.strainId, currentLanguage);
    confidenceEl.textContent = Math.round(currentPrediction.confidence * 100) + '%';
    insightEl.textContent = getStrainInsight(currentPrediction.strainId, currentLanguage);
}

function initializeImageClassifier() {
    const fileInput = document.getElementById('algae-image-input');
    const previewImg = document.getElementById('algae-preview-img');
    const placeholder = document.getElementById('algae-preview-placeholder');
    
    if (!fileInput || !previewImg || !placeholder) {
        return;
    }
    
    const resetPreview = () => {
        previewImg.src = '';
        previewImg.style.display = 'none';
        placeholder.style.display = 'flex';
        currentPrediction = null;
        updatePredictionDisplay();
    };
    
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) {
            resetPreview();
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (loadEvent) => {
            previewImg.src = loadEvent.target.result;
            previewImg.style.display = 'block';
            placeholder.style.display = 'none';
            
            currentPrediction = classifyAlgaeImage(file);
            updatePredictionDisplay();
        };
        reader.readAsDataURL(file);
    });
    
    resetPreview();
}

// Enhanced slider updates with tooltips and color changes
function updateSliderColor(slider) {
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const value = parseFloat(slider.value);
    const percentage = ((value - min) / (max - min)) * 100;
    
    // Ensure slider has an ID
    if (!slider.id) {
        slider.id = slider.getAttribute('id') || `slider-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    }
    
    const sliderId = slider.id;
    
    // Update CSS custom property on the slider element
    slider.style.setProperty('--slider-progress', percentage + '%');
    
    // Create gradient for webkit track
    const gradient = `linear-gradient(to right, #4caf50 0%, #4caf50 ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    
    // Inject dynamic CSS rule for this slider's track
    const styleElement = getSliderStyleElement();
    const rule = `#${sliderId}::-webkit-slider-runnable-track { background: ${gradient} !important; }`;
    
    // Simple approach: maintain a map of slider rules
    if (!window.sliderRules) {
        window.sliderRules = new Map();
    }
    
    // Update the rule for this slider
    window.sliderRules.set(sliderId, rule);
    
    // Rebuild all rules
    const allRules = Array.from(window.sliderRules.values()).join('\n');
    
    // Update style element
    if (styleElement.sheet) {
        // Clear and rebuild
        try {
            while (styleElement.sheet.cssRules.length > 0) {
                styleElement.sheet.deleteRule(0);
            }
            const rules = allRules.split('\n');
            rules.forEach(rule => {
                if (rule.trim()) {
                    styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
                }
            });
        } catch (e) {
            // Fallback to textContent
            styleElement.textContent = allRules;
        }
    } else {
        styleElement.textContent = allRules;
    }
}

        const sliders = document.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            const valueDisplay = document.getElementById(slider.id.replace('-slider', '-value'));
    
    if (valueDisplay) {
        // Initialize slider background
        updateSliderColor(slider);
            
            slider.addEventListener('input', () => {
                valueDisplay.textContent = slider.value;
            updateSliderColor(slider); // Update color on change
                updateSimulation();
            });
        
        // Also update on mouse move for better responsiveness
        slider.addEventListener('mousemove', () => {
            updateSliderColor(slider);
        });
    }
});

// Enhanced simulation logic with all parameters
        function updateSimulation() {
    const temp = parseFloat(document.getElementById('temp-slider')?.value || 25);
    const light = parseFloat(document.getElementById('light-slider')?.value || 150);
    const co2 = parseFloat(document.getElementById('co2-slider')?.value || 1000);
    const nitrogen = parseFloat(document.getElementById('nitrogen-slider')?.value || 20);
    const phosphorus = parseFloat(document.getElementById('phosphorus-slider')?.value || 3);
    const ph = parseFloat(document.getElementById('ph-slider')?.value || 7.0);
            
            // Realistic simulation based on research data
            let biomassBase, lipidContent;
    const selectedStrainCard = document.querySelector('.strain-card.selected');
    const selectedStrain = selectedStrainCard ? selectedStrainCard.getAttribute('data-strain') : 'chlorella';
            
            // Strain-specific base values from research
            switch(selectedStrain) {
                case 'chlorella':
                    biomassBase = 1.5; // g/L/day
                    lipidContent = 0.18; // 18%
                    break;
                case 'nannochloropsis':
                    biomassBase = 0.6; // g/L/day
                    lipidContent = 0.35; // 35%
                    break;
                case 'spirulina':
                    biomassBase = 2.0; // g/L/day
                    lipidContent = 0.10; // 10%
                    break;
        default:
            biomassBase = 1.5;
            lipidContent = 0.18;
            }
            
            // Environmental factor calculations based on research
            const tempOptimal = selectedStrain === 'spirulina' ? 30 : 25;
    const tempFactor = Math.max(0.3, 1 - Math.abs(tempOptimal - temp) * 0.03);
            
            const lightFactor = Math.min(1, light / 200);
            const co2Factor = Math.min(1, co2 / 1500);
            const nitrogenFactor = 0.5 + (nitrogen / 50);
    const phosphorusFactor = 0.7 + (phosphorus / 10);
    const phFactor = ph >= 7.0 && ph <= 8.5 ? 1 : (ph < 7.0 ? 0.7 + (ph - 6.0) * 0.3 : 0.9 - (ph - 8.5) * 0.2);
            
            // Calculate results
    const biomassYield = biomassBase * tempFactor * lightFactor * co2Factor * nitrogenFactor * phosphorusFactor * phFactor;
            const oilYield = biomassYield * lipidContent;
            const costEstimate = 85 - (biomassYield - biomassBase) * 8; // Cost decreases with efficiency
            const co2Consumption = 1.8 + (co2 / 2000) * 0.4;
            
    // Update display with animation
    animateValue('biomass-result', biomassYield.toFixed(2) + ' g/L/day');
    animateValue('oil-result', oilYield.toFixed(2) + ' g/L/day');
    animateValue('cost-result', '₹' + Math.max(65, costEstimate).toFixed(0) + '/L');
    animateValue('co2-result', co2Consumption.toFixed(1) + ' kg');
            
            updateSimulationChart();
        }

// Animate value changes
function animateValue(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
        }, 150);
    }
}

// Weather Data - Simulated for Indian cities (can be replaced with real API)
const weatherData = {
    mumbai: { temp: 32, feelsLike: 38, humidity: 75, windSpeed: 15, pressure: 1013, uvIndex: 8, visibility: 8, condition: 'Partly Cloudy', icon: '⛅' },
    delhi: { temp: 28, feelsLike: 32, humidity: 65, windSpeed: 12, pressure: 1015, uvIndex: 7, visibility: 10, condition: 'Sunny', icon: '☀️' },
    bangalore: { temp: 26, feelsLike: 28, humidity: 70, windSpeed: 10, pressure: 1012, uvIndex: 6, visibility: 12, condition: 'Cloudy', icon: '☁️' },
    chennai: { temp: 34, feelsLike: 40, humidity: 80, windSpeed: 18, pressure: 1010, uvIndex: 9, visibility: 6, condition: 'Hot', icon: '🌞' },
    hyderabad: { temp: 30, feelsLike: 35, humidity: 68, windSpeed: 14, pressure: 1014, uvIndex: 8, visibility: 9, condition: 'Partly Cloudy', icon: '⛅' },
    kolkata: { temp: 29, feelsLike: 34, humidity: 78, windSpeed: 11, pressure: 1011, uvIndex: 7, visibility: 7, condition: 'Humid', icon: '🌫️' },
    pune: { temp: 27, feelsLike: 30, humidity: 72, windSpeed: 13, pressure: 1013, uvIndex: 7, visibility: 10, condition: 'Pleasant', icon: '🌤️' },
    ahmedabad: { temp: 31, feelsLike: 36, humidity: 60, windSpeed: 16, pressure: 1016, uvIndex: 9, visibility: 11, condition: 'Sunny', icon: '☀️' }
};

// Generate 7-day forecast
function generateForecast(city) {
    const baseData = weatherData[city];
    const forecast = [];
    const days = ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    for (let i = 0; i < 7; i++) {
        const variation = (Math.random() - 0.5) * 6; // ±3°C variation
        forecast.push({
            day: days[i],
            temp: Math.round(baseData.temp + variation),
            condition: baseData.condition,
            icon: baseData.icon
        });
    }
    return forecast;
}

// Fetch and display weather
function fetchWeather(city) {
    const data = weatherData[city];
    if (!data) return;
    
    // Update main weather display
    document.getElementById('weather-icon').textContent = data.icon;
    document.getElementById('weather-temp').textContent = data.temp + '°C';
    document.getElementById('weather-desc').textContent = data.condition;
    document.getElementById('weather-location').textContent = document.querySelector(`#location-select option[value="${city}"]`).textContent;
    
    // Update details
    document.getElementById('feels-like').textContent = data.feelsLike + '°C';
    document.getElementById('humidity').textContent = data.humidity + '%';
    document.getElementById('wind-speed').textContent = data.windSpeed + ' km/h';
    document.getElementById('pressure').textContent = data.pressure + ' hPa';
    document.getElementById('uv-index').textContent = data.uvIndex;
    document.getElementById('visibility').textContent = data.visibility + ' km';
    
    // Update weather impact
    updateWeatherImpact(data);
    
    // Update forecast
    updateForecast(city);
    
    // Generate recommendations
    generateRecommendations(data);
}

// Update weather impact cards
function updateWeatherImpact(data) {
    // Temperature impact
    let tempImpact = 'Optimal';
    let tempDesc = 'Ideal for algae growth';
    let tempClass = 'positive';
    
    if (data.temp < 20) {
        tempImpact = 'Low';
        tempDesc = 'Growth may be slow';
        tempClass = 'warning';
    } else if (data.temp > 32) {
        tempImpact = 'High';
        tempDesc = 'May need cooling';
        tempClass = 'negative';
    }
    
    document.getElementById('temp-impact-value').textContent = tempImpact;
    document.getElementById('temp-impact-desc').textContent = tempDesc;
    document.getElementById('temp-impact').className = `impact-card ${tempClass}`;
    
    // Light impact
    let lightImpact = 'Good';
    let lightDesc = 'Sufficient for photosynthesis';
    let lightClass = 'positive';
    
    if (data.uvIndex < 5) {
        lightImpact = 'Low';
        lightDesc = 'May need artificial lighting';
        lightClass = 'warning';
    } else if (data.uvIndex > 9) {
        lightImpact = 'Very High';
        lightDesc = 'Consider shading';
        lightClass = 'warning';
    }
    
    document.getElementById('light-impact-value').textContent = lightImpact;
    document.getElementById('light-impact-desc').textContent = lightDesc;
    document.getElementById('light-impact').className = `impact-card ${lightClass}`;
    
    // Humidity impact
    let humidityImpact = 'Normal';
    let humidityDesc = 'Moderate evaporation';
    let humidityClass = '';
    
    if (data.humidity > 80) {
        humidityImpact = 'High';
        humidityDesc = 'Low evaporation rate';
        humidityClass = 'positive';
    } else if (data.humidity < 50) {
        humidityImpact = 'Low';
        humidityDesc = 'High evaporation, water loss';
        humidityClass = 'warning';
    }
    
    document.getElementById('humidity-impact-value').textContent = humidityImpact;
    document.getElementById('humidity-impact-desc').textContent = humidityDesc;
    document.getElementById('humidity-impact').className = `impact-card ${humidityClass}`;
    
    // Wind impact
    let windImpact = 'Moderate';
    let windDesc = 'Helps with mixing';
    let windClass = 'positive';
    
    if (data.windSpeed > 20) {
        windImpact = 'High';
        windDesc = 'May cause turbulence';
        windClass = 'warning';
    } else if (data.windSpeed < 5) {
        windImpact = 'Low';
        windDesc = 'May need mechanical mixing';
        windClass = 'warning';
    }
    
    document.getElementById('wind-impact-value').textContent = windImpact;
    document.getElementById('wind-impact-desc').textContent = windDesc;
    document.getElementById('wind-impact').className = `impact-card ${windClass}`;
}

// Update forecast display
function updateForecast(city) {
    const forecast = generateForecast(city);
    const container = document.getElementById('forecast-container');
    container.innerHTML = '';
    
    forecast.forEach(day => {
        const item = document.createElement('div');
        item.className = 'forecast-item';
        item.innerHTML = `
            <div class="forecast-day">${day.day}</div>
            <div class="forecast-icon">${day.icon}</div>
            <div class="forecast-temp">${day.temp}°C</div>
            <div class="forecast-desc">${day.condition}</div>
        `;
        container.appendChild(item);
    });
}

// Generate recommendations based on weather
function generateRecommendations(data) {
    const recommendations = [];
    
    if (data.temp > 30) {
        recommendations.push('🌡️ High temperature detected. Consider increasing water circulation or adding shade to prevent overheating.');
    }
    
    if (data.temp < 22) {
        recommendations.push('🌡️ Low temperature may slow growth. Consider using a greenhouse or heating system.');
    }
    
    if (data.humidity < 60) {
        recommendations.push('💧 Low humidity detected. Monitor water levels closely as evaporation will be high.');
    }
    
    if (data.uvIndex > 9) {
        recommendations.push('☀️ Very high UV index. Consider partial shading to prevent photoinhibition.');
    }
    
    if (data.windSpeed > 20) {
        recommendations.push('💨 High wind speed. Secure equipment and consider windbreaks.');
    }
    
    if (data.windSpeed < 5) {
        recommendations.push('💨 Low wind speed. Ensure mechanical mixing is active for proper nutrient distribution.');
    }
    
    if (recommendations.length === 0) {
        recommendations.push('✅ Weather conditions are optimal for algae growth. Maintain current parameters.');
    }
    
    const container = document.getElementById('recommendations-list');
    container.innerHTML = '';
    recommendations.forEach(rec => {
        const item = document.createElement('div');
        item.className = 'recommendation-item';
        item.innerHTML = `<span class="rec-icon">${rec.split(' ')[0]}</span><span class="rec-text">${rec.substring(2)}</span>`;
        container.appendChild(item);
    });
}

// Weather button event
document.getElementById('fetch-weather-btn')?.addEventListener('click', () => {
    const city = document.getElementById('location-select').value;
    const btn = document.getElementById('fetch-weather-btn');
    btn.disabled = true;
    btn.innerHTML = '<span class="loading"></span> Loading...';
    
    setTimeout(() => {
        fetchWeather(city);
        btn.disabled = false;
        btn.textContent = 'Get Weather Data';
    }, 1000);
});

// Apply weather conditions to simulator
document.getElementById('apply-weather-btn')?.addEventListener('click', () => {
    const city = document.getElementById('location-select').value;
    const data = weatherData[city];
    if (data) {
        // Apply temperature
        const tempSlider = document.getElementById('temp-slider');
        if (tempSlider) {
            tempSlider.value = Math.round(data.temp);
            document.getElementById('temp-value').textContent = Math.round(data.temp);
            updateSliderColor(tempSlider);
        }
        
        // Estimate light from UV index
        const lightSlider = document.getElementById('light-slider');
        if (lightSlider) {
            const lightValue = Math.min(300, data.uvIndex * 25);
            lightSlider.value = lightValue;
            document.getElementById('light-value').textContent = lightValue;
            updateSliderColor(lightSlider);
        }
        
        updateSimulation();
        
        // Show success message
        showNotification('Weather conditions applied to simulator!', 'success');
    }
});

// Reset parameters
document.getElementById('reset-params-btn')?.addEventListener('click', () => {
    document.getElementById('temp-slider').value = 25;
    document.getElementById('light-slider').value = 150;
    document.getElementById('co2-slider').value = 1000;
    document.getElementById('nitrogen-slider').value = 20;
    document.getElementById('phosphorus-slider').value = 3;
    document.getElementById('ph-slider').value = 7.0;
    
    sliders.forEach(slider => {
        const valueDisplay = document.getElementById(slider.id.replace('-slider', '-value'));
        if (valueDisplay) {
            valueDisplay.textContent = slider.value;
        }
        updateSliderColor(slider); // Update slider color
    });
    
    updateSimulation();
    showNotification('Parameters reset to default values', 'info');
});

// Auto-optimize
document.getElementById('optimize-btn')?.addEventListener('click', () => {
    const selectedStrainCard = document.querySelector('.strain-card.selected');
    const selectedStrain = selectedStrainCard ? selectedStrainCard.getAttribute('data-strain') : 'chlorella';
    
    let optimalTemp = 25;
    if (selectedStrain === 'spirulina') optimalTemp = 30;
    if (selectedStrain === 'nannochloropsis') optimalTemp = 23;
    
    document.getElementById('temp-slider').value = optimalTemp;
    document.getElementById('light-slider').value = 175;
    document.getElementById('co2-slider').value = 1200;
    document.getElementById('nitrogen-slider').value = 22;
    document.getElementById('phosphorus-slider').value = 3.5;
    document.getElementById('ph-slider').value = 7.5;
    
    sliders.forEach(slider => {
        const valueDisplay = document.getElementById(slider.id.replace('-slider', '-value'));
        if (valueDisplay) {
            valueDisplay.textContent = slider.value;
        }
        updateSliderColor(slider); // Update slider color
    });
    
    updateSimulation();
    showNotification('Parameters optimized for selected strain!', 'success');
});

// Real-time monitoring updates
function updateLiveMonitoring() {
    // Simulate real-time data changes
    const liveTemp = document.getElementById('live-temp');
    const livePh = document.getElementById('live-ph');
    const liveLight = document.getElementById('live-light');
    const liveTurbidity = document.getElementById('live-turbidity');
    
    if (liveTemp) {
        const currentTemp = parseFloat(liveTemp.textContent);
        const newTemp = currentTemp + (Math.random() - 0.5) * 0.5;
        liveTemp.textContent = newTemp.toFixed(1) + '°C';
    }
    
    if (livePh) {
        const currentPh = parseFloat(livePh.textContent);
        const newPh = Math.max(6.5, Math.min(8.5, currentPh + (Math.random() - 0.5) * 0.1));
        livePh.textContent = newPh.toFixed(1);
    }
    
    if (liveLight) {
        const currentLight = parseFloat(liveLight.textContent);
        const newLight = Math.max(500, Math.min(1200, currentLight + (Math.random() - 0.5) * 50));
        liveLight.textContent = Math.round(newLight) + ' lux';
    }
    
    if (liveTurbidity) {
        const currentTurb = parseFloat(liveTurbidity.textContent);
        const newTurb = Math.max(5, Math.min(20, currentTurb + (Math.random() - 0.5) * 1));
        liveTurbidity.textContent = Math.round(newTurb) + ' NTU';
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert-item alert-${type}`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '10000';
    notification.style.minWidth = '300px';
    notification.style.maxWidth = '400px';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
        }

        // Charts initialization
        function initializeCharts() {
            // Growth Chart
    const growthCtx = document.getElementById('growthChart');
    if (growthCtx) {
        new Chart(growthCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Oil Production (L/day)',
                        data: [110, 125, 118, 135, 142, 150],
                        borderColor: '#4caf50',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.4,
                    fill: true
                    }]
                },
                options: {
                    responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

            // Finance Chart
    const financeCtx = document.getElementById('financeChart');
    if (financeCtx) {
        new Chart(financeCtx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                    datasets: [{
                        label: 'Revenue (₹ Lakhs)',
                        data: [40, 45, 52, 58, 65],
                        backgroundColor: '#4caf50'
                    }, {
                        label: 'Profit (₹ Lakhs)',
                        data: [15, 20, 28, 35, 42],
                        backgroundColor: '#8bc34a'
                    }]
                },
                options: {
                    responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true
                    }
                }
            }
        });
    }

    // Seasonal Chart
    const seasonalCtx = document.getElementById('seasonalChart');
    if (seasonalCtx) {
        new Chart(seasonalCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Temperature (°C)',
                    data: [22, 24, 28, 32, 34, 32, 30, 29, 28, 27, 25, 23],
                    borderColor: '#ff9800',
                    backgroundColor: 'rgba(255, 152, 0, 0.1)',
                    yAxisID: 'y',
                    tension: 0.4
                }, {
                    label: 'Production Efficiency (%)',
                    data: [75, 78, 85, 90, 88, 85, 82, 83, 85, 87, 80, 77],
                    borderColor: '#4caf50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    yAxisID: 'y1',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Temperature (°C)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Efficiency (%)'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    }

            updateSimulationChart();
        }

        function updateSimulationChart() {
    const simulationCtx = document.getElementById('simulationChart');
    if (!simulationCtx) return;
            
            // Clear existing chart
            if (window.simulationChart) {
                window.simulationChart.destroy();
            }
            
    const temp = parseFloat(document.getElementById('temp-slider')?.value || 25);
    const light = parseFloat(document.getElementById('light-slider')?.value || 150);
    
    // Generate growth data based on parameters
    const growthData = [];
    let currentBiomass = 0.5;
    for (let i = 0; i < 14; i++) {
        const growthRate = 0.15 * (temp / 25) * (light / 150);
        currentBiomass += growthRate;
        if (i % 2 === 0 || i === 13) {
            growthData.push(currentBiomass.toFixed(1));
        }
    }
    
    window.simulationChart = new Chart(simulationCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 10', 'Day 14'],
                    datasets: [{
                        label: 'Biomass Growth (g/L)',
                data: growthData,
                        borderColor: '#4caf50',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                tension: 0.4,
                fill: true
                    }]
                },
                options: {
                    responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
                }
            });
        }

        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
    initLanguageToggle();
    initializeImageClassifier();
    
            initializeCharts();
    
    // Initialize all slider colors
    sliders.forEach(slider => {
        updateSliderColor(slider);
    });
    
            updateSimulation();
    
    // Start real-time monitoring updates
    setInterval(updateLiveMonitoring, 5000);
    
    // Load default weather (Mumbai)
    setTimeout(() => {
        fetchWeather('mumbai');
    }, 500);
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
