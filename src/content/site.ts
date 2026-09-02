export const siteContent = {
  phone: '(805) 286-0477',
  email: 'adam@keifelectric.com',
  license: 'CA# 1152084',

  nav: [
    { label: 'Services', href: '/#services' },
    { label: 'Service Areas', href: '/#service-area' },
    { label: 'About', href: '/#about' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'FAQ', href: '/#faq' },
  ],

  // Real review platform data for the above-the-fold trust badges.
  // Verify counts against the live GBP before editing; do not round up.
  // Last synced from Google Business Profile: 2026-09-01 (5.0, 5 reviews).
  reviewBadges: {
    google: { rating: '5.0', count: 5, url: 'https://www.google.com/maps/place/?q=place_id:ChIJAzUvNBrJbAoRN4kXIKD9uEk' },
    yelp: { rating: '5.0', count: 1, url: 'https://www.yelp.com/biz/keif-electric-san-luis-obispo' },
  },

  // Send this to customers after a job to collect reviews. Opens the
  // Google review form directly on the Keif Electric listing.
  reviewRequestUrl: 'https://search.google.com/local/writereview?placeid=ChIJAzUvNBrJbAoRN4kXIKD9uEk',

  // Service pages that appear in the Services nav dropdown
  serviceNav: [
    { label: 'EV charger installation', href: '/ev-charger-installation-san-luis-obispo' },
    { label: 'Panel upgrades', href: '/electrical-panel-upgrade-san-luis-obispo' },
    { label: 'Recessed & custom lighting', href: '/lighting-installation-san-luis-obispo' },
    { label: 'Troubleshooting & repair', href: '/electrical-repair-san-luis-obispo' },
    { label: 'New construction & remodels', href: '/new-construction-electrical-san-luis-obispo' },
    { label: 'ADU electrical', href: '/adu-electrical-san-luis-obispo' },
  ],

  // City service-area pages that appear in the Service Areas nav dropdown
  areaNav: [
    { label: 'San Luis Obispo', href: '/electrician-san-luis-obispo' },
    { label: 'Atascadero', href: '/electrician-atascadero' },
    { label: 'Paso Robles', href: '/electrician-paso-robles' },
    { label: 'Los Osos', href: '/electrician-los-osos' },
    { label: 'Morro Bay', href: '/electrician-morro-bay' },
    { label: 'Arroyo Grande', href: '/electrician-arroyo-grande' },
  ],

  hero: {
    eyebrow: 'Keif Electric',
    title: 'Residential electrical work, done to a finish-quality standard.',
    subtitle: 'Licensed, insured electrician serving San Luis Obispo, Atascadero, Paso Robles, and SLO County. EV chargers, panel upgrades, lighting, new builds. Free estimates, upfront pricing, owner-operated.',
    cta1: { label: 'Call (805) 286-0477', href: 'tel:+18052860477' },
    cta2: { label: 'Get a free quote', href: '#contact' },
    trust: [
      { icon: 'shield-check', label: 'California C-10 licensed' },
      { icon: 'lock', label: 'Liability insured' },
      { icon: 'star', label: 'Free estimates' },
    ],
  },

  services: [
    {
      id: 'ev-charger',
      title: 'EV charger installation',
      description: 'Level 2 EV charger installation for Tesla, Rivian, Ford, and all electric vehicles. We assess your electrical panel, run a dedicated circuit, pull permits, and ensure your electrical service upgrade meets code. Permitted and inspected.',
      image: 'service-ev-charger.jpg',
      imageLabel: 'Photo: EV charger install, Atascadero',
    },
    {
      id: 'panel',
      title: 'Panel upgrades & replacements',
      description: '100A and 200A electrical panel upgrades and service replacements for older homes, remodels, and increased electrical loads. We handle permitting, utility coordination, inspections, and code-compliant installation across SLO County.',
      image: 'service-panel.jpg',
      imageLabel: 'Photo: 200A service upgrade, Paso Robles',
    },
    {
      id: 'lighting',
      title: 'Recessed & custom lighting',
      description: 'Recessed lighting, chandeliers, exterior and landscape lighting installation. Dedicated circuits where needed, code-compliant wiring, and finish-quality results throughout San Luis Obispo and SLO County.',
      image: 'service-lighting.jpg',
      imageLabel: 'Photo: Recessed lighting retrofit, SLO',
    },
    {
      id: 'newbuild',
      title: 'New construction & remodels',
      description: 'Full residential electrical for new builds and major remodels: rough-in, panel installation, dedicated circuits, and finish trim. We coordinate with GCs, pull all required permits, and leave panels clean and labeled.',
      image: 'service-newbuild.jpg',
      imageLabel: 'Photo: New construction wiring, Central Coast',
    },
  ],

  servicesText: [
    {
      id: 'outlets',
      href: '/#services',
      icon: 'power',
      title: 'Outlets & switches',
      description: 'New outlet and switch installation, GFCI and AFCI upgrades, USB outlets, and dedicated circuits for appliances and home offices. Code-compliant throughout.',
    },
    {
      id: 'ceiling-fan',
      href: '/#services',
      icon: 'fan',
      title: 'Ceiling fan installation',
      description: 'Ceiling fan installation and replacement including fan-rated electrical boxes, dedicated wiring where needed, and remote or smart controls.',
    },
    {
      id: 'troubleshooting',
      href: '/electrical-repair-san-luis-obispo',
      icon: 'magnifying-glass',
      title: 'Troubleshooting & diagnostics',
      description: 'Electrical troubleshooting and diagnostics for flickering lights, tripping breakers, dead outlets, and mystery circuits. Root cause, not just the symptom.',
    },
    {
      id: 'adu',
      href: '/adu-electrical-san-luis-obispo',
      icon: 'magnifying-glass',
      title: 'ADU electrical',
      description: 'Electrical for accessory dwelling units: a load calculation on the existing service, subpanel or separate service, feeders and trenching, and full ADU wiring rough-in to finish.',
    },
    {
      id: 'same-week',
      href: '/#services',
      icon: 'clock',
      title: 'Same-week service calls',
      description: 'Same-week scheduling for most non-emergency electrical service calls across San Luis Obispo and SLO County.',
    },
  ],

  // Real customer reviews only, pulled from the live Google Business
  // Profile. Never fabricate, trim or reword. The only edits permitted
  // are obvious typo fixes that do not change meaning (Jay L.'s card
  // fixes "all my issue" -> "issues" and "Very though" -> "Very thorough").
  // Last synced 2026-09-01: 5 Google reviews, 5.0 average. One of the
  // five (Brady B.) is a star rating with no written text, so it counts
  // toward the badge total but has no card here.
  // `location` is optional and set only when the reviewer names the city
  // in their own review. Leave it out rather than guessing.
  // Shape: { name, location?, service, source: 'Google'|'Yelp', rating,
  //          text, avatar (initials), avatarBg: ''|'bg-amber'|'bg-orange' }
  reviews: [
    {
      name: 'Peter G.',
      location: 'Los Osos',
      service: 'New circuit install',
      source: 'Google',
      rating: 5,
      text: 'Adam from Keif Electric did a great job adding a new circuit to my electrical panel in Los Osos. He was professional, reliable, and took the time to explain what needed to be done and why. The work was clean, efficient, and done with a high level of attention to detail. It\u2019s great to have a local electrician who you can trust for residential electrical work. I\u2019d definitely recommend Keif Electric to anyone in Los Osos or the surrounding area who needs electrical repairs, new circuits, or panel work.',
      avatar: 'PG',
      avatarBg: '',
    },
    {
      name: 'Craig R.',
      service: 'Light switch repair',
      source: 'Google',
      rating: 5,
      text: 'Adam came over and quickly repaired the wonky light switch in our bathroom. The work was meticulous, and the bathroom looks great!!! I highly recommend Adam Keif and Keif Electric. In the future, I won\u2019t hesitate to ask him again. (Great price, too)',
      avatar: 'CR',
      avatarBg: 'bg-amber',
    },
    {
      name: 'Jay L.',
      service: 'Lighting & EV charger',
      source: 'Google',
      rating: 5,
      text: 'Contacted Adam regarding upgrading kitchen can lights, countertop lights, installing a prewired EV charger and repairing a malfunctioning electric cooktop. He was upfront with his estimates and worked through all my issues. Very thorough. Wouldn\u2019t hesitate to use him again.',
      avatar: 'JL',
      avatarBg: 'bg-orange',
    },
    {
      name: 'Barry P.',
      service: 'Residential electrical',
      source: 'Google',
      rating: 5,
      text: 'Adam is knowledgeable and skilled and did a great job with our electrical work. I\u2019ll definitely call Keif Electric next time I need a top-notch electrician.',
      avatar: 'BP',
      avatarBg: '',
    },
  ] as Array<{
    name: string;
    location?: string;
    service: string;
    source: string;
    rating: number;
    text: string;
    avatar: string;
    avatarBg: string;
  }>,

  faqs: [
    {
      question: 'Are you a licensed and insured electrician in California?',
      answer: 'Yes. Keif Electric holds a California C-10 electrical contractor license (CA# 1152084) and carries general liability insurance. The license number is displayed on every quote and invoice, and I am happy to email it before any visit.',
    },
    {
      question: 'What areas do you serve in SLO County?',
      answer: 'We serve San Luis Obispo, Atascadero, Paso Robles, Los Osos, Morro Bay, Arroyo Grande, Templeton, Santa Margarita, Santa Maria, and surrounding areas on the Central Coast. If you\'re not sure whether we reach you, call and ask.',
    },
    {
      question: 'Do I need permits for electrical work or EV charger installation?',
      answer: 'Most significant electrical work requires permits: panel upgrades, EV charger installations, new circuits, and electrical service upgrades. We handle all permitting, coordinate with the utility, manage inspections, and ensure everything is code-compliant and signed off before we\'re done.',
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes. For most residential jobs we can give you a clear quote by phone or a short site visit at no cost. For larger projects like panel upgrades or EV charger installs, we\'ll come out, assess the panel and service capacity, and walk you through the options before any work begins.',
    },
    {
      question: 'How do you price jobs?',
      answer: 'Flat-rate pricing where possible. You get a written quote before work begins, no hidden fees, no add-ons that weren\'t discussed. For diagnostic and troubleshooting calls, we charge a flat diagnostic fee that applies toward the repair if you move forward.',
    },
    {
      question: 'Do you install EV chargers?',
      answer: 'Yes. We install Level 2 EV chargers for Tesla, Rivian, Ford, and all electric vehicles. Every install includes a panel assessment to confirm your electrical service can support the load, a dedicated circuit, permitted and inspected work, and clean conduit runs. We handle the full job from permit to sign-off.',
    },
  ],
};
