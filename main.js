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
        image: "images/bigbrotherbigsistersyork.png"
    },
    {
        name: "Jericho Youth Services",
        causeArea: "Youth Programs",
        website: "https://jerichoyouthservices.org/",
        email: "info@jerichoys.org",
        phone: "905-722-5540",
        address: "20849 Dalton Rd, Keswick, ON L4P 3E9",
        description: "After-school program helpers and recreational activity support for youth.",
        image: "images/jerichoyouth.jpg"
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
        image: "images/cmhalogo.jpg"
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
        image: "images/markhamhospital.jpg"
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

    resultsContainer.innerHTML = '';

    // Reveal section with fade+slide animation
    resultsSection.classList.remove('hidden');
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            resultsSection.style.opacity = '1';
            resultsSection.style.transform = 'translateY(0)';
        });
    });

    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // Add personalized message
    const message = document.createElement('div');
    message.className = 'col-span-full text-center mb-10';
    message.innerHTML = `
        <p class="text-lg text-blue-300 font-medium">
            We found <span class="text-white font-bold text-2xl">${matchedOrgs.length}</span> ${matchedOrgs.length === 1 ? 'organization' : 'organizations'} that match your interests.
        </p>
        <p class="text-slate-400 text-sm mt-1">Click a card to learn more or contact them directly.</p>
    `;
    resultsContainer.appendChild(message);

    // Create organization cards with staggered delay
    matchedOrgs.forEach((org, index) => {
        const card = createOrganizationCard(org, index);
        resultsContainer.appendChild(card);
    });
}

function createOrganizationCard(org, index) {
    // Cause-area badge colour map
    const causeBadgeColors = {
        'Youth Services':             'linear-gradient(135deg,#3b82f6,#2563eb)',
        'Youth Mentorship':           'linear-gradient(135deg,#06b6d4,#0891b2)',
        'Youth Programs':             'linear-gradient(135deg,#60a5fa,#3b82f6)',
        'Food Security':              'linear-gradient(135deg,#22c55e,#16a34a)',
        'Animal Welfare':             'linear-gradient(135deg,#f97316,#ea580c)',
        'Mental Health':              'linear-gradient(135deg,#a855f7,#7c3aed)',
        'Senior Support':             'linear-gradient(135deg,#f59e0b,#d97706)',
        'Environmental':              'linear-gradient(135deg,#10b981,#059669)',
        'Healthcare':                 'linear-gradient(135deg,#ef4444,#dc2626)',
        "Women & Children's Shelter": 'linear-gradient(135deg,#ec4899,#db2777)',
    };
    const badgeBg = causeBadgeColors[org.causeArea] || 'linear-gradient(135deg,#3b82f6,#6366f1)';

    const card = document.createElement('div');
    card.style.cssText = 'opacity:0;transform:translateY(30px);transition:opacity 0.5s ease,transform 0.5s ease;';
    card.className = 'organization-card vx-charity-card rounded-2xl overflow-hidden flex flex-col';
    card.style.background = 'rgba(255,255,255,0.05)';
    card.style.border = '1px solid rgba(255,255,255,0.1)';
    card.style.backdropFilter = 'blur(12px)';

    card.innerHTML = `
        <div class="relative overflow-hidden" style="height:200px;">
            <img src="${org.image}" alt="${org.name}" class="w-full h-full object-cover" style="transition:transform 0.5s ease;">
            <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(15,23,42,0.85) 0%,transparent 60%);"></div>
            <span style="position:absolute;top:14px;right:14px;background:${badgeBg};color:#fff;font-size:0.72rem;font-weight:600;padding:4px 12px;border-radius:999px;letter-spacing:0.05em;text-transform:uppercase;">
                ${org.causeArea}
            </span>
        </div>
        <div style="padding:1.5rem;display:flex;flex-direction:column;flex:1;gap:0.75rem;">
            <h3 style="font-size:1.2rem;font-weight:700;color:#fff;margin:0;">${org.name}</h3>
            <p style="color:#ffffff;font-size:0.92rem;line-height:1.55;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">${org.description}</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:auto;padding-top:0.5rem;">
                <span style="background:rgba(255,255,255,0.07);color:#e2e8f0;font-size:1.05rem;font-weight:700;padding:6px 14px;border-radius:6px;display:flex;align-items:center;gap:7px;">
                    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    ${org.phone}
                </span>
                <span style="background:rgba(255,255,255,0.07);color:#e2e8f0;font-size:1.05rem;font-weight:700;padding:6px 14px;border-radius:6px;display:flex;align-items:center;gap:7px;">
                    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    ${org.address.split(',')[1] ? org.address.split(',')[1].trim() : 'York Region'}
                </span>
            </div>
            <div style="display:flex;gap:10px;margin-top:0.5rem;">
                <button onclick="viewOrganizationDetails('${org.name}')"
                    style="flex:1;padding:10px 0;border-radius:10px;border:1px solid rgba(99,102,241,0.5);background:rgba(99,102,241,0.15);color:#a5b4fc;font-weight:600;font-size:0.9rem;cursor:pointer;transition:background 0.2s,color 0.2s;"
                    onmouseover="this.style.background='rgba(99,102,241,0.35)';this.style.color='#fff';"
                    onmouseout="this.style.background='rgba(99,102,241,0.15)';this.style.color='#a5b4fc';">
                    ${translations[currentLanguage].viewDetails}
                </button>
                <button onclick="contactOrganization('${org.name}', '${org.email}')"
                    class="vx-contact-reveal"
                    style="flex:1;padding:10px 0;border-radius:10px;border:none;background:linear-gradient(135deg,#10b981,#059669);color:#fff;font-weight:600;font-size:0.9rem;cursor:pointer;">
                    ${translations[currentLanguage].contactNow}
                </button>
            </div>
        </div>
    `;

    // Image zoom on hover
    const img = card.querySelector('img');
    card.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.07)'; });
    card.addEventListener('mouseleave', () => { img.style.transform = 'scale(1)'; });

    // Staggered fade-in
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 200 + index * 120);

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

