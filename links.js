/* ============================================================
   REMOTE RAMBLERS — LINK IN BIO
   This is the only file you edit to change what's on the page.
   Add, remove or reorder lines, save, then publish.
   Each item: { name, brand (optional), note (optional), url }
   ============================================================ */
window.RR = {
  tagline: "Four years living in a school bus. Now building a home base on 14 acres in the South.",

  // The big card at the top. Swap this each time a new video goes up.
  featured: {
    label: "Newest video",
    title: "A Bulldozer Showed Up and Cleared Our Land in One Day",
    youtubeId: "WOLhR7B_Vq4"
  },

  // Optional banner for a sale, code or announcement. Set to null to hide it.
  // Example: promo: { text: "10% off ... with code ...", url: "https://..." },
  promo: null,

  channels: [
    { name: "YouTube", note: "Full episodes every week", url: "https://www.youtube.com/@remoteramblers" },
    { name: "TikTok", note: "@remote_ramblers", url: "https://www.tiktok.com/@remote_ramblers" },
    { name: "Facebook", note: "Remote Ramblers", url: "https://www.facebook.com/remoteramblers/" },
    { name: "Pinterest", note: "Bus build + land ideas", url: "https://www.pinterest.com/remote_ramblers/" },
    { name: "Blog", note: "remoteramblers.com", url: "https://www.remoteramblers.com/" }
  ],

  moreVideos: [
    { title: "After 4 Years of Bus Life, We Might Buy 14 Acres of Old Coal Land", youtubeId: "3dPMRI2jMPo" },
    { title: "The Ultimate Outdoor Gear and Camping Gift Guide", youtubeId: "okVl3IZScV4" }
  ],

  // Shown first, as big buttons.
  shopAll: [
    { name: "Remote Finds: our Amazon storefront", note: "Everything in one place", url: "https://a.co/d/0a7eJV27" }
  ],

  gear: [
    {
      category: "Camp + outdoor living",
      items: [
        { name: "Camp chair", brand: "Cliq", url: "https://link.amazon/B0iMEcTdo" },
        { name: "Inflatable couch with built-in pump", brand: "Airgogo", url: "https://link.amazon/B0bBaUB6j" },
        { name: "Puffy camp blanket", brand: "Rumpl", url: "https://link.amazon/B04VIYJ3Q" },
        { name: "Outdoor string lights", url: "https://link.amazon/B0amNjWpL" },
        { name: "Good headlamps", brand: "BIAT", url: "https://link.amazon/B0izQK7VG" },
        { name: "Hydration drops", brand: "Buoy", note: "10% off with our link", url: "https://justaddbuoy.com/BRANDI16268" },
        { name: "E-bikes", brand: "Lectric", url: "https://sovrn.co/9mk4jm7" }
      ]
    },
    {
      category: "What we wear outside",
      items: [
        { name: "Sandals", brand: "Chaco", url: "https://link.amazon/B0ayHdBA7" },
        { name: "Fleece-lined outdoor house shoes", brand: "Chaco", url: "https://link.amazon/B0hmhitJl" },
        { name: "Classic clogs", brand: "Crocs", url: "https://link.amazon/B0dC1NLPb" },
        { name: "Anorak", brand: "L.L.Bean", url: "https://www.llbean.com/llb/shop/120914" }
      ]
    },
    {
      category: "Bus build",
      items: [
        { name: "17-foot RV awning", url: "https://link.amazon/B045qhH5L" },
        { name: "Pop-out shower awning", url: "https://link.amazon/B04nuPkZC" },
        { name: "Mini split", brand: "Pioneer", url: "https://link.amazon/B02ekzyKz" },
        { name: "Swing-out table mount", brand: "Lagun", url: "https://link.amazon/B00guTf3G" },
        { name: "Outdoor water hydrant", brand: "Aquor", url: "https://link.amazon/B03QeTLs2" },
        { name: "Camp stove", brand: "Camp Chef", note: "We cook on it daily", url: "https://link.amazon/B02qlbOLP" }
      ]
    },
    {
      category: "Solar + electrical",
      items: [
        { name: "BMS", brand: "JK BMS", url: "https://link.amazon/B03lo3uEC" },
        { name: "Lynx Power In", brand: "Victron", url: "https://link.amazon/B02NQiOzH" },
        { name: "Smart Shunt", brand: "Victron", url: "https://link.amazon/B0duH6yyx" },
        { name: "Orion 24/12 V 70 A DC-DC converter", brand: "Victron", url: "https://link.amazon/B08JfYBZO" },
        { name: "12/24 V 15 A DC-DC charger", brand: "Victron", url: "https://link.amazon/B02OCCXF7" },
        { name: "Class T 200 A fuse", brand: "Blue Sea Systems", url: "https://link.amazon/B08Bb47Sz" },
        { name: "Class T fuse block", brand: "Blue Sea Systems", url: "https://link.amazon/B05n05x3i" },
        { name: "Battery cutoff switch", brand: "Blue Sea Systems", url: "https://link.amazon/B0gjDmOsT" },
        { name: "PowerBar 600 A bus bar", brand: "Blue Sea Systems", url: "https://link.amazon/B09LTEFRZ" },
        { name: "Hammer lug crimper", brand: "TEMCo", url: "https://link.amazon/B05A8EbeJ" },
        { name: "Copper lugs + heat shrink kit", url: "https://link.amazon/B04IZi4eM" }
      ]
    }
  ],

  // Newsletter sign-up box. Sign-ups go to the "Remote Ramblers Newsletter" list (#12) in Brevo,
  // through the Brevo form "Remote Ramblers Newsletter - Link in bio". Set to null to hide the box.
  newsletter: {
    heading: "Get our newsletter",
    blurb: "New episodes and what's really happening on the land, in your inbox.",
    button: "Sign me up",
    success: "You're in. Talk soon.",
    formUrl: "https://8c15e4ec.sibforms.com/serve/MUIFACgz2bji3_NIUYaxU3lii4EgpO4jQT9LEmt54x_Td8jff-fbwmAzdFrAUI9KXgNDZvMwZVtp3whS3dDe6b9vo-V35JJGMr8w_Qo-Uq6WZi1y4ZG9TF8KTF0eDMpdAVRpH3rkjLDEbmWdpPMI6cMmC8MVgcgpsjHmgMQryKry6IntLvs4EGsRJy_DWICPNiiJHMr0KXnMFS3Q6w=="
  },

  // Promos for your other channels and projects.
  otherProjects: [
    {
      name: "Etch and Echo Goods",
      note: "Our leather goods shop on Etsy",
      url: "https://etchandechogoods.etsy.com"
    },
    {
      name: "Building My Daydream",
      note: "Brandi's channel for women building a business that fits their life",
      url: "https://www.instagram.com/buildingmydaydream/"
    }
  ],

  contact: "heythere@remoteramblers.com"
};
