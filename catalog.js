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
    name: "Quarter-Zip Pullover",
    category: "Clothing",
    pointCost: 600,
    description: "Embroidered CSFC quarter-zip in a durable performance fabric. Great for drill nights and events.",
    image: "https://placehold.co/400x400/cc2200/ffffff?text=Quarter-Zip",
    vendor: "Local Embroidery",
    leadTime: "2–3 weeks",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Black", "Navy"],
    customizable: true,
    customLabel: "Name or rank for embroidery (optional)",
    inStock: false,
    stockNote: ""
  },
  {
    id: "tactical-pants",
    name: "Tactical Pants",
    category: "Duty Gear",
    pointCost: 750,
    description: "Durable tactical-style work pants suitable for station wear and non-structural duties. Multiple cargo pockets.",
    image: "https://placehold.co/400x400/1a1a1a/ffffff?text=Tactical+Pants",
    vendor: "Galls",
    leadTime: "1–2 weeks",
    sizes: ["28x30", "30x30", "32x30", "32x32", "34x30", "34x32", "36x32", "38x32"],
    colors: ["Black", "Khaki", "Navy"],
    customizable: false,
    customLabel: "",
    inStock: false,
    stockNote: ""
  },
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
  {
    id: "water-bottle",
    name: "Water Bottle",
    category: "Accessories",
    pointCost: 300,
    description: "32oz insulated stainless steel water bottle with CSFC logo. Keeps drinks cold 24hrs, hot 12hrs.",
    image: "https://placehold.co/400x400/ffcc00/1a1a1a?text=Water+Bottle",
    vendor: "Local Embroidery",
    leadTime: "2 weeks",
    sizes: [],
    colors: ["Black", "Red", "Silver"],
    customizable: false,
    customLabel: "",
    inStock: false,
    stockNote: ""
  }
];

// ============================================================
//  CATEGORY LIST — update if you add new categories
// ============================================================
const CATEGORIES = ["All", "Clothing", "Duty Gear", "Accessories"];
