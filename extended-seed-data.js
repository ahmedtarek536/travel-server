const { supabase } = require("./src/config/supabase");

// Sample Cloudinary images
const sampleImages = [
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/bali-temple.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/paris-eiffel.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/tokyo-street.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/maldives-beach.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/swiss-alps.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/dubai-skyline.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/iceland-aurora.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/santorini-sunset.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/thailand-beach.jpg",
  "https://res.cloudinary.com/dggdqddd7/image/upload/v1/travel_company/italy-rome.jpg"
];

// Extended destinations (15 destinations)
const destinations = [
  { name: "Bali", title: "Tropical Paradise", description: "Experience the magic of Bali with its stunning beaches, ancient temples, and vibrant culture.", img: sampleImages[0] },
  { name: "Paris", title: "City of Love", description: "Discover the romance and elegance of Paris with its iconic landmarks and world-class cuisine.", img: sampleImages[1] },
  { name: "Tokyo", title: "Modern Metropolis", description: "Immerse yourself in the perfect blend of traditional and modern Japan.", img: sampleImages[2] },
  { name: "Maldives", title: "Island Paradise", description: "Escape to pristine beaches and crystal-clear waters in luxury overwater bungalows.", img: sampleImages[3] },
  { name: "Switzerland", title: "Alpine Adventure", description: "Experience breathtaking mountain scenery and world-class skiing in the Swiss Alps.", img: sampleImages[4] },
  { name: "Dubai", title: "Luxury Destination", description: "Indulge in luxury shopping, dining, and entertainment in this modern oasis.", img: sampleImages[5] },
  { name: "Iceland", title: "Land of Fire and Ice", description: "Witness the Northern Lights and explore dramatic landscapes of glaciers and volcanoes.", img: sampleImages[6] },
  { name: "Santorini", title: "Greek Island Gem", description: "Enjoy stunning sunsets and white-washed buildings overlooking the Aegean Sea.", img: sampleImages[7] },
  { name: "Thailand", title: "Land of Smiles", description: "Discover tropical beaches, ancient temples, and delicious street food in Thailand.", img: sampleImages[8] },
  { name: "Italy", title: "Historic Beauty", description: "Explore ancient Rome, Renaissance art, and world-famous cuisine in Italy.", img: sampleImages[9] },
  { name: "New York", title: "The Big Apple", description: "Experience the energy of NYC with Broadway shows, world-class museums, and iconic skyline.", img: sampleImages[0] },
  { name: "Morocco", title: "Exotic Adventure", description: "Journey through colorful markets, desert landscapes, and ancient medinas.", img: sampleImages[1] },
  { name: "Australia", title: "Down Under", description: "Discover unique wildlife, stunning coastlines, and vibrant cities.", img: sampleImages[2] },
  { name: "Norway", title: "Fjord Country", description: "Marvel at dramatic fjords, midnight sun, and Northern Lights.", img: sampleImages[3] },
  { name: "Peru", title: "Inca Heritage", description: "Explore Machu Picchu, ancient ruins, and rich indigenous culture.", img: sampleImages[4] }
];

// 30 Travel packages
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
    style: "Adventure"
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
    style: "Luxury"
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
    style: "Adventure"
  },
  {
    title: "Maldives Luxury Escape",
    location: "North Male Atoll",
    price: 3499,
    originalPrice: 4299,
    duration: 8,
    rating: 4.9,
    reviews: 245,
    description: "Ultimate luxury in overwater villas with private pools, world-class spa, and pristine coral reefs.",
    maxGuests: 4,
    minGuests: 2,
    highlights: ["Overwater villa", "Private pool", "Spa treatments", "Snorkeling"],
    includes: ["Villa accommodation", "All meals", "Seaplane transfers", "Water activities"],
    excludes: ["International flights", "Alcoholic beverages", "Spa treatments"],
    amenities: ["Private pool", "Butler service", "WiFi", "Water sports center"],
    type: "Beach",
    style: "Luxury"
  },
  {
    title: "Swiss Alps Skiing Adventure",
    location: "Zermatt, Switzerland",
    price: 2799,
    originalPrice: 3399,
    duration: 7,
    rating: 4.6,
    reviews: 178,
    description: "World-class skiing in the shadow of the Matterhorn with luxury alpine accommodations.",
    maxGuests: 8,
    minGuests: 2,
    highlights: ["Matterhorn views", "Ski passes", "Alpine dining", "Mountain railways"],
    includes: ["Chalet accommodation", "Ski passes", "Equipment rental", "Mountain guide"],
    excludes: ["International flights", "Meals", "Ski lessons"],
    amenities: ["Ski storage", "Sauna", "WiFi", "Mountain views"],
    type: "Adventure",
    style: "Luxury"
  }
];

