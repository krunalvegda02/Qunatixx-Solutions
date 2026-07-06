export const portfolioProjects = [
  {
    id: 'logiroute',
    title: 'LogiRoute Portal',
    company: 'LogiRoute Logistics',
    websiteLink: 'https://example.com/logiroute',
    category: ['Web Apps', 'Automation', 'SaaS'],
    metric: 'Reduced manual work by 80%',
    shortDesc: 'Automated global cargo dispatch schedule tracking and vendor invoicing.',
    problem: 'LogiRoute was managing cargo schedules using shared Excel spreadsheets and email chains, which caused scheduling errors and billing delays.',
    solution: 'We built a custom dispatch dashboard with GPS tracking and automated PDF invoice generation.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TailwindCSS'],
    impact: [
      'Automated 80% of manual scheduling tasks',
      'Saved ₹150k in yearly administrative overhead',
      'Reduced invoicing cycle from 14 days to instant'
    ],
    timeline: '3 Months',
    results: 'Operational bottleneck solved completely. Dispatch speeds increased from hours to minutes, with zero lost cargo reports recorded in the first quarter of deployment.',
    stats: [
      { label: 'Time Saved', value: '80%' },
      { label: 'Cycle Time', value: 'Instant' },
      { label: 'ROI', value: '2.5x' }
    ],
    media: {
      type: 'image',
      url: '/projects/logiroute-mock.jpg', // Replace with real image in public/projects/
      fallbackImage: ''
    }
  },
  {
    id: 'finova',
    title: 'Finova Mobile Wallet',
    company: 'Finova Financial',
    websiteLink: 'https://example.com/finova',
    category: ['Mobile Apps', 'SaaS', 'Enterprise'],
    metric: 'Increased conversion rate by 35%',
    shortDesc: 'Next-generation biometric payments wallet with streamlined onboarding.',
    problem: 'Finova noticed a huge drop-off of customers during the registration phase because the verification process was too complicated.',
    solution: 'We created a fast, beautiful mobile app with simple photo scanning and secure FaceID sign-ins to make signing up effortless.',
    techStack: ['React Native', 'TypeScript', 'Node.js', 'Supabase', 'Stripe'],
    impact: [
      'Increased user conversion rates by 35%',
      'KYC approval times reduced from 2 days to under 5 mins',
      '4.8★ aggregate score on App Store & Google Play'
    ],
    timeline: '4 Months',
    results: 'User growth accelerated by 300% post-launch, allowing Finova to successfully secure their Series-A funding round ahead of projection.',
    stats: [
      { label: 'Conversion', value: '+35%' },
      { label: 'KYC Time', value: '< 5 mins' },
      { label: 'Rating', value: '4.8★' }
    ],
    media: {
      type: 'video',
      url: '/projects/finova-demo.mp4', // Replace with real video
      fallbackImage: '/projects/finova-fallback.jpg'
    }
  },
  {
    id: 'optimaflow',
    title: 'OptimaFlow Automator',
    company: 'OptimaFlow Systems',
    websiteLink: 'https://example.com/optimaflow',
    category: ['Automation', 'SaaS'],
    metric: 'Automated 90% of repetitive tasks',
    shortDesc: 'AI email parsing engine and automated CRM routing system.',
    problem: 'Customer service staff spent 20 hours a week manually reading invoices and copying data into their CRM system by hand.',
    solution: 'We developed a smart AI tool that instantly reads incoming documents and automatically enters the data perfectly every time.',
    techStack: ['Python', 'LangChain', 'OpenAI GPT-4', 'Docker', 'FastAPI'],
    impact: [
      '90% of intake clerical work automated',
      'Reduced entry error rate to absolute 0%',
      'Freed 3 full-time employees to focus on client care'
    ],
    timeline: '2 Months',
    results: 'Billing data entry bottleneck eliminated. Response time to user inquiries dropped from 18 hours to immediate confirmation emails.',
    stats: [
      { label: 'Tasks Auto', value: '90%' },
      { label: 'Error Rate', value: '0%' },
      { label: 'Time Saved', value: '20h/wk' }
    ],
    media: {
      type: 'image',
      url: '/projects/optimaflow-mock.jpg', // Replace with real image
      fallbackImage: ''
    }
  }
];
