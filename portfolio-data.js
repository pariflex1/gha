/* ============================================
   GHA CONSTRUCTION - Centralized Data Configuration
   ============================================
   Update service details, project specifications,
   team listings, contact numbers, and image links here.
   All data sourced from verified company records.
   ============================================ */

const PORTFOLIO_DATA = {
  company: {
    name: "GHA Construction",
    tagline: "Building Excellence, Creating the Future",
    about: "We are a premier construction and civil engineering firm dedicated to transforming urban and rural landscapes through high-quality infrastructure. With a proven track record of executing prestigious projects across industrial, residential, institutional, and government sectors, GHA Construction delivers end-to-end engineering excellence that stands the test of time.",
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
    stats: {
      projectsCompleted: 6,
      projectsOngoing: 2,
      totalProjectValueCr: 38.75,
      teamStrength: 50
    },
    director: {
      name: "Akhilesh Singh",
      designation: "Director, GHA Construction",
      quote: "At GHA Construction, our mission goes beyond building structures\u2014we build trust, lasting relationships, and communities.",
      message: [
        "Since our inception, we have remained steadfast in our commitment to delivering projects of the highest quality, on time, and within budget.",
        "I am proud of the talented and dedicated team that drives this organization forward every day. Our clients are our greatest partners, and their satisfaction is the true measure of our success.",
        "As we continue to grow, we remain grounded in our core values of Transparency, Excellence, and Innovation. I look forward to serving you and building a better tomorrow, together."
      ],
      values: [
        "Transparency",
        "Excellence",
        "Innovation"
      ]
    }
  },

  // Actual clients from verified project records
  clients: [
    {
      name: "Baidyanath Group",
      description: "Industrial Infrastructure, Jhansi",
      sector: "Industrial"
    },
    {
      name: "Satyashanti Group",
      description: "PWD Road & Park Projects, Jhansi",
      sector: "Infrastructure"
    },
    {
      name: "Smart City Jhansi",
      description: "PPP Hospital & Drain Work, Jhansi",
      sector: "Government / PPP"
    },
    {
      name: "Rural Engg. Dept.",
      description: "Civic Infrastructure, Jhansi",
      sector: "Government"
    },
    {
      name: "State Tax Dept., UP",
      description: "Divisional Office Building, Unnao",
      sector: "Government"
    },
    {
      name: "Radhika Orchid",
      description: "Residential Development, Jhansi",
      sector: "Residential"
    }
  ],

  // Services from contend.md - 5 distinct service categories
  services: [
    {
      id: "civil-construction",
      sr: 1,
      title: "Civil Construction",
      description: "Civil Construction &amp; Structural Work \u2014 the backbone of every great project. We handle robust industrial setups, government-grade structures, city-level road networks, and large-scale institutional buildings with high-quality engineering and precision execution.",
      shortDescription: "Civil Construction &amp; Structural Work",
      icon: "&#127959;",
      image: "images/Projects/Baidyanath Group Infrastructure.webp",
      features: [
        "Industrial Infrastructure &amp; Utility Buildings",
        "Government &amp; Institutional Structures",
        "PWD-approved Urban Roadways &amp; Drains",
        "Rural Infrastructure (RED, Jhansi)",
        "Civil &amp; RCC Structural Work"
      ],
      highlight: "Executed \u20b97.50 Cr Baidyanath Group industrial campus"
    },
    {
      id: "pmc",
      sr: 2,
      title: "Project Management Consultancy",
      description: "End-to-end Project Management Consultancy (PMC) services ensuring your projects are executed efficiently, on-time, and within budget. Our experienced managers handle everything from planning and procurement to quality audits and final handover.",
      shortDescription: "Project Management Consultants",
      icon: "&#128203;",
      image: "images/Projects/Smart City Hospital.webp",
      features: [
        "Project Coordination &amp; Scheduling",
        "Cost Control &amp; Budgeting",
        "Quality Audits &amp; Compliance",
        "Vendor &amp; Procurement Management",
        "Risk Assessment &amp; Mitigation"
      ],
      highlight: "Managing \u20b99 Cr Smart City Hospital on PPP &amp; BOOT model"
    },
    {
      id: "architecture",
      sr: 3,
      title: "Architecture &amp; Design",
      description: "Architectural Design &amp; Planning Services that marry function with form. We provide creative layout planning, structural blueprinting, regulatory permit drawings, and aesthetic elevation designs suited for modern civil, institutional, and commercial landscapes.",
      shortDescription: "Architectural Design &amp; Planning Services",
      icon: "&#128221;",
      image: "images/Projects/Radhika Orchid.webp",
      features: [
        "Architectural Design &amp; Space Planning",
        "Structural Engineering Layouts",
        "Aesthetic Elevations &amp; 3D Visualization",
        "Permit Drawings &amp; Documentation",
        "Site Feasibility &amp; Master Planning"
      ],
      highlight: "Designed 1.68 Lakh Sq.ft Radhika Orchid residential complex"
    },
    {
      id: "interior-design",
      sr: 4,
      title: "Interior Design",
      description: "Interior Design &amp; Space Planning \u2014 transforming offices, government buildings, residential spaces, and commercial hubs with elegant, functional, and durable designs tailored to the Indian climate and aesthetic sensibility.",
      shortDescription: "Interior Design &amp; Space Planning",
      icon: "&#128736;",
      image: "images/Projects/Primary School at Rishikunj & Pichhore.webp",
      features: [
        "Space &amp; Traffic Flow Optimization",
        "Commercial &amp; Institutional Fit-Outs",
        "Residential Interior Styling",
        "Custom Furniture &amp; Lighting Layouts",
        "Material Selection &amp; Procurement"
      ],
      highlight: "Completed interiors for primary schools in Rishikunj &amp; Pichhore"
    },
    {
      id: "finishing-work",
      sr: 5,
      title: "Finishing Work &amp; Others",
      description: "Finishing, Renovation &amp; Allied Construction Services \u2014 the final mile of construction excellence. We deliver premium curbing, secure boundary wall installations, community park beautification, storm water drainage, and comprehensive site finishing work.",
      shortDescription: "Finishing, Renovation &amp; Allied Services",
      icon: "&#10002;",
      image: "images/Projects/Satyashanti Group Road & Park Projects.webp",
      features: [
        "Precise Curbing &amp; Edging",
        "Secure Boundary Wall Systems",
        "Aesthetic Community Parks",
        "Storm Water Drainage",
        "Renovation &amp; Finishing Work"
      ],
      highlight: "Delivered 4.5 Km road &amp; park projects for Satyashanti Group"
    }
  ],

  // All 8 projects from contend.md
  projects: [
    {
      id: 1,
      title: "Smart City Hospital",
      description: "Construction of Smart Health Centre in Jhansi city on a PPP &amp; BOOT model \u2014 a landmark public-private partnership delivering modern healthcare infrastructure under the Smart City Mission.",
      seoDescription: "GHA Construction built the Smart City Health Centre in Jhansi under PPP &amp; BOOT model, spanning 25,000 Sq.ft at \u20b99.00 Cr, completed in 2025.",
      area: "25,000 Sq.ft",
      cost: "\u20b99.00 Cr",
      city: "Jhansi",
      year: 2025,
      category: "commercial",
      status: "Completed",
      client: "Smart City Jhansi (PPP)",
      image: "images/Projects/Smart City Hospital.webp"
    },
    {
      id: 2,
      title: "Smart City Drain Work",
      description: "Construction of 6 km of urban storm water drain and utility water management systems under the Smart City Mission Jhansi \u2014 improving flood resilience and sanitation for thousands of residents.",
      seoDescription: "GHA Construction executed 6 Km of Smart City drain work in Jhansi at \u20b93.55 Cr, completed in 2024.",
      area: "6.00 Km",
      cost: "\u20b93.55 Cr",
      city: "Jhansi",
      year: 2024,
      category: "infrastructure",
      status: "Completed",
      client: "Smart City Jhansi",
      image: "images/Projects/Smart City Hospital.webp"
    },
    {
      id: 3,
      title: "Radhika Orchid",
      description: "Premium residential building development spanning 1.68 Lakh Sq.ft in Jhansi, delivering modern apartments with high-quality structural work, architectural finishes, and complete site development.",
      seoDescription: "GHA Construction developed Radhika Orchid \u2014 a 1.68 Lakh Sq.ft residential building in Jhansi at \u20b98.00 Cr, completed in 2023.",
      area: "1.68 Lakh Sq.ft",
      cost: "\u20b98.00 Cr",
      city: "Jhansi",
      year: 2023,
      category: "residential",
      status: "Completed",
      client: "Radhika Orchid Developers",
      image: "images/Projects/Radhika Orchid.webp"
    },
    {
      id: 4,
      title: "Primary School at Rishikunj &amp; Pichhore",
      description: "Construction of primary school buildings at Rishikunj and Pichhore, providing essential educational infrastructure to rural communities in the Jhansi district under government funding.",
      seoDescription: "GHA Construction built primary schools at Rishikunj &amp; Pichhore, Jhansi \u2014 5,450 Sq.ft at \u20b92.07 Cr, completed in 2023.",
      area: "5,450 Sq.ft",
      cost: "\u20b92.07 Cr",
      city: "Jhansi",
      year: 2023,
      category: "infrastructure",
      status: "Completed",
      client: "Rural Engineering Department (RED), Jhansi",
      image: "images/Projects/Primary School at Rishikunj & Pichhore.webp"
    },
    {
      id: 5,
      title: "Baidyanath Group Infrastructure",
      description: "Comprehensive industrial campus development for the Baidyanath Group \u2014 including roadways, utility buildings, fire tank, STP plant, boiler area, chimney area, and residential bungalows. A showcase of GHA\u2019s industrial construction expertise.",
      seoDescription: "GHA Construction developed Baidyanath Group\u2019s industrial campus in Jhansi \u2014 15,000 Sq.ft at \u20b97.50 Cr, including STP, fire tanks, and bungalows, completed in 2023.",
      area: "15,000 Sq.ft",
      cost: "\u20b97.50 Cr",
      city: "Jhansi",
      year: 2023,
      category: "industrial",
      status: "Completed",
      client: "Baidyanath Group",
      image: "images/Projects/Baidyanath Group Infrastructure.webp"
    },
    {
      id: 6,
      title: "State Tax Office Building",
      description: "Construction of a divisional-level government office building for the Uttar Pradesh State Tax Department in Unnao \u2014 a prestigious 25,000 Sq.ft institutional structure built to government specifications.",
      seoDescription: "GHA Construction is building a 25,000 Sq.ft State Tax Office in Unnao for UP Government at \u20b95.45 Cr \u2014 an ongoing project expected in 2026.",
      area: "25,000 Sq.ft",
      cost: "\u20b95.45 Cr",
      city: "Unnao",
      year: 2026,
      category: "commercial",
      status: "Ongoing",
      client: "State Tax Department, Uttar Pradesh",
      image: "images/Projects/Baidyanath Group Infrastructure.webp"
    },
    {
      id: 7,
      title: "Satyashanti Group Road &amp; Park Projects",
      description: "PWD-sponsored urban roadway and community park development for the Satyashanti Group across 4.5 Km \u2014 enhancing urban mobility and green spaces for residents of Jhansi.",
      seoDescription: "GHA Construction completed 4.5 Km of PWD road &amp; park development for Satyashanti Group in Jhansi at \u20b91.78 Cr in 2025.",
      area: "4.5 Km",
      cost: "\u20b91.78 Cr",
      city: "Jhansi",
      year: 2025,
      category: "infrastructure",
      status: "Completed",
      client: "Satyashanti Group",
      image: "images/Projects/Satyashanti Group Road & Park Projects.webp"
    },
    {
      id: 8,
      title: "RED Civic Infrastructure",
      description: "Roads, storm water drainage networks, community parks, and boundary wall development spanning 1.46 Km \u2014 sponsored by the Rural Engineering Department (RED), Jhansi, to improve civic amenities in underserved areas.",
      seoDescription: "GHA Construction is executing 1.46 Km of RED Jhansi civic infrastructure including roads, drainage, parks, and boundary walls at \u20b91.43 Cr in 2026.",
      area: "1.46 Km",
      cost: "\u20b91.43 Cr",
      city: "Jhansi",
      year: 2026,
      category: "infrastructure",
      status: "Ongoing",
      client: "Rural Engineering Department (RED), Jhansi",
      image: "images/Projects/Satyashanti Group Road & Park Projects.webp"
    }
  ],

  // Team from contend.md
  team: [
    {
      name: "Arbindra Singh",
      designation: "Director",
      expertise: "Management &amp; Operations",
      staff: "\u2014",
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
      designation: "Accounts &amp; Billing",
      expertise: "Finance &amp; Billing",
      staff: "3+",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
    },
    {
      name: "Vikram Singh",
      designation: "Site Accountant &amp; Marketing Executive",
      expertise: "Accounts &amp; Marketing",
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
  ],

  // Testimonials aligned with actual clients
  testimonials: [
    {
      stars: 5,
      quote: "GHA Construction delivered our industrial campus on schedule and with exceptional quality. Their attention to detail on the STP plant, fire tank, and utility infrastructure was outstanding.",
      author: "Representative",
      company: "Baidyanath Group, Jhansi"
    },
    {
      stars: 5,
      quote: "We partnered with GHA for our PWD road and park project. Their commitment to quality workmanship and transparent project management made the entire process seamless.",
      author: "Representative",
      company: "Satyashanti Group, Jhansi"
    },
    {
      stars: 5,
      quote: "GHA Construction handled the Smart City Hospital project with great professionalism. Their team managed the complexities of a PPP &amp; BOOT model with efficiency and integrity.",
      author: "Project Coordinator",
      company: "Smart City Mission, Jhansi"
    }
  ],

  // SEO metadata for each page
  seo: {
    home: {
      title: "GHA Construction | Civil Engineering &amp; Infrastructure Experts, Jhansi UP",
      description: "GHA Construction \u2014 Jhansi\u2019s trusted civil engineering &amp; infrastructure firm. Specialists in Smart City projects, industrial construction, residential buildings, schools, road works, and PMC. Serving Uttar Pradesh &amp; beyond.",
      keywords: "GHA Construction Jhansi, civil construction Jhansi, infrastructure contractor UP, Smart City hospital Jhansi, industrial construction Baidyanath, residential builder Jhansi"
    },
    whoWeAre: {
      title: "Who We Are | GHA Construction \u2014 Civil &amp; Infrastructure Experts, Jhansi UP",
      description: "Learn about GHA Construction \u2014 a premier civil engineering firm in Jhansi, Uttar Pradesh. Meet our leadership team, discover our mission, and explore our journey building quality infrastructure across UP.",
      keywords: "GHA Construction about, civil contractor Jhansi, construction company Jhansi UP, MSME construction firm UP, Akhilesh Singh GHA"
    },
    services: {
      title: "Our Services | GHA Construction \u2014 Civil Construction, PMC, Architecture, Interiors",
      description: "GHA Construction offers Civil Construction, Project Management Consultancy (PMC), Architectural Design, Interior Design, and Finishing Work across Jhansi, Unnao, and Uttar Pradesh.",
      keywords: "civil construction services Jhansi, PMC services UP, architectural design Jhansi, interior design Jhansi, construction finishing work UP"
    },
    projects: {
      title: "Projects | GHA Construction \u2014 Smart City, Industrial, Residential, Government",
      description: "Explore GHA Construction\u2019s portfolio: Smart City Hospital (\u20b99 Cr), Radhika Orchid (\u20b98 Cr), Baidyanath Group Infrastructure (\u20b97.5 Cr), State Tax Office (\u20b95.45 Cr), and more in Jhansi &amp; Unnao.",
      keywords: "GHA Construction projects, Smart City Hospital Jhansi, Radhika Orchid Jhansi, Baidyanath Group infrastructure, State Tax Office Unnao, infrastructure projects UP"
    }
  }
};