// Generate additional 25 packages programmatically
function generateAdditionalPackages() {
  const types = ["Cultural", "Adventure", "Beach", "Romance", "Family", "Luxury"];
  const styles = ["Adventure", "Luxury", "Budget", "Eco-friendly"];
  const locations = [
    "Dubai Marina", "Reykjavik", "Oia Santorini", "Phuket", "Rome", 
    "Manhattan NYC", "Marrakech", "Sydney", "Bergen", "Cusco",
    "Barcelona", "Cairo", "Vancouver", "Rio de Janeiro", "Mumbai",
    "Seoul", "Cape Town", "Istanbul", "Amsterdam", "Vienna",
    "Prague", "Budapest", "Lisbon", "Stockholm", "Helsinki"
  ];
  
  const additionalPackages = [];
  
  for (let i = 0; i < 25; i++) {
    const basePrice = Math.floor(Math.random() * 3000) + 500;
    const originalPrice = basePrice + Math.floor(Math.random() * 1000) + 200;
    
    additionalPackages.push({
      title: `${locations[i]} Explorer Package`,
      location: locations[i],
      price: basePrice,
      originalPrice: originalPrice,
      duration: Math.floor(Math.random() * 12) + 3,
      rating: (Math.random() * 1.5 + 3.5).toFixed(1),
      reviews: Math.floor(Math.random() * 300) + 50,
      description: `Discover the wonders of ${locations[i]} with carefully curated experiences and local insights.`,
      maxGuests: Math.floor(Math.random() * 8) + 2,
      minGuests: Math.floor(Math.random() * 2) + 1,
      highlights: ["Local experiences", "Cultural sites", "Scenic views", "Local cuisine"],
      includes: ["Accommodation", "Breakfast", "Transfers", "Guide"],
      excludes: ["International flights", "Travel insurance", "Personal expenses"],
      amenities: ["WiFi", "Air conditioning", "24/7 support"],
      type: types[Math.floor(Math.random() * types.length)],
      style: styles[Math.floor(Math.random() * styles.length)]
    });
  }
  
  return additionalPackages;
}

