// ============================================================
//  CSFC STORE CATALOG
//  Edit this file to add, remove, or update store items.
//  Each item follows the structure shown below.
// ============================================================

const CATALOG = [
  {
    id: "company-tshirt",
    name: "Company T-Shirt",
    category: "Clothing",
    pointCost: 250,
    description: "Official CSFC t-shirt with embroidered company logo on the left chest. 100% cotton, pre-shrunk.",
    image: "https://placehold.co/400x400/cc2200/ffffff?text=Company+T-Shirt",
    vendor: "Local Embroidery",
    leadTime: "2–3 weeks",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Black", "Navy", "Heather Gray"],
    customizable: true,   // e.g. name on back
    customLabel: "Name for back (optional)",
    inStock: true,
    stockNote: "Available for pickup at the station in limited sizes — check with store committee."
  },
  {
    id: "quarter-zip",
    name: "Propper Kinetic® Quarter-Zip Pullover",
    category: "Clothing",
    pointCost: 300,
    description: "The latest addition to Propper's flagship Kinetic collection. Features 6.2 oz poly/spandex fleece with improved snag and pill resistance, plus 4-way stretch reinforcement fabric on the yoke and shoulders. Use as a lightweight job shirt, under-carrier layer, or cool-weather pullover. Anti-snag, wind-resistant, and color-matched to the Kinetic Tactical Pant.",
    image: "https://www.propper.com/media/catalog/product/f/5/f5478_black_front.jpg",
    imageFallback: "https://placehold.co/400x400/1a1a1a/ffffff?text=Propper+Quarter-Zip",
    vendor: "Galls (Propper F5478)",
    vendorUrl: "https://www.galls.com/propper-kinetic-quarter-zip-pullover",
    retailPrice: "$59.99",
    leadTime: "1–2 weeks",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colors: ["Black", "LAPD Navy", "Silver Tan"],
    customizable: true,
    customLabel: "",
    inStock: false,
    stockNote: ""
  },
  {
    id: "tactical-pants",
    name: "Propper Men's Kinetic Tactical Pants",
    category: "Duty Gear",
    pointCost: 350,
    description: "Built with NEXStretch® ripstop fabric — 65% polyester, 32% cotton, 3% spandex — for unrestricted movement on duty. Features Teflon™ DWR treatment to repel stains and moisture, reinforced knees with pad-ready openings, gusseted crotch, gripper waistband, ambidextrous cargo pockets with internal dividers, and wider belt loops. Free pair of socks included.",
    image: "images/propper-kinetic-pant.jpg",
    imageFallback: "https://placehold.co/400x400/1a1a1a/ffffff?text=Propper+Kinetic+Pant",
    vendor: "Galls (Propper F52944)",
    vendorUrl: "https://www.galls.com/propper-kinetic-pant",
    retailPrice: "$69.99",
    leadTime: "1–2 weeks",
    sizes: ["28x30", "30x30", "30x32", "32x30", "32x32", "34x30", "34x32", "36x32", "38x32", "40x32"],
    colors: ["Navy", "Gray", "Khaki"],
    customizable: false,
    customLabel: "",
    inStock: false,
    stockNote: ""
  },
  {
    id: "511-taclite-pro-pant",
    name: "5.11 Tactical Men's Taclite Pro Ripstop Pants",
    category: "Duty Gear",
    pointCost: 325,
    description: "Lightweight Taclite® ripstop fabric with gusseted construction and triple-stitched seams for durability. Features 8 pockets, YKK zippers, kneepad compatibility, and stain-resistance treatment — built for all-day comfort on duty.",
    image: "images/511-taclite-pro-pant.jpg",
    imageFallback: "https://placehold.co/400x400/1a1a1a/ffffff?text=5.11+Taclite+Pro",
    vendor: "Galls (5.11 Tactical)",
    vendorUrl: "https://www.galls.com/5-11-tactical-men-s-taclite-pro-ripstop-pants-v2",
    retailPrice: "$65.00",
    leadTime: "1–2 weeks",
    sizes: ["28x30", "30x30", "30x32", "32x30", "32x32", "34x30", "34x32", "36x32", "38x32", "40x32"],
    colors: ["Navy", "Gray", "Khaki"],
    customizable: false,
    customLabel: "",
    inStock: false,
    stockNote: ""
  },
  {
    id: "propper-job-shirt",
    name: "Propper 1/4 Zip Job Shirt",
    category: "Clothing",
    pointCost: 350,
    description: "80% cotton / 20% polyester fleece job shirt with YKK Vislon® zipper and stand collar. Features dual-depth chest pockets, 2-channel pen pocket, mic clips at shoulders, anti-abrasion elbow and collar reinforcements, and ribbed cuffs. Free pair of socks included.",
    image: "images/propper-job-shirt.jpg",
    imageFallback: "https://placehold.co/400x400/1a1a1a/ffffff?text=Propper+Job+Shirt",
    vendor: "Galls (Propper SM705)",
    vendorUrl: "https://www.galls.com/propper-quarter-zip-job-shirt",
    retailPrice: "$69.99",
    leadTime: "1–2 weeks",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    colors: ["Black", "LAPD Navy"],
    customizable: false,
    customLabel: "",
    inStock: false,
    stockNote: ""
  },
  /*
  {
    id: "work-boots",
    name: "Work Boots",
    category: "Duty Gear",
    pointCost: 1200,
    description: "Station work boots with steel toe and slip-resistant sole. Suitable for general station duties.",
    image: "https://placehold.co/400x400/1a1a1a/ffffff?text=Work+Boots",
    vendor: "Galls",
    leadTime: "1–2 weeks",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
    colors: ["Black"],
    customizable: false,
    customLabel: "",
    inStock: false,
    stockNote: ""
  },
  */
  {
    id: "logo-stickers",
    name: "Logo Stickers",
    category: "Accessories",
    pointCost: 50,
    description: "CSFC logo die-cut vinyl stickers. Weatherproof and UV resistant. Pack of 3.",
    image: "https://placehold.co/400x400/ffcc00/1a1a1a?text=Logo+Stickers",
    vendor: "Local Embroidery",
    leadTime: "1 week",
    sizes: [],
    colors: [],
    customizable: false,
    customLabel: "",
    inStock: true,
    stockNote: "Available for pickup at the station."
  },
  /*
  {
    id: "tactical-team-bag",
    name: "Galls Tactical Team Bag",
    category: "Duty Gear",
    pointCost: 350,
    description: "Carries all the gear and apparel you need to be prepared for any situation. Built from rugged 900-denier polyester construction with an easy G-shield zipper. Large main compartment fits full gear loadout, with multiple exterior pockets for organized access. Adjustable shoulder strap and carry handles. An excellent station bag or go-bag for any first responder.",
    image: "https://www.galls.com/photos/styles/BG135_1500_1.JPG",
    imageFallback: "https://placehold.co/400x400/1a1a1a/ffffff?text=Galls+Team+Bag",
    vendor: "Galls (BG135)",
    vendorUrl: "https://www.galls.com/galls-tactical-team-bag",
    retailPrice: "$70.00",
    leadTime: "1–2 weeks",
    sizes: [],
    colors: ["Black"],
    customizable: false,
    customLabel: "",
    inStock: false,
    stockNote: ""
  },
  */
];

// ============================================================
//  CATEGORY LIST — update if you add new categories
// ============================================================
const CATEGORIES = ["All", "Clothing", "Duty Gear", "Accessories"];
