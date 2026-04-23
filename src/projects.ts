export const projects = {
helvra: {
  title: "Helvra — OPD Management SaaS",

  description:
    "A system designed to bring structure and clarity to how clinics manage patient flow.",

  tags: ["SaaS", "Real-time", "System Design"],

  images: [
    "/images/helvra1.png",
    "/images/helvra2.png",
    "/images/helvra3.png"
  ],

  problem:
    "In many clinics, patient queues are managed manually or loosely, leading to confusion, long waits, and lack of clarity for both staff and patients.",

  solution:
    "Built a token-based system that organizes patient flow step-by-step, making the process predictable and easy to manage.",

  logic:
    "Each patient moves through a clear flow: WAITING → SERVING → COMPLETED. This ensures the system always reflects what’s actually happening in real time.",

  architecture:
    "The system is controlled from the backend, ensuring that only one operator manages the live queue at a time, avoiding conflicts and mistakes.",

  impact:
    "Creates a smoother experience for both staff and patients by reducing confusion, improving visibility, and making daily operations more organized.",

  highlights: [
    "Structured token-based workflow",
    "Real-time queue updates",
    "Clear and predictable patient flow",
    "Single-operator control for accuracy",
    "Designed around real clinic workflows"
  ],

  demo: {
  links: {
    public: "https://helvra-pilot-frontend.vercel.app",
    operator: "https://helvra-pilot-frontend.vercel.app/operator/login"
  },
  credentials: {
    phone: "1111111111 / 9999999999",
    otp: "123456"
  },
  steps: [
    "Open the public site and book 3–5 appointments for today",
    "Login to the operator dashboard using demo credentials",
    "Go to OPD Rooms and open a session with bookings",
    "Click 'Start OPD' to activate the system",
    "Use 'Call Next' to move patients through the queue",
    "Mark patients as completed, skipped, or no-show",
    "Observe real-time updates and queue behavior"
  ]
},

  live: "https://helvra-pilot-frontend.vercel.app/",
  github: "https://github.com/ShifanaKoormath/helvra_pilot_version"
},

  acad: {
    title: "Academic Companion",

    description:
      "A system that analyzes academic performance and provides structured insights for better decision-making.",

    tags: ["Analytics", "Logic System"],

    images: [
            "/images/acad9.png",
      "/images/acad1.png",

            "/images/acad.png",

       "/images/acad8.png",
      "/images/acad2.png",
      "/images/acad3.png",
      "/images/acad4.png",
      "/images/acad6.png",
      "/images/acad7.png",
            "/images/acad5.png"
     
    ],

    problem:
      "Students lack clarity about performance due to raw, unstructured academic data.",

    solution:
      "Developed a rule-based system that processes academic data into meaningful insights.",

    logic:
      "Used structured conditions to classify risk levels and eligibility status.",

    architecture:
      "Modular logic-based system that converts input data into decision-ready outputs.",

    impact:
      "Helps students make informed academic decisions instead of relying on raw marks.",

    highlights: [
      "Risk classification",
      "Eligibility tracking",
      "Decision-support system"
    ],

    live: "",
    github: "https://github.com/ShifanaKoormath/Academic-Companion-Platform"
  },

  voice: {
    title: "Secure Voice System",

    description:
      "An encrypted voice processing pipeline integrating AI-based classification with secure handling.",

    tags: ["Security", "AI", "Signal Processing"],

    images: [
      "/images/voice1.png",
      "/images/voice2.png",
      "/images/voice3.png",
      "/images/voice4.png",
      "/images/voice5.png",
      "/images/voice6.png",
      "/images/voice7.png",
    ],

    problem:
      "Voice systems often lack secure processing, making them vulnerable to misuse.",

    solution:
      "Designed a pipeline that encrypts voice input before processing.",

    logic:
      "Voice → Encrypt → Process → Classify pipeline ensuring security and intelligence.",

    architecture:
      "Integrated encryption with AI processing layers for secure system design.",

    impact:
      "Demonstrates how intelligent systems can be built without compromising security.",

    highlights: [
      "Encrypted pipeline",
      "AI classification",
      "Secure architecture"
    ],

    live: "",
    github: "https://github.com/ShifanaKoormath/Secure_voice_communication.git"
  }
};