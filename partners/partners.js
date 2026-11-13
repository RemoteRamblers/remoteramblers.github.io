/* ============================================================
   REMOTE RAMBLERS — BRAND PARTNERSHIPS PAGE
   This is the only file you edit to change what's on the page.

   Anything marked TODO is waiting on you. While a TODO is empty,
   that spot shows as a dashed "to fill in" box in draft view
   (add ?draft=1 to the address) and is hidden from brands.
   ============================================================ */
window.RRP = {
  asOf: "November 13, 2026",
  contact: "heythere@remoteramblers.com",

  lead: "Four years living in a school bus we converted ourselves. Now we're building an off-grid homestead on 14 acres of raw land in the South, and filming every step.",

  // TODO: a current photo of you two on the land with the bus in frame.
  // Save it as img/partners/hero.jpg (about 1600px wide) and set: heroPhoto: "../img/partners/hero.jpg"
  heroPhoto: "",

  // The video brands see first. Plays on the page.
  heroVideo: { youtubeId: "3dPMRI2jMPo", title: "After 4 Years of Bus Life, We Might Buy 14 Acres of Old Coal Land" },

  // TODO: export the Canva kit as a PDF, save it as partners/remote-ramblers-media-kit.pdf
  // and set: kitPdf: "remote-ramblers-media-kit.pdf"
  kitPdf: "",

  // Headline numbers. Update these monthly.
  stats: [
    // 28.1K (YouTube + Instagram + Facebook page, 30 days) + 5.7K TikTok + 6.0K Brandi's Facebook profile (28 days) = 39.8K
    { big: "39K", label: "Monthly views", note: "YouTube, Instagram, Facebook, TikTok" },
    { big: "9.2K", label: "Followers", note: "across five accounts" },
    { big: "1,370", label: "YouTube", note: "subscribers" },
    { big: "2,836", label: "Instagram", note: "" },
    { big: "2,091", label: "TikTok", note: "" },
    { big: "697", label: "Facebook page", note: "Remote Ramblers" },
    // Brandi's public creator profile. Every Remote Ramblers video is cross-posted there.
    { big: "2.2K", label: "Facebook profile", note: "Brandi, every video cross-posted" }
  ],
  // Brandi's Facebook profile views (5,998 in 28 days to Nov 12 2026) are included in the monthly views above.

  // From YouTube Studio, 28 days to Nov 3 2026.
  audience: [
    { big: "25–44", text: "Just over half of our YouTube viewers. Peak buying years for tools, vehicles and land." },
    { big: "80%", text: "Of our YouTube viewers are men; 20% are women." },
    { big: "37%", text: "Of YouTube watch time is on a TV. People sit down and watch us like a show." },
    { big: "91%", text: "New viewers each month. Our videos reach well beyond our subscribers." }
  ],
  audienceNote: "Top countries: United States, Canada, Australia. Source: YouTube Studio, 28 days to Nov 3, 2026.",

  // The stories we tell well. Plus-size is one of four, not the headline.
  angles: [
    { name: "Off-grid systems", text: "Power, water, heat and internet with no hookups, explained by people who depend on them." },
    { name: "DIY on a real budget", text: "We converted a bus with zero building experience. Viewers trust us to show the cost and the mistakes." },
    { name: "Gear that fits real bodies", text: "We're a plus-size couple who live outdoors, so we know which chairs, bikes and workwear hold up and which don't." },
    { name: "Life with an adventure dog", text: "Cruz goes everywhere we do, from the road to the land." }
  ],

  offers: [
    { name: "YouTube integration", text: "Your product in use in a long-form episode, shown doing the job it's for. Many of our upcoming videos started as viewer questions, so people arrive wanting the answer." },
    { name: "Short-form video", text: "Vertical videos for YouTube Shorts, TikTok, Instagram and Facebook, cut from the same shoot or filmed on their own." },
    { name: "Content for your channels", text: "Video and photo you can run on your own socials and in paid ads, with usage licensing by the month. We have made content for more than 100 brands." },
    { name: "Photography + written reviews", text: "Lifestyle and product photos, plus long-form reviews on our blog." }
  ],

  // Videos shown in the "Our work" grid. kind: "Our channel" or "Brand work".
  work: [
    { kind: "Our channel", youtubeId: "WOLhR7B_Vq4", title: "A Bulldozer Showed Up and Cleared Our Land in One Day" },
    { kind: "Our channel", youtubeId: "SMr4luXNR-0", title: "DIY Compost Toilet: Skoolie Edition" },
    { kind: "Our channel", youtubeId: "okVl3IZScV4", title: "The Ultimate Outdoor Gear and Camping Gift Guide" },
    // TODO: the CompoCloset Cuddy review. Paste the YouTube ID (the part after youtu.be/).
    { kind: "Brand work", youtubeId: "", title: "CompoCloset Cuddy review", todo: "YouTube ID of the Cuddy review" },
    // TODO: a Helinox piece (Baja or the land).
    { kind: "Brand work", youtubeId: "", title: "Helinox", todo: "YouTube ID of a Helinox video, or tell Claude it's on Instagram/TikTok only" },
    // TODO: a Lectric piece.
    { kind: "Brand work", youtubeId: "", title: "Lectric eBikes", todo: "YouTube ID of a Lectric video" }
  ],

  // One card each. Leave result/numbers empty until you have the real figures.
  cases: [
    {
      brand: "CompoCloset", logo: "../img/partners/compocloset.svg",
      story: "We lived with a DIY composting toilet for three years, then switched to the Cuddy and reviewed it honestly on YouTube and in short-form.",
      delivered: "Long-form review, short-form video, affiliate links",
      result: "",   // TODO: one true sentence, e.g. "They licensed the short for paid ads."
      numbers: "",  // TODO: views, clicks or sales you can share
      todo: "CompoCloset result + numbers"
    },
    {
      brand: "Helinox", logo: "../img/partners/helinox.png",
      story: "We use camp furniture every day of the year. Helinox brought us into their ambassador program and outfitted our whole outdoor living space.",
      delivered: "",  // TODO: what you made for them
      result: "",     // TODO
      numbers: "",    // TODO
      todo: "What you delivered for Helinox + any numbers"
    },
    {
      brand: "Lectric eBikes", logo: "../img/partners/lectric.png",
      story: "Two long-range e-bikes, taken where the bus can't go.",
      delivered: "",  // TODO
      result: "",     // TODO
      numbers: "",    // TODO
      todo: "What you delivered for Lectric + any numbers"
    }
  ],

  // Brands shown as plain names under the case studies.
  // TODO: check this list. Remove any you'd rather not show; add ones I don't know about.
  alsoWorkedWith: ["Harvest Hosts", "Rock Solar", "Nuvita", "SunYear", "Amazig", "Watts247", "Cliq"],

  // What's filming next, and who belongs in it.
  upcoming: [
    { title: "Getting the bus ready for an off-grid winter", fit: "Heat, insulation, skirting, moisture control, rain gear" },
    { title: "Rainwater is our only water", fit: "Tanks, filtration, pumps, catchment" },
    { title: "Our only shower is outside, all winter", fit: "Showers, water heaters, soap, base layers" },
    { title: "Off-grid power when the sun disappears", fit: "Solar, batteries, generators" },
    { title: "Is our old coal land safe? We sent it to a lab", fit: "Water and soil testing" },
    { title: "Planning a homestead on 14 acres", fit: "Sheds, greenhouses, tools, design software" }
  ],

  promises: [
    { name: "We use it first", text: "Nothing goes in a video until it has done real work for us." },
    { name: "Honest, on camera", text: "If something falls short we say so, and we tell you before we publish." },
    { name: "Always disclosed", text: "Paid and gifted work is labeled as such on every platform." }
  ]
};