function contactOrganization(orgName, email) {
    // Open contact form with pre-filled organization info, locked to Student Inquiry
    window.location.href = `contact.html?from=charity&orgName=${encodeURIComponent(orgName)}&org=${encodeURIComponent(email)}`;
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
    const sortBy = document.getElementById('sortBy');

    if (searchInput)  searchInput.addEventListener('input', filterOrganizations);
    if (causeFilter)  causeFilter.addEventListener('change', filterOrganizations);
    if (locationFilter) locationFilter.addEventListener('change', filterOrganizations);
    if (sortBy)       sortBy.addEventListener('change', filterOrganizations);
}

function filterOrganizations() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const selectedCause = document.getElementById('causeFilter')?.value || '';
    const selectedLocation = document.getElementById('locationFilter')?.value || '';
    const sortBy = document.getElementById('sortBy')?.value || 'name';

    let filteredOrgs = organizations.filter(org => {
        const matchesSearch = org.name.toLowerCase().includes(searchTerm) ||
                              org.description.toLowerCase().includes(searchTerm);
        const matchesCause = !selectedCause || org.causeArea === selectedCause;
        const matchesLocation = !selectedLocation || org.address.toLowerCase().includes(selectedLocation.toLowerCase());
        return matchesSearch && matchesCause && matchesLocation;
    });

    // Sort the results
    filteredOrgs.sort((a, b) => {
        if (sortBy === 'name')     return a.name.localeCompare(b.name);
        if (sortBy === 'cause')    return a.causeArea.localeCompare(b.causeArea);
        if (sortBy === 'location') {
            const cityA = a.address.split(',')[1]?.trim() || a.address;
            const cityB = b.address.split(',')[1]?.trim() || b.address;
            return cityA.localeCompare(cityB);
        }
        return 0;
    });

    displayOrganizations(filteredOrgs);
}

