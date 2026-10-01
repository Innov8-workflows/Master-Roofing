// copy library: C:\Users\Jay\.claude\site-kit\copy\roofing.js
module.exports = {
  name: "Master Roofing",
  trade: "roofing",

  /* 'demo' allows placeholders and a 4 MB payload.
     'client' forbids placeholders, forbids base64 video, and drops the budget to 2 MB. */
  mode: 'demo',

  /* Contractor Bold: the roofing direction. Near-black ground, hard-edged cards,
     dense rhythm. The client's logo-dark.png is white type and a lime green mark
     built for a dark ground, which is exactly what this direction gives it. */
  direction: 'contractor-bold',

  /* No town is known, so neither carries one. Add it once the town is confirmed. */
  title: 'Master Roofing | Roof Repairs, Re-roofing and Flat Roofs',
  description: 'Roof repairs, re-roofing, flat roofs, chimneys, guttering and scaffolding from Master Roofing. Free no obligation quotes and tidy, careful work.',

  /* Brand green sampled from the opaque mark in logo-dark.png: rgb(145,193,18).
     brand-dp is a deeper green so eyebrow text on white clears 5:1. The navy in
     logo.jpeg is rgb(8,34,47), almost the direction's own ink, so brand2 is that
     navy lifted to a slate teal that still reads against the dark ground.
     The logo is a wide lockup (4.3:1), not a square mark, so the hero logo slot
     is widened - see the hero rhythm note in the skill. */
  palette: {
    brand: '#91C112', 'brand-rgb': '145,193,18',
    'brand-lt': '#A9D836',
    'brand-dp': '#4F7A08',
    brand2: '#2C5A6E', 'brand2-rgb': '44,90,110',
    'brand2-lt': '#7FB0C4',
    'brand2-dk': '#163847',
    'on-brand2': '#EAF4F8',
    'hero-logo': 'clamp(260px,46vw,560px)',
    'hero-logo-sm': 'min(84vw,340px)',
  },

  /* A claim here is a statement that the client supplied evidence.
     NOTHING is declared. No insurance certificate, accreditation, guarantee or
     years-trading figure has been seen, and nothing on the site says any of them. */
  claims: {},

  /* No Facebook page URL was supplied with the folder. */
  facebook: null,

  /* Where each fact came from, so the next session does not have to re-derive it. */
  facts: {
    NAME:   { value: 'Master Roofing', source: 'the folder name and the logo lockup', seen: '2026-10-01' },
    TOWN:   { value: null, source: 'not supplied. The housing in the photographs (pebbledash semis, rendered terraces, a seaside apartment block) reads as Ireland or Northern Ireland - CONFIRM, and if it is the Republic, PHONE_WA takes 353 not 44', seen: '2026-10-01' },
    PHONE:  { value: null, source: 'not supplied', seen: '2026-10-01' },
    EMAIL:  { value: null, source: 'not supplied', seen: '2026-10-01' },
    OWNER:  { value: null, source: 'not supplied', seen: '2026-10-01' },
    AREAS:  { value: null, source: 'not supplied', seen: '2026-10-01' },
    REVIEWS:{ value: null, source: 'no Google, Facebook or Checkatrade URL supplied; carousel and score block stay placeholder', seen: '2026-10-01' },
    SERVICES: { value: 'repairs, re-roofing, flat roofing, chimneys and leadwork, fascias and guttering, scaffolding', source: 'inferred from the photo file names (chimney-, flat-, repair-, scaffolding-) and what the photographs show - CONFIRM scaffolding is offered as a service', seen: '2026-10-01' },
    PHOTOS: { value: '23 photographs and two logos. Used 19. NOT used: chimney-01 (American shingle roof, reads as stock), repair-2 (370px manufacturer-style gutter shot, reads as stock), 8.jpeg (600px white gutter, reads as stock), 2.jpeg (165x220, too small). No before/after pairs: the three "work in progress" rows are single frames showing old and new on the same roof.', source: 'folder batch 1', seen: '2026-10-01' },
  },

  tokens: {
    BUSINESS: "Master Roofing",
    BUSINESS_SHORT: "Master Roofing",
    TOWN: '[PLACEHOLDER town]',
    PHONE: '[PLACEHOLDER]',
    PHONE_TEL: '[PLACEHOLDER]',
    PHONE_WA: '[PLACEHOLDER]',
  },
};
