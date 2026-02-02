// Riot Garage Product Data

export interface RiotProduct {
  id: string;
  step: number;
  name: string;
  tagline: string;
  sku: string;
  description: string;
  whatItIs: string;
  capabilities: string;
  strategicIntent: string;
  deploymentProtocol: string;
  smallImage: string;
  largeImage: string;
  compassImage: string;
}

export interface InterventionProduct {
  id: string;
  name: string;
  tagline: string;
  sku: string;
  description: string;
  whatItIs: string;
  capabilities: string;
  strategicIntent: string;
  deploymentProtocol: string;
  waypoint: 'grip-purge' | 'assault-clarity' | 'after-shield' | 'replace-grip-purge';
  waypointDescription: string;
  smallImage: string;
  largeImage: string;
}

export const riotLineProducts: RiotProduct[] = [
  
  {
    id: 'purge',
    step: 1,
    name: 'PURGE',
    tagline: 'Pre-Wash / Organic Soak',
    sku: 'RG-STEP01-PURGE',
    description: 'Loosens organic contamination before contact wash',
    whatItIs: 'An advanced pre-wash solution that breaks down organic matter including bugs, bird droppings, and tree sap.',
    capabilities: 'Safely lifts contamination without contact, reducing wash-induced scratches.',
    strategicIntent: 'Minimize physical agitation during the wash phase by pre-treating organic contamination.',
    deploymentProtocol: 'Apply to dry or wet surface. Allow 3-5 minutes dwell time. Rinse before wash.',
    smallImage: '/src/images/step-02-purge.png',
    largeImage: '/src/images/STEP 01 â__ PURGE-Front (Updated).png',
    compassImage: '/src/images/8 Step Logo.jpg',
  },
  {
    id: 'assault',
    step: 2,
    name: 'ASSAULT',
    tagline: 'Full Contact Wash',
    sku: 'RG-STEP02-ASSAULT',
    description: 'High-lubricity shampoo for deep cleaning',
    whatItIs: 'A premium car shampoo with extreme lubricity and cleaning power for safe contact washing.',
    capabilities: 'Creates rich foam, encapsulates dirt, provides slick surface for wash media to glide.',
    strategicIntent: 'Execute the primary wash phase with maximum cleaning efficiency and scratch prevention.',
    deploymentProtocol: 'Dilute 1:500 in foam cannon or 1:1000 in bucket. Work panel by panel. Rinse before drying.',
    smallImage: '/src/images/step-03-assault.png',
    largeImage: '/src/images/STEP 02 â__ ASSAULT-Front  (Updated).png',
    compassImage: '/src/images/8 Step Logo (6).png',
  },
  {
    id: 'clarity',
    step: 3,
    name: 'CLARITY',
    tagline: 'Optical Glass',
    sku: 'RG-STEP03-CLARITY',
    description: 'Streak-free glass clarity for all automotive glass',
    whatItIs: 'A specialized glass cleaner formulated for automotive use, cutting through film and residue.',
    capabilities: 'Removes water spots, oily films, and fingerprints. Leaves crystal-clear finish.',
    strategicIntent: 'Restore optical clarity to all glass surfaces for improved visibility and aesthetics.',
    deploymentProtocol: 'Spray onto glass or microfiber. Wipe in overlapping pattern. Buff with dry towel.',
    smallImage: '/src/images/step-04-clarity.png',
    largeImage: '/src/images/STEP 03 â__ CLARITY-Front  (Updated).png',
    compassImage: '/src/images/8 Step Logo (5).png',
  },
  {
    id: 'surface',
    step: 4,
    name: 'SURFACE',
    tagline: 'Cockpit Decontamination',
    sku: 'RG-STEP04-SURFACE',
    description: 'Cleans interior plastics and surfaces',
    whatItIs: 'An interior surface cleaner that safely removes dust, oils, and grime from all cockpit materials.',
    capabilities: 'Cleans plastic, vinyl, leather, and fabric. Non-greasy formula.',
    strategicIntent: 'Prepare interior surfaces for protection by removing all contamination.',
    deploymentProtocol: 'Spray onto surface or applicator. Wipe in consistent direction. Allow to dry.',
    smallImage: '/src/images/step-05-surface.png',
    largeImage: '/src/images/STEP 04 â__ SURFACE-Front  (Updated).png',
    compassImage: '/src/images/8 Step Logo (4).png',
  },
  {
    id: 'grip',
    step: 5,
    name: 'GRIP',
    tagline: 'Tire & Rubber Reset',
    sku: 'RG-STEP05-GRIP',
    description: 'Resets tire and rubber surfaces, removes old dressings and oxidation',
    whatItIs: 'A powerful tire and rubber decontamination formula designed to strip away old dressings, road grime, and oxidation.',
    capabilities: 'Deep cleans rubber surfaces, removes browning, prepares tires for fresh dressing application.',
    strategicIntent: 'Establish a clean foundation on all rubber components before the full detail protocol begins.',
    deploymentProtocol: 'Spray directly onto dry tire surface. Agitate with stiff brush. Rinse thoroughly. Repeat for heavily soiled tires.',
    smallImage: '/src/images/step-01-grip.png',
    // largeImage: '/src/images/STEP 05 â__ GRIP-Front (Updated).png',
    largeImage: '/src/images/STEP 05 â__ GRIP-Front   (Updated).png',
    compassImage: '/src/images/STEP 08.png',
  },
  {
    id: 'revive',
    step: 6,
    name: 'REVIVE',
    tagline: 'Interior Surface Defense',
    sku: 'RG-STEP06-REVIVE',
    description: 'Protects and conditions interior surfaces',
    whatItIs: 'An interior protectant that shields surfaces from UV damage and daily wear.',
    capabilities: 'Provides matte or satin finish options. UV protection. Anti-static properties.',
    strategicIntent: 'Defend interior surfaces against aging, fading, and environmental damage.',
    deploymentProtocol: 'Apply to clean surface with applicator pad. Spread evenly. Buff off excess.',
    smallImage: '/src/images/step-06-revive.jpg',
    largeImage: '/src/images/STEP 06 â__ REVIVE-Front  (Updated).png',
    compassImage: '/src/images/8 Step Logo (3).png',
  },
  {
    id: 'lustre',
    step: 7,
    name: 'LUSTRE',
    tagline: 'Visual Depth Enhancement',
    sku: 'RG-STEP07-LUSTRE',
    description: 'Boosts gloss and slickness on exterior surfaces',
    whatItIs: 'A gloss enhancer and drying aid that adds depth and slickness to paint.',
    capabilities: 'Intensifies color depth, adds hydrophobic layer, extends protection longevity.',
    strategicIntent: 'Maximize visual impact and tactile slickness of the exterior finish.',
    deploymentProtocol: 'Apply to wet or dry surface. Spread thin. Buff to brilliant shine.',
    smallImage: '/src/images/step-07-lustre.jpg',
    largeImage: '/src/images/STEP 07 â__ LUSTRE-Front  (Updated).png',
    compassImage: '/src/images/8 Step Logo (2).png',
  },
  {
    id: 'shield',
    step: 8,
    name: 'SHIELD',
    tagline: 'Tactical Surface Defense',
    sku: 'RG-STEP08-SHIELD',
    description: 'Hydrophobic protection for all exterior surfaces',
    whatItIs: 'A spray-on sealant providing durable hydrophobic protection for paint, glass, and trim.',
    capabilities: 'Creates water-beading surface, UV protection, enhances existing coatings.',
    strategicIntent: 'Establish the final protective barrier against environmental contamination.',
    deploymentProtocol: 'Mist onto surface. Spread with microfiber. Buff to streak-free finish.',
    smallImage: '/src/images/step-08-shield.jpg',
    largeImage: '/src/images/STEP 08 â__ SHIELD-Front  (Updated).png',
    compassImage: '/src/images/8 Step Logo (1).png',
  },
];

