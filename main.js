// VoluntEx Main JavaScript File
// Handles all interactive functionality, animations, and user interactions

// Organization data from Excel file
const organizations = [
    {
        name: "360°kids",
        nameFr: "360°kids",
        causeArea: "Youth Services",
        causeAreaFr: "Services à la jeunesse",
        website: "https://www.360kids.ca/",
        email: "info@360kids.ca",
        phone: "905-475-6694",
        address: "10415 Yonge St, Richmond Hill, ON L4C 0Z3",
        description: "Youth ambassador programs, shelter support, and school event volunteering.",
        descriptionFr: "Programmes d'ambassadeurs jeunesse, soutien aux refuges et bénévolat lors d'événements scolaires.",
        image: "images/logo-360-1.webp"
    },
    {
        name: "Big Brothers Big Sisters of Peel York",
        nameFr: "Grands Frères Grandes Sœurs de Peel York",
        causeArea: "Youth Mentorship",
        causeAreaFr: "Mentorat jeunesse",
        website: "https://peelyork.bigbrothersbigsisters.ca/",
        email: "info.peelyork@bigbrothersbigsisters.ca",
        phone: "(905) 457-7288",
        address: "350 Industrial Parkway S. Aurora ON Canada L4G 3V7",
        description: "CALL FIRST: Offers in-school mentoring and event volunteering for high school students (16+).",
        descriptionFr: "APPELER D'ABORD : Offre du mentorat en milieu scolaire et du bénévolat lors d'événements pour les élèves du secondaire (16 ans et plus).",
        image: "images/bigbrotherbigsistersyork.png"
    },
    {
        name: "Jericho Youth Services",
        nameFr: "Services Jeunesse Jericho",
        causeArea: "Youth Programs",
        causeAreaFr: "Programmes jeunesse",
        website: "https://jerichoyouthservices.org/",
        email: "info@jerichoys.org",
        phone: "905-722-5540",
        address: "20849 Dalton Rd, Keswick, ON L4P 3E9",
        description: "After-school program helpers and recreational activity support for youth.",
        descriptionFr: "Aide aux programmes parascolaires et soutien aux activités récréatives pour les jeunes.",
        image: "images/jerichoyouth.jpg"
    },
    {
        name: "Georgina Community Food Pantry",
        nameFr: "Banque alimentaire communautaire de Georgina",
        causeArea: "Food Security",
        causeAreaFr: "Sécurité alimentaire",
        website: "https://georginafoodpantry.com/",
        email: "",
        phone: "(905) 596-0557",
        address: "Keswick, Georgina, ON",
        description: "Food pantry serving Georgina with food distribution, the Keswick Community Fridge, and volunteer-driven community support programs.",
        descriptionFr: "Banque alimentaire au service de Georgina avec distribution alimentaire, le frigo communautaire de Keswick et des programmes de soutien bénévoles.",
        image: "https://img1.wsimg.com/isteam/ip/34b73412-0597-49cb-b2da-00787a4649d6/blob-3ae4b4b.png/:/rs=h:151,cg:true,m/qt=q:95"
    },
    {
        name: "Food Bank of York Region",
        nameFr: "Banque alimentaire de la région de York",
        causeArea: "Food Security",
        causeAreaFr: "Sécurité alimentaire",
        website: "https://www.fbyr.ca/",
        email: "volunteer@fbyr.ca",
        phone: "437-317-3710",
        address: "8201 Keele Street, Units 5 & 6, Concord, ON Canada L4K 1Z4",
        description: "Students can volunteer in warehouse roles, sorting, packing, and food delivery support.",
        descriptionFr: "Les étudiants peuvent faire du bénévolat dans des rôles d'entrepôt, de tri, d'emballage et de livraison de nourriture.",
        image: "https://kimi-web-img.moonshot.cn/img/www.centraltexasfoodbank.org/1731749299f1ac9ea67af5e1c51e2533bfaba7ee.jpg"
    },
    {
        name: "Ontario SPCA – York Region Animal Centre",
        nameFr: "SPCA de l'Ontario – Centre animalier de la région de York",
        causeArea: "Animal Welfare",
        causeAreaFr: "Bien-être animal",
        website: "https://ontariospca.ca/volunteer/",
        email: "info@ontariospca.ca",
        phone: "(888) 668-7722",
        address: "16586 Woodbine Ave, Stouffville, ON L4A 2W3",
        description: "Student roles in cat/dog care, adoption events, and fundraising drives.",
        descriptionFr: "Rôles étudiants dans les soins aux chats et chiens, les événements d'adoption et les campagnes de collecte de fonds.",
        image: "https://kimi-web-img.moonshot.cn/img/cdn.sanity.io/22a7a4e5e1d9bc6cc500b4e671d428da6c8dd8fd.jpg"
    },
    {
        name: "CMHA York Region & South Simcoe",
        nameFr: "ACSM Région de York et South Simcoe",
        causeArea: "Mental Health",
        causeAreaFr: "Santé mentale",
        website: "https://cmha-yr.on.ca/",
        email: "yorkregion@cmha-yr.on.ca",
        phone: "905-841-3977",
        address: "15150 Yonge St Suite 201, Aurora, ON L4G 1M2",
        description: "Supports youth engagement panels, community events, and peer support.",
        descriptionFr: "Soutient les panels d'engagement jeunesse, les événements communautaires et l'entraide entre pairs.",
        image: "images/cmhalogo.jpg"
    },
    {
        name: "CHATS",
        nameFr: "CHATS",
        causeArea: "Senior Support",
        causeAreaFr: "Soutien aux aînés",
        website: "https://www.chats.on.ca/",
        email: "volunteer@chats.on.ca",
        phone: "905-713-3494",
        address: "10132 Yonge St, Richmond Hill, ON L4C 1T6",
        description: "Volunteers deliver meals, assist seniors, and help at adult day programs.",
        descriptionFr: "Les bénévoles livrent des repas, aident les aînés et participent aux programmes de jour pour adultes.",
        image: "https://kimi-web-img.moonshot.cn/img/discoveryvillages.com/3a3194fef234b60854544bc9b6d9cff89814b6bd.jpg"
    },
    {
        name: "ClearWater Farm",
        nameFr: "Ferme ClearWater",
        causeArea: "Environmental",
        causeAreaFr: "Environnement",
        website: "https://clearwaterfarm.ca/",
        email: "",
        phone: "(416) 543-0401",
        address: "1614 Metro Rd N, Willow Beach, ON L0E 1S0",
        description: "An ecological hub on Lake Simcoe engaging youth through science, technology, and the arts.",
        descriptionFr: "Un carrefour écologique sur le lac Simcoe qui engage les jeunes à travers les sciences, la technologie et les arts.",
        image: "https://clearwaterfarm.ca/wp-content/uploads/2023/06/CW-Logo-Horizontal-WHITE.png",
        imageFit: "contain",
        imageBg: "#0d2b5e"
    },
    {
        name: "Yellow Brick House",
        nameFr: "Maison Yellow Brick",
        causeArea: "Women & Children's Shelter",
        causeAreaFr: "Refuge femmes et enfants",
        website: "https://yellowbrickhouse.org/",
        email: "info@yellowbrickhouse.org",
        phone: "905-709-0900",
        address: "52 West Beaver Creek Rd., Unit 4 Richmond Hill, ON L4B 1L9",
        description: "Youth Leadership Council, donation drives, and awareness campaigns for high school students.",
        descriptionFr: "Conseil de leadership jeunesse, collectes de dons et campagnes de sensibilisation pour les élèves du secondaire.",
        image: "https://kimi-web-img.moonshot.cn/img/gray-kttc-prod.gtv-cdn.com/4b634a7258116ecf3fca6fad73002ecf6dafd750.png"
    },
    {
        name: "Markham Stouffville Hospital",
        nameFr: "Hôpital Markham Stouffville",
        causeArea: "Healthcare",
        causeAreaFr: "Soins de santé",
        website: "https://www.oakvalleyhealth.ca/",
        email: "",
        phone: "905-472-7373",
        address: "381 Church St, Markham, ON L3P 7P3",
        description: "High school and college volunteer programs available for ages 16+ year-round and summer.",
        descriptionFr: "Programmes de bénévolat pour lycéens et collégiens disponibles pour les 16 ans et plus, toute l'année et en été.",
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
        contact: "Contact",
        studentsMatchedBadge: "2,500+ students matched",
        matchingFormTitle: "Find the perfect volunteering opportunity for YOU",
        matchingFormSubtitle: "Pick your grade and what you're interested in — we'll show you matching organizations.",
        selectGrade: "Select your grade",
        grade9: "Grade 9",
        grade10: "Grade 10",
        grade11: "Grade 11",
        grade12: "Grade 12",
        gradeOther: "Other",
        selectAField: "Select a field",
        optYouthServices: "Youth Services & Mentorship",
        optFoodSecurity: "Food Security & Nutrition",
        optAnimalWelfare: "Animal Welfare & Care",
        optMentalHealth: "Mental Health & Wellness",
        optSeniorSupport: "Senior Support & Care",
        optEnvironmental: "Environmental & Sustainability",
        optHealthcare: "Healthcare & Medical",
        optWomensServices: "Women & Children's Services",
        yourMatches: "Your Matches",
        impactTitle: "Making a Real Impact",
        impactSubtitle: "Numbers that show the difference we're making together",
        studentsMatched: "Students Matched",
        partnerOrganizations: "Partner Organizations",
        volunteerHoursCompleted: "Volunteer Hours Completed",
        howItWorks: "How It Works",
        howItWorksSubtitle: "Three simple steps to find your perfect volunteer opportunity",
        step1Title: "Tell Us About Yourself",
        step1Desc: "Share your interests, grade level, and what you're passionate about",
        step2Title: "Get Matched",
        step2Desc: "Our system finds organizations that align with your interests and availability",
        step3Title: "Make an Impact",
        step3Desc: "Connect with organizations and start making a real difference in your community",
        featuredOrganizations: "Featured Organizations",
        featuredSubtitle: "Some of our amazing partner organizations making a difference",
        seniorSupport: "Senior Support",
        carouselFoodDesc: "Fighting food insecurity across York Region",
        carouselSpcaDesc: "Caring for animals in need",
        carouselCmhaDesc: "Supporting mental health and wellness",
        carouselChatsDesc: "Supporting seniors in our community",
        contactMessagePrefix: "I am interested in volunteering with",
        footerTagline: "Connecting students with meaningful volunteer opportunities across York Region, Ontario",
        footerCopy: "© 2024 VoluntEx. All rights reserved. | Empowering the next generation of volunteers.",
        charitiesHeroTitle: "Find Your Perfect Match",
        charitiesHeroSubtitle: "Discover amazing non-profit organizations in York Region that align with your passions and interests. Each organization offers unique opportunities to make a real difference in your community.",
        searchOrganizations: "Search Organizations",
        searchPlaceholder: "Search by name or description...",
        causeArea: "Cause Area",
        allCauses: "All Causes",
        causeYouthServices: "Youth Services",
        causeYouthMentorship: "Youth Mentorship",
        causeFoodSecurity: "Food Security",
        causeAnimalWelfare: "Animal Welfare",
        causeMentalHealth: "Mental Health",
        causeSeniorSupport: "Senior Support",
        causeEnvironmental: "Environmental",
        causeHealthcare: "Healthcare",
        causeWomens: "Women & Children's Shelter",
        locationLabel: "Location",
        allLocations: "All Locations",
        quickFilters: "Quick filters:",
        foodSecurity: "Food Security",
        animalWelfare: "Animal Welfare",
        youthServices: "Youth Services",
        mentalHealth: "Mental Health",
        organizationsTitle: "Organizations",
        showingAllOrgs: "Showing all organizations",
        sortByLabel: "Sort by:",
        sortNameAZ: "Name (A-Z)",
        sortLocation: "Location",
        loadMoreOrgs: "Load More Organizations",
        nonprofitCTA: "Are you a non-profit organization?",
        nonprofitCTADesc: "Join our network of organizations and connect with passionate, dedicated student volunteers who want to make a real difference.",
        addYourOrg: "Add Your Organization",
        learnMoreAboutUs: "Learn More About Us",
        contactHeroTitle: "Get In Touch",
        contactHeroSubtitle: "We're here to help students, parents, educators, and organizations connect for meaningful volunteer opportunities. Reach out with any questions, suggestions, or partnership inquiries.",
        sendUsMessage: "Send us a message",
        firstName: "First Name",
        lastName: "Last Name",
        emailAddress: "E-Mail Address",
        phoneNumber: "Phone Number",
        phoneOptional: "Optional, but helps charities contact you faster.",
        subjectLabel: "Subject",
        selectTopic: "Select a topic",
        optStudentInquiry: "Student Inquiry",
        optParentInquiry: "Parent Inquiry",
        optOrgPartnership: "Organization Partnership",
        optTechSupport: "Technical Support",
        optGeneralQuestion: "General Question",
        optFeedback: "Feedback & Suggestions",
        messageLabel: "Message",
        messagePlaceholder: "Tell us how we can help you...",
        newsletterOptIn: "I'd like to receive updates about new volunteer opportunities and VoluntEx news.",
        sendMessage: "Send Message",
        generalInquiries: "General Inquiries",
        studentSupportLabel: "Student Support",
        responseWithin24: "Response within 24 hours",
        orgPartnerships: "Organization Partnerships",
        joinNetwork: "Join our network of 25+ organizations",
        responseTimes: "Response Times",
        responseTimeGeneral: "• General inquiries: Within 24 hours",
        responseTimeStudent: "• Student support: Within 12 hours",
        responseTimeTechnical: "• Technical issues: Within 6 hours",
        responseTimePartnership: "• Partnership requests: Within 48 hours",
        faqTitle: "Frequently Asked Questions",
        faqSubtitle: "Quick answers to common questions about volunteering through VoluntEx",
        faq1Q: "How do I start finding volunteer opportunities?",
        faq1A: "Getting started is easy! Click the \"Get Started\" button on our homepage and fill out our simple matching form. Tell us about your interests, grade level, and what causes you're passionate about. We'll then show you organizations that align with your preferences.",
        faq2Q: "Is VoluntEx free to use?",
        faq2A: "Yes! VoluntEx is completely free for students and volunteers. We believe that finding meaningful volunteer opportunities should never come with a cost barrier. Our mission is to connect students with organizations that need their help.",
        faq3Q: "What if I don't see any organizations in my area?",
        faq3A: "We're constantly expanding our network of partner organizations. If you don't see opportunities in your specific area of York Region, contact us at students@voluntex.org. We may know of additional opportunities or can help you find organizations that aren't yet in our system.",
        faq4Q: "Can I volunteer if I'm not in high school yet?",
        faq4A: "Absolutely! While our platform is designed with Ontario's 40-hour graduation requirement in mind, we welcome students of all ages who want to make a difference. Many organizations have opportunities for middle school students and even younger volunteers with parental supervision.",
        faq5Q: "How do I track my volunteer hours?",
        faq5A: "Each organization you volunteer with will provide you with documentation of your hours. We also recommend keeping your own log. Many schools provide volunteer hour tracking sheets, or you can create your own simple spreadsheet. Make sure to get signatures from supervisors at the organizations where you volunteer.",
        faq6Q: "What if I want to volunteer with multiple organizations?",
        faq6A: "That's wonderful! We encourage exploring different causes and organizations. You can absolutely volunteer with multiple organizations simultaneously or try different ones to find what resonates most with you. Each experience contributes to your growth and community impact.",
        hoursTrackerTitle: "Volunteer Hours Tracker",
        hoursTrackerSubtitle: "Keep track of your progress toward the 40-hour graduation requirement",
        trackYourProgress: "Track Your Progress",
        currentHoursLabel: "Current Hours Completed",
        hoursRemainingLabel: "hours remaining",
        completeLabel: "Complete",
        proTips: "💡 Pro Tips:",
        proTip1: "• Aim to complete your hours gradually rather than all at once",
        proTip2: "• Try different types of volunteer work to discover your passions",
        proTip3: "• Keep detailed records with supervisor signatures",
        proTip4: "• Consider continuing to volunteer even after meeting the requirement",
        graduationKeepGoing: "Keep going! You're on track for graduation.",
        graduationAlmostThere: "Great progress! You're almost there!",
        graduationComplete: "🎉 Congratulations! You've met the graduation requirement!",
        ourStoryPill: "Our Story",
        aboutHeroTitle: "About VoluntEx",
        aboutHeroSubtitle: "We're on a mission to transform how Ontario students discover and engage with volunteer opportunities, creating meaningful connections that last beyond graduation requirements.",
        howWeStartedPill: "How We Started",
        ourStoryHeading: "Our Story",
        ourStoryP1: "VoluntEx was born from a simple observation: while Ontario's 40-hour volunteer requirement for high school graduation is well-intentioned, too many students treat it as a box to check rather than an opportunity for genuine growth and community impact.",
        ourStoryP2: "We watched as students scrambled to find any volunteer opportunity in their final year, often ending up in roles that didn't align with their interests or provide meaningful experiences. Meanwhile, incredible non-profit organizations in York Region struggled to find dedicated, passionate young volunteers.",
        ourStoryP3: "That's when we realized the problem wasn't the requirement itself — it was the disconnect between students' passions and the available opportunities. VoluntEx bridges that gap.",
        whatDrivesUsPill: "What Drives Us",
        missionVisionTitle: "Our Mission & Vision",
        missionTitle: "Our Mission",
        missionDesc: "To connect Ontario students with volunteer opportunities that align with their passions, skills, and career aspirations, transforming the graduation requirement into a launching pad for lifelong civic engagement and personal growth.",
        visionTitle: "Our Vision",
        visionDesc: "A future where every student graduates not just with 40 volunteer hours, but with meaningful experiences, new skills, and a genuine passion for community service that continues throughout their lives.",
        thePeoplePill: "The People",
        meetOurTeam: "Meet Our Team",
        teamSubtitle: "The passionate individuals behind VoluntEx's mission",
        rezaRole: "Founder & Executive Director",
        rezaBio: "Founder of VoluntEx. Mohammadreza started the platform after noticing how many students were asking where they could volunteer but didn't know where to look. He leads the organization's direction and works on developing a platform that helps students find meaningful volunteer opportunities and connect with charities in a clear and accessible way.",
        shayanRole: "Co-Founder & Head of Technology",
        shayanBio: "Co-founder of VoluntEx and leader of the platform's technology development. Shayan helps build and improve the website, making sure students can easily connect with meaningful volunteer opportunities in a smooth and reliable way.",
        paniRole: "Co-Founder & Head of Communications",
        paniBio: "Co-founder of VoluntEx and lead communicator for the organization's outreach and messaging. Pani helps share our mission, strengthen community connections, and ensure students and partners clearly understand the impact of volunteering.",
        whatWeStandForPill: "What We Stand For",
        coreValuesTitle: "Our Core Values",
        value1Title: "Purpose-Driven",
        value1Desc: "Every connection we make serves a greater purpose of building stronger communities.",
        value2Title: "Student-Centered",
        value2Desc: "We prioritize students' interests, growth, and long-term development in everything we do.",
        value3Title: "Authentic Connections",
        value3Desc: "We believe in genuine relationships between students and organizations that create lasting impact.",
        value4Title: "Continuous Growth",
        value4Desc: "We're always learning and improving to better serve students and our community partners.",
        byTheNumbersPill: "By The Numbers",
        ourImpactTitle: "Our Impact So Far",
        ourImpactSubtitle: "The numbers tell the story of the difference we're making together",
        studentsMatchedLabel: "Students Matched",
        studentsMatchedDesc: "With perfect volunteer opportunities",
        partnerOrgsLabel: "Partner Organizations",
        partnerOrgsDesc: "Across York Region",
        volunteerHoursLabel: "Volunteer Hours",
        volunteerHoursDesc: "Completed with passion",
        satisfactionRateLabel: "Satisfaction Rate",
        satisfactionRateDesc: "From students and organizations",
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
        matchedOrganizations: "Organismes correspondants",
        viewDetails: "Voir les détails",
        contactNow: "Contacter maintenant",
        darkMode: "Mode sombre",
        lightMode: "Mode clair",
        english: "English",
        french: "Français",
        home: "Accueil",
        about: "À propos",
        charities: "Organismes",
        contact: "Contact",
        studentsMatchedBadge: "2 500+ étudiants jumelés",
        matchingFormTitle: "Trouvez l'opportunité de bénévolat parfaite pour VOUS",
        matchingFormSubtitle: "Choisissez votre niveau et ce qui vous intéresse — nous vous montrerons les organismes correspondants.",
        selectGrade: "Sélectionnez votre niveau",
        grade9: "9e année",
        grade10: "10e année",
        grade11: "11e année",
        grade12: "12e année",
        gradeOther: "Autre",
        selectAField: "Sélectionnez un domaine",
        optYouthServices: "Services à la jeunesse et mentorat",
        optFoodSecurity: "Sécurité alimentaire et nutrition",
        optAnimalWelfare: "Bien-être animal et soins",
        optMentalHealth: "Santé mentale et bien-être",
        optSeniorSupport: "Soutien aux aînés et soins",
        optEnvironmental: "Environnement et durabilité",
        optHealthcare: "Soins de santé et médical",
        optWomensServices: "Services aux femmes et aux enfants",
        yourMatches: "Vos correspondances",
        impactTitle: "Un impact réel",
        impactSubtitle: "Des chiffres qui montrent la différence que nous faisons ensemble",
        studentsMatched: "Étudiants jumelés",
        partnerOrganizations: "Organismes partenaires",
        volunteerHoursCompleted: "Heures de bénévolat complétées",
        howItWorks: "Comment ça fonctionne",
        howItWorksSubtitle: "Trois étapes simples pour trouver votre opportunité de bénévolat parfaite",
        step1Title: "Parlez-nous de vous",
        step1Desc: "Partagez vos intérêts, votre niveau scolaire et vos passions",
        step2Title: "Trouvez votre correspondance",
        step2Desc: "Notre système trouve des organismes qui correspondent à vos intérêts et à votre disponibilité",
        step3Title: "Faites une différence",
        step3Desc: "Connectez-vous avec des organismes et commencez à faire une vraie différence dans votre communauté",
        featuredOrganizations: "Organismes en vedette",
        featuredSubtitle: "Quelques-uns de nos incroyables organismes partenaires qui font une différence",
        seniorSupport: "Soutien aux aînés",
        carouselFoodDesc: "Lutter contre l'insécurité alimentaire dans la région de York",
        carouselSpcaDesc: "Prendre soin des animaux dans le besoin",
        carouselCmhaDesc: "Soutenir la santé mentale et le bien-être",
        carouselChatsDesc: "Soutenir les aînés dans notre communauté",
        contactMessagePrefix: "Je suis intéressé(e) à faire du bénévolat avec",
        footerTagline: "Connecter les étudiants avec des opportunités de bénévolat significatives à travers la région de York, Ontario",
        footerCopy: "© 2024 VoluntEx. Tous droits réservés. | Donnons pouvoir à la prochaine génération de bénévoles.",
        charitiesHeroTitle: "Trouvez votre correspondance parfaite",
        charitiesHeroSubtitle: "Découvrez d'incroyables organismes à but non lucratif dans la région de York qui correspondent à vos passions et à vos intérêts. Chaque organisme offre des opportunités uniques de faire une vraie différence dans votre communauté.",
        searchOrganizations: "Rechercher des organismes",
        searchPlaceholder: "Rechercher par nom ou description...",
        causeArea: "Domaine de cause",
        allCauses: "Toutes les causes",
        causeYouthServices: "Services à la jeunesse",
        causeYouthMentorship: "Mentorat jeunesse",
        causeFoodSecurity: "Sécurité alimentaire",
        causeAnimalWelfare: "Bien-être animal",
        causeMentalHealth: "Santé mentale",
        causeSeniorSupport: "Soutien aux aînés",
        causeEnvironmental: "Environnement",
        causeHealthcare: "Soins de santé",
        causeWomens: "Refuge femmes et enfants",
        locationLabel: "Lieu",
        allLocations: "Tous les lieux",
        quickFilters: "Filtres rapides :",
        foodSecurity: "Sécurité alimentaire",
        animalWelfare: "Bien-être animal",
        youthServices: "Services jeunesse",
        mentalHealth: "Santé mentale",
        organizationsTitle: "Organismes",
        showingAllOrgs: "Affichage de tous les organismes",
        sortByLabel: "Trier par :",
        sortNameAZ: "Nom (A-Z)",
        sortLocation: "Lieu",
        loadMoreOrgs: "Charger plus d'organismes",
        nonprofitCTA: "Êtes-vous un organisme à but non lucratif?",
        nonprofitCTADesc: "Rejoignez notre réseau d'organismes et connectez-vous avec des bénévoles étudiants passionnés et dévoués qui veulent faire une vraie différence.",
        addYourOrg: "Ajoutez votre organisme",
        learnMoreAboutUs: "En savoir plus sur nous",
        contactHeroTitle: "Contactez-nous",
        contactHeroSubtitle: "Nous sommes là pour aider les étudiants, les parents, les éducateurs et les organismes à se connecter pour des opportunités de bénévolat significatives. Contactez-nous pour toutes questions, suggestions ou demandes de partenariat.",
        sendUsMessage: "Envoyez-nous un message",
        firstName: "Prénom",
        lastName: "Nom de famille",
        emailAddress: "Adresse courriel",
        phoneNumber: "Numéro de téléphone",
        phoneOptional: "Optionnel, mais aide les organismes à vous contacter plus rapidement.",
        subjectLabel: "Sujet",
        selectTopic: "Sélectionnez un sujet",
        optStudentInquiry: "Demande d'étudiant",
        optParentInquiry: "Demande de parent",
        optOrgPartnership: "Partenariat organisationnel",
        optTechSupport: "Soutien technique",
        optGeneralQuestion: "Question générale",
        optFeedback: "Commentaires et suggestions",
        messageLabel: "Message",
        messagePlaceholder: "Dites-nous comment nous pouvons vous aider...",
        newsletterOptIn: "Je souhaite recevoir des mises à jour sur les nouvelles opportunités de bénévolat et les nouvelles de VoluntEx.",
        sendMessage: "Envoyer le message",
        generalInquiries: "Demandes générales",
        studentSupportLabel: "Soutien aux étudiants",
        responseWithin24: "Réponse dans les 24 heures",
        orgPartnerships: "Partenariats organisationnels",
        joinNetwork: "Rejoignez notre réseau de 25+ organismes",
        responseTimes: "Délais de réponse",
        responseTimeGeneral: "• Demandes générales : Dans les 24 heures",
        responseTimeStudent: "• Soutien aux étudiants : Dans les 12 heures",
        responseTimeTechnical: "• Problèmes techniques : Dans les 6 heures",
        responseTimePartnership: "• Demandes de partenariat : Dans les 48 heures",
        faqTitle: "Questions fréquentes",
        faqSubtitle: "Réponses rapides aux questions courantes sur le bénévolat via VoluntEx",
        faq1Q: "Comment commencer à trouver des opportunités de bénévolat?",
        faq1A: "C'est facile de commencer! Cliquez sur le bouton « Commencer » sur notre page d'accueil et remplissez notre simple formulaire de correspondance. Parlez-nous de vos intérêts, de votre niveau scolaire et des causes qui vous passionnent. Nous vous montrerons ensuite les organismes qui correspondent à vos préférences.",
        faq2Q: "VoluntEx est-il gratuit?",
        faq2A: "Oui! VoluntEx est entièrement gratuit pour les étudiants et les bénévoles. Nous croyons que trouver des opportunités de bénévolat significatives ne devrait jamais avoir un obstacle financier. Notre mission est de connecter les étudiants avec des organismes qui ont besoin de leur aide.",
        faq3Q: "Que faire si je ne vois pas d'organismes dans ma région?",
        faq3A: "Nous élargissons constamment notre réseau d'organismes partenaires. Si vous ne voyez pas d'opportunités dans votre région spécifique de York, contactez-nous à students@voluntex.org. Nous pourrions connaître des opportunités supplémentaires ou vous aider à trouver des organismes qui ne sont pas encore dans notre système.",
        faq4Q: "Puis-je faire du bénévolat si je ne suis pas encore au secondaire?",
        faq4A: "Absolument! Bien que notre plateforme soit conçue avec l'exigence de 40 heures de bénévolat pour l'obtention du diplôme en Ontario, nous accueillons les étudiants de tous âges qui veulent faire une différence. De nombreux organismes ont des opportunités pour les élèves du collège et même pour les bénévoles plus jeunes avec supervision parentale.",
        faq5Q: "Comment puis-je suivre mes heures de bénévolat?",
        faq5A: "Chaque organisme pour lequel vous faites du bénévolat vous fournira une documentation de vos heures. Nous recommandons également de tenir votre propre journal. De nombreuses écoles fournissent des feuilles de suivi des heures de bénévolat, ou vous pouvez créer votre propre tableur simple. Assurez-vous d'obtenir les signatures des superviseurs des organismes où vous faites du bénévolat.",
        faq6Q: "Que faire si je veux faire du bénévolat dans plusieurs organismes?",
        faq6A: "C'est merveilleux! Nous encourageons l'exploration de différentes causes et organismes. Vous pouvez absolument faire du bénévolat dans plusieurs organismes simultanément ou en essayer différents pour trouver ce qui vous correspond le mieux. Chaque expérience contribue à votre croissance et à votre impact communautaire.",
        hoursTrackerTitle: "Suivi des heures de bénévolat",
        hoursTrackerSubtitle: "Suivez vos progrès vers l'exigence de 40 heures pour l'obtention du diplôme",
        trackYourProgress: "Suivez vos progrès",
        currentHoursLabel: "Heures actuellement complétées",
        hoursRemainingLabel: "heures restantes",
        completeLabel: "Complété",
        proTips: "💡 Conseils pratiques :",
        proTip1: "• Visez à compléter vos heures progressivement plutôt que tout à la fois",
        proTip2: "• Essayez différents types de travail bénévole pour découvrir vos passions",
        proTip3: "• Conservez des dossiers détaillés avec les signatures des superviseurs",
        proTip4: "• Envisagez de continuer à faire du bénévolat même après avoir satisfait à l'exigence",
        graduationKeepGoing: "Continuez! Vous êtes sur la bonne voie pour l'obtention du diplôme.",
        graduationAlmostThere: "Excellent progrès! Vous y êtes presque!",
        graduationComplete: "🎉 Félicitations! Vous avez satisfait à l'exigence d'obtention du diplôme!",
        ourStoryPill: "Notre histoire",
        aboutHeroTitle: "À propos de VoluntEx",
        aboutHeroSubtitle: "Nous avons pour mission de transformer la façon dont les étudiants de l'Ontario découvrent et s'engagent dans des opportunités de bénévolat, en créant des connexions significatives qui durent au-delà des exigences d'obtention du diplôme.",
        howWeStartedPill: "Comment nous avons commencé",
        ourStoryHeading: "Notre histoire",
        ourStoryP1: "VoluntEx est né d'une simple observation : bien que l'exigence de 40 heures de bénévolat de l'Ontario pour l'obtention du diplôme du secondaire soit bien intentionnée, trop d'étudiants la traitent comme une case à cocher plutôt que comme une opportunité de croissance authentique et d'impact communautaire.",
        ourStoryP2: "Nous avons observé des étudiants se précipiter pour trouver n'importe quelle opportunité de bénévolat lors de leur dernière année, finissant souvent dans des rôles qui ne correspondaient pas à leurs intérêts ou ne leur offraient pas d'expériences significatives. Pendant ce temps, d'incroyables organismes à but non lucratif de la région de York peinent à trouver de jeunes bénévoles dévoués et passionnés.",
        ourStoryP3: "C'est alors que nous avons réalisé que le problème n'était pas l'exigence elle-même — c'était le fossé entre les passions des étudiants et les opportunités disponibles. VoluntEx comble ce fossé.",
        whatDrivesUsPill: "Ce qui nous motive",
        missionVisionTitle: "Notre mission et vision",
        missionTitle: "Notre mission",
        missionDesc: "Connecter les étudiants de l'Ontario avec des opportunités de bénévolat qui correspondent à leurs passions, leurs compétences et leurs aspirations professionnelles, transformant l'exigence d'obtention du diplôme en tremplin pour un engagement civique et une croissance personnelle durables.",
        visionTitle: "Notre vision",
        visionDesc: "Un avenir où chaque étudiant obtient son diplôme non seulement avec 40 heures de bénévolat, mais avec des expériences significatives, de nouvelles compétences et une véritable passion pour le service communautaire qui se poursuit tout au long de leur vie.",
        thePeoplePill: "Les personnes",
        meetOurTeam: "Rencontrez notre équipe",
        teamSubtitle: "Les personnes passionnées derrière la mission de VoluntEx",
        rezaRole: "Fondateur et directeur général",
        rezaBio: "Fondateur de VoluntEx. Mohammadreza a lancé la plateforme après avoir remarqué que de nombreux étudiants demandaient où ils pouvaient faire du bénévolat mais ne savaient pas où chercher. Il dirige l'orientation de l'organisation et travaille au développement d'une plateforme qui aide les étudiants à trouver des opportunités de bénévolat significatives et à se connecter avec des organismes de bienfaisance de manière claire et accessible.",
        shayanRole: "Co-fondateur et responsable de la technologie",
        shayanBio: "Co-fondateur de VoluntEx et responsable du développement technologique de la plateforme. Shayan aide à construire et améliorer le site web, en s'assurant que les étudiants peuvent facilement se connecter avec des opportunités de bénévolat significatives de manière fluide et fiable.",
        paniRole: "Co-fondatrice et responsable des communications",
        paniBio: "Co-fondatrice de VoluntEx et communicatrice principale pour la sensibilisation et la messagerie de l'organisation. Pani aide à partager notre mission, à renforcer les liens communautaires et à s'assurer que les étudiants et les partenaires comprennent clairement l'impact du bénévolat.",
        whatWeStandForPill: "Ce pour quoi nous nous battons",
        coreValuesTitle: "Nos valeurs fondamentales",
        value1Title: "Orienté vers un but",
        value1Desc: "Chaque connexion que nous établissons sert un objectif plus grand de construction de communautés plus fortes.",
        value2Title: "Centré sur l'étudiant",
        value2Desc: "Nous priorisons les intérêts, la croissance et le développement à long terme des étudiants dans tout ce que nous faisons.",
        value3Title: "Connexions authentiques",
        value3Desc: "Nous croyons en des relations authentiques entre les étudiants et les organismes qui créent un impact durable.",
        value4Title: "Croissance continue",
        value4Desc: "Nous apprenons et nous améliorons constamment pour mieux servir les étudiants et nos partenaires communautaires.",
        byTheNumbersPill: "En chiffres",
        ourImpactTitle: "Notre impact jusqu'à présent",
        ourImpactSubtitle: "Les chiffres racontent l'histoire de la différence que nous faisons ensemble",
        studentsMatchedLabel: "Étudiants jumelés",
        studentsMatchedDesc: "Avec des opportunités de bénévolat parfaites",
        partnerOrgsLabel: "Organismes partenaires",
        partnerOrgsDesc: "À travers la région de York",
        volunteerHoursLabel: "Heures de bénévolat",
        volunteerHoursDesc: "Complétées avec passion",
        satisfactionRateLabel: "Taux de satisfaction",
        satisfactionRateDesc: "Des étudiants et des organismes",
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

    // Update graduation tracker status messages if on contact page
    const graduationStatusSpan = document.getElementById('graduationStatus');
    if (graduationStatusSpan) {
        const currentHoursInput = document.getElementById('currentHours');
        const currentHours = parseFloat(currentHoursInput?.value || 0);
        if (currentHours >= 40) {
            graduationStatusSpan.textContent = translations[currentLanguage].graduationComplete;
        } else if (currentHours >= 30) {
            graduationStatusSpan.textContent = translations[currentLanguage].graduationAlmostThere;
        } else {
            graduationStatusSpan.textContent = translations[currentLanguage].graduationKeepGoing;
        }
    }

    // Refresh contact form pre-fill prefix when language changes
    const messageField = document.getElementById('student_message');
    if (messageField && messageField.dataset.orgName) {
        const orgName = messageField.dataset.orgName;
        const prefixText = translations[currentLanguage].contactMessagePrefix;
        const newPrefix = `${prefixText} ${orgName}. `;
        const userText = messageField.dataset.userText || '';
        messageField.value = newPrefix + userText;
    }
}

// Expose translations and currentLanguage globally for inline scripts
window.translations = translations;
Object.defineProperty(window, 'currentLanguage', {
    get: function() { return currentLanguage; },
    configurable: true
});

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
        const h1 = mottoElement.closest('h1');

        // Animate h1 sliding up before typewriter starts
        if (typeof anime !== 'undefined') {
            if (h1) {
                anime({
                    targets: h1,
                    translateY: [40, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutExpo',
                    delay: 100
                });
            }
        } else {
            if (h1) { h1.style.opacity = '1'; h1.style.transform = 'translateY(0)'; }
        }

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
                setTimeout(() => {
                    const useAnime = typeof anime !== 'undefined';

                    // 1. Subtitle slides up
                    const subtitle = document.getElementById('subtitle');
                    if (subtitle) {
                        if (useAnime) {
                            anime({ targets: subtitle, translateY: [20, 0], opacity: [0, 1], duration: 600, easing: 'easeOutExpo' });
                        } else {
                            subtitle.style.opacity = '1';
                        }
                    }

                    // 2. Count-up on the stat badge number
                    if (typeof window.__heroCountUp === 'function') window.__heroCountUp();

                    // 3. Button glow pulse
                    setTimeout(() => {
                        const btn = document.getElementById('startMatching');
                        if (btn) btn.classList.add('hero-btn-pulse');
                    }, 500);
                }, 400);
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
    const badgeBg = 'linear-gradient(135deg,#4f46e5,#6366f1)';
    const displayName = (currentLanguage === 'fr' && org.nameFr) ? org.nameFr : org.name;
    const displayCauseArea = (currentLanguage === 'fr' && org.causeAreaFr) ? org.causeAreaFr : org.causeArea;
    const displayDescription = (currentLanguage === 'fr' && org.descriptionFr) ? org.descriptionFr : org.description;

    const card = document.createElement('div');
    // Only animation state here — all colours handled by CSS classes
    card.style.cssText = 'opacity:0;transform:translateY(30px);transition:opacity 0.5s ease,transform 0.5s ease;';
    card.className = 'organization-card vx-charity-card vx-org-card-theme rounded-2xl overflow-hidden flex flex-col';

    card.innerHTML = `
        <div class="relative overflow-hidden" style="height:200px;${org.imageBg ? `background:${org.imageBg};` : ''}">
            <img src="${org.image}" alt="${org.name}" class="w-full h-full" style="object-fit:${org.imageFit || 'cover'};transition:transform 0.5s ease;${org.imageFit === 'contain' ? 'transform:scale(0.72);' : ''}">
            <div class="vx-card-img-overlay absolute inset-0"></div>
        </div>
        <div class="vx-card-body" style="padding:1.5rem;display:flex;flex-direction:column;flex:1;gap:0.75rem;">
            <div style="display:inline-flex;width:fit-content;background:${badgeBg};font-size:0.7rem;font-weight:700;padding:4px 12px;border-radius:999px;letter-spacing:0.07em;text-transform:uppercase;color:#fff;box-shadow:0 2px 6px rgba(79,70,229,0.35);">${displayCauseArea}</div>
            <h3 class="vx-card-title" style="font-size:1.2rem;font-weight:700;margin:0;">${displayName}</h3>
            <p class="vx-card-desc" style="font-size:0.92rem;line-height:1.55;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">${displayDescription}</p>
            <div style="display:flex;margin-top:auto;padding-top:0.5rem;">
                <span class="vx-card-pill" style="font-size:1.05rem;font-weight:700;padding:6px 14px;border-radius:6px;display:flex;align-items:center;gap:7px;">
                    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    ${org.address.split(',')[1] ? org.address.split(',')[1].trim() : 'York Region'}
                </span>
            </div>
            <div style="display:flex;gap:10px;margin-top:0.5rem;">
                <button onclick="viewOrganizationDetails('${org.name}')"
                    class="vx-card-view-btn"
                    style="flex:1;padding:10px 0;border-radius:10px;font-weight:600;font-size:0.9rem;cursor:pointer;">
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
    const baseScale = org.imageFit === 'contain' ? 0.72 : 1;
    card.addEventListener('mouseenter', () => { img.style.transform = `scale(${baseScale * 1.07})`; });
    card.addEventListener('mouseleave', () => { img.style.transform = `scale(${baseScale})`; });

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
                const decodedOrg = decodeURIComponent(orgName);
                // Store org name so applyLanguage() can re-build the prefix on language toggle
                messageField.dataset.orgName = decodedOrg;

                function buildPrefix() {
                    const lang = currentLanguage || 'en';
                    const prefixText = translations[lang].contactMessagePrefix;
                    return `${prefixText} ${decodedOrg}. `;
                }

                function applyPrefix() {
                    const userText = messageField.value.replace(/^.*?\.\s*/, '');
                    const prefix = buildPrefix();
                    messageField.value = prefix + (messageField.dataset.userText || '');
                    messageField.placeholder = '';
                    setTimeout(() => messageField.setSelectionRange(prefix.length, prefix.length), 50);
                }

                applyPrefix();

                // Restore prefix if user deletes into it (e.g. select-all + delete)
                messageField.addEventListener('input', function() {
                    const prefix = buildPrefix();
                    if (!this.value.startsWith(prefix)) {
                        // Save whatever the user typed after the prefix
                        const extra = this.value.slice(prefix.length);
                        this.dataset.userText = extra;
                        this.value = prefix + extra;
                        this.setSelectionRange(prefix.length, prefix.length);
                    } else {
                        this.dataset.userText = this.value.slice(prefix.length);
                    }
                });

                // Block backspace/delete at the prefix boundary
                messageField.addEventListener('keydown', function(e) {
                    const prefix = buildPrefix();
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
                    const prefix = buildPrefix();
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
                const isOpen = answer.classList.contains('faq-open');

                // Close all other open items
                faqItems.forEach(other => {
                    other.querySelector('.faq-answer')?.classList.remove('faq-open');
                    other.querySelector('.faq-icon')?.classList.remove('rotate-180');
                });

                // Toggle clicked item
                if (!isOpen) {
                    answer.classList.add('faq-open');
                    icon?.classList.add('rotate-180');
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
