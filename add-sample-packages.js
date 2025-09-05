const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Please check your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Sample package data for different destinations
const samplePackages = {
  'Bali': [
    {
      title: "Bali Cultural Heritage Tour",
      location: "Ubud, Bali, Indonesia",
      price: 899,
      originalPrice: 1199,
      duration: "5 Days / 4 Nights",
      rating: 4.8,
      reviews: 156,
      description: "Immerse yourself in Bali's rich cultural heritage with visits to ancient temples, traditional villages, and artisan workshops. Experience authentic Balinese ceremonies and learn traditional crafts.",
      maxGuests: 12,
      minGuests: 2,
      highlights: ["Visit Ubud Monkey Forest", "Traditional Balinese cooking class", "Sunrise at Mount Batur", "Tegallalang Rice Terraces", "Traditional dance performance"],
      includes: ["4 nights accommodation", "All meals", "Professional guide", "Entrance fees", "Transportation", "Cultural activities"],
      amenities: ["WiFi", "Air conditioning", "Swimming pool", "Spa services", "Airport transfers"],
      images: [
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800",
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Ubud Exploration",
          description: ["Airport pickup", "Check-in to resort", "Ubud market visit", "Traditional dinner"]
        },
        {
          title: "Cultural Heritage Sites",
          description: ["Tirta Empul Temple", "Goa Gajah Temple", "Traditional village tour", "Artisan workshop"]
        },
        {
          title: "Nature and Adventure",
          description: ["Mount Batur sunrise trek", "Hot springs visit", "Rice terrace tour", "Cooking class"]
        },
        {
          title: "Arts and Crafts",
          description: ["Silver jewelry workshop", "Traditional dance lesson", "Local market shopping", "Cultural performance"]
        },
        {
          title: "Departure",
          description: ["Leisure time", "Check-out", "Airport transfer"]
        }
      ]
    },
    {
      title: "Bali Beach Paradise Retreat",
      location: "Seminyak, Bali, Indonesia",
      price: 1299,
      originalPrice: 1599,
      duration: "7 Days / 6 Nights",
      rating: 4.9,
      reviews: 203,
      description: "Relax and rejuvenate in Bali's most beautiful beach destinations. Enjoy luxury resorts, pristine beaches, and world-class spa treatments.",
      maxGuests: 8,
      minGuests: 2,
      highlights: ["Private beach access", "Luxury spa treatments", "Sunset dinner cruise", "Water sports activities", "Beachfront accommodation"],
      includes: ["6 nights luxury accommodation", "All meals", "Spa treatments", "Water sports equipment", "Private transfers", "Beach activities"],
      amenities: ["Private beach", "Infinity pool", "Spa & wellness center", "Fine dining restaurants", "Concierge service"],
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Beach Welcome",
          description: ["Airport pickup", "Resort check-in", "Beach welcome ceremony", "Sunset cocktails"]
        },
        {
          title: "Beach Activities",
          description: ["Morning yoga on beach", "Snorkeling adventure", "Beach volleyball", "Spa treatment"]
        },
        {
          title: "Island Exploration",
          description: ["Nusa Penida day trip", "Crystal Bay snorkeling", "Kelingking Beach", "Return to resort"]
        },
        {
          title: "Water Sports Day",
          description: ["Surfing lessons", "Jet skiing", "Parasailing", "Beach relaxation"]
        },
        {
          title: "Cultural Experience",
          description: ["Tanah Lot Temple", "Traditional market", "Balinese massage", "Cultural dinner"]
        },
        {
          title: "Leisure and Relaxation",
          description: ["Free time", "Beach activities", "Spa treatments", "Sunset dinner"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    },
    {
      title: "Bali Adventure and Nature",
      location: "Canggu, Bali, Indonesia",
      price: 1099,
      originalPrice: 1399,
      duration: "6 Days / 5 Nights",
      rating: 4.7,
      reviews: 134,
      description: "Experience Bali's natural beauty through exciting adventures including volcano trekking, waterfall visits, and jungle exploration.",
      maxGuests: 10,
      minGuests: 2,
      highlights: ["Mount Agung sunrise trek", "Sekumpul Waterfalls", "Jungle ATV adventure", "White water rafting", "Hot springs relaxation"],
      includes: ["5 nights accommodation", "All meals", "Adventure equipment", "Professional guides", "Transportation", "Entrance fees"],
      amenities: ["Adventure gear", "Swimming pool", "Restaurant", "WiFi", "Air conditioning"],
      images: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Preparation",
          description: ["Airport pickup", "Hotel check-in", "Adventure briefing", "Equipment fitting"]
        },
        {
          title: "Volcano Trekking",
          description: ["Early morning departure", "Mount Agung trek", "Sunrise at summit", "Return and rest"]
        },
        {
          title: "Waterfall Adventure",
          description: ["Sekumpul Waterfalls", "Swimming and photography", "Local lunch", "Jungle exploration"]
        },
        {
          title: "ATV and Rafting",
          description: ["Jungle ATV tour", "White water rafting", "Adventure lunch", "Relaxation time"]
        },
        {
          title: "Hot Springs and Culture",
          description: ["Hot springs visit", "Traditional village tour", "Cultural activities", "Farewell dinner"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'Thailand': [
    {
      title: "Bangkok City Explorer",
      location: "Bangkok, Thailand",
      price: 699,
      originalPrice: 899,
      duration: "4 Days / 3 Nights",
      rating: 4.6,
      reviews: 189,
      description: "Discover the vibrant capital of Thailand with its bustling markets, magnificent temples, and delicious street food.",
      maxGuests: 15,
      minGuests: 2,
      highlights: ["Grand Palace and Wat Phra Kaew", "Chatuchak Weekend Market", "Chao Phraya River cruise", "Street food tour", "Wat Arun Temple"],
      includes: ["3 nights accommodation", "Breakfast", "City tour guide", "Entrance fees", "River cruise", "Transportation"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Concierge", "Airport transfers"],
      images: [
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
        "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and City Introduction",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Temples and Palaces",
          description: ["Grand Palace visit", "Wat Phra Kaew", "Wat Pho Temple", "Traditional massage"]
        },
        {
          title: "Markets and River",
          description: ["Chatuchak Market", "Chao Phraya cruise", "Wat Arun Temple", "Street food tour"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    },
    {
      title: "Phuket Beach Paradise",
      location: "Phuket, Thailand",
      price: 1199,
      originalPrice: 1499,
      duration: "6 Days / 5 Nights",
      rating: 4.8,
      reviews: 267,
      description: "Relax on Thailand's most beautiful beaches with crystal clear waters, luxury resorts, and exciting water activities.",
      maxGuests: 8,
      minGuests: 2,
      highlights: ["Phi Phi Islands day trip", "James Bond Island", "Snorkeling and diving", "Beachfront luxury resort", "Sunset dinner cruise"],
      includes: ["5 nights beachfront accommodation", "All meals", "Island hopping tours", "Water sports equipment", "Private transfers", "Spa treatments"],
      amenities: ["Private beach", "Infinity pool", "Spa & wellness", "Multiple restaurants", "Water sports center"],
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Beach Welcome",
          description: ["Airport pickup", "Resort check-in", "Beach welcome", "Sunset cocktails"]
        },
        {
          title: "Phi Phi Islands",
          description: ["Early boat departure", "Maya Bay visit", "Snorkeling", "Beach lunch"]
        },
        {
          title: "James Bond Island",
          description: ["Phang Nga Bay tour", "James Bond Island", "Sea canoeing", "Return to resort"]
        },
        {
          title: "Water Sports Day",
          description: ["Diving lessons", "Jet skiing", "Parasailing", "Beach relaxation"]
        },
        {
          title: "Leisure and Spa",
          description: ["Free time", "Spa treatments", "Beach activities", "Sunset dinner cruise"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    },
    {
      title: "Chiang Mai Cultural Experience",
      location: "Chiang Mai, Thailand",
      price: 899,
      originalPrice: 1099,
      duration: "5 Days / 4 Nights",
      rating: 4.7,
      reviews: 145,
      description: "Explore Northern Thailand's cultural capital with ancient temples, hill tribe villages, and traditional crafts.",
      maxGuests: 12,
      minGuests: 2,
      highlights: ["Doi Suthep Temple", "Elephant sanctuary visit", "Hill tribe villages", "Night bazaar", "Traditional cooking class"],
      includes: ["4 nights accommodation", "All meals", "Cultural guide", "Entrance fees", "Transportation", "Cultural activities"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Cultural center", "Gift shop"],
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
        "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and City Tour",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Temple visits"]
        },
        {
          title: "Doi Suthep and Temples",
          description: ["Doi Suthep Temple", "Wat Phra Singh", "Traditional lunch", "Cultural center"]
        },
        {
          title: "Elephant Sanctuary",
          description: ["Elephant sanctuary visit", "Feeding and bathing", "Educational program", "Return to city"]
        },
        {
          title: "Hill Tribes and Crafts",
          description: ["Hill tribe villages", "Traditional crafts", "Cooking class", "Night bazaar"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'Japan': [
    {
      title: "Tokyo Modern Metropolis",
      location: "Tokyo, Japan",
      price: 1599,
      originalPrice: 1999,
      duration: "7 Days / 6 Nights",
      rating: 4.9,
      reviews: 312,
      description: "Experience the perfect blend of traditional and modern Japan in the world's most exciting metropolis.",
      maxGuests: 10,
      minGuests: 2,
      highlights: ["Senso-ji Temple", "Tokyo Skytree", "Tsukiji Fish Market", "Shibuya Crossing", "Traditional tea ceremony"],
      includes: ["6 nights accommodation", "Breakfast", "City guide", "JR Pass", "Entrance fees", "Transportation"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Concierge", "Laundry service"],
      images: [
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
        "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Orientation",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Traditional Tokyo",
          description: ["Senso-ji Temple", "Asakusa district", "Traditional lunch", "Sumida River cruise"]
        },
        {
          title: "Modern Tokyo",
          description: ["Tokyo Skytree", "Shibuya Crossing", "Harajuku district", "Modern dining"]
        },
        {
          title: "Cultural Experience",
          description: ["Tsukiji Fish Market", "Traditional tea ceremony", "Imperial Palace", "Cultural dinner"]
        },
        {
          title: "Day Trip to Nikko",
          description: ["Nikko day trip", "Toshogu Shrine", "Natural beauty", "Return to Tokyo"]
        },
        {
          title: "Leisure and Shopping",
          description: ["Free time", "Shopping districts", "Last-minute sightseeing", "Farewell dinner"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    },
    {
      title: "Kyoto Ancient Capital",
      location: "Kyoto, Japan",
      price: 1399,
      originalPrice: 1699,
      duration: "6 Days / 5 Nights",
      rating: 4.8,
      reviews: 234,
      description: "Step back in time to experience Japan's ancient capital with its magnificent temples, traditional gardens, and geisha culture.",
      maxGuests: 8,
      minGuests: 2,
      highlights: ["Fushimi Inari Shrine", "Kinkaku-ji Temple", "Arashiyama Bamboo Grove", "Geisha district", "Traditional ryokan stay"],
      includes: ["5 nights accommodation", "All meals", "Cultural guide", "Entrance fees", "Transportation", "Traditional activities"],
      amenities: ["Traditional ryokan", "Onsen hot springs", "Kaiseki dining", "Cultural center", "Garden views"],
      images: [
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
        "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800",
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Traditional Welcome",
          description: ["Airport pickup", "Ryokan check-in", "Traditional welcome", "Kaiseki dinner"]
        },
        {
          title: "Golden Pavilion and Temples",
          description: ["Kinkaku-ji Temple", "Ryoan-ji Temple", "Traditional lunch", "Garden meditation"]
        },
        {
          title: "Fushimi Inari and Bamboo",
          description: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Monkey Park", "Traditional tea"]
        },
        {
          title: "Geisha Culture",
          description: ["Gion district", "Geisha performance", "Traditional crafts", "Cultural dinner"]
        },
        {
          title: "Nara Day Trip",
          description: ["Nara day trip", "Todai-ji Temple", "Deer park", "Return to Kyoto"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    },
    {
      title: "Osaka Food and Culture",
      location: "Osaka, Japan",
      price: 1099,
      originalPrice: 1299,
      duration: "5 Days / 4 Nights",
      rating: 4.6,
      reviews: 178,
      description: "Discover Japan's culinary capital with its amazing street food, vibrant nightlife, and rich cultural heritage.",
      maxGuests: 12,
      minGuests: 2,
      highlights: ["Dotonbori district", "Osaka Castle", "Universal Studios Japan", "Street food tour", "Traditional markets"],
      includes: ["4 nights accommodation", "Breakfast", "Food tour guide", "Entrance fees", "Transportation", "Food experiences"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Food market access", "Cultural center"],
      images: [
        "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800",
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Food Introduction",
          description: ["Airport pickup", "Hotel check-in", "Food orientation", "Welcome dinner"]
        },
        {
          title: "Osaka Castle and History",
          description: ["Osaka Castle", "Historical museum", "Traditional lunch", "Cultural center"]
        },
        {
          title: "Dotonbori and Street Food",
          description: ["Dotonbori district", "Street food tour", "Takoyaki making", "Nightlife experience"]
        },
        {
          title: "Universal Studios",
          description: ["Universal Studios Japan", "Theme park attractions", "Lunch in park", "Evening entertainment"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ]
};

async function getDestinations() {
  const { data, error } = await supabase
    .from('destinations')
    .select('*');
  
  if (error) {
    console.error('Error fetching destinations:', error);
    return [];
  }
  
  return data || [];
}

async function createPackage(packageData, destinationId) {
  const { images, itinerary, ...packageInfo } = packageData;
  
  // Create the package
  const { data: packageResult, error: packageError } = await supabase
    .from('packages')
    .insert([{
      ...packageInfo,
      destinationId: destinationId
    }])
    .select()
    .single();
  
  if (packageError) {
    console.error('Error creating package:', packageError);
    return null;
  }
  
  console.log(`Created package: ${packageInfo.title}`);
  
  // Add images
  if (images && images.length > 0) {
    const imageData = images.map(img => ({
      packageId: packageResult.id,
      img: img
    }));
    
    const { error: imageError } = await supabase
      .from('packageImages')
      .insert(imageData);
    
    if (imageError) {
      console.error('Error adding images:', imageError);
    } else {
      console.log(`Added ${images.length} images to package: ${packageInfo.title}`);
    }
  }
  
  // Add itinerary
  if (itinerary && itinerary.length > 0) {
    const itineraryData = itinerary.map((item, index) => ({
      packageId: packageResult.id,
      day: index + 1,
      title: item.title,
      description: item.description
    }));
    
    const { error: itineraryError } = await supabase
      .from('itinerary')
      .insert(itineraryData);
    
    if (itineraryError) {
      console.error('Error adding itinerary:', itineraryError);
    } else {
      console.log(`Added ${itinerary.length} itinerary items to package: ${packageInfo.title}`);
    }
  }
  
  return packageResult;
}

async function addSamplePackages() {
  try {
    console.log('Starting to add sample packages...');
    
    // Get all destinations
    const destinations = await getDestinations();
    console.log(`Found ${destinations.length} destinations`);
    
    if (destinations.length === 0) {
      console.log('No destinations found. Please create destinations first.');
      return;
    }
    
    let totalPackagesCreated = 0;
    
    // Add packages for each destination
    for (const destination of destinations) {
      console.log(`\nProcessing destination: ${destination.name}`);
      
      const packages = samplePackages[destination.name] || [];
      
      if (packages.length === 0) {
        console.log(`No sample packages defined for ${destination.name}`);
        continue;
      }
      
      // Create multiple variations of each package
      for (let i = 0; i < 10; i++) { // Create 10 variations of each package
        for (const packageTemplate of packages) {
          // Create variations by modifying some details
          const variation = {
            ...packageTemplate,
            title: `${packageTemplate.title} ${i + 1}`,
            price: packageTemplate.price + (i * 50), // Vary the price
            rating: Math.max(4.0, Math.min(5.0, packageTemplate.rating + (Math.random() - 0.5) * 0.4)), // Vary rating slightly
            reviews: packageTemplate.reviews + Math.floor(Math.random() * 100), // Vary reviews
            maxGuests: packageTemplate.maxGuests + Math.floor(Math.random() * 4), // Vary guest capacity
            minGuests: Math.max(1, packageTemplate.minGuests + Math.floor(Math.random() * 2))
          };
          
          const created = await createPackage(variation, destination.id);
          if (created) {
            totalPackagesCreated++;
          }
          
          // Add a small delay to avoid overwhelming the database
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    }
    
    console.log(`\n✅ Successfully created ${totalPackagesCreated} sample packages!`);
    
  } catch (error) {
    console.error('Error adding sample packages:', error);
  }
}

// Run the script
addSamplePackages();