export const interventionProducts: InterventionProduct[] = [
  {
    id: 'x-dirty',
    name: 'X-DIRTY DETAILS',
    tagline: 'Heavy Soil Pre-Treatment',
    sku: 'RG-INT-XDIRTY',
    description: 'Aggressive decontamination for heavily soiled vehicles',
    whatItIs: 'An industrial-strength pre-treatment for vehicles with extreme contamination levels.',
    capabilities: 'Breaks down heavy mud, construction debris, and industrial fallout.',
    strategicIntent: 'Prepare extremely contaminated vehicles for standard wash protocol.',
    deploymentProtocol: 'Apply to worst areas first. Allow extended dwell time. Pressure rinse before wash.',
    waypoint: 'grip-purge',
    waypointDescription: 'Inserts between GRIP (01) and PURGE (02)',
    smallImage: 'placeholder:x-dirty',
    largeImage: 'placeholder:x-dirty',
  },
  {
    id: 'x-extraction',
    name: 'X-EXTRACTION',
    tagline: 'Organic Stain Removal',
    sku: 'RG-INT-XEXTRACT',
    description: 'Targeted extraction of organic stains and matter',
    whatItIs: 'A specialized organic stain remover for stubborn contamination.',
    capabilities: 'Removes tree sap, bird droppings, insect remains, and organic stains.',
    strategicIntent: 'Eliminate organic contamination that standard pre-wash cannot address.',
    deploymentProtocol: 'Apply directly to stain. Allow to penetrate. Agitate if needed. Rinse clean.',
    waypoint: 'grip-purge',
    waypointDescription: 'Inserts between GRIP (01) and PURGE (02)',
    smallImage: '/src/images/x-extraction.jpg',
    largeImage: '/src/images/X EXTRACTION-Front-(Updated).png',
  },
  {
    id: 'x-blaqout',
    name: 'X-BLAQOUT',
    tagline: 'Adhesive Removal',
    sku: 'RG-INT-XBLAQOUT',
    description: 'Removes adhesives, tar, and sticky residues',
    whatItIs: 'A solvent-based adhesive remover safe for automotive surfaces.',
    capabilities: 'Dissolves tar, sticker residue, adhesive, and sticky contamination.',
    strategicIntent: 'Remove adhesive contamination without damaging paint or clear coat.',
    deploymentProtocol: 'Apply to adhesive. Allow to soften. Wipe away. Clean area with standard wash.',
    waypoint: 'grip-purge',
    waypointDescription: 'Inserts between GRIP (01) and PURGE (02)',
    smallImage: '/src/images/x-blaqout.jpg',
    largeImage: '/src/images/X BLAQOUT-Front-(Updated).png',
  },
  {
    id: 'x-fallout',
    name: 'X-FALLOUT',
    tagline: 'Iron Decontamination',
    sku: 'RG-INT-XFALLOUT',
    description: 'Removes iron particles and brake dust contamination',
    whatItIs: 'A chemical iron remover that dissolves ferrous contamination on contact.',
    capabilities: 'Turns purple on contact with iron. Removes embedded brake dust and rail dust.',
    strategicIntent: 'Chemically remove iron contamination that clay cannot address.',
    deploymentProtocol: 'Spray onto cool, wet surface. Allow to dwell until purple. Rinse thoroughly.',
    waypoint: 'assault-clarity',
    waypointDescription: 'Inserts between ASSAULT (03) and CLARITY (04)',
    smallImage: '/src/images/x-fallout.jpg',
    largeImage: '/src/images/X FALLOUT-Front-(Updated).png',
  },
  {
    id: 'x-field',
    name: 'X-FIELD WASH',
    tagline: 'Rinseless / Waterless Wash',
    sku: 'RG-INT-XFIELD',
    description: 'Complete wash solution without water access',
    whatItIs: 'A rinseless wash concentrate for situations where water access is limited.',
    capabilities: 'Encapsulates dirt safely. No rinse required. Works as waterless wash at higher concentration.',
    strategicIntent: 'Enable full wash capability in water-restricted environments.',
    deploymentProtocol: 'Dilute in bucket. Soak panel. Wipe with plush microfiber. Dry immediately.',
    waypoint: 'replace-grip-purge',
    waypointDescription: 'REPLACES GRIP (01) & PURGE (02)',
    smallImage: 'placeholder:x-field',
    largeImage: 'placeholder:x-field',
  },
  {
    id: 'z-fortify',
    name: 'Z-FORTIFY',
    tagline: 'Protective Barrier Treatment',
    sku: 'RG-INT-ZFORTIFY',
    description: 'Extended protection and barrier enhancement',
    whatItIs: 'A ceramic-infused sealant for maximum long-term protection.',
    capabilities: 'Adds ceramic-level protection. Extreme water beading. 6+ month durability.',
    strategicIntent: 'Provide enhanced protection beyond standard sealant for discerning operators.',
    deploymentProtocol: 'Apply to cured SHIELD layer. Spread thin. Allow to flash. Buff to perfection.',
    waypoint: 'after-shield',
    waypointDescription: 'Applies after SHIELD (08)',
    smallImage: '/src/images/z-fortify.jpg',
    largeImage: '/src/images/z-fortify.jpg',
  },
];

export const getCompassImage = (activeStep: number | null): string => {
  if (activeStep === null) return '/src/images/8 Step Logo.jpg';
  const product = riotLineProducts.find(p => p.step === activeStep);
  return product?.compassImage || '/src/images/8 Step Logo.jpg';
};

// Check if image is a placeholder
export const isPlaceholder = (imagePath: string): boolean => {
  return imagePath.startsWith('placeholder:');
};

// Get placeholder name from path
export const getPlaceholderName = (imagePath: string): string => {
  return imagePath.replace('placeholder:', '').toUpperCase().replace('-', ' ');
};