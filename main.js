// VoluntEx Main JavaScript File
// Handles all interactive functionality, animations, and user interactions

// Organization data from Excel file
const organizations = [
    {
        name: "360°kids",
        causeArea: "Youth Services",
        website: "https://www.360kids.ca/",
        email: "info@360kids.ca",
        phone: "905-475-6694",
        address: "10415 Yonge St, Richmond Hill, ON L4C 0Z3",
        description: "Youth ambassador programs, shelter support, and school event volunteering.",
        image: "images/logo-360-1.webp"
    },
    {
        name: "Big Brothers Big Sisters of Peel York",
        causeArea: "Youth Mentorship",
        website: "https://peelyork.bigbrothersbigsisters.ca/",
        email: "info.peelyork@bigbrothersbigsisters.ca",
        phone: "(905) 457-7288",
        address: "350 Industrial Parkway S. Aurora ON Canada L4G 3V7",
        description: "CALL FIRST: Offers in-school mentoring and event volunteering for high school students (16+).",
        image: "https://kimi-web-img.moonshot.cn/img/portraitpal.ai/cd52d2d3c3134e66574bf1369094dda00f2ebeae.jpg"
    },
    {
        name: "Jericho Youth Services",
        causeArea: "Youth Programs",
        website: "https://jerichoyouthservices.org/",
        email: "info@jerichoys.org",
        phone: "905-722-5540",
        address: "20849 Dalton Rd, Keswick, ON L4P 3E9",
        description: "After-school program helpers and recreational activity support for youth.",
        image: "https://kimi-web-img.moonshot.cn/img/jcpportraits.com/839deb1b64843e369330496136d57438cf093969.jpg"
    },
{
  name: "Food Bank of York Region",
  causeArea: "Food Security",
  website: "https://www.fbyr.ca/",
  email: "volunteer@fbyr.ca",
  phone: "437-317-3710",
  address: "8201 Keele Street, Units 5 & 6, Concord, ON Canada L4K 1Z4",
  description: "Students can volunteer in warehouse roles, sorting, packing, and food delivery support.",
  image: "https://kimi-web-img.moonshot.cn/img/www.centraltexasfoodbank.org/1731749299f1ac9ea67af5e1c51e2533bfaba7ee.jpg"
},
    {
        name: "Ontario SPCA – York Region Animal Centre",
        causeArea: "Animal Welfare",
        website: "https://ontariospca.ca/volunteer/",
        email: "info@ontariospca.ca",
        phone: "(888) 668-7722",
        address: "16586 Woodbine Ave, Stouffville, ON L4A 2W3",
        description: "Student roles in cat/dog care, adoption events, and fundraising drives.",
        image: "https://kimi-web-img.moonshot.cn/img/cdn.sanity.io/22a7a4e5e1d9bc6cc500b4e671d428da6c8dd8fd.jpg"
    },
    {
        name: "CMHA York Region & South Simcoe",
        causeArea: "Mental Health",
        website: "https://cmha-yr.on.ca/",
        email: "yorkregion@cmha-yr.on.ca",
        phone: "905-841-3977",
        address: "15150 Yonge St Suite 201, Aurora, ON L4G 1M2",
        description: "Supports youth engagement panels, community events, and peer support.",
        image: "https://kimi-web-img.moonshot.cn/img/images.squarespace-cdn.com/bf0db8737e4ede91184d781d9376aa9f0cd2a75e.png"
    },
    {
        name: "CHATS",
        causeArea: "Senior Support",
        website: "https://www.chats.on.ca/",
        email: "volunteer@chats.on.ca",
        phone: "905-713-3494",
        address: "10132 Yonge St, Richmond Hill, ON L4C 1T6",
        description: "Volunteers deliver meals, assist seniors, and help at adult day programs.",
        image: "https://kimi-web-img.moonshot.cn/img/discoveryvillages.com/3a3194fef234b60854544bc9b6d9cff89814b6bd.jpg"
    },
    {
  name: "ClearWater Farm",
  causeArea: "Environmental",
  website: "https://clearwaterfarm.ca/",
  email: "",
  phone: "(416) 543-0401",
  address: "1614 Metro Rd N, Willow Beach, ON L0E 1S0",
  description: "Hands-on farming and sustainability education roles for students.",
  image: "https://kimi-web-img.moonshot.cn/img/motionarray.imgix.net/c3526b5c23c30802d9e85240785a0f81d4aa72c4.jpg"
}
,
    {
        name: "Yellow Brick House",
        causeArea: "Women & Children's Shelter",
        website: "https://yellowbrickhouse.org/",
        email: "info@yellowbrickhouse.org",
        phone: "905-709-0900",
        address: "52 West Beaver Creek Rd., Unit 4 Richmond Hill, ON L4B 1L9",
        description: "Youth Leadership Council, donation drives, and awareness campaigns for high school students.",
        image: "https://kimi-web-img.moonshot.cn/img/gray-kttc-prod.gtv-cdn.com/4b634a7258116ecf3fca6fad73002ecf6dafd750.png"
    },
    {
        name: "Markham Stouffville Hospital",
        causeArea: "Healthcare",
        website: "https://www.oakvalleyhealth.ca/",
        email: "",
        phone: "905-472-7373",
        address: "381 Church St, Markham, ON L3P 7P3",
        description: "High school and college volunteer programs available for ages 16+ year-round and summer.",
        image: "https://kimi-web-img.moonshot.cn/img/headshots-inc.com/3d90233c521259f04669e6893dd137ab0d06cc53.jpg"
    }
];

