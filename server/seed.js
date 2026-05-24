const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config();

const services = [
  {
    name: 'Bridal Blouses',
    slug: 'bridal',
    number: '01',
    icon: '👰',
    shortDesc: 'Spectacular aari-worked blouses customised for every bride.',
    fullDesc: [
      'Our bridal blouses are the centrepiece of every bride\'s ensemble. Each blouse is meticulously hand-crafted using traditional aari needlework, with intricate zari patterns, delicate floral motifs and personalised design elements chosen by the bride herself.',
      'Whether you want a classic gold-on-silk look or a modern colourful statement piece, we craft it to perfection for your most special day.',
    ],
    tags: ['Aari Work', 'Zari', 'Custom Design', 'Bridal'],
    image: '/images/bridal-blouses.png',
    badge: 'Popular',
    order: 1,
  },
  {
    name: 'Zardosi & Metal Work',
    slug: 'zardosi',
    number: '02',
    icon: '✦',
    shortDesc: 'Opulent goldwork with metallic threads, coils and sequins.',
    fullDesc: [
      'Zardosi is the art of embroidering with metallic threads — gold, silver and copper — creating opulent, three-dimensional textures on fabric. Our artisans use wire coils, flat metal threads (badla) and sequins to build intricate raised patterns.',
      'Ideal for lehengas, blouses, dupattas and saree borders requiring a regal, heavy embroidery look.',
    ],
    tags: ['Metallic Thread', 'Gold Work', 'Silver Work', 'Raised Embroidery'],
    image: '/images/zardosi-metal.png',
    badge: null,
    order: 2,
  },
  {
    name: 'Bead & Stone Embellishment',
    slug: 'bead',
    number: '03',
    icon: '💎',
    shortDesc: 'Pearls, crystals and stones in breathtaking mandala patterns.',
    fullDesc: [
      'Transform any garment into a jewel with our bead and stone embellishment service. We stitch pearls, crystals, Swarovski-style stones, seed beads and semi-precious elements onto fabric in breathtaking patterns — from delicate borders to full-coverage mosaic designs.',
      'Especially stunning on evening wear, bridal lehengas and designer blouses.',
    ],
    tags: ['Crystals', 'Pearls', 'Seed Beads', 'Stone Setting'],
    image: '/images/bead-stone.png',
    badge: null,
    order: 3,
  },
  {
    name: 'Motif & Figure',
    slug: 'motif',
    number: '04',
    icon: '🦚',
    shortDesc: 'Peacocks, paisleys and florals stitched with fine aari threads.',
    fullDesc: [
      'Bring personality and artistry to your garments with our motif and figure embroidery. From majestic peacocks, mango paisleys and temple motifs to nature-inspired flowers and geometric mandalas — each figure is stitched with incredible detail using fine aari threads.',
      'Perfect for saree pallus, dupatta borders and statement blouse backs.',
    ],
    tags: ['Peacock', 'Paisley', 'Floral', 'Mandala'],
    image: '/images/motif-figure.png',
    badge: null,
    order: 4,
  },
  {
    name: 'Mirror & Patch Work',
    slug: 'mirror',
    number: '05',
    icon: '🪞',
    shortDesc: 'Shisha mirrors and colourful patches — vibrant folk artistry.',
    fullDesc: [
      'Rooted in the vibrant folk traditions of Rajasthan and Gujarat, our mirror (shisha) and patch work adds sparkle and colour to any fabric. Tiny mirrors are hand-stitched with colourful thread frames, surrounded by bold embroidered geometric or floral patterns.',
      'Beloved for cholis, kurtis, bags, home décor and festive garments that need that extra wow factor.',
    ],
    tags: ['Shisha Mirrors', 'Folk Art', 'Patch Work', 'Colourful'],
    image: '/images/mirror-patch.png',
    badge: null,
    order: 5,
  },
  {
    name: 'Saree Pleating',
    slug: 'saree',
    number: '06',
    icon: '🥻',
    shortDesc: 'Crisp, immaculate pleats that hold beautifully all day.',
    fullDesc: [
      'The finishing touch that elevates a saree from beautiful to breathtaking. Our expert pleating service creates crisp, even, perfectly aligned pleats that hold their shape throughout the day — even for the most elaborate Kanjivaram, Banarasi or chiffon sarees.',
      'Available as a standalone service for brides, event guests and anyone who wants to look flawless effortlessly.',
    ],
    tags: ['Kanjivaram', 'Bridal Draping', 'Silk Saree', 'Expert Pleating'],
    image: '/images/saree-pleating.png',
    badge: null,
    order: 6,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await Service.deleteMany({});
    console.log('🗑️  Cleared existing services');

    await Service.insertMany(services);
    console.log('🌱 Seeded 6 services successfully');

    await mongoose.connection.close();
    console.log('👋 Connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
};

seedDB();
