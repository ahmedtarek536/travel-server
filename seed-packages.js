const { supabase } = require("./src/config/supabase");

const imageUrl = "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1681530548_Egypt%20Tours%20(21).jpg";

const samplePackages = [
  {
    title: "Egyptian Pyramids & Nile Adventure",
    location: "Cairo & Luxor, Egypt",
    price: 1299,
    originalPrice: 1599,
    duration: 8,
    rating: 4.8,
    reviews: 156,
    description: "Discover the ancient wonders of Egypt with visits to the Great Pyramids, Sphinx, and a luxurious Nile cruise. Experience the rich history and culture of this magnificent civilization.",
    maxGuests: 12,
    minGuests: 2,
    highlights: ["Visit the Great Pyramid of Giza", "Explore the Valley of the Kings", "Nile River cruise", "Egyptian Museum tour"],
    includes: ["Hotel accommodation", "All meals", "Professional guide", "Transportation", "Entry fees"],
    excludes: ["International flights", "Travel insurance", "Personal expenses", "Tips"],
    amenities: ["WiFi", "Air Conditioning", "Swimming Pool", "Restaurant"],
    type: "Cultural",
    style: "Luxury"
  },
  {
    title: "Santorini Sunset Romance",
    location: "Santorini, Greece",
    price: 899,
    originalPrice: 1199,
    duration: 5,
    rating: 4.9,
    reviews: 203,
    description: "Experience the magic of Santorini with stunning sunsets, white-washed buildings, and crystal-clear waters. Perfect for couples seeking a romantic getaway.",
    maxGuests: 8,
    minGuests: 2,
    highlights: ["Oia sunset viewing", "Wine tasting tour", "Volcanic island exploration", "Traditional Greek cuisine"],
    includes: ["Boutique hotel stay", "Daily breakfast", "Wine tasting", "Airport transfers"],
    excludes: ["Lunch and dinner", "Travel insurance", "Personal shopping", "Optional activities"],
    amenities: ["Ocean View", "Spa", "Restaurant", "WiFi"],
    type: "Romantic",
    style: "Luxury"
  },
  {
    title: "Bali Cultural Immersion",
    location: "Ubud & Seminyak, Bali",
    price: 749,
    originalPrice: 999,
    duration: 7,
    rating: 4.7,
    reviews: 189,
    description: "Immerse yourself in Balinese culture with temple visits, traditional cooking classes, and serene rice terrace walks. Experience the spiritual heart of Indonesia.",
    maxGuests: 10,
    minGuests: 1,
    highlights: ["Temple hopping tour", "Cooking class with locals", "Rice terrace trekking", "Traditional dance performance"],
    includes: ["Traditional villa accommodation", "All meals", "Cultural guide", "Transportation", "Activity fees"],
    excludes: ["International flights", "Travel insurance", "Spa treatments", "Shopping"],
    amenities: ["Swimming Pool", "Spa", "Restaurant", "WiFi", "Garden"],
    type: "Cultural",
    style: "Mid-range"
  },
  {
    title: "Tokyo Modern & Traditional",
    location: "Tokyo, Japan",
    price: 1599,
    originalPrice: 1899,
    duration: 6,
    rating: 4.8,
    reviews: 234,
    description: "Explore the fascinating contrast between ultra-modern Tokyo and traditional Japan. From skyscrapers to ancient temples, experience it all.",
    maxGuests: 8,
    minGuests: 2,
    highlights: ["Shibuya crossing experience", "Traditional tea ceremony", "Sushi making class", "Mount Fuji day trip"],
    includes: ["Modern hotel accommodation", "Daily breakfast", "JR Pass", "Professional guide"],
    excludes: ["Lunch and dinner", "Travel insurance", "Shopping", "Optional tours"],
    amenities: ["WiFi", "Fitness Center", "Restaurant", "Business Center"],
    type: "Cultural",
    style: "Luxury"
  },
  {
    title: "Patagonia Adventure Trek",
    location: "Torres del Paine, Chile",
    price: 1899,
    originalPrice: 2299,
    duration: 10,
    rating: 4.9,
    reviews: 87,
    description: "Challenge yourself with an epic trek through Patagonia's most stunning landscapes. Experience glaciers, mountains, and pristine wilderness.",
    maxGuests: 6,
    minGuests: 4,
    highlights: ["Torres del Paine trek", "Glacier viewing", "Wildlife spotting", "Camping under stars"],
    includes: ["Camping equipment", "All meals", "Expert guide", "Transportation", "Park fees"],
    excludes: ["International flights", "Travel insurance", "Personal gear", "Tips"],
    amenities: ["Camping Gear", "First Aid", "Satellite Phone"],
    type: "Adventure",
    style: "Backpacking"
  },
  {
    title: "Maldives Paradise Escape",
    location: "Male, Maldives",
    price: 2499,
    originalPrice: 2999,
    duration: 5,
    rating: 5.0,
    reviews: 145,
    description: "Ultimate luxury in an overwater villa with crystal-clear lagoons, pristine beaches, and world-class diving. Pure paradise awaits.",
    maxGuests: 4,
    minGuests: 2,
    highlights: ["Overwater villa stay", "Private beach access", "Snorkeling excursions", "Sunset dolphin cruise"],
    includes: ["Luxury resort accommodation", "All meals and drinks", "Water sports", "Spa treatments"],
    excludes: ["International flights", "Travel insurance", "Excursions", "Shopping"],
    amenities: ["Private Beach", "Spa", "Water Sports", "Restaurant", "Bar"],
    type: "Beach",
    style: "Luxury"
  },
  {
    title: "Moroccan Desert Adventure",
    location: "Marrakech & Sahara, Morocco",
    price: 1099,
    originalPrice: 1399,
    duration: 9,
    rating: 4.6,
    reviews: 178,
    description: "Journey through imperial cities and into the Sahara Desert. Experience camel trekking, Berber culture, and magical desert nights.",
    maxGuests: 12,
    minGuests: 2,
    highlights: ["Sahara camel trek", "Desert camping", "Marrakech medina tour", "Atlas Mountains visit"],
    includes: ["Riad accommodation", "Desert camping", "All meals", "Camel trek", "Transportation"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses"],
    amenities: ["Traditional Architecture", "Restaurant", "Rooftop Terrace"],
    type: "Adventure",
    style: "Mid-range"
  },
  {
    title: "Iceland Northern Lights",
    location: "Reykjavik, Iceland",
    price: 1799,
    originalPrice: 2199,
    duration: 6,
    rating: 4.8,
    reviews: 167,
    description: "Chase the Northern Lights while exploring Iceland's dramatic landscapes including glaciers, geysers, and volcanic formations.",
    maxGuests: 8,
    minGuests: 2,
    highlights: ["Northern Lights hunting", "Blue Lagoon spa", "Golden Circle tour", "Glacier hiking"],
    includes: ["Hotel accommodation", "Northern Lights tours", "All transportation", "Professional guide"],
    excludes: ["Meals", "Travel insurance", "Optional activities", "Personal expenses"],
    amenities: ["Spa", "Restaurant", "WiFi", "Heating"],
    type: "Adventure",
    style: "Luxury"
  },
  {
    title: "Thai Island Hopping",
    location: "Phuket & Phi Phi Islands, Thailand",
    price: 699,
    originalPrice: 899,
    duration: 8,
    rating: 4.7,
    reviews: 298,
    description: "Explore Thailand's most beautiful islands with pristine beaches, vibrant coral reefs, and delicious street food. Island paradise awaits.",
    maxGuests: 15,
    minGuests: 1,
    highlights: ["Island hopping by boat", "Snorkeling at coral reefs", "Thai cooking class", "Beach relaxation"],
    includes: ["Beach resort accommodation", "Island transfers", "Snorkeling gear", "Some meals"],
    excludes: ["International flights", "Travel insurance", "Most meals", "Personal expenses"],
    amenities: ["Beach Access", "Swimming Pool", "Restaurant", "WiFi", "Water Sports"],
    type: "Beach",
    style: "Mid-range"
  },
  {
    title: "Peruvian Inca Trail",
    location: "Cusco & Machu Picchu, Peru",
    price: 1299,
    originalPrice: 1599,
    duration: 7,
    rating: 4.9,
    reviews: 234,
    description: "Trek the ancient Inca Trail to reach the mystical Machu Picchu. Experience Andean culture and breathtaking mountain scenery.",
    maxGuests: 8,
    minGuests: 4,
    highlights: ["Inca Trail trek", "Machu Picchu sunrise", "Sacred Valley tour", "Local community visit"],
    includes: ["Camping equipment", "All meals", "Professional guide", "Train tickets", "Entry permits"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal gear"],
    amenities: ["Camping Gear", "First Aid", "Porter Service"],
    type: "Adventure",
    style: "Mid-range"
  },
  {
    title: "Safari Kenya & Tanzania",
    location: "Masai Mara & Serengeti",
    price: 2199,
    originalPrice: 2699,
    duration: 12,
    rating: 4.9,
    reviews: 156,
    description: "Witness the Great Migration and Big Five on an unforgettable African safari. Experience the raw beauty of East African wilderness.",
    maxGuests: 6,
    minGuests: 2,
    highlights: ["Great Migration viewing", "Big Five spotting", "Masai village visit", "Hot air balloon safari"],
    includes: ["Safari lodge accommodation", "All meals", "Game drives", "Professional guide", "Park fees"],
    excludes: ["International flights", "Travel insurance", "Tips", "Optional activities"],
    amenities: ["Wildlife Viewing", "Restaurant", "Bar", "Swimming Pool"],
    type: "Wildlife",
    style: "Luxury"
  },
  {
    title: "Norwegian Fjords Cruise",
    location: "Bergen & Geiranger, Norway",
    price: 1599,
    originalPrice: 1999,
    duration: 7,
    rating: 4.8,
    reviews: 189,
    description: "Sail through Norway's spectacular fjords with dramatic waterfalls, steep cliffs, and charming coastal villages.",
    maxGuests: 200,
    minGuests: 2,
    highlights: ["Geiranger fjord cruise", "Waterfall viewing", "Bergen city tour", "Midnight sun experience"],
    includes: ["Cruise ship accommodation", "All meals", "Shore excursions", "Entertainment"],
    excludes: ["International flights", "Travel insurance", "Drinks", "Optional tours"],
    amenities: ["Restaurant", "Bar", "Entertainment", "WiFi", "Spa"],
    type: "Relaxation",
    style: "Luxury"
  },
  {
    title: "Vietnam Culinary Journey",
    location: "Ho Chi Minh City & Hanoi, Vietnam",
    price: 899,
    originalPrice: 1199,
    duration: 9,
    rating: 4.7,
    reviews: 267,
    description: "Discover Vietnam through its incredible cuisine. From street food tours to cooking classes, taste your way through this amazing country.",
    maxGuests: 12,
    minGuests: 2,
    highlights: ["Street food tours", "Cooking classes", "Market visits", "Mekong Delta cruise"],
    includes: ["Boutique hotel accommodation", "Food tours", "Cooking classes", "Transportation"],
    excludes: ["International flights", "Travel insurance", "Some meals", "Personal expenses"],
    amenities: ["Restaurant", "WiFi", "Air Conditioning", "Concierge"],
    type: "Cultural",
    style: "Mid-range"
  },
  {
    title: "New Zealand Adventure",
    location: "Queenstown & Auckland, New Zealand",
    price: 1799,
    originalPrice: 2299,
    duration: 11,
    rating: 4.9,
    reviews: 198,
    description: "Experience New Zealand's adventure capital with bungee jumping, skydiving, and stunning landscapes. Adrenaline and beauty combined.",
    maxGuests: 8,
    minGuests: 2,
    highlights: ["Bungee jumping", "Skydiving", "Milford Sound cruise", "Hobbiton movie set tour"],
    includes: ["Hotel accommodation", "Adventure activities", "Transportation", "Some meals"],
    excludes: ["International flights", "Travel insurance", "Most meals", "Optional activities"],
    amenities: ["Adventure Sports", "Restaurant", "WiFi", "Fitness Center"],
    type: "Adventure",
    style: "Mid-range"
  },
  {
    title: "Indian Golden Triangle",
    location: "Delhi, Agra & Jaipur, India",
    price: 799,
    originalPrice: 1099,
    duration: 8,
    rating: 4.6,
    reviews: 345,
    description: "Explore India's most iconic destinations including the Taj Mahal, Red Fort, and Pink City. A perfect introduction to incredible India.",
    maxGuests: 15,
    minGuests: 2,
    highlights: ["Taj Mahal visit", "Red Fort exploration", "Jaipur palace tour", "Local market shopping"],
    includes: ["Heritage hotel accommodation", "All meals", "Professional guide", "Transportation", "Entry fees"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal shopping"],
    amenities: ["Heritage Architecture", "Restaurant", "WiFi", "Air Conditioning"],
    type: "Cultural",
    style: "Mid-range"
  },
  {
    title: "Australian Outback Safari",
    location: "Uluru & Alice Springs, Australia",
    price: 1499,
    originalPrice: 1899,
    duration: 6,
    rating: 4.7,
    reviews: 123,
    description: "Discover the heart of Australia with Uluru, Aboriginal culture, and unique outback wildlife. An authentic Australian experience.",
    maxGuests: 10,
    minGuests: 2,
    highlights: ["Uluru sunrise/sunset", "Aboriginal cultural tour", "Outback wildlife spotting", "Stargazing experience"],
    includes: ["Desert lodge accommodation", "All meals", "Cultural guide", "Transportation", "Activities"],
    excludes: ["International flights", "Travel insurance", "Personal expenses", "Optional tours"],
    amenities: ["Desert Views", "Restaurant", "WiFi", "Swimming Pool"],
    type: "Cultural",
    style: "Mid-range"
  },
  {
    title: "Swiss Alpine Adventure",
    location: "Zermatt & Interlaken, Switzerland",
    price: 1999,
    originalPrice: 2499,
    duration: 7,
    rating: 4.8,
    reviews: 167,
    description: "Experience the Swiss Alps with mountain railways, pristine lakes, and charming villages. Alpine beauty at its finest.",
    maxGuests: 8,
    minGuests: 2,
    highlights: ["Matterhorn viewing", "Jungfraujoch train ride", "Lake Geneva cruise", "Alpine hiking"],
    includes: ["Mountain hotel accommodation", "Train passes", "Cable car rides", "Some meals"],
    excludes: ["International flights", "Travel insurance", "Most meals", "Personal expenses"],
    amenities: ["Mountain Views", "Restaurant", "Spa", "WiFi"],
    type: "Mountain",
    style: "Luxury"
  },
  {
    title: "Brazilian Carnival Experience",
    location: "Rio de Janeiro, Brazil",
    price: 1299,
    originalPrice: 1699,
    duration: 5,
    rating: 4.9,
    reviews: 234,
    description: "Experience the energy and excitement of Rio's Carnival with samba schools, street parties, and iconic landmarks.",
    maxGuests: 12,
    minGuests: 2,
    highlights: ["Carnival parade viewing", "Samba school visit", "Christ the Redeemer", "Copacabana beach"],
    includes: ["Beachfront hotel accommodation", "Carnival tickets", "City tours", "Some meals"],
    excludes: ["International flights", "Travel insurance", "Most meals", "Costume rentals"],
    amenities: ["Beach Access", "Restaurant", "Bar", "WiFi", "Pool"],
    type: "Cultural",
    style: "Mid-range"
  },
  {
    title: "Canadian Rockies Explorer",
    location: "Banff & Jasper, Canada",
    price: 1399,
    originalPrice: 1799,
    duration: 8,
    rating: 4.8,
    reviews: 189,
    description: "Explore Canada's stunning Rocky Mountains with pristine lakes, glaciers, and abundant wildlife. Nature's masterpiece awaits.",
    maxGuests: 10,
    minGuests: 2,
    highlights: ["Lake Louise visit", "Glacier skywalk", "Wildlife viewing", "Mountain hiking"],
    includes: ["Mountain lodge accommodation", "National park passes", "Transportation", "Some meals"],
    excludes: ["International flights", "Travel insurance", "Most meals", "Optional activities"],
    amenities: ["Mountain Views", "Restaurant", "WiFi", "Fireplace"],
    type: "Mountain",
    style: "Mid-range"
  },
  {
    title: "Turkish Cappadocia Magic",
    location: "Cappadocia, Turkey",
    price: 999,
    originalPrice: 1299,
    duration: 6,
    rating: 4.9,
    reviews: 278,
    description: "Experience the otherworldly landscape of Cappadocia with hot air ballooning, underground cities, and cave hotels.",
    maxGuests: 12,
    minGuests: 2,
    highlights: ["Hot air balloon ride", "Underground city tour", "Cave church visits", "Pottery workshop"],
    includes: ["Cave hotel accommodation", "Hot air balloon ride", "All tours", "Some meals"],
    excludes: ["International flights", "Travel insurance", "Most meals", "Personal expenses"],
    amenities: ["Unique Architecture", "Restaurant", "WiFi", "Terrace"],
    type: "Cultural",
    style: "Boutique"
  },
  {
    title: "South African Wine Safari",
    location: "Cape Town & Stellenbosch, South Africa",
    price: 1199,
    originalPrice: 1599,
    duration: 9,
    rating: 4.7,
    reviews: 156,
    description: "Combine wine tasting in world-class vineyards with safari adventures and stunning Cape Town scenery.",
    maxGuests: 10,
    minGuests: 2,
    highlights: ["Wine estate tours", "Safari game drives", "Table Mountain cable car", "Penguin colony visit"],
    includes: ["Luxury hotel accommodation", "Wine tastings", "Safari tours", "Transportation"],
    excludes: ["International flights", "Travel insurance", "Some meals", "Personal expenses"],
    amenities: ["Wine Cellar", "Restaurant", "Swimming Pool", "WiFi"],
    type: "Relaxation",
    style: "Luxury"
  },
  {
    title: "Chinese Cultural Odyssey",
    location: "Beijing & Shanghai, China",
    price: 1099,
    originalPrice: 1499,
    duration: 10,
    rating: 4.6,
    reviews: 234,
    description: "Discover China's rich history and modern marvels from the Great Wall to Shanghai's skyline. Ancient meets modern.",
    maxGuests: 15,
    minGuests: 2,
    highlights: ["Great Wall of China", "Forbidden City tour", "Shanghai skyline", "Traditional tea ceremony"],
    includes: ["City hotel accommodation", "All tours", "High-speed train", "Professional guide"],
    excludes: ["International flights", "Travel insurance", "Most meals", "Personal expenses"],
    amenities: ["City Views", "Restaurant", "WiFi", "Business Center"],
    type: "Cultural",
    style: "Mid-range"
  },
  {
    title: "Scottish Highlands Castle Tour",
    location: "Edinburgh & Highlands, Scotland",
    price: 1299,
    originalPrice: 1699,
    duration: 8,
    rating: 4.8,
    reviews: 167,
    description: "Explore Scotland's dramatic highlands, ancient castles, and whisky distilleries. Experience Scottish culture and hospitality.",
    maxGuests: 12,
    minGuests: 2,
    highlights: ["Edinburgh Castle visit", "Loch Ness cruise", "Whisky distillery tour", "Highland games experience"],
    includes: ["Castle hotel accommodation", "All tours", "Whisky tastings", "Transportation"],
    excludes: ["International flights", "Travel insurance", "Some meals", "Personal expenses"],
    amenities: ["Historic Architecture", "Restaurant", "Bar", "WiFi"],
    type: "Cultural",
    style: "Boutique"
  },
  {
    title: "Mexican Riviera Beach Escape",
    location: "Cancun & Playa del Carmen, Mexico",
    price: 799,
    originalPrice: 1099,
    duration: 6,
    rating: 4.7,
    reviews: 289,
    description: "Relax on pristine Caribbean beaches while exploring ancient Mayan ruins and vibrant Mexican culture.",
    maxGuests: 20,
    minGuests: 2,
    highlights: ["Chichen Itza tour", "Cenote swimming", "Beach relaxation", "Mexican cooking class"],
    includes: ["All-inclusive resort", "All meals and drinks", "Tours", "Water sports"],
    excludes: ["International flights", "Travel insurance", "Spa treatments", "Shopping"],
    amenities: ["Beach Access", "All-Inclusive", "Swimming Pool", "Spa", "Water Sports"],
    type: "Beach",
    style: "All-inclusive"
  },
  {
    title: "Russian Trans-Siberian Railway",
    location: "Moscow to Vladivostok, Russia",
    price: 2299,
    originalPrice: 2899,
    duration: 14,
    rating: 4.8,
    reviews: 89,
    description: "Epic train journey across Russia on the legendary Trans-Siberian Railway. Experience the world's longest train route.",
    maxGuests: 20,
    minGuests: 2,
    highlights: ["Trans-Siberian train journey", "Moscow Red Square", "Lake Baikal visit", "Siberian culture"],
    includes: ["Train accommodation", "Most meals", "City tours", "Professional guide"],
    excludes: ["International flights", "Travel insurance", "Some meals", "Personal expenses"],
    amenities: ["Train Compartment", "Dining Car", "Observation Deck"],
    type: "Cultural",
    style: "Mid-range"
  },
  {
    title: "Indonesian Volcano Adventure",
    location: "Java & Bali, Indonesia",
    price: 1099,
    originalPrice: 1399,
    duration: 9,
    rating: 4.7,
    reviews: 145,
    description: "Climb active volcanoes, explore ancient temples, and experience Indonesian culture across Java and Bali.",
    maxGuests: 8,
    minGuests: 4,
    highlights: ["Mount Bromo sunrise trek", "Borobudur temple visit", "Volcano hiking", "Traditional villages"],
    includes: ["Guesthouse accommodation", "All meals", "Trekking guide", "Transportation", "Entry fees"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal gear"],
    amenities: ["Mountain Views", "Restaurant", "WiFi", "Garden"],
    type: "Adventure",
    style: "Budget"
  },
  {
    title: "Argentinian Tango & Wine",
    location: "Buenos Aires & Mendoza, Argentina",
    price: 1399,
    originalPrice: 1799,
    duration: 8,
    rating: 4.8,
    reviews: 178,
    description: "Experience passionate tango in Buenos Aires and world-class wines in Mendoza. A perfect blend of culture and cuisine.",
    maxGuests: 10,
    minGuests: 2,
    highlights: ["Tango show and lessons", "Wine estate tours", "Buenos Aires city tour", "Asado barbecue experience"],
    includes: ["Boutique hotel accommodation", "Wine tastings", "Tango lessons", "Some meals"],
    excludes: ["International flights", "Travel insurance", "Most meals", "Personal expenses"],
    amenities: ["Wine Cellar", "Restaurant", "Dance Studio", "WiFi"],
    type: "Cultural",
    style: "Boutique"
  },
  {
    title: "Malaysian Borneo Wildlife",
    location: "Sabah, Malaysian Borneo",
    price: 1599,
    originalPrice: 1999,
    duration: 10,
    rating: 4.9,
    reviews: 123,
    description: "Discover incredible wildlife in Borneo's rainforests including orangutans, proboscis monkeys, and exotic birds.",
    maxGuests: 8,
    minGuests: 2,
    highlights: ["Orangutan sanctuary visit", "Kinabalu National Park", "River safari", "Tribal village stay"],
    includes: ["Eco-lodge accommodation", "All meals", "Wildlife guides", "Transportation", "Park fees"],
    excludes: ["International flights", "Travel insurance", "Tips", "Optional activities"],
    amenities: ["Rainforest Views", "Restaurant", "WiFi", "Nature Trails"],
    type: "Wildlife",
    style: "Eco-friendly"
  },
  {
    title: "Croatian Island Paradise",
    location: "Dubrovnik & Split, Croatia",
    price: 1199,
    originalPrice: 1599,
    duration: 7,
    rating: 4.8,
    reviews: 234,
    description: "Explore Croatia's stunning Adriatic coast with medieval cities, crystal-clear waters, and charming islands.",
    maxGuests: 12,
    minGuests: 2,
    highlights: ["Dubrovnik old town tour", "Island hopping cruise", "Plitvice Lakes visit", "Local seafood dining"],
    includes: ["Coastal hotel accommodation", "Island transfers", "City tours", "Some meals"],
    excludes: ["International flights", "Travel insurance", "Most meals", "Personal expenses"],
    amenities: ["Sea Views", "Restaurant", "Swimming Pool", "WiFi"],
    type: "Beach",
    style: "Mid-range"
  }
];

async function seedPackages() {
  console.log("Starting to seed packages...");

  try {
    for (let i = 0; i < samplePackages.length; i++) {
      const packageData = samplePackages[i];
      
      console.log(`Creating package ${i + 1}: ${packageData.title}`);
      
      // Insert package
      const { data: createdPackage, error: packageError } = await supabase
        .from("packages")
        .insert([packageData])
        .select()
        .single();
      
      if (packageError) {
        console.error(`Error creating package ${packageData.title}:`, packageError);
        continue;
      }
      
      console.log(`Package created with ID: ${createdPackage.id}`);
      
      // Insert package image
      const { error: imageError } = await supabase
        .from("packageImages")
        .insert([{
          packageId: createdPackage.id,
          img: imageUrl
        }]);
      
      if (imageError) {
        console.error(`Error adding image for package ${packageData.title}:`, imageError);
      } else {
        console.log(`Image added for package: ${packageData.title}`);
      }
      
      // Create sample itinerary (2-3 days based on duration)
      const itineraryDays = Math.min(3, packageData.duration);
      const itineraryItems = [];
      
      for (let day = 1; day <= itineraryDays; day++) {
        let dayTitle = "";
        let dayDescription = "";
        
        if (day === 1) {
          dayTitle = "Arrival & Welcome";
          dayDescription = `Arrive at your destination and check into your accommodation. Meet your guide and fellow travelers. Enjoy a welcome dinner featuring local cuisine and get an overview of the exciting adventures ahead.`;
        } else if (day === 2) {
          dayTitle = "Main Attractions & Activities";
          dayDescription = `Full day exploring the main highlights of your destination. Visit iconic landmarks, participate in cultural activities, and immerse yourself in local traditions. Enjoy authentic meals and capture unforgettable memories.`;
        } else {
          dayTitle = "Adventure & Exploration";
          dayDescription = `Continue your journey with unique experiences and hidden gems. Engage in adventure activities, visit local markets, and interact with local communities. Experience the authentic culture and natural beauty of the region.`;
        }
        
        itineraryItems.push({
          packageId: createdPackage.id,
          day: day,
          title: dayTitle,
          description: dayDescription
        });
      }
      
      // Insert itinerary
      if (itineraryItems.length > 0) {
        const { error: itineraryError } = await supabase
          .from("itinerary")
          .insert(itineraryItems);
        
        if (itineraryError) {
          console.error(`Error adding itinerary for package ${packageData.title}:`, itineraryError);
        } else {
          console.log(`Itinerary added for package: ${packageData.title}`);
        }
      }
      
      // Small delay to avoid overwhelming the database
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log("✅ Successfully seeded all packages!");
    console.log(`Total packages created: ${samplePackages.length}`);
    
  } catch (error) {
    console.error("❌ Error seeding packages:", error);
  }
}

// Run the seeding function
seedPackages().then(() => {
  console.log("Seeding completed!");
  process.exit(0);
}).catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
