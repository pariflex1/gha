/* ============================================
   GHA CONSTRUCTION - Centralized Data Configuration
   ============================================
   You can update service details, project specifications,
   team listings, contact numbers, and image links here.
   ============================================ */

const PORTFOLIO_DATA = {
  company: {
    name: "GHA Construction",
    phoneNumbers: [
      "+91 7860799503",
      "+91 7007138195"
    ],
    email: "contact@ghaconstruction.in",
    logo: {
      wide: "images/Logo/logo-wide.webp",
      wideWhite: "images/Logo/logo-wide-white.webp",
      square: "images/Logo/logo-512x512.webp"
    },
    address: {
      officeNo: "Office No. 05",
      complex: "Jhalkaribai Complex",
      landmark: "Near RTO",
      city: "Jhansi",
      state: "Uttar Pradesh",
      full: "Office No. 05, Jhalkaribai Complex, Near RTO, Jhansi, Uttar Pradesh"
    },
    director: {
      name: "Akhilesh Singh",
      designation: "Director, GHA Construction",
      quote: "At GHA Construction, our mission goes beyond building structures—we build trust, lasting relationships, and communities.",
      message: [
        "Since our inception, we have remained steadfast in our commitment to delivering projects of the highest quality, on time, and within budget.",
        "I am proud of the talented and dedicated team that drives this organization forward every day. Our clients are our greatest partners, and their satisfaction is the true measure of our success."
      ],
      values: [
        "Transparency",
        "Excellence",
        "Innovation"
      ]
    }
  },

  // Services list from contend.md
  services: [
    {
      id: "civil-construction",
      sr: 1,
      title: "Civil Construction",
      description: "Civil Construction & Structural Work. We handle robust industrial setups, city-level road networks, and structural projects with high-quality engineering.",
      icon: "&#127959;", // Construction emoji
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      features: [
        "Industrial Setups (Baidyanath Group)",
        "PWD-approved Urban Roadways",
        "Rural Infrastructure (RED Jhansi)",
        "Civil & Structural Work"
      ]
    },
    {
      id: "pmc",
      sr: 2,
      title: "PMC",
      description: "Project Management Consultants. End-to-end management services ensuring projects are executed efficiently, on-time, and within budget.",
      icon: "&#128203;", // Clipboard emoji
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      features: [
        "Project Coordination & Scheduling",
        "Cost Control & Budgeting",
        "Quality Audits & Compliance",
        "Risk Mitigation"
      ]
    },
    {
      id: "architecture",
      sr: 3,
      title: "Architecture",
      description: "Architectural Design & Planning Services. Creative layout planning, structural blueprinting, and aesthetic design suited for modern civil landscapes.",
      icon: "&#128221;", // Pencil and Memo emoji
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      features: [
        "Design & Space Planning",
        "Structural Engineering Layouts",
        "Aesthetic Elevations",
        "Permit Drawings & Documentation"
      ]
    },
    {
      id: "interior-design",
      sr: 4,
      title: "Interior Design",
      description: "Interior Design & Space Planning. Transforming corporate offices, residential spaces, and commercial hubs with elegant and functional designs.",
      icon: "&#128736;", // Wrench emoji
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      features: [
        "Space & Flow Optimization",
        "Premium Commercial Fit-Outs",
        "Residential Interior Styling",
        "Custom Furniture & Lighting Layouts"
      ]
    },
    {
      id: "finishing-work",
      sr: 5,
      title: "Finishing Work & Others",
      description: "Finishing, Renovation & Allied Construction Services. Premium curbing, boundary wall installations, community park beautification, and finishing.",
      icon: "&#10002;", // Sparkle emoji
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
      features: [
        "Precise Curbing & Edging",
        "Secure Boundary Wall Systems",
        "Aesthetic Community Parks",
        "Renovation & Finishing Work"
      ]
    }
  ],

  // Projects list from contend.md
  projects: [
    {
      id: 1,
      title: "Smart City Hospital",
      description: "Construction of Smart Health Centre in Jhansi city on PPP & BOOT model.",
      area: "25,000 Sq.ft",
      cost: "₹9.00 Cr",
      city: "Jhansi",
      year: 2025,
      category: "commercial",
      status: "Completed",
      image: "images/Projects/Smart City Hospital.webp"
    },
    {
      id: 2,
      title: "Smart City Drain Work",
      description: "Construction of drain and utility water management systems.",
      area: "6.00 Km",
      cost: "₹3.55 Cr",
      city: "Jhansi",
      year: 2024,
      category: "infrastructure",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
    },
    {
      id: 3,
      title: "Radhika Orchid",
      description: "Premium residential building development with modern amenities.",
      area: "1.68 Lakh Sq.ft",
      cost: "₹8.00 Cr",
      city: "Jhansi",
      year: 2023,
      category: "residential",
      status: "Completed",
      image: "images/Projects/Radhika Orchid.webp"
    },
    {
      id: 4,
      title: "Primary School at Rishikunj & Pichhore",
      description: "Primary school construction project providing educational infrastructure.",
      area: "5,450 Sq.ft",
      cost: "₹2.07 Cr",
      city: "Jhansi",
      year: 2023,
      category: "infrastructure",
      status: "Completed",
      image: "images/Projects/Primary School at Rishikunj & Pichhore.webp"
    },
    {
      id: 5,
      title: "Baidyanath Group Infrastructure",
      description: "Robust industrial setup featuring roadways, utility buildings, fire tank, STP plant, boiler area, chimney area, and bungalows.",
      area: "15,000 Sq.ft",
      cost: "₹7.50 Cr",
      city: "Jhansi",
      year: 2023,
      category: "industrial",
      status: "Completed",
      image: "images/Projects/Baidyanath Group Infrastructure.webp"
    },
    {
      id: 6,
      title: "State Tax Office Building",
      description: "Divisional-level corporate office building for the State Tax Department.",
      area: "25,000 Sq.ft",
      cost: "₹5.45 Cr",
      city: "Unnao",
      year: 2026,
      category: "commercial",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
    },
    {
      id: 7,
      title: "Satyashanti Group Road & Park Projects",
      description: "PWD-sponsored urban roadways, parks, and community developments.",
      area: "4.5 Km",
      cost: "₹1.78 Cr",
      city: "Jhansi",
      year: 2025,
      category: "infrastructure",
      status: "Completed",
      image: "images/Projects/Satyashanti Group Road & Park Projects.webp"
    },
    {
      id: 8,
      title: "RED Civic Infrastructure",
      description: "Roads, storm water drainage networks, community parks, and boundary development sponsored by RED Jhansi.",
      area: "1.46 Km",
      cost: "₹1.43 Cr",
      city: "Jhansi",
      year: 2026,
      category: "infrastructure",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
    }
  ],

  // Team list from contend.md
  team: [
    {
      name: "Arbindra Singh",
      designation: "Director",
      expertise: "Management & Operations",
      staff: "—",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Shivraj Singh",
      designation: "Project Manager",
      expertise: "Civil Engineering",
      staff: "4+",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Bhupendra Singh",
      designation: "Accounts & Billing",
      expertise: "Finance & Billing",
      staff: "3+",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
    },
    {
      name: "Vikram Singh",
      designation: "Site Accountant & Marketing Executive",
      expertise: "Accounts & Marketing",
      staff: "26+",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
    },
    {
      name: "Ansh Singh",
      designation: "Sr. Site Engineer",
      expertise: "Civil Engineering",
      staff: "8+",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    },
    {
      name: "Upendra Singh",
      designation: "Site Coordinator",
      expertise: "Site Management",
      staff: "9+",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
    }
  ]
};