// 20 Messages
const messages = [
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1-555-0123",
    subject: "Inquiry about Bali package",
    message: "Hi, I'm interested in the Bali Cultural Explorer package for next month. Can you provide more details about the accommodation options?",
    created_at: new Date(Date.now() - Math.floor(Math.random() * 180) * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1-555-0456",
    subject: "Group booking for Paris",
    message: "We're a group of 6 friends looking to book the Paris Romance Package. Do you offer group discounts?",
    created_at: new Date(Date.now() - Math.floor(Math.random() * 180) * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    name: "David Thompson",
    email: "d.thompson@email.com",
    phone: "+1-555-0321",
    subject: "Honeymoon in Maldives",
    message: "Looking for a romantic honeymoon package in Maldives. What special arrangements do you offer for couples?",
    created_at: new Date(Date.now() - Math.floor(Math.random() * 180) * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    name: "Lisa Wang",
    email: "lisa.wang@email.com",
    phone: "+1-555-0654",
    subject: "Swiss Alps skiing",
    message: "Interested in your Swiss Alps package. I'm an intermediate skier - is this suitable for my skill level?",
    created_at: new Date(Date.now() - Math.floor(Math.random() * 180) * 24 * 60 * 60 * 1000).toISOString()
  }
];

// Generate additional 18 messages with distributed dates over last 6 months
function generateAdditionalMessages() {
  const names = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Wilson", "Emma Brown", "Frank Miller", "Grace Lee", "Henry Clark", "Ivy Rodriguez", "Jack Thompson", "Kate Anderson", "Liam Garcia", "Mia Martinez", "Noah White", "Olivia Harris", "Paul Lewis", "Quinn Walker", "Ruby Hall"];
  const subjects = ["Package inquiry", "Booking assistance", "Travel dates", "Group booking", "Special requirements", "Payment options", "Cancellation policy", "Travel insurance", "Visa requirements", "Airport transfers", "Hotel upgrades", "Activity bookings", "Weather concerns", "Packing advice", "Local customs", "Currency exchange", "Emergency contacts", "Travel documents"];
  
  const additionalMessages = [];
  
  for (let i = 0; i < 18; i++) {
    // Generate dates spread over last 6 months
    const daysBack = Math.floor(Math.random() * 180); // 0-180 days back
    const messageDate = new Date();
    messageDate.setDate(messageDate.getDate() - daysBack);
    
    additionalMessages.push({
      name: names[i],
      email: `${names[i].toLowerCase().replace(' ', '.')}@email.com`,
      phone: `+1-555-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
      subject: subjects[i],
      message: `Hello, I have a question about your travel packages. Could you please provide more information about ${subjects[i].toLowerCase()}? Thank you for your time.`,
      created_at: messageDate.toISOString()
    });
  }
  
  return additionalMessages;
}

// 20 Custom trips
const customTrips = [
  {
    destination: "New Zealand",
    departureDate: "2024-05-15",
    returnDate: "2024-05-29",
    travelers: 4,
    budget: "luxury",
    travelStyle: "Adventure",
    accommodation: "Hotel",
    activities: ["Adventure Sports", "Hiking & Trekking", "Photography"],
    specialRequests: "Looking for adventure activities like bungee jumping and skydiving",
    contactInfo: { name: "Jennifer Adams", email: "jennifer.adams@email.com", phone: "+1-555-0654" },
    status: "new",
    created_at: new Date(Date.now() - Math.floor(Math.random() * 180) * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    destination: "Southeast Asia",
    departureDate: "2024-06-10",
    returnDate: "2024-07-01",
    travelers: 2,
    budget: "mid-range",
    travelStyle: "Cultural",
    accommodation: "Boutique Hotel",
    activities: ["Cultural Tours", "Food & Wine", "Local Experiences"],
    specialRequests: "Interested in authentic local cuisine and historical sites",
    contactInfo: { name: "Robert Taylor", email: "robert.taylor@email.com", phone: "+1-555-0987" },
    status: "reviewing",
    created_at: new Date(Date.now() - Math.floor(Math.random() * 180) * 24 * 60 * 60 * 1000).toISOString()
  }
];

// Generate additional 18 custom trips
function generateAdditionalCustomTrips() {
  const destinations = ["India", "China", "Brazil", "Argentina", "Egypt", "Kenya", "South Africa", "Russia", "Canada", "Mexico", "Chile", "Jordan", "Nepal", "Myanmar", "Vietnam", "Laos", "Cambodia", "Philippines"];
  const activities = ["Adventure Sports", "Cultural Tours", "Food & Wine", "Photography", "Wildlife Safari", "Beach Relaxation", "Hiking & Trekking", "Museums & Art", "Nightlife", "Spa & Wellness"];
  const travelStyles = ["Adventure", "Cultural", "Relaxation", "Luxury", "Budget", "Family-friendly"];
  const accommodations = ["Hotel", "Resort", "Boutique Hotel", "Vacation Rental", "Hostel", "B&B"];
  const budgets = ["budget", "mid-range", "luxury", "ultra-luxury"];
  const statuses = ["new", "reviewing", "quoted", "scheduled", "closed"];
  
  const additionalTrips = [];
  
  for (let i = 0; i < 18; i++) {
    const destination = destinations[Math.floor(Math.random() * destinations.length)];
    const travelStyle = travelStyles[Math.floor(Math.random() * travelStyles.length)];
    const accommodation = accommodations[Math.floor(Math.random() * accommodations.length)];
    const budget = budgets[Math.floor(Math.random() * budgets.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const travelers = Math.floor(Math.random() * 6) + 1;
    
    // Generate dates spread over last 6 months for better analytics
    const daysBack = Math.floor(Math.random() * 180); // 0-180 days back
    const createdDate = new Date();
    createdDate.setDate(createdDate.getDate() - daysBack);
    
    const departureDate = new Date(createdDate.getTime() + (Math.floor(Math.random() * 90) + 30) * 24 * 60 * 60 * 1000); // 30-120 days after creation
    const returnDate = new Date(departureDate.getTime() + (Math.floor(Math.random() * 21) + 7) * 24 * 60 * 60 * 1000);
    
    additionalTrips.push({
      destination: destination,
      departureDate: departureDate.toISOString().split('T')[0],
      returnDate: returnDate.toISOString().split('T')[0],
      travelers: travelers,
      budget: budget,
      travelStyle: travelStyle,
      accommodation: accommodation,
      activities: activities.slice(0, Math.floor(Math.random() * 4) + 1),
      specialRequests: `Looking for ${travelStyle.toLowerCase()} experiences in ${destination}`,
      contactInfo: { 
        name: `Customer ${i + 3}`, 
        email: `customer${i + 3}@email.com`, 
        phone: `+1-555-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}` 
      },
      status: status,
      created_at: createdDate.toISOString()
    });
  }
  
  return additionalTrips;
}

// 30 Blog posts
const blogs = [
  {
    title: "10 Hidden Gems in Bali You Must Visit",
    excerpt: "Discover the secret spots in Bali that most tourists never see, from hidden waterfalls to secluded beaches.",
    content: "Bali is known for its popular destinations, but the island holds many secrets waiting to be discovered. From hidden waterfalls tucked away in lush jungles to secluded beaches accessible only by foot, these gems offer authentic experiences away from the crowds. Our local guides have curated a list of 10 extraordinary places that will make your Bali adventure truly unforgettable.",
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
    content: "Paris isn't just about the Eiffel Tower and Louvre. The city's culinary scene is equally impressive, offering everything from Michelin-starred restaurants to charming bistros and bustling food markets. This comprehensive guide will take you through the must-try dishes, best neighborhoods for food lovers, and insider tips from local chefs.",
    category: "Food & Culture",
    author: "Culinary Explorer",
    date: "2024-01-20",
    readTime: "12 min read",
    featured: true,
    tags: ["Paris", "Food", "Culture", "Restaurants"],
    image: sampleImages[1]
  }
];

// Generate additional 28 blog posts
function generateAdditionalBlogs() {
  const categories = ["Destinations", "Food & Culture", "Adventure", "Travel Tips", "Photography", "Budget Travel"];
  const authors = ["Travel Expert Team", "Adventure Specialist", "Culture Enthusiast", "Food Critic", "Photography Pro", "Budget Traveler"];
  
  const blogTitles = [
    "Tokyo's Best Ramen Spots: A Local's Guide",
    "Maldives Photography: Capturing Paradise",
    "Swiss Alps Hiking: Top 10 Trails",
    "Dubai Shopping: Luxury and Bargains",
    "Iceland Road Trip: Complete Itinerary",
    "Santorini Sunset Points: Best Views",
    "Thailand Street Food Adventure",
    "Rome in 3 Days: Perfect Itinerary",
    "New York City on a Budget",
    "Morocco Travel Safety Tips",
    "Australia Wildlife Encounters",
    "Norway Fjords Cruise Guide",
    "Peru Altitude Sickness Prevention",
    "Barcelona Architecture Walking Tour",
    "Cairo Historical Sites Guide",
    "Vancouver Outdoor Activities",
    "Rio de Janeiro Carnival Experience",
    "Mumbai Street Photography",
    "Seoul K-Culture Exploration",
    "Cape Town Wine Tours",
    "Istanbul Food Markets",
    "Amsterdam Canal Cruises",
    "Vienna Classical Music Scene",
    "Prague Castle District Guide",
    "Budapest Thermal Baths",
    "Lisbon Tram Adventures",
    "Stockholm Archipelago Day Trips",
    "Helsinki Design District Tour"
  ];
  
  const additionalBlogs = [];
  
  for (let i = 0; i < 28; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    const readTime = Math.floor(Math.random() * 10) + 5;
    const featured = Math.random() > 0.7;
    
    additionalBlogs.push({
      title: blogTitles[i],
      excerpt: `Discover amazing insights about ${blogTitles[i].split(':')[0]} with expert tips and local recommendations.`,
      content: `This comprehensive guide covers everything you need to know about ${blogTitles[i].split(':')[0]}. From practical tips to insider secrets, we've gathered the best information to help you make the most of your experience. Whether you're a first-time visitor or a seasoned traveler, you'll find valuable insights in this detailed exploration.`,
      category: category,
      author: author,
      date: (() => {
        const daysBack = Math.floor(Math.random() * 180);
        const blogDate = new Date();
        blogDate.setDate(blogDate.getDate() - daysBack);
        return blogDate.toISOString().split('T')[0];
      })(),
      readTime: `${readTime} min read`,
      featured: featured,
      tags: blogTitles[i].split(' ').slice(0, 3),
      image: sampleImages[Math.floor(Math.random() * sampleImages.length)]
    });
  }
  
  return additionalBlogs;
}

async function seedDestinations() {
  console.log("Seeding destinations...");
  const { data, error } = await supabase.from("destinations").insert(destinations).select();
  if (error) throw error;
  console.log(`✅ Created ${data.length} destinations`);
  return data;
}

async function seedPackages(destinationIds) {
  console.log("Seeding packages...");
  
  const allPackages = [...packages, ...generateAdditionalPackages()];
  
  // Update packages with actual destination IDs
  const packagesWithDestinations = allPackages.map((pkg, index) => ({
    ...pkg,
    destinationId: destinationIds[index % destinationIds.length]
  }));

  const { data: packageData, error } = await supabase.from("packages").insert(packagesWithDestinations).select();
  if (error) throw error;

  // Add images and itineraries for each package
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
      { packageId: pkg.id, day: 3, title: "Cultural Experience", description: "Immerse in local culture with traditional activities and local cuisine." },
      { packageId: pkg.id, day: 4, title: "Adventure Day", description: "Exciting outdoor activities and adventure experiences." }
    ];
    await supabase.from("itinerary").insert(itinerary);
  }

  console.log(`✅ Created ${packageData.length} packages with images and itineraries`);
  return packageData;
}

