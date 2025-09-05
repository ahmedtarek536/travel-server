const { supabase } = require("./src/config/supabase");

// Sample Cloudinary images (using placeholder URLs for now)
const sampleImages = [
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/bali-temple.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/paris-eiffel.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/tokyo-street.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/maldives-beach.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/swiss-alps.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/dubai-skyline.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/iceland-aurora.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/santorini-sunset.jpg"
];

// Destinations data
const destinations = [
  { name: "Bali", title: "Tropical Paradise", description: "Experience the magic of Bali with its stunning beaches, ancient temples, and vibrant culture.", img: sampleImages[0] },
  { name: "Paris", title: "City of Love", description: "Discover the romance and elegance of Paris with its iconic landmarks and world-class cuisine.", img: sampleImages[1] },
  { name: "Tokyo", title: "Modern Metropolis", description: "Immerse yourself in the perfect blend of traditional and modern Japan.", img: sampleImages[2] },
  { name: "Maldives", title: "Island Paradise", description: "Escape to pristine beaches and crystal-clear waters in luxury overwater bungalows.", img: sampleImages[3] },
  { name: "Switzerland", title: "Alpine Adventure", description: "Experience breathtaking mountain scenery and world-class skiing in the Swiss Alps.", img: sampleImages[4] },
  { name: "Dubai", title: "Luxury Destination", description: "Indulge in luxury shopping, dining, and entertainment in this modern oasis.", img: sampleImages[5] },
  { name: "Iceland", title: "Land of Fire and Ice", description: "Witness the Northern Lights and explore dramatic landscapes of glaciers and volcanoes.", img: sampleImages[6] },
  { name: "Santorini", title: "Greek Island Gem", description: "Enjoy stunning sunsets and white-washed buildings overlooking the Aegean Sea.", img: sampleImages[7] }
];

// Travel packages data
const packages = [
  {
    title: "Bali Cultural Explorer",
    location: "Ubud, Bali",
    price: 1299,
    originalPrice: 1599,
    duration: 7,
    rating: 4.8,
    reviews: 156,
    description: "Immerse yourself in Bali's rich culture with temple visits, traditional cooking classes, and rice terrace tours.",
    maxGuests: 8,
    minGuests: 2,
    highlights: ["Temple visits", "Cooking classes", "Rice terrace tours", "Traditional markets"],
    includes: ["Accommodation", "Daily breakfast", "Airport transfers", "Local guide"],
    excludes: ["International flights", "Travel insurance", "Personal expenses"],
    amenities: ["WiFi", "Air conditioning", "Pool access", "Spa services"],
    type: "Cultural",
    style: "Adventure",
    destinationId: 1
  },
  {
    title: "Paris Romance Package",
    location: "Central Paris",
    price: 2199,
    originalPrice: 2699,
    duration: 5,
    rating: 4.9,
    reviews: 203,
    description: "Experience the most romantic city in the world with Seine river cruises, fine dining, and iconic landmarks.",
    maxGuests: 4,
    minGuests: 2,
    highlights: ["Eiffel Tower visit", "Seine river cruise", "Louvre Museum", "Montmartre tour"],
    includes: ["Luxury hotel", "Daily breakfast", "Airport transfers", "Museum passes"],
    excludes: ["International flights", "Lunch and dinner", "Shopping expenses"],
    amenities: ["Concierge service", "Room service", "WiFi", "Fitness center"],
    type: "Romance",
    style: "Luxury",
    destinationId: 2
  },
  {
    title: "Tokyo Modern Adventure",
    location: "Shibuya, Tokyo",
    price: 1899,
    originalPrice: 2299,
    duration: 6,
    rating: 4.7,
    reviews: 189,
    description: "Explore modern Tokyo with visits to tech districts, anime culture, and traditional temples.",
    maxGuests: 6,
    minGuests: 1,
    highlights: ["Shibuya crossing", "Anime districts", "Traditional temples", "Robot restaurant"],
    includes: ["Hotel accommodation", "JR Pass", "Airport transfers", "City tours"],
    excludes: ["International flights", "Meals", "Shopping"],
    amenities: ["WiFi", "Laundry service", "24/7 support", "Translation service"],
    type: "Cultural",
    style: "Adventure",
    destinationId: 3
  }
];

async function seedDestinations() {
  console.log("Seeding destinations...");
  const { data, error } = await supabase.from("destinations").insert(destinations).select();
  if (error) throw error;
  console.log(`✅ Created ${data.length} destinations`);
  return data;
}

async function seedPackages(destinationIds) {
  console.log("Seeding packages...");
  
  // Update packages with actual destination IDs
  const packagesWithDestinations = packages.map((pkg, index) => ({
    ...pkg,
    destinationId: destinationIds[index % destinationIds.length]
  }));

  const { data: packageData, error } = await supabase.from("packages").insert(packagesWithDestinations).select();
  if (error) throw error;

  // Add images for each package
  for (const pkg of packageData) {
    const images = [
      sampleImages[Math.floor(Math.random() * sampleImages.length)],
      sampleImages[Math.floor(Math.random() * sampleImages.length)],
      sampleImages[Math.floor(Math.random() * sampleImages.length)]
    ];

    const imageData = images.map(img => ({ packageId: pkg.id, img }));
    await supabase.from("packageImages").insert(imageData);

    // Add itinerary
    const itinerary = [
      { packageId: pkg.id, day: 1, title: "Arrival Day", description: "Airport pickup and hotel check-in. Welcome dinner and orientation." },
      { packageId: pkg.id, day: 2, title: "City Exploration", description: "Guided city tour visiting main attractions and landmarks." },
      { packageId: pkg.id, day: 3, title: "Cultural Experience", description: "Immerse in local culture with traditional activities and local cuisine." }
    ];
    await supabase.from("itinerary").insert(itinerary);
  }

  console.log(`✅ Created ${packageData.length} packages with images and itineraries`);
  return packageData;
}