// Translation data
const translations = {
    en: {
        motto: "Are you ready to make real change?",
        subtitle: "Connecting students with meaningful volunteer opportunities that go beyond graduation requirements.",
        getStarted: "Get Started",
        name: "Name",
        grade: "Grade",
        fieldOfInterest: "Field of Interest",
        aboutMe: "About Me",
        findOpportunities: "Find Opportunities",
        matchedOrganizations: "Matched Organizations",
        viewDetails: "View Details",
        contactNow: "Contact Now",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        english: "English",
        french: "Français",
        home: "Home",
        about: "About",
        charities: "Charities",
        contact: "Contact"
    },
    fr: {
        motto: "Êtes-vous prêt à faire un vrai changement?",
        subtitle: "Connecter les étudiants avec des opportunités de bénévolat significatives qui vont au-delà des exigences d'obtention du diplôme.",
        getStarted: "Commencer",
        name: "Nom",
        grade: "Niveau",
        fieldOfInterest: "Domaine d'intérêt",
        aboutMe: "À propos de moi",
        findOpportunities: "Trouver des opportunités",
        matchedOrganizations: "Organisations correspondantes",
        viewDetails: "Voir les détails",
        contactNow: "Contacter maintenant",
        darkMode: "Mode sombre",
        lightMode: "Mode clair",
        english: "English",
        french: "Français",
        home: "Accueil",
        about: "À propos",
        charities: "Organisations",
        contact: "Contact"
    }
};

// Global state
let currentLanguage = 'en';
let isDarkMode = false;
let matchedOrgs = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load saved preferences
    loadUserPreferences();
    
    // Initialize components
    initializeNavigation();
    initializeDarkMode();
    initializeLanguageToggle();
    initializeAnimations();
    
    // Page-specific initializations
    const currentPage = getCurrentPage();
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'about':
            initializeAboutPage();
            break;
        case 'charities':
            initializeCharitiesPage();
            break;
        case 'contact':
            initializeContactPage();
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('about')) return 'about';
    if (path.includes('charities')) return 'charities';
    if (path.includes('contact')) return 'contact';
    return 'index';
}

function loadUserPreferences() {
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
        isDarkMode = savedDarkMode === 'true';
        applyDarkMode();
    }
    
    // Load language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        applyLanguage();
    }
}

function initializeNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
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
}

function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    if (mobileDarkModeToggle) {
        mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    updateDarkModeButton();
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    applyDarkMode();
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeButton();
}

function applyDarkMode() {
    const html = document.documentElement;
    const body = document.body;
    
    if (isDarkMode) {
        html.classList.add('dark');
        body.classList.add('dark');
        
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
            body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        }, 50);
    } else {
        html.classList.remove('dark');
        body.classList.remove('dark');
        
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
            body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        }, 50);
    }
}

function updateDarkModeButton() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
    const darkModeText = document.getElementById('darkModeText');
    const mobileDarkModeText = mobileDarkModeToggle?.querySelector('span');
    
    if (darkModeToggle && darkModeText) {
        if (isDarkMode) {
            darkModeText.textContent = translations[currentLanguage].lightMode;
            darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            darkModeText.textContent = translations[currentLanguage].darkMode;
            darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
    
    // Update mobile toggle
    if (mobileDarkModeToggle) {
        const icon = mobileDarkModeToggle.querySelector('i');
        if (isDarkMode) {
            icon.className = 'fa-solid fa-sun';
            if (mobileDarkModeText) mobileDarkModeText.textContent = translations[currentLanguage].lightMode;
        } else {
            icon.className = 'fa-solid fa-moon';
            if (mobileDarkModeText) mobileDarkModeText.textContent = translations[currentLanguage].darkMode;
        }
    }
}

// ---- Dark mode: add/remove 'dark' on <html> only ----
const root = document.documentElement; // <html>

function applyThemeFromStorage() {
  const saved = localStorage.getItem('theme');
  const shouldDark =
    saved === 'dark' ||
    (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);

  root.classList.toggle('dark', shouldDark);
}

applyThemeFromStorage();

// desktop + mobile buttons
document.getElementById('darkModeToggle')?.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
});
document.getElementById('mobileDarkModeToggle')?.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
});

function initializeLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
        updateLanguageButton();
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    applyLanguage();
    localStorage.setItem('language', currentLanguage);
    updateLanguageButton();
}

function applyLanguage() {
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
    
    updateDarkModeButton();
}

function updateLanguageButton() {
    const languageToggle = document.getElementById('languageToggle');
    const languageText = document.getElementById('languageText');
    
    if (languageToggle && languageText) {
        languageText.textContent = currentLanguage === 'en' ? 
            translations.en.french : translations.fr.english;
    }
}

function initializeAnimations() {
    // Initialize scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Homepage specific functions
function initializeHomePage() {
    initializeTypewriter();
    initializeStudentMatching();
    initializeStatistics();
}

function initializeTypewriter() {
    const mottoElement = document.getElementById('motto');
    if (mottoElement && typeof Typed !== 'undefined') {
        // Clear any existing content
        mottoElement.innerHTML = '';
        
        new Typed('#motto', {
            strings: [translations[currentLanguage].motto],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
            onComplete: () => {
                // Start subtitle animation after motto completes
                setTimeout(() => {
                    const subtitle = document.getElementById('subtitle');
                    if (subtitle) {
                        subtitle.classList.add('animate-fade-in');
                        subtitle.style.opacity = '1';
                    }
                }, 500);
            }
        });
    }
}

function initializeStudentMatching() {
    const matchingForm = document.getElementById('studentMatchingForm');
    const startMatchingBtn = document.getElementById('startMatching');
    
    if (startMatchingBtn) {
        startMatchingBtn.addEventListener('click', showMatchingForm);
    }
    
    if (matchingForm) {
        matchingForm.addEventListener('submit', handleMatchingSubmit);
    }
}

function showMatchingForm() {
    const formSection = document.getElementById('matchingFormSection');
    if (formSection) {
        formSection.classList.remove('hidden');
        formSection.scrollIntoView({ behavior: 'smooth' });
        
        // Animate form elements
        const formElements = formSection.querySelectorAll('.form-element');
        formElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-slide-up');
            }, index * 100);
        });
    }
}

function handleMatchingSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const studentData = {
        name: formData.get('name'),
        grade: formData.get('grade'),
        fieldOfInterest: formData.get('fieldOfInterest'),
        aboutMe: formData.get('aboutMe')
    };
    
    // Find matching organizations
    matchedOrgs = findMatchingOrganizations(studentData.fieldOfInterest);
    
    // Display results
    displayMatchedOrganizations(matchedOrgs, studentData);
    
    // Save student data for potential follow-up
    sessionStorage.setItem('studentData', JSON.stringify(studentData));
}

function findMatchingOrganizations(fieldOfInterest) {
    return organizations.filter(org => {
        return org.causeArea.toLowerCase().includes(fieldOfInterest.toLowerCase()) ||
               fieldOfInterest.toLowerCase().includes(org.causeArea.toLowerCase());
    });
}

function displayMatchedOrganizations(matchedOrgs, studentData) {
    const resultsSection = document.getElementById('matchingResults');
    const resultsContainer = document.getElementById('matchedOrganizations');
    
    if (!resultsSection || !resultsContainer) return;
    
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    // Show results section
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // Create organization cards
    matchedOrgs.forEach((org, index) => {
        const card = createOrganizationCard(org, index);
        resultsContainer.appendChild(card);
    });
    
    // Add personalized message
    const message = document.createElement('div');
    message.className = 'text-center mb-8';
    message.innerHTML = `
        <h3 class="text-2xl font-semibold text-gray-600 
 dark:text-white
 mb-4">
            Great news! We found ${matchedOrgs.length} organizations that match your interests.
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
            Click on any organization below to learn more and get in touch.
        </p>
    `;
    resultsContainer.insertBefore(message, resultsContainer.firstChild);
}

function createOrganizationCard(org, index) {
    const card = document.createElement('div');
    card.className = 'organization-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl';
    
    card.innerHTML = `
        <div class="relative">
            <img src="${org.image}" alt="${org.name}" class="w-full h-48 object-cover">
            <div class="absolute top-4 right-4 bg-blue-600 text-black
 dark:text-white
 px-3 py-1 rounded-full text-sm font-medium">
                ${org.causeArea}
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-600 
 dark:text-white
 mb-2">${org.name}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">${org.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                    ${org.phone}
                </span>
                <span class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                    ${org.address.split(',')[1] || 'York Region'}
                </span>
            </div>
            <div class="flex gap-3">
                <button onclick="viewOrganizationDetails('${org.name}')" 
                        class="flex-1 bg-blue-600 hover:bg-blue-700 text-black
 dark:text-white
 font-medium py-2 px-4 rounded transition-colors">
                    ${translations[currentLanguage].viewDetails}
                </button>
                <button onclick="contactOrganization('${org.email}')" 
                        class="flex-1 bg-green-600 hover:bg-green-700 text-black
 dark:text-white
 font-medium py-2 px-4 rounded transition-colors">
                    ${translations[currentLanguage].contactNow}
                </button>
            </div>
        </div>
    `;
    
    // Add staggered animation
    setTimeout(() => {
        card.classList.add('animate-slide-up');
    }, index * 100);
    
    return card;
}

function initializeStatistics() {
    // Animate statistics counters
    const stats = document.querySelectorAll('.stat-counter');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateCounter(stat, target);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

// Organization interaction functions
function viewOrganizationDetails(orgName) {
    // Store selected organization and navigate to details page
    sessionStorage.setItem('selectedOrg', orgName);
    window.location.href = 'charity-details.html';
}

function contactOrganization(email) {
    // Open contact form with pre-filled organization email
    window.location.href = `contact.html?org=${encodeURIComponent(email)}`;
}

// About page functions
function initializeAboutPage() {
    initializeTeamCards();
}

function initializeTeamCards() {
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('animate-scale-up');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('animate-scale-up');
        });
    });
}

// Charities page functions
function initializeCharitiesPage() {
    initializeOrganizationFilters();
    displayOrganizations(organizations);
}

function initializeOrganizationFilters() {
    const searchInput = document.getElementById('searchInput');
    const causeFilter = document.getElementById('causeFilter');
    const locationFilter = document.getElementById('locationFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterOrganizations);
    }
    
    if (causeFilter) {
        causeFilter.addEventListener('change', filterOrganizations);
    }
    
    if (locationFilter) {
        locationFilter.addEventListener('change', filterOrganizations);
    }
}

function filterOrganizations() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const selectedCause = document.getElementById('causeFilter')?.value || '';
    const selectedLocation = document.getElementById('locationFilter')?.value || '';
    
    const filteredOrgs = organizations.filter(org => {
        const matchesSearch = org.name.toLowerCase().includes(searchTerm) || 
                             org.description.toLowerCase().includes(searchTerm);
        const matchesCause = !selectedCause || org.causeArea === selectedCause;
        const matchesLocation = !selectedLocation || org.address.toLowerCase().includes(selectedLocation.toLowerCase());
        
        return matchesSearch && matchesCause && matchesLocation;
    });
    
    displayOrganizations(filteredOrgs);
}

function displayOrganizations(orgs) {
    const container = document.getElementById('organizationsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    orgs.forEach((org, index) => {
        const card = createOrganizationCard(org, index);
        container.appendChild(card);
    });
    
    if (orgs.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-600 mb-4">
                    No organizations found matching your criteria.
                </h3>
                <p class="text-gray-500 dark:text-gray-500">
                    Try adjusting your search or filters.
                </p>
            </div>
        `;
    }
}

// Contact page functions
function initializeContactPage() {
    initializeContactForm();
    initializeFAQ();
}

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      
    }
    
    // Pre-fill form if coming from organization contact
    const urlParams = new URLSearchParams(window.location.search);
    const orgEmail = urlParams.get('org');
    if (orgEmail) {
        const subjectField = document.getElementById('inquiry_type');
        if (subjectField) {
            subjectField.value = `Volunteer Opportunity - ${decodeURIComponent(orgEmail)}`;
        }
    }
}


function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const answer = item.querySelector('.faq-answer');
                const icon = question.querySelector('.faq-icon');
                
                if (answer && icon) {
                    answer.classList.toggle('hidden');
                    icon.classList.toggle('rotate-180');
                }
            });
        }
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 'bg-blue-600'
    } text-black
 dark:text-white
`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('animate-slide-out');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Export functions for global access
window.viewOrganizationDetails = viewOrganizationDetails;
window.contactOrganization = contactOrganization;
window.showNotification = showNotification;
