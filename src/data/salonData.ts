import { Service, Product, Stylist } from '@/types/salon';

export const services: Service[] = [
  {
    id: 1,
    name: "Signature Cut & Style",
    price: 85,
    duration: "90 min",
    description: "Our signature haircut with personalized styling and luxury treatment"
  },
  {
    id: 2,
    name: "Color Transformation",
    price: 150,
    duration: "3 hours",
    description: "Complete color makeover with organic, eco-friendly color products"
  },
  {
    id: 3,
    name: "Organic Hair Treatment",
    price: 65,
    duration: "60 min",
    description: "Deep conditioning treatment with organic ingredients for healthy hair"
  },
  {
    id: 4,
    name: "Bridal Hair & Makeup",
    price: 200,
    duration: "2.5 hours",
    description: "Complete bridal package with trial session and wedding day styling"
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Shampoo",
    category: "Hair Care",
    price: 24,
    description: "Natural ingredients for healthy, vibrant hair"
  },
  {
    id: 2,
    name: "Deep Conditioning Mask",
    category: "Hair Care",
    price: 32,
    description: "Intensive treatment for damaged and dry hair"
  },
  {
    id: 3,
    name: "Lavender Body Soap",
    category: "Organic Soap",
    price: 18,
    description: "Handcrafted organic soap with lavender essential oils"
  },
  {
    id: 4,
    name: "Rose Hip Facial Soap",
    category: "Organic Soap",
    price: 20,
    description: "Gentle cleansing soap perfect for sensitive skin"
  },
  {
    id: 5,
    name: "Hair Serum",
    category: "Hair Care",
    price: 45,
    description: "Lightweight serum for shine and frizz control"
  },
  {
    id: 6,
    name: "Tea Tree Body Soap",
    category: "Organic Soap",
    price: 16,
    description: "Purifying soap with tea tree oil for clear skin"
  }
];

export const stylists: Stylist[] = [
  {
    id: 1,
    name: "Sarah Martinez",
    title: "Master Stylist",
    specialties: ["Color Specialist", "Curly Hair Expert", "Wedding Styles"],
    rating: 4.9,
    bio: "With over 10 years of experience, Sarah specializes in natural hair textures and organic color techniques."
  },
  {
    id: 2,
    name: "Emily Chen",
    title: "Senior Stylist", 
    specialties: ["Precision Cuts", "Balayage", "Hair Treatments"],
    rating: 4.8,
    bio: "Emily brings precision and artistry to every cut, focusing on styles that enhance your natural beauty."
  },
  {
    id: 3,
    name: "Maya Johnson",
    title: "Style Director",
    specialties: ["Editorial Styles", "Color Correction", "Texture Specialist"],
    rating: 5.0,
    bio: "Maya is our creative director, known for innovative styles and expert color correction techniques."
  }
];

export const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];