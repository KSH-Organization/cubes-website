/**
 * Content that editors add to and remove from over time → CMS **Collections**
 * (one row per item), as opposed to the fixed page copy in `site.ts`.
 *
 * These arrays are the local fallback and the initial seed; at runtime the CMS
 * rows replace them wholesale when the CMS has any.
 */

export const projects = [
    {
        key: "kchs-warehouse",
        title: "Cubes Warehouse",
        body: "Industrial Area, Sudan. A comprehensive logistics facility designed for maximum efficiency and sustainability.",
        image: "/images/about-kchs.jpg",
    },
    {
        key: "call-center",
        title: "Call Center",
        body: "Bashir Elnefeidi Street, Khartoum. A state-of-the-art administration building with integrated smart systems.",
        image: "/images/about-callcenter.jpg",
    },
];

export const departments = [
    {
        key: "real-estate",
        title: "Real Estate Development",
        body: "Responsible for identifying and evaluating property opportunities, conducting feasibility studies, and planning projects from concept to execution to maximize investment returns.",
        image: "/images/dept-realestate.jpg",
    },
    {
        key: "pmo",
        title: "Project Management Office",
        body: "Oversees the planning and execution of all projects, ensuring they meet timelines and budgets, while setting standards, tracking performance, and managing risks for quality delivery.",
        image: "/images/dept-pmo.jpg",
    },
    {
        key: "quality",
        title: "Quality and Control",
        body: "Focuses on establishing and monitoring quality policies and standards, performing audits, and driving continuous improvement across processes, products, and services.",
        image: "/images/dept-quality.jpg",
    },
    {
        key: "customer",
        title: "Customer Service",
        body: "Handles all customer interactions before, during, and after service delivery, addressing inquiries and complaints to ensure customer satisfaction and enhance their overall experience.",
        image: "/images/dept-customer.jpg",
    },
];

export const vacancies = [
    {
        key: "structural-engineer",
        title: "Senior Structural Engineer",
        location: "Khartoum Office",
        deadline: "Oct 15, 2026",
        qualifications:
            "B.Sc in Civil Engineering, 8+ years experience in high-rise construction, proficiency in ETABS/SAFE/SAP2000.",
    },
    {
        key: "project-manager",
        title: "Project Manager – Infrastructure",
        location: "Al-Riyadh District",
        deadline: "Oct 30, 2026",
        qualifications:
            "PMP certification, 10+ years in urban infrastructure, proven track record of on-time delivery and stakeholder management.",
    },
    {
        key: "qaqc-inspector",
        title: "QA/QC Inspector",
        location: "On-Site Project",
        deadline: "Nov 05, 2026",
        qualifications:
            "Degree in Engineering, ISO standard knowledge, 5+ years in site inspection, meticulous attention to material quality and structural safety.",
    },
];

// Each event carries up to four images, edited on the event's own row.
export const events = [
    {
        key: "structural-workshop",
        date: "March 2022",
        location: "Cubes Headquarters",
        organizer: "Cubes Project Management Office",
        title: "Structural Design Workshop",
        overview:
            "This technical workshop was organized to address a major structural design issue identified in one of Cubes' development projects. After the contractor completed the design review, several critical errors were detected, requiring immediate collaborative intervention before issuing the final Issued for Construction (IFC) drawings.",
        activities:
            "Brought together contractor, consultant, and third-party structural engineering expert for detailed discussions, reviewed problematic sections, and explored engineering alternatives.",
        outcome:
            "Identified root cause, agreed on optimal engineering solutions, aligned all parties on updated design details, ensured IFC drawings were prepared accurately.",
        image1: "/images/event-1.jpg",
        image2: "/images/event-2.jpg",
        image3: "/images/event-3.jpg",
        image4: "/images/event-4.jpg",
    },
    {
        key: "pm-training",
        date: "November 2023",
        location: "Cubes Headquarters",
        organizer: "Cubes Project Management Office",
        title: "Project Management Training Program",
        overview:
            "An intensive capacity-building program designed to strengthen project management skills across Cubes teams. The program covered international frameworks and modern planning tools used in large-scale construction delivery.",
        activities:
            "Delivered hands-on training in Primavera P6 scheduling, earned value management, and risk workshops, with case studies drawn from ongoing Cubes projects.",
        outcome:
            "Raised team proficiency in scheduling and cost control, standardized reporting templates, and established a shared project governance language across departments.",
        image1: "/images/event-3.jpg",
        image2: "/images/event-4.jpg",
        image3: "/images/event-1.jpg",
        image4: "/images/event-2.jpg",
    },
    {
        key: "coordination-forum",
        date: "June 2024",
        location: "Khartoum",
        organizer: "Cubes Project Management Office",
        title: "Engineering Coordination Forum",
        overview:
            "A cross-disciplinary forum bringing together consultants, contractors, and suppliers to align on engineering standards, quality expectations, and delivery timelines for Cubes' active developments.",
        activities:
            "Facilitated coordination sessions between design and site teams, reviewed interface issues across structural and MEP packages, and agreed on escalation workflows.",
        outcome:
            "Improved cross-party coordination, reduced design clashes, and set a recurring cadence for technical alignment meetings across all major projects.",
        image1: "/images/event-2.jpg",
        image2: "/images/event-1.jpg",
        image3: "/images/event-4.jpg",
        image4: "/images/event-3.jpg",
    },
];