async function seedMessages() {
  console.log("Seeding messages...");
  
  const messages = [
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1-555-0123",
      subject: "Inquiry about Bali package",
      message: "Hi, I'm interested in the Bali Cultural Explorer package for next month. Can you provide more details about the accommodation options?"
    },
    {
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1-555-0456",
      subject: "Group booking for Paris",
      message: "We're a group of 6 friends looking to book the Paris Romance Package. Do you offer group discounts?"
    }
  ];

  const { data, error } = await supabase.from("messages").insert(messages).select();
  if (error) throw error;
  console.log(`✅ Created ${data.length} messages`);
  return data;
}

async function seedReservations(packageIds) {
  console.log("Seeding reservations...");
  
  const reservations = [
    {
      packageId: packageIds[0],
      firstName: "Emma",
      lastName: "Wilson",
      email: "emma.wilson@email.com",
      phone: "+1-555-0789",
      price: 1299,
      guests: 2,
      checkIn: "2024-03-15",
      details: "Honeymoon trip, requesting room with ocean view",
      status: "confirmed",
      paymentStatus: "paid"
    },
    {
      packageId: packageIds[1],
      firstName: "David",
      lastName: "Brown",
      email: "david.brown@email.com",
      phone: "+1-555-0321",
      price: 2199,
      guests: 2,
      checkIn: "2024-04-20",
      details: "Anniversary celebration, dietary restrictions: vegetarian",
      status: "pending",
      paymentStatus: "pending"
    }
  ];

  const { data, error } = await supabase.from("reservations").insert(reservations).select();
  if (error) throw error;
  console.log(`✅ Created ${data.length} reservations`);
  return data;
}

async function seedCustomTrips() {
  console.log("Seeding custom trips...");
  
  const customTrips = [
    {
      name: "Jennifer Adams",
      email: "jennifer.adams@email.com",
      phone: "+1-555-0654",
      destination: "New Zealand",
      duration: "14 days",
      budget: "$5000-7000",
      travelers: 4,
      interests: "Adventure sports, hiking, photography",
      message: "Looking for an adventure-packed trip to New Zealand with activities like bungee jumping, skydiving, and hiking.",
      status: "pending"
    },
    {
      name: "Robert Taylor",
      email: "robert.taylor@email.com",
      phone: "+1-555-0987",
      destination: "Southeast Asia",
      duration: "21 days",
      budget: "$3000-4000",
      travelers: 2,
      interests: "Culture, food, temples",
      message: "Planning a cultural journey through Thailand, Vietnam, and Cambodia focusing on local cuisine and historical sites.",
      status: "in_progress"
    }
  ];

  const { data, error } = await supabase.from("custom_trips").insert(customTrips).select();
  if (error) throw error;
  console.log(`✅ Created ${data.length} custom trips`);
  return data;
}

async function seedBlogs() {
  console.log("Seeding blogs...");
  
  const blogs = [
    {
      title: "10 Hidden Gems in Bali You Must Visit",
      excerpt: "Discover the secret spots in Bali that most tourists never see, from hidden waterfalls to secluded beaches.",
      content: "Bali is known for its popular destinations, but the island holds many secrets waiting to be discovered...",
      category: "Destinations",
      author: "Travel Expert Team",
      date: "2024-01-15",
      readTime: "8 min read",
      featured: true,
      tags: ["Bali", "Hidden Gems", "Adventure", "Culture"],
      image: sampleImages[0]
    },
    {
      title: "The Ultimate Paris Food Guide",
      excerpt: "From croissants to coq au vin, explore the culinary delights that make Paris a food lover's paradise.",
      content: "Paris isn't just about the Eiffel Tower and Louvre. The city's culinary scene is equally impressive...",
      category: "Food & Culture",
      author: "Culinary Explorer",
      date: "2024-01-20",
      readTime: "12 min read",
      featured: true,
      tags: ["Paris", "Food", "Culture", "Restaurants"],
      image: sampleImages[1]
    }
  ];

  const { data, error } = await supabase.from("blogs").insert(blogs).select();
  if (error) throw error;
  console.log(`✅ Created ${data.length} blogs`);
  return data;
}

async function main() {
  try {
    console.log("🚀 Starting comprehensive database seeding...");
    
    // Seed destinations first (required for packages)
    const destinationData = await seedDestinations();
    const destinationIds = destinationData.map(d => d.id);
    
    // Seed packages with destination references
    const packageData = await seedPackages(destinationIds);
    const packageIds = packageData.map(p => p.id);
    
    // Seed other entities
    await seedMessages();
    await seedReservations(packageIds);
    await seedCustomTrips();
    await seedBlogs();
    
    console.log("✅ Database seeding completed successfully!");
    console.log("📊 Summary:");
    console.log(`   - ${destinationData.length} destinations`);
    console.log(`   - ${packageData.length} packages (with images & itineraries)`);
    console.log(`   - 2 messages`);
    console.log(`   - 2 reservations`);
    console.log(`   - 2 custom trips`);
    console.log(`   - 2 blogs`);
    
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
