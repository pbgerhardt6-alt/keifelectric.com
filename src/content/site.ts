export const siteContent = {
  phone: '(805) 286-0477',
  email: 'adam@keifelectric.com',
  license: 'CA# 1152084',

  nav: [
    { label: 'Services', href: '/#services' },
    { label: 'Areas', href: '/#service-area' },
    { label: 'About', href: '/#about' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'FAQ', href: '/#faq' },
  ],

  // Real review platform data for the above-the-fold trust badges.
  // Update counts as reviews come in. Replace the URLs with the real
  // Google Business Profile and Yelp listing links.
  reviewBadges: {
    google: { rating: '5.0', count: 2, url: 'https://www.google.com/search?q=Keif+Electric+San+Luis+Obispo' },
    yelp: { rating: '5.0', count: 1, url: 'https://www.yelp.com/biz/keif-electric-san-luis-obispo' },
  },

  // Service pages that appear in the Services nav dropdown
  serviceNav: [
    { label: 'EV charger installation', href: '/services/ev-charger' },
    { label: 'Panel upgrades', href: '/services/panel' },
    { label: 'Recessed & custom lighting', href: '/services/lighting' },
    { label: 'Troubleshooting & repair', href: '/services/troubleshooting' },
    { label: 'New construction & remodels', href: '/services/newbuild' },
  ],

  hero: {
    eyebrow: 'Keif Electric',
    title: 'Residential electrical work, done to a finish-quality standard.',
    subtitle: 'Licensed, insured electrician serving Atascadero and SLO County. EV chargers, panel upgrades, lighting, new builds. Free estimates, upfront pricing, owner-operated.',
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
      description: 'Full residential electrical for new builds and major remodels — rough-in, panel installation, dedicated circuits, and finish trim. We coordinate with GCs, pull all required permits, and leave panels clean and labeled.',
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
      href: '/services/troubleshooting',
      icon: 'magnifying-glass',
      title: 'Troubleshooting & diagnostics',
      description: 'Electrical troubleshooting and diagnostics for flickering lights, tripping breakers, dead outlets, and mystery circuits. Root cause, not just the symptom.',
    },
    {
      id: 'same-week',
      href: '/#services',
      icon: 'clock',
      title: 'Same-week service calls',
      description: 'Same-week scheduling for most non-emergency electrical service calls across San Luis Obispo and SLO County.',
    },
  ],

  // Real customer reviews only. Paste verbatim from Google/Yelp; do not
  // fabricate. Currently: 2 Google + 1 Yelp, all 5 stars. Fill in the
  // real text/names below as Adam provides them.
  // Shape: { name, location, service, source: 'Google'|'Yelp', rating,
  //          text, avatar (initials), avatarBg: ''|'bg-amber'|'bg-orange' }
  reviews: [
    {
      name: 'Peter G.',
      location: 'Los Osos',
      service: 'New circuit install',
      source: 'Google',
      rating: 5,
      text: 'Adam from Keif Electric did a great job adding a new circuit to my electrical panel in Los Osos. He was professional, reliable, and took the time to explain what needed to be done and why. The work was clean, efficient, and done with a high level of attention to detail. And the best part, cleaned up after himself, you couldn\'t even tell he\'d been there. It\'s great to have a local electrician who you can trust for this kind of work. I\'d definitely recommend Keif Electric to anyone in Los Osos or the surrounding area who needs electrical repairs, new circuits, or residential electrical work.',
      avatar: 'PG',
      avatarBg: '',
    },
  ] as Array<{
    name: string;
    location: string;
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
      answer: 'Yes. Keif Electric holds a California C-10 electrical contractor license (CA# 1152084) and carries general liability insurance. The license number is displayed on every quote and invoice — happy to email it before any visit.',
    },
    {
      question: 'What areas do you serve in SLO County?',
      answer: 'We serve San Luis Obispo, Atascadero, Paso Robles, Templeton, Santa Margarita, Arroyo Grande, Santa Maria, and surrounding areas on the Central Coast. If you\'re not sure whether we reach you, call and ask.',
    },
    {
      question: 'Do I need permits for electrical work or EV charger installation?',
      answer: 'Most significant electrical work requires permits — panel upgrades, EV charger installations, new circuits, and electrical service upgrades. We handle all permitting, coordinate with the utility, manage inspections, and ensure everything is code-compliant and signed off before we\'re done.',
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes. For most residential jobs we can give you a clear quote by phone or a short site visit at no cost. For larger projects like panel upgrades or EV charger installs, we\'ll come out, assess the panel and service capacity, and walk you through the options before any work begins.',
    },
    {
      question: 'How do you price jobs?',
      answer: 'Flat-rate pricing where possible. You get a written quote before work begins — no hidden fees, no add-ons that weren\'t discussed. For diagnostic and troubleshooting calls, we charge a flat diagnostic fee that applies toward the repair if you move forward.',
    },
    {
      question: 'Do you install EV chargers?',
      answer: 'Yes. We install Level 2 EV chargers for Tesla, Rivian, Ford, and all electric vehicles. Every install includes a panel assessment to confirm your electrical service can support the load, a dedicated circuit, permitted and inspected work, and clean conduit runs. We handle the full job from permit to sign-off.',
    },
  ],
};
