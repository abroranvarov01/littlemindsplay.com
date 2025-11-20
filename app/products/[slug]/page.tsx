import { ProductHero } from "@/components/product-hero"
import { ProductFeatures } from "@/components/product-features"
import { ProductBenefits } from "@/components/product-benefits"
import { ProductReviews } from "@/components/product-reviews"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

// Mock product data - in a real app, this would come from a database
const products = {
  "spinning-activity-cube": {
    name: "LBAIBB Spinning Educational Interactive Learnings",
    price: "$24.99",
    rating: 4,
    reviews: 150,
    age: "6-12 months",
    images: [
      "https://m.media-amazon.com/images/I/616xPCnrScL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/616xPCnrScL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/616xPCnrScL._AC_SX679_.jpg",
    ],
    description:
      "Engaging spinning activity cube designed for interactive learning and sensory development in young children. Features colorful elements to stimulate curiosity and motor skills.",
    features: [
      "Multi-sided spinning design",
      "Colorful interactive elements",
      "Safe, durable materials",
      "Promotes sensory exploration",
      "Easy to grasp for small hands",
      "Educational play for early learning",
    ],
    benefits: [
      "Enhances sensory development",
      "Develops fine motor skills",
      "Encourages interactive play",
      "Stimulates visual recognition",
      "Builds early learning confidence",
    ],
    amazonLink: "https://www.amazon.com/LBAIBB-Spinning-Educational-Interactive-Learnings/dp/B09YRQVWSN",
  },
  "montessori-wooden-farm-toy": {
    name: "Toddlers Montessori Wooden Educational Toys",
    price: "$29.99",
    rating: 5,
    reviews: 200,
    age: "12-24 months",
    images: [
      "https://m.media-amazon.com/images/I/71KIocz1MPL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71KIocz1MPL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71KIocz1MPL._AC_SX679_.jpg",
    ],
    description:
      "High-quality wooden Montessori toy set including fruit blocks, carrots, worms, and a five-sided cart for shape sorting, color recognition, and fine motor skill development.",
    features: [
      "12 fruit blocks, 8 carrots, 10 worms",
      "Five-sided cart with shapes",
      "Non-toxic water-based paint",
      "Polished edges for safety",
      "FSC certified sustainable wood",
      "CPC tested for child safety",
    ],
    benefits: [
      "Improves fine motor skills",
      "Enhances hand-eye coordination",
      "Teaches colors, shapes, and fruits",
      "Promotes social and parent-child interaction",
      "Encourages problem-solving through play",
    ],
    amazonLink: "https://www.amazon.com/Toddlers-Montessori-Educational-Preschool-Learning/dp/B098NCLFGD",
  },
  "montessori-activity-board": {
    name: "Activity Montessori Toddlers Birthday Educational",
    price: "$34.99",
    rating: 5,
    reviews: 180,
    age: "12-24 months",
    images: [
      "https://m.media-amazon.com/images/I/81FqlaJMUpL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81FqlaJMUpL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81FqlaJMUpL._AC_SX679_.jpg",
    ],
    description:
      "Montessori-inspired activity board for toddlers, featuring various sensory and educational elements to support developmental milestones and birthday fun.",
    features: [
      "Multiple activity zones",
      "Wooden construction",
      "Safe for young explorers",
      "Encourages independent play",
      "Vibrant colors and textures",
      "Portable design",
    ],
    benefits: [
      "Supports sensory development",
      "Builds cognitive skills",
      "Fosters independence",
      "Enhances problem-solving",
      "Provides hours of engagement",
    ],
    amazonLink: "https://www.amazon.com/Activity-Montessori-Toddlers-Birthday-Educational/dp/B0CDWW9Y6L",
  },
  "bluey-plush-dress-play": {
    name: "Bluey Plush Dress Up Play Baby",
    price: "$19.99",
    rating: 5,
    reviews: 250,
    age: "0-12 months",
    images: [
      "https://m.media-amazon.com/images/I/71kIzdkDpbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71kIzdkDpbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71kIzdkDpbL._AC_SX679_.jpg",
    ],
    description:
      "Adorable Bluey plush toy in dress-up style, perfect for imaginative play and cuddling with baby, inspired by the beloved children's show.",
    features: [
      "Soft plush material",
      "Dress-up accessories",
      "Character from Bluey series",
      "Safe for all ages",
      "Machine washable",
      "Encourages role-play",
    ],
    benefits: [
      "Stimulates imagination",
      "Provides comfort and security",
      "Supports emotional development",
      "Encourages storytelling",
      "Fun for family bonding",
    ],
    amazonLink: "https://www.amazon.com/Bluey-Plush-Dress-Play-Baby/dp/B0DQ6P1ZBY",
  },
  "wooden-counting-abacus": {
    name: "Cltoyvers Wooden Abacus for Kids Math",
    price: "$15.99",
    rating: 4.7,
    reviews: 1223,
    age: "3-5 years",
    images: [
      "https://m.media-amazon.com/images/I/71W0pLdqE5L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71W0pLdqE5L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71W0pLdqE5L._AC_SX679_.jpg",
    ],
    description:
      "Wooden rainbow abacus with 100 counting sticks and 110 math cards for preschool and elementary math games, teaching counting, addition, subtraction, and more.",
    features: [
      "100 colorful wooden beads on 10 wires",
      "100 counting sticks included",
      "110 math cards with equations",
      "Sturdy wooden frame, BPA-free",
      "Non-toxic water-based paint",
      "Card slot for visual learning",
    ],
    benefits: [
      "Builds number sense and math operations",
      "Makes learning concrete and hands-on",
      "Increases engagement in math",
      "Supports preschool to 2nd grade skills",
      "Boosts confidence in problem-solving",
    ],
    amazonLink: "https://www.amazon.com/Cltoyvers-Abacus-for-Kids-Math/dp/B08SBWKJZJ",
  },
  "lego-jurassic-fossils": {
    name: "LEGO Jurassic Dinosaur Fossils Triceratops",
    price: "$44.99",
    rating: 5,
    reviews: 140,
    age: "2-3 years",
    images: [
      "https://m.media-amazon.com/images/I/81zC6Fbp23L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81zC6Fbp23L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81zC6Fbp23L._AC_SX679_.jpg",
    ],
    description:
      "LEGO set featuring Jurassic dinosaur fossils and Triceratops build, ideal for young builders to explore paleontology and creativity.",
    features: [
      "Buildable dinosaur fossils",
      "Triceratops figure",
      "Compatible LEGO pieces",
      "Educational theme",
      "Sturdy construction",
      "Includes instructions",
    ],
    benefits: [
      "Sparks interest in science",
      "Develops building skills",
      "Encourages imagination",
      "Teaches patience and focus",
      "Promotes fine motor development",
    ],
    amazonLink: "https://www.amazon.com/LEGO-Jurassic-Dinosaur-Fossils-Triceratops/dp/B0DJ1C9T61",
  },
  "montessori-sensory-teether": {
    name: "Montessori Sensory Teething Learning Developmental",
    price: "$16.99",
    rating: 5,
    reviews: 160,
    age: "0-6 months",
    images: [
      "https://m.media-amazon.com/images/I/61c6EVMqg2L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61c6EVMqg2L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61c6EVMqg2L._SX679_.jpg",
    ],
    description:
      "Montessori-inspired sensory teether toy for learning and developmental play, focusing on textures and safety for infants.",
    features: [
      "Varied sensory textures",
      "Teething-safe materials",
      "Montessori design principles",
      "Easy to clean",
      "Portable and lightweight",
      "Non-toxic composition",
    ],
    benefits: [
      "Soothes teething discomfort",
      "Stimulates sensory exploration",
      "Supports early development",
      "Encourages grasping skills",
      "Safe for mouthing",
    ],
    amazonLink: "https://www.amazon.com/Montessori-Sensory-Teething-Learning-Developmental/dp/B0CCS95CHF",
  },
  "animals-friction-vehicles": {
    name: "Animals Friction Powered Vehicles Toddlers",
    price: "$27.99",
    rating: 5,
    reviews: 110,
    age: "1-2 years",
    images: [
      "https://m.media-amazon.com/images/I/71X+HsU7R3S._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71X+HsU7R3S._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71X+HsU7R3S._AC_SX679_.jpg",
    ],
    description:
      "Set of friction-powered animal vehicles for toddlers, promoting active play and animal recognition through push-and-go fun.",
    features: [
      "Multiple animal designs",
      "Friction-powered movement",
      "Durable plastic construction",
      "Bright colors",
      "Safe for indoor/outdoor",
      "Easy to operate",
    ],
    benefits: [
      "Encourages gross motor activity",
      "Teaches animal identification",
      "Builds cause-and-effect understanding",
      "Promotes imaginative play",
      "Develops coordination",
    ],
    amazonLink: "https://www.amazon.com/Animals-Friction-Powered-Vehicles-Toddlers/dp/B097ZX3LJ6",
  },
  "stacking-silicone-cups": {
    name: "Moonkie Stacking Educational Silicone Teething",
    price: "$15.99",
    rating: 4.9,
    reviews: 2770,
    age: "6-12 months",
    images: [
      "https://m.media-amazon.com/images/I/61wt3TrgNpL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61wt3TrgNpL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61wt3TrgNpL._SX679_.jpg",
    ],
    description:
      "7-piece set of stackable silicone stacking cups for educational play, teething relief, and sensory fun, suitable from 6 months.",
    features: [
      "7 colorful stackable cups",
      "Food-grade silicone, BPA-free",
      "Raised patterns for textures",
      "Bottom holes for water play",
      "Numbers and shapes embossed",
      "Dishwasher safe",
    ],
    benefits: [
      "Promotes fine motor skills",
      "Supports number recognition",
      "Relieves teething pain",
      "Enhances sensory development",
      "Encourages creative stacking",
    ],
    amazonLink: "https://www.amazon.com/Moonkie-Stacking-Educational-Silicone-Teething/dp/B09PHJK3GR",
  },
}

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return {
      title: "Product Not Found - LittleMindsPlay",
    }
  }

  return {
    title: `${product.name} - LittleMindsPlay`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <ProductHero product={product} />
      <ProductFeatures features={product.features} />
      <ProductBenefits benefits={product.benefits} />
      <ProductReviews productName={product.name} />
      <Footer />
    </main>
  )
}