function displayOrganizations(orgs) {
    const container = document.getElementById('organizationsContainer');
    if (!container) return;

    // Fade existing cards out first, then rebuild
    const existingCards = container.querySelectorAll('.organization-card');
    if (existingCards.length > 0) {
        existingCards.forEach(c => {
            c.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            c.style.opacity = '0';
            c.style.transform = 'translateY(-8px)';
        });
    }

    const rebuildDelay = existingCards.length > 0 ? 220 : 0;
    setTimeout(() => {
        container.innerHTML = '';

        if (orgs.length === 0) {
            container.innerHTML = `
                <div class="col-span-full vx-empty-state">
                    <div class="vx-empty-state-icon">
                        <svg width="32" height="32" fill="none" stroke="#6366f1" stroke-width="1.5" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        </svg>
                    </div>
                    <h3>No organizations found</h3>
                    <p>No results match your current filters. Try a different search or cause area.</p>
                    <button class="vx-empty-state-btn" onclick="clearAllFilters()">Clear Filters</button>
                </div>
            `;
        } else {
            orgs.forEach((org, index) => {
                const card = createOrganizationCard(org, index);
                container.appendChild(card);
            });
        }

        updateResultsCount(orgs.length);
    }, rebuildDelay);
}

function updateResultsCount(count) {
    const el = document.getElementById('resultsCount');
    if (!el) return;
    el.style.opacity = '0';
    setTimeout(() => {
        el.textContent = count === organizations.length
            ? `Showing all ${count} organizations`
            : `Showing ${count} of ${organizations.length} organizations`;
        el.style.opacity = '1';
    }, 200);
}

function clearAllFilters() {
    const searchInput = document.getElementById('searchInput');
    const causeFilter = document.getElementById('causeFilter');
    const locationFilter = document.getElementById('locationFilter');
    if (searchInput) searchInput.value = '';
    if (causeFilter) causeFilter.value = '';
    if (locationFilter) locationFilter.value = '';
    document.querySelectorAll('.quick-filter-btn').forEach(p => p.classList.remove('active'));
    displayOrganizations(organizations);
}
window.clearAllFilters = clearAllFilters;

// Contact page functions
function initializeContactPage() {
    initializeContactForm();
    initializeFAQ();
}

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      
    }
    
    // Pre-fill grade from the home page matching form if saved
    const savedStudentData = sessionStorage.getItem('studentData');
    if (savedStudentData) {
        const studentData = JSON.parse(savedStudentData);
        if (studentData.grade) {
            const gradeField = document.getElementById('studentGrade');
            if (gradeField) {
                gradeField.value = studentData.grade;
            }
        }
    }

    // Pre-fill and lock form if coming from a charity's "Contact Now" button
    const urlParams = new URLSearchParams(window.location.search);
    const fromCharity = urlParams.get('from') === 'charity';
    const orgName = urlParams.get('orgName');

    if (fromCharity) {
        const subjectField = document.getElementById('inquiry_type');
        if (subjectField) {
            subjectField.value = 'student-inquiry';
            subjectField.disabled = true;
            // Hidden input ensures the value is submitted even though the select is disabled
            const hidden = document.createElement('input');
            hidden.type = 'hidden';
            hidden.name = 'inquiry_type';
            hidden.value = 'student-inquiry';
            subjectField.parentNode.appendChild(hidden);
        }
        if (orgName) {
            const messageField = document.getElementById('student_message');
            if (messageField) {
                const prefix = `I am interested in volunteering with ${decodeURIComponent(orgName)}. `;
                messageField.value = prefix;
                messageField.placeholder = '';

                // Move cursor to end on load
                setTimeout(() => messageField.setSelectionRange(prefix.length, prefix.length), 50);

                // Restore prefix if user deletes into it (e.g. select-all + delete)
                messageField.addEventListener('input', function() {
                    if (!this.value.startsWith(prefix)) {
                        this.value = prefix;
                        this.setSelectionRange(prefix.length, prefix.length);
                    }
                });

                // Block backspace/delete at the prefix boundary
                messageField.addEventListener('keydown', function(e) {
                    const s = this.selectionStart;
                    const e2 = this.selectionEnd;
                    if (e.key === 'Backspace' && s <= prefix.length && e2 <= prefix.length) {
                        e.preventDefault();
                    }
                    if (e.key === 'Delete' && s < prefix.length && e2 <= prefix.length) {
                        e.preventDefault();
                    }
                });

                // Stop cursor being placed inside the prefix
                messageField.addEventListener('click', function() {
                    if (this.selectionStart < prefix.length) {
                        this.setSelectionRange(prefix.length, prefix.length);
                    }
                });
            }
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

// Navbar scroll glow
(function() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
})();
