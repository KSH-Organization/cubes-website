/**
 * The site's entire copy, in one place.
 *
 * This is the *fallback* content: the site always renders from here, and the
 * CMS overrides it key-by-key at request time (see src/lib/cms.ts). It is also
 * what `scripts/build-manifest.ts` seeds into a fresh CMS, so the two can
 * never drift.
 *
 * Every leaf key is a dot-path a CMS block maps onto — e.g. `home.hero.title`
 * is the block id for the home page's hero title. Arrays of objects become one
 * CMS `list` block whose rows an editor can add/remove/reorder.
 *
 * Image and icon values start as the bundled /public asset (or "" for icons,
 * which fall back to a Lucide component). An admin can replace any of them
 * from the CMS Media Library.
 */

export const content = {
    globals: {
        brand: {
            name: "Cubes",
            tagline: "Construction & Real Estate",
            logo: "/images/logo.png",
        },
        nav: {
            home: "Home",
            about: "About",
            people: "People",
            services: "Services",
            news: "News & Events",
            career: "Career",
            contact: "Contact Us",
            openMenu: "Open menu",
            closeMenu: "Close menu",
        },
        footer: {
            blurb:
                "Building the future of Sudan through sustainable development and innovative construction solutions.",
            location: "Location",
            email: "Email Address",
            phone: "+24990000000",
            copyright: "© 2026 Cubes Construction & Real Estate. All rights reserved.",
            companyHeading: "Company",
            servicesHeading: "Services",
            company: [
                { key: "about", label: "About Us", href: "/about" },
                { key: "people", label: "People", href: "/people" },
                { key: "news", label: "News & Events", href: "/news" },
            ],
            services: [
                { key: "pm", label: "Project Management", href: "/services" },
                { key: "re", label: "Real Estate", href: "/services" },
                { key: "consulting", label: "Consulting", href: "/services" },
            ],
            social: [
                { key: "linkedin", label: "LinkedIn", href: "#", icon: "" },
                { key: "instagram", label: "Instagram", href: "#", icon: "" },
                { key: "twitter", label: "Twitter", href: "#", icon: "" },
            ],
        },
    },

    home: {
        meta: {
            title: "Cubes | Construction & Real Estate in Sudan",
            description:
                "Cubes delivers construction, project management and real estate development across Sudan — precision planning, sustainable execution, on time and on budget.",
        },
        hero: {
            badge: "Our Expertise",
            title: "Innovative Solutions for Sudan's Urban Landscape.",
            subtitle:
                "Driving Sustainable Growth Through Innovative Construction and Real Estate. We deliver projects that elevate living standards and enhance local infrastructure.",
            image: "/images/hero-home.jpg",
        },
        whoWeAre: {
            title: "Who We Are",
            subtitle:
                "Cubes Construction & Real Estate is a leading construction and real estate company in Sudan, dedicated to building sustainable communities and delivering high-quality projects. We are committed to innovation, excellence, and client satisfaction. Our approach is built on precision, quality, and trust in every project.",
            image: "/images/home-who-we-are.jpg",
            heading: "A vision built on excellence and local expertise.",
            body: "With deep roots in the Sudanese market and a commitment to international project management standards, we provide a bridge between traditional values and modern engineering solutions. Every project we undertake is an opportunity to contribute to the nation's progress.",
            points: [
                { key: "precision", text: "Precision in Every Measurement", icon: "" },
                { key: "sustainability", text: "Sustainability as a Standard", icon: "" },
                { key: "client", text: "Unwavering Client Focus", icon: "" },
            ],
        },
        objectives: {
            title: "Our Objectives",
            subtitle:
                "We're focused on building a better future through excellence in project management, real estate development, and sustainable growth.",
            items: [
                {
                    key: "excellence",
                    title: "Achieve excellence in project management",
                    body: "by applying best practices and standardized formats for streamlined operations.",
                    icon: "",
                },
                {
                    key: "documents",
                    title: "Enhance document management and archiving efficiency",
                    body: "through a modern digital system that ensures accessibility and governance.",
                    icon: "",
                },
                {
                    key: "satisfaction",
                    title: "Increase client satisfaction rates",
                    body: "by offering tailored consulting and technological support to help them achieve their goals.",
                    icon: "",
                },
                {
                    key: "technology",
                    title: "Leverage technology and innovation",
                    body: "to enhance project execution efficiency and reduce operational costs.",
                    icon: "",
                },
                {
                    key: "network",
                    title: "Expand our network of partners and clients",
                    body: "by building sustainable strategic relationships that drive Cubes' market growth.",
                    icon: "",
                },
                {
                    key: "sustainability",
                    title: "Meet sustainability standards",
                    body: "by developing projects that minimize environmental impact and promote smart resource utilization.",
                    icon: "",
                },
            ],
        },
        servicesOverview: {
            title: "Cubes Construction & Real Estate Services",
            subtitle:
                "We offer a comprehensive range of services designed to help you achieve your goals with high quality, on time, and within budget.",
            items: [
                { key: "pm", title: "Project Management", image: "/images/home-svc-pm.jpg" },
                { key: "re", title: "Real Estate", image: "/images/home-svc-re.jpg" },
            ],
        },
        pmServices: {
            title: "Project Management Services",
            subtitle:
                "At Cubes, we understand that success depends on meticulous planning and flawless execution. We follow international standards to ensure precision.",
            items: [
                {
                    key: "end-to-end",
                    title: "End-to-End Project Management",
                    body: "We provide full-cycle project management, from initiation to successful completion, following international standards.",
                    image: "/images/pm-01.jpg",
                },
                {
                    key: "planning",
                    title: "Strategic Planning & Scheduling",
                    body: "We help you develop comprehensive project plans based on in-depth analysis, ensuring smooth execution without delays.",
                    image: "/images/pm-02.jpg",
                },
                {
                    key: "risk",
                    title: "Risk Management & Mitigation Strategies",
                    body: "We identify potential risks and implement proactive strategies to prevent disruptions.",
                    image: "/images/pm-03.jpg",
                },
                {
                    key: "quality",
                    title: "Performance Monitoring & Quality Assurance",
                    body: "We implement robust quality control mechanisms to ensure compliance with industry standards.",
                    image: "/images/pm-04.jpg",
                },
                {
                    key: "budget",
                    title: "Budget & Cost Management",
                    body: "We assist in precise budgeting and financial control to prevent cost overruns.",
                    image: "/images/pm-05.jpg",
                },
                {
                    key: "stakeholder",
                    title: "Stakeholder & Communication Management",
                    body: "We ensure seamless collaboration between all stakeholders for a unified project vision.",
                    image: "/images/pm-06.jpg",
                },
                {
                    key: "contract",
                    title: "Contract & Vendor Management",
                    body: "We help you select the right vendors and manage contracts to guarantee high-quality service delivery.",
                    image: "/images/pm-07.jpg",
                },
                {
                    key: "consulting",
                    title: "Project Management Consulting & Training",
                    body: "We offer expert consulting and training programs to enhance your team's project management skills.",
                    image: "/images/pm-08.jpg",
                },
            ],
        },
        reServices: {
            title: "Real Estate Services",
            subtitle:
                "We don't just develop properties-we create integrated communities that reflect innovation, quality, and sustainability.",
            items: [
                {
                    key: "market",
                    title: "Market Research & Strategic Planning",
                    body: "We conduct in-depth market analysis to identify prime locations and promising investment opportunities, ensuring the success and sustainability of our projects.",
                    image: "/images/re-01.jpg",
                },
                {
                    key: "design",
                    title: "Design & Architectural Planning",
                    body: "Our team of top architects and designers develops modern, sustainable designs that balance aesthetics and functionality to provide a comfortable and seamless user experience.",
                    image: "/images/re-02.jpg",
                },
                {
                    key: "compliance",
                    title: "Regulatory Compliance & Permits",
                    body: "We ensure full compliance with regulations and obtain all necessary permits efficiently, guaranteeing that our projects meet the highest legal and engineering standards.",
                    image: "/images/re-03.jpg",
                },
                {
                    key: "execution",
                    title: "High-Quality Project Execution",
                    body: "Utilizing the latest construction technologies and collaborating with top contractors and suppliers, we ensure that our projects are completed with precision, on time, and within budget.",
                    image: "/images/re-04.jpg",
                },
                {
                    key: "marketing",
                    title: "Effective Marketing & Sales Strategies",
                    body: "We implement comprehensive marketing strategies to reach the right audience, offering flexible financing solutions and payment plans that make investing in our projects easy and accessible.",
                    image: "/images/re-05.jpg",
                },
                {
                    key: "post-delivery",
                    title: "Post-Delivery Property Management",
                    body: "Our property management services ensure smooth operations, maximizing asset value and providing a seamless experience for clients and investors.",
                    image: "/images/re-06.jpg",
                },
            ],
        },
    },

    about: {
        meta: {
            title: "About Us | Cubes Construction Sudan",
            description:
                "15+ years building Sudan's infrastructure. Learn how Cubes combines precision engineering, sustainable design and international project management standards.",
        },
        hero: {
            badge: "Our Expertise",
            title: "Building the future, one site at a time.",
            subtitle:
                "We're a construction and real estate company that treats every project like a legacy. From site planning to final handover, we combine precision engineering with a relentless pursuit of quality.",
            image: "/images/hero-about.jpg",
        },
        overview: {
            eyebrow: "Company Overview",
            title: "Transforming infrastructure. Enhancing lives.",
            subtitle:
                "We operate at the intersection of precision engineering, sustainable design, and long-term value. Our teams move fast, but we never compromise on quality - because the buildings we build are the cities people will live in tomorrow.",
            body: "From feasibility studies to final handover, we manage complexity with a clear, repeatable process. We partner with clients who value transparency, technical excellence, and a commitment to sustainability.",
            image: "/images/about-approach.jpg",
            badgeEyebrow: "Our Approach",
            badgeText: "Precision planning. Sustainable execution.",
            stats: [
                { key: "years", value: "15+", label: "Years of Excellence" },
                { key: "sqm", value: "500M+", label: "SQM Developed" },
                { key: "satisfaction", value: "100%", label: "Client Satisfaction" },
            ],
        },
        why: {
            eyebrow: "Why Choose Cubes",
            title: "A partner built for complexity.",
            subtitle:
                "We're structured to move fast, adapt quickly, and deliver consistently - across large-scale construction and real estate development.",
            items: [
                {
                    key: "expertise",
                    title: "Proven Expertise",
                    body: "Decades of experience managing complex real estate and construction projects across Sudan.",
                },
                {
                    key: "tailored",
                    title: "Tailored Solutions",
                    body: "We design projects that meet each client's unique needs, ensuring maximum value and efficiency.",
                },
                {
                    key: "excellence",
                    title: "Commitment to Excellence",
                    body: "Quality, cost control, and on-time delivery are the pillars of our operational excellence.",
                },
            ],
        },
        projectsSection: {
            eyebrow: "Selected Projects",
            title: "A selection of our recent work.",
            subtitle:
                "From industrial facilities to residential developments, we deliver projects that combine scale, quality, and speed.",
            viewDetails: "View Details",
        },
    },

    people: {
        meta: {
            title: "Our Departments & Team | Cubes",
            description:
                "Meet the specialised departments behind every Cubes project — PMO, quality, real estate and customer service teams delivering precision and long-term value.",
        },
        hero: {
            badge: "Our Expertise",
            title: "Departments That Deliver, People Who Inspire",
            subtitle:
                "We are organized into specialized departments that work together to ensure every project is executed with precision, quality, and long-term value.",
            image: "/images/hero-people.jpg",
        },
        departmentsSection: {
            title: "Our Departments",
            subtitle:
                "Our organizational structure is designed to maximize efficiency and collaboration. Each department plays a critical role in delivering high-quality projects and exceptional client experiences.",
        },
    },

    services: {
        meta: {
            title: "Project Management & Real Estate Services | Cubes",
            description:
                "End-to-end project management, real estate development, PMO support and digital transformation services delivered to international standards across Sudan.",
        },
        hero: {
            badge: "EXPERT SOLUTIONS",
            title: "Our Services",
            subtitle:
                "Comprehensive project management and construction solutions delivered with precision and excellence.",
            image: "/images/hero-services.jpg",
        },
        offers: {
            title: "What We Offer",
            items: [
                {
                    key: "pm",
                    title: "Project Management Services",
                    body: "End-to-end project planning, execution, and delivery aligned with global best practices.",
                    icon: "",
                },
                {
                    key: "re",
                    title: "Real Estate Development",
                    body: "Creating integrated communities that reflect innovation, quality, and sustainability.",
                    icon: "",
                },
                {
                    key: "digital",
                    title: "Digital Transformation & Document Management",
                    body: "Modern technology-driven systems for digital archiving, workflow automation, and analytics.",
                    icon: "",
                },
                {
                    key: "pmo",
                    title: "PMO Support Services",
                    body: "Strengthening organizational governance through PMO setup, KPIs, and portfolio management.",
                    icon: "",
                },
            ],
        },
        pm: {
            title: "Project Management Services",
            items: [
                {
                    key: "end-to-end",
                    title: "End-to-End Project Management",
                    body: "Full lifecycle execution aligned with PMI frameworks",
                },
                {
                    key: "planning",
                    title: "Strategic Planning & Scheduling",
                    body: "Primavera P6, CPM analysis, and EVM reporting",
                },
                {
                    key: "risk",
                    title: "Risk Management & Business Continuity",
                    body: "Proactive risk identification and mitigation",
                },
                {
                    key: "quality",
                    title: "Quality Assurance & Compliance",
                    body: "QA/QC plans, audits, and ISO-aligned processes",
                },
                {
                    key: "budget",
                    title: "Budgeting & Cost Control",
                    body: "Cost estimation, cash flow planning, and value engineering",
                },
                {
                    key: "stakeholder",
                    title: "Stakeholder Communication & Reporting",
                    body: "Dashboards, executive summaries, and escalation workflows",
                },
                {
                    key: "contract",
                    title: "Contract & Procurement Management",
                    body: "Tender evaluation, vendor scoring, and SLA compliance",
                },
                {
                    key: "training",
                    title: "Training & Capacity Building",
                    body: "Primavera P6, Agile, Scrum, and leadership training",
                },
                {
                    key: "advisory",
                    title: "PM Consulting & Advisory",
                    body: "PMO setup, governance frameworks, and process optimization",
                },
            ],
        },
        re: {
            title: "Real Estate Development",
            items: [
                {
                    key: "market",
                    title: "Market Research & Strategic Planning",
                    body: "In-depth market analysis for prime locations and investment opportunities",
                    icon: "",
                },
                {
                    key: "design",
                    title: "Design & Architectural Planning",
                    body: "Modern sustainable designs balancing aesthetics and functionality",
                    icon: "",
                },
                {
                    key: "compliance",
                    title: "Regulatory Compliance & Permits",
                    body: "Full compliance with regulations and efficient permit processing",
                    icon: "",
                },
                {
                    key: "execution",
                    title: "High-Quality Project Execution",
                    body: "Latest construction technologies for on-time, on-budget delivery",
                    icon: "",
                },
                {
                    key: "marketing",
                    title: "Marketing & Sales Strategies",
                    body: "Comprehensive marketing with flexible financing solutions",
                    icon: "",
                },
                {
                    key: "management",
                    title: "Post-Delivery Property Management",
                    body: "Smooth operations maximizing asset value for clients",
                    icon: "",
                },
            ],
        },
        digital: {
            title: "Digital Transformation & Document Management",
            items: [
                { key: "archiving", text: "Digital Archiving Solutions" },
                { key: "control", text: "Document Control Systems" },
                { key: "workflow", text: "Workflow Automation" },
                { key: "dashboards", text: "Real-time Dashboards" },
                { key: "analytics", text: "Data Analytics & Reporting Tools" },
            ],
        },
        pmo: {
            title: "PMO Support Services",
            items: [
                { key: "setup", text: "PMO Setup & Structure" },
                { key: "kpi", text: "KPI Development" },
                { key: "monitoring", text: "Performance Monitoring Systems" },
                { key: "portfolio", text: "Project Portfolio Management" },
                { key: "policy", text: "Policy & Process Documentation" },
            ],
        },
        cta: {
            title: "Ready to Partner with Cubes?",
            button: "Contact Us Today",
        },
    },

    news: {
        meta: {
            title: "News & Events | Cubes Sudan",
            description:
                "Project milestones, corporate announcements and industry events from Cubes — updates on Sudan's construction and real estate development landscape.",
        },
        hero: {
            badge: "News & Events",
            title: "Stay Updated with Cubes",
            subtitle:
                "We believe in transparency and continuous communication with our clients, partners, and community. Through this page, you can explore our latest news, project updates, corporate announcements, milestones, and participation in major industry events.",
            image: "/images/hero-news.jpg",
        },
        latest: { title: "Latest News" },
        eventsSection: { title: "Events" },
        cta: {
            title: "Building the Future Together",
            body: "Stay connected with Cubes for the latest updates in engineering excellence and project management. Join us as we shape the skyline and set new standards in construction.",
            button: "Connect With Us",
        },
    },

    career: {
        meta: {
            title: "Careers & Job Vacancies | Cubes Sudan",
            description:
                "Build your career with Cubes. Explore open engineering, project management and real estate roles in Sudan, with training and advancement opportunities.",
        },
        hero: {
            badge: "CAREER OPPORTUNITIES",
            title: "Join Cubes",
            subtitle:
                "At Cubes, our people are the foundation of our success. We are committed to attracting, developing, and retaining talented professionals who are passionate about innovation, quality, and excellence.",
            image: "/images/hero-career.jpg",
            button: "View Open Roles",
        },
        culture: {
            title: "Our Culture",
            subtitle:
                "We cultivate a workplace built on values that drive excellence and meaningful impact.",
            items: [
                {
                    key: "integrity",
                    title: "Professionalism & Integrity",
                    body: "We uphold the highest ethical standards in all our interactions, ensuring trust and reliability with our clients and within our teams.",
                },
                {
                    key: "innovation",
                    title: "Innovation & Digital Transformation",
                    body: "We leverage cutting-edge technology and modern engineering software to lead the digital transformation of Sudan's construction industry.",
                },
                {
                    key: "teamwork",
                    title: "Teamwork & Collaboration",
                    body: "Success is a collective effort. We foster a supportive environment where diverse skills converge to solve complex project challenges.",
                },
                {
                    key: "learning",
                    title: "Learning & Growth",
                    body: "Our commitment to excellence includes the continuous development of our people through training and advancement opportunities.",
                },
                {
                    key: "quality",
                    title: "Quality & Sustainability",
                    body: "We build for the future, prioritizing environmental impact and the highest standards of construction and finishing.",
                },
            ],
        },
        whyUs: {
            heading: "Why Work With Us?",
            items: [
                { key: "path", text: "A strong career path with opportunities for advancement" },
                { key: "salary", text: "Competitive salaries and performance benefits" },
                { key: "projects", text: "Exposure to large-scale national projects in Sudan" },
                { key: "training", text: "Continuous training in PM, engineering, and digital tools" },
                { key: "support", text: "A supportive environment that values your ideas" },
            ],
        },
        weOffer: {
            heading: "What We Offer",
            items: [
                { key: "development", text: "Professional development programs and certifications" },
                { key: "workshops", text: "Specialized workshops and technical engineering training" },
                { key: "exposure", text: "Cross-functional project exposure for holistic learning" },
                { key: "office", text: "Modern office environment with advanced digital tools" },
                { key: "recognition", text: "Employee recognition and achievement awards" },
            ],
        },
        vacanciesSection: {
            title: "Open Vacancies",
            subtitle: "Find your next challenge and build Sudan's urban landscape with us.",
            qualificationsLabel: "Required Qualifications",
            deadlineLabel: "Deadline",
            applyButton: "Apply Now",
        },
        howToApply: {
            title: "How to Apply",
            lead: "Ready to start your journey with Cubes?",
            body: "Submit your CV and cover letter to:",
            email: "careers@kshc-cube.com",
            note: "or apply directly through the website application form.",
            button: "Submit Application",
        },
        apply: {
            meta: {
                title: "Submit Your Application | Cubes Careers",
                description:
                    "Apply for a role at Cubes. Complete the online application form with your CV, cover letter and qualifications to join our team in Sudan.",
            },
            breadcrumbParent: "Careers",
            breadcrumbCurrent: "Apply",
            title: "Job Application Form",
            body: "Complete the form below to apply for a position at Cubes. All fields marked with * are required.",
            form: {
                sectionPersonal: "Personal Information",
                sectionProfessional: "Professional Information",
                sectionEducation: "Education",
                sectionDocuments: "Documents Upload",
                sectionAdditional: "Additional Information",
                fullName: "Full Name",
                fullNamePlaceholder: "e.g. Ahmed Mohammed",
                email: "Email Address",
                emailPlaceholder: "name@example.com",
                phone: "Phone Number",
                phonePlaceholder: "+249 XXX XXX XXX",
                dateOfBirth: "Date of Birth",
                datePlaceholder: "DD / MM / YYYY",
                nationality: "Nationality",
                nationalityPlaceholder: "e.g. Sudanese",
                location: "Current Location / City",
                locationPlaceholder: "e.g. Khartoum",
                linkedin: "LinkedIn Profile URL",
                linkedinPlaceholder: "e.g. linkedin.com/in/username",
                position: "Position Applying For",
                positionPlaceholder: "Select a position",
                positionOther: "Other",
                experience: "Years of Experience",
                experiencePlaceholder: "e.g. 5",
                employer: "Current Employer",
                employerPlaceholder: "Current company name",
                jobTitle: "Current Job Title",
                jobTitlePlaceholder: "Your current role",
                expectedSalary: "Expected Salary Range",
                salaryPlaceholder: "e.g. SDG 500,000 - 700,000",
                startDate: "Available Start Date",
                startDatePlaceholder: "Select date",
                degree: "Highest Degree",
                degreePlaceholder: "e.g. Master's in Civil Engineering",
                university: "University / Institution",
                universityPlaceholder: "Name of university",
                fieldOfStudy: "Field of Study",
                fieldPlaceholder: "Major or specialization",
                graduationYear: "Graduation Year",
                yearPlaceholder: "YYYY",
                uploadCv: "Upload CV / Resume",
                uploadCover: "Upload Cover Letter",
                uploadCertificates: "Upload Certificates (Academic / Professional)",
                uploadHint: "Click to upload or drag and drop",
                uploadTypes: "PDF, DOC, or DOCX (Max. 10MB)",
                motivation: "Why do you want to join Cubes?",
                motivationPlaceholder: "Briefly describe your motivation...",
                notes: "Additional Notes or Comments",
                notesPlaceholder: "Any other details you'd like to share...",
                consent: "I confirm that the information provided is accurate and complete",
                submit: "Submit Application",
                submitting: "Submitting…",
                draft: "Save as Draft",
                success:
                    "Application received — thank you! Our recruitment team will contact you after reviewing your profile.",
            },
        },
    },

    contact: {
        meta: {
            title: "Contact Us | Cubes Construction & Real Estate",
            description:
                "Get in touch with Cubes for construction, project management or real estate enquiries and partnerships in Sudan. Our team responds promptly.",
        },
        hero: {
            badge: "Contact Us",
            title: "Get in Touch With Us",
            subtitle:
                "We're here to help. Send us a message and our team will get back to you as soon as possible.",
            image: "/images/hero-contact.jpg",
        },
        info: {
            title: "Contact Information",
            subtitle:
                "Reach out to our team for inquiries, partnerships, or to learn more about our services.",
        },
    },

    newsTabs: {
        items: [
            {
                key: "milestones",
                label: "Project Milestones",
                title: "Project Milestones & Updates",
                intro:
                    "We regularly share progress reports and achievements across our ongoing construction and development projects. This includes updates on timelines, engineering milestones, contractor achievements, and quality assurance results.",
                bullets:
                    "Progress reports for large-scale construction sites\nAnnouncements of structural, architectural, or MEP milestones\nCompletion of key phases such as excavation, concrete works, or façade installation\nUpdates related to new partnerships or contractor appointments",
                icon: "",
            },
            {
                key: "announcements",
                label: "Announcements",
                title: "Corporate Announcements",
                intro:
                    "Official announcements from Cubes covering organizational updates, new project launches, strategic partnerships, and important notices for our clients, partners, and community.",
                bullets:
                    "New project launches and development plans\nStrategic partnerships and signed agreements\nOrganizational and leadership updates\nOfficial notices for clients and stakeholders",
                icon: "",
            },
            {
                key: "achievements",
                label: "Achievements",
                title: "Achievements & Recognition",
                intro:
                    "Milestones we are proud of - awards, certifications, and recognition earned through our commitment to engineering excellence, quality, and sustainable development across Sudan.",
                bullets:
                    "Awards and industry recognition\nQuality and safety certifications\nSuccessfully delivered projects and handovers\nTeam accomplishments and professional certifications",
                icon: "",
            },
        ],
    },
} as const;

export type SiteContent = typeof content;