async function seedMessages() {
  console.log("Seeding messages...");
  
  const allMessages = [...messages, ...generateAdditionalMessages()];
  const { data, error } = await supabase.from("messages").insert(allMessages).select();
  if (error) throw error;
  console.log(`✅ Created ${data.length} messages`);
  return data;
}

async function seedReservations(packageIds) {
  console.log("Seeding reservations...");
  
  const reservations = [];
  const firstNames = ["Emma", "David", "Sarah", "Michael", "Lisa", "John", "Maria", "James", "Anna", "Robert", "Jennifer", "William", "Jessica", "Christopher", "Amanda", "Daniel", "Michelle", "Matthew", "Ashley", "Anthony"];
  const lastNames = ["Wilson", "Brown", "Johnson", "Davis", "Miller", "Garcia", "Rodriguez", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez"];
  const statuses = ["confirmed", "pending", "cancelled"];
  const paymentStatuses = ["not_paid", "deposit_paid", "full_paid"];
  
  for (let i = 0; i < 20; i++) {
    const packageId = packageIds[Math.floor(Math.random() * packageIds.length)];
    const guests = Math.floor(Math.random() * 6) + 1;
    
    // Generate dates spread over last 6 months for better analytics
    const daysBack = Math.floor(Math.random() * 180); // 0-180 days back
    const checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() - daysBack);
    
    // Create order date (created_at) before check-in date
    const createdDate = new Date(checkInDate);
    createdDate.setDate(createdDate.getDate() - Math.floor(Math.random() * 30) - 1); // 1-30 days before check-in
    
    reservations.push({
      packageId: packageId,
      firstName: firstNames[i],
      lastName: lastNames[i],
      email: `${firstNames[i].toLowerCase()}.${lastNames[i].toLowerCase()}@email.com`,
      phone: `+1-555-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
      guests: guests,
      checkIn: checkInDate.toISOString().split('T')[0],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      paymentStatus: paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)],
      price: Math.floor(Math.random() * 5000) + 1000,
      created_at: createdDate.toISOString()
    });
  }

  const { data, error } = await supabase.from("reservations").insert(reservations).select();
  if (error) throw error;
  console.log(`✅ Created ${data.length} reservations`);
  return data;
}

async function seedCustomTrips() {
  console.log("Seeding custom trips...");
  
  const allCustomTrips = [...customTrips, ...generateAdditionalCustomTrips()];
  const { data, error } = await supabase.from("custom_trips").insert(allCustomTrips).select();
  if (error) throw error;
  console.log(`✅ Created ${data.length} custom trips`);
  return data;
}

async function seedBlogs() {
  console.log("Seeding blogs...");
  
  const allBlogs = [...blogs, ...generateAdditionalBlogs()];
  const { data, error } = await supabase.from("blogs").insert(allBlogs).select();
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
    console.log(`   - 20 messages`);
    console.log(`   - 20 reservations (orders)`);
    console.log(`   - 20 custom trips`);
    console.log(`   - 30 blogs`);
    
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
