export const siteContent = {
  phone: '(805) 286-0477',
  email: 'adam@keifelectric.com',
  license: 'CA# 1152084',

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Areas', href: '#service-area' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
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
      icon: 'power',
      title: 'Outlets & switches',
      description: 'New outlet and switch installation, GFCI and AFCI upgrades, USB outlets, and dedicated circuits for appliances and home offices. Code-compliant throughout.',
    },
    {
      id: 'ceiling-fan',
      icon: 'fan',
      title: 'Ceiling fan installation',
      description: 'Ceiling fan installation and replacement including fan-rated electrical boxes, dedicated wiring where needed, and remote or smart controls.',
    },
    {
      id: 'troubleshooting',
      icon: 'magnifying-glass',
      title: 'Troubleshooting & diagnostics',
      description: 'Electrical troubleshooting and diagnostics for flickering lights, tripping breakers, dead outlets, and mystery circuits. Root cause, not just the symptom.',
    },
    {
      id: 'same-week',
      icon: 'clock',
      title: 'Same-week service calls',
      description: 'Same-week scheduling for most non-emergency electrical service calls across San Luis Obispo and SLO County.',
    },
  ],

  reviews: [
    {
      name: 'Sarah M.',
      location: 'Atascadero',
      service: 'Panel upgrade',
      source: 'Google',
      rating: 5,
      text: 'Adam came out for a panel upgrade on our 1970s ranch house. Showed up on time, walked us through the quote line by line, and left the garage cleaner than he found it. Best experience we\'ve had with any contractor in years.',
      avatar: 'SM',
      avatarBg: '',
    },
    {
      name: 'Mike T.',
      location: 'Paso Robles',
      service: 'EV charger install',
      source: 'Google',
      rating: 5,
      text: 'Hired Keif Electric for a Tesla wall connector install. Adam pulled the permit, ran the conduit clean against the side of the garage, and the inspector signed off first try. Fair price, no upsell. Already have him scheduled for recessed lighting next month.',
      avatar: 'MT',
      avatarBg: 'bg-amber',
    },
    {
      name: 'Janet R.',
      location: 'San Luis Obispo',
      service: 'Diagnostic call',
      source: 'Nextdoor',
      rating: 5,
      text: 'We had been chasing a flickering kitchen light for over a year. Two electricians wrote it off as a mystery. Adam found the loose neutral in the panel in about ten minutes. Honest, professional, and explains everything.',
      avatar: 'JR',
      avatarBg: 'bg-orange',
    },
  ],

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
