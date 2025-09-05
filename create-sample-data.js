const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://gvkgwzyfzewdvzbsfhba.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2a2d3enlmemV3ZHZ6YnNmaGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDQxMDMsImV4cCI6MjA2OTE4MDEwM30.dtkAu88fmrQrG7L668hUAhnxYWmXYB3dmJnQPLn4VIc";

const supabase = createClient(supabaseUrl, supabaseKey);

// Sample destinations
const sampleDestinations = [
  {
    name: "Bali",
    img: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800",
    description: "The Island of Gods, known for its stunning beaches, ancient temples, and vibrant culture."
  },
  {
    name: "Thailand",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    description: "The Land of Smiles, famous for its beautiful beaches, rich culture, and delicious cuisine."
  },
  {
    name: "Japan",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    description: "The Land of the Rising Sun, where ancient traditions meet modern innovation."
  },
  {
    name: "Italy",
    img: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800",
    description: "The birthplace of the Renaissance, known for its art, history, and world-class cuisine."
  },
  {
    name: "France",
    img: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800",
    description: "The City of Light and beyond, famous for its art, fashion, and romantic charm."
  }
];

// Sample packages for each destination
const samplePackages = {
  'Egypt': [
    {
      title: "Cairo and Pyramids Adventure",
      location: "Cairo, Egypt",
      price: 799,
      originalPrice: 999,
      duration: "5 Days / 4 Nights",
      rating: 4.7,
      reviews: 189,
      description: "Explore the ancient wonders of Egypt including the Great Pyramids, Sphinx, and the treasures of Tutankhamun.",
      maxGuests: 15,
      minGuests: 2,
      highlights: ["Great Pyramids of Giza", "Sphinx", "Egyptian Museum", "Khan el-Khalili Bazaar", "Nile River cruise"],
      includes: ["4 nights accommodation", "All meals", "Professional guide", "Entrance fees", "Transportation", "Cultural activities"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Concierge", "Airport transfers"],
      images: [
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Cairo Introduction",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Pyramids and Sphinx",
          description: ["Great Pyramids of Giza", "Sphinx", "Solar Boat Museum", "Traditional lunch"]
        },
        {
          title: "Egyptian Museum",
          description: ["Tutankhamun treasures", "Mummy room", "Ancient artifacts", "Cultural dinner"]
        },
        {
          title: "Islamic Cairo",
          description: ["Khan el-Khalili Bazaar", "Al-Azhar Mosque", "Traditional crafts", "Local shopping"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'Jordan': [
    {
      title: "Petra and Wadi Rum Adventure",
      location: "Petra, Jordan",
      price: 899,
      originalPrice: 1199,
      duration: "6 Days / 5 Nights",
      rating: 4.8,
      reviews: 156,
      description: "Discover the ancient city of Petra and experience the stunning desert landscapes of Wadi Rum.",
      maxGuests: 12,
      minGuests: 2,
      highlights: ["Petra Archaeological Park", "Wadi Rum Desert", "Dead Sea", "Amman Citadel", "Bedouin camp experience"],
      includes: ["5 nights accommodation", "All meals", "Professional guide", "Entrance fees", "Transportation", "Desert activities"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Desert camp", "Cultural center"],
      images: [
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Amman Tour",
          description: ["Airport pickup", "Hotel check-in", "Amman Citadel", "Welcome dinner"]
        },
        {
          title: "Petra Exploration",
          description: ["Petra Archaeological Park", "Treasury", "Monastery", "Traditional lunch"]
        },
        {
          title: "Wadi Rum Desert",
          description: ["Desert jeep tour", "Bedouin camp", "Sunset dinner", "Stargazing"]
        },
        {
          title: "Dead Sea Experience",
          description: ["Dead Sea floating", "Mud therapy", "Resort relaxation", "Cultural dinner"]
        },
        {
          title: "Leisure and Departure",
          description: ["Free time", "Last-minute shopping", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'Dubai': [
    {
      title: "Dubai Luxury Experience",
      location: "Dubai, UAE",
      price: 1299,
      originalPrice: 1599,
      duration: "5 Days / 4 Nights",
      rating: 4.9,
      reviews: 234,
      description: "Experience the luxury and modernity of Dubai with its iconic landmarks and world-class attractions.",
      maxGuests: 10,
      minGuests: 2,
      highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert safari", "Dubai Marina"],
      includes: ["4 nights luxury accommodation", "All meals", "City guide", "Entrance fees", "Transportation", "Desert activities"],
      amenities: ["Luxury hotel", "Infinity pool", "Spa & wellness", "Fine dining", "Concierge service"],
      images: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and City Introduction",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Modern Dubai",
          description: ["Burj Khalifa", "Dubai Mall", "Dubai Fountain", "Luxury lunch"]
        },
        {
          title: "Palm Jumeirah",
          description: ["Palm Jumeirah tour", "Atlantis resort", "Aquaventure waterpark", "Beach relaxation"]
        },
        {
          title: "Desert Safari",
          description: ["Desert safari adventure", "Camel riding", "Traditional dinner", "Cultural show"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
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
    }
  ],
  'Italy': [
    {
      title: "Rome Eternal City",
      location: "Rome, Italy",
      price: 1399,
      originalPrice: 1699,
      duration: "6 Days / 5 Nights",
      rating: 4.8,
      reviews: 245,
      description: "Explore the Eternal City with its ancient monuments, Renaissance art, and world-famous cuisine.",
      maxGuests: 12,
      minGuests: 2,
      highlights: ["Colosseum and Roman Forum", "Vatican City and Sistine Chapel", "Trevi Fountain", "Spanish Steps", "Traditional Italian cooking class"],
      includes: ["5 nights accommodation", "Breakfast", "City guide", "Entrance fees", "Transportation", "Cultural activities"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Concierge", "Airport transfers"],
      images: [
        "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800",
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
        "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and City Introduction",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Ancient Rome",
          description: ["Colosseum tour", "Roman Forum", "Palatine Hill", "Traditional lunch"]
        },
        {
          title: "Vatican City",
          description: ["Vatican Museums", "Sistine Chapel", "St. Peter's Basilica", "Cultural dinner"]
        },
        {
          title: "Historic Center",
          description: ["Trevi Fountain", "Spanish Steps", "Piazza Navona", "Gelato tasting"]
        },
        {
          title: "Cultural Experience",
          description: ["Cooking class", "Local market visit", "Wine tasting", "Farewell dinner"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'France': [
    {
      title: "Paris City of Light",
      location: "Paris, France",
      price: 1499,
      originalPrice: 1799,
      duration: "7 Days / 6 Nights",
      rating: 4.9,
      reviews: 298,
      description: "Discover the magic of Paris with its iconic landmarks, world-class museums, and romantic atmosphere.",
      maxGuests: 10,
      minGuests: 2,
      highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Seine River cruise", "Montmartre district"],
      includes: ["6 nights accommodation", "Breakfast", "City guide", "Museum passes", "Transportation", "Cultural activities"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Concierge", "Airport transfers"],
      images: [
        "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800",
        "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=800",
        "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and City Introduction",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Iconic Landmarks",
          description: ["Eiffel Tower", "Arc de Triomphe", "Champs-Élysées", "Traditional lunch"]
        },
        {
          title: "Art and Culture",
          description: ["Louvre Museum", "Notre-Dame Cathedral", "Seine River cruise", "Cultural dinner"]
        },
        {
          title: "Montmartre and Art",
          description: ["Sacré-Cœur Basilica", "Montmartre district", "Art galleries", "Local café"]
        },
        {
          title: "Palace of Versailles",
          description: ["Versailles day trip", "Palace tour", "Gardens exploration", "Return to Paris"]
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
    }
  ],
  'Oman': [
    {
      title: "Muscat and Nizwa Heritage",
      location: "Muscat, Oman",
      price: 999,
      originalPrice: 1299,
      duration: "6 Days / 5 Nights",
      rating: 4.6,
      reviews: 145,
      description: "Explore the rich heritage and natural beauty of Oman from the capital Muscat to the historic city of Nizwa.",
      maxGuests: 12,
      minGuests: 2,
      highlights: ["Sultan Qaboos Grand Mosque", "Nizwa Fort", "Wahiba Sands Desert", "Wadi Shab", "Traditional souks"],
      includes: ["5 nights accommodation", "All meals", "Professional guide", "Entrance fees", "Transportation", "Desert activities"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Desert camp", "Cultural center"],
      images: [
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Muscat Tour",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Muscat Heritage",
          description: ["Sultan Qaboos Grand Mosque", "Royal Opera House", "Mutrah Souk", "Traditional lunch"]
        },
        {
          title: "Nizwa Exploration",
          description: ["Nizwa Fort", "Nizwa Souk", "Traditional crafts", "Cultural dinner"]
        },
        {
          title: "Wahiba Sands Desert",
          description: ["Desert safari", "Bedouin camp", "Camel riding", "Stargazing"]
        },
        {
          title: "Wadi Shab Adventure",
          description: ["Wadi Shab hiking", "Swimming in natural pools", "Mountain views", "Return to Muscat"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'Morocco': [
    {
      title: "Marrakech and Atlas Mountains",
      location: "Marrakech, Morocco",
      price: 899,
      originalPrice: 1199,
      duration: "7 Days / 6 Nights",
      rating: 4.7,
      reviews: 178,
      description: "Experience the vibrant culture of Marrakech and the stunning landscapes of the Atlas Mountains.",
      maxGuests: 10,
      minGuests: 2,
      highlights: ["Jemaa el-Fnaa Square", "Atlas Mountains", "Berber villages", "Sahara Desert", "Traditional riads"],
      includes: ["6 nights accommodation", "All meals", "Professional guide", "Entrance fees", "Transportation", "Desert activities"],
      amenities: ["Traditional riad", "WiFi", "Air conditioning", "Restaurant", "Cultural center"],
      images: [
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Marrakech Introduction",
          description: ["Airport pickup", "Riad check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Marrakech Heritage",
          description: ["Jemaa el-Fnaa Square", "Koutoubia Mosque", "Bahia Palace", "Traditional lunch"]
        },
        {
          title: "Atlas Mountains",
          description: ["Atlas Mountains tour", "Berber villages", "Traditional crafts", "Mountain lunch"]
        },
        {
          title: "Sahara Desert",
          description: ["Desert safari", "Camel trekking", "Desert camp", "Stargazing"]
        },
        {
          title: "Marrakech Souks",
          description: ["Traditional souks", "Spice markets", "Handicrafts", "Cultural dinner"]
        },
        {
          title: "Leisure and Departure",
          description: ["Free time", "Last-minute shopping", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'Turkey': [
    {
      title: "Istanbul and Cappadocia",
      location: "Istanbul, Turkey",
      price: 1099,
      originalPrice: 1399,
      duration: "8 Days / 7 Nights",
      rating: 4.8,
      reviews: 203,
      description: "Discover the rich history of Istanbul and the unique landscapes of Cappadocia.",
      maxGuests: 12,
      minGuests: 2,
      highlights: ["Hagia Sophia", "Blue Mosque", "Cappadocia hot air balloon", "Underground cities", "Grand Bazaar"],
      includes: ["7 nights accommodation", "All meals", "Professional guide", "Entrance fees", "Transportation", "Hot air balloon ride"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Concierge", "Airport transfers"],
      images: [
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Istanbul Introduction",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Historic Istanbul",
          description: ["Hagia Sophia", "Blue Mosque", "Topkapi Palace", "Traditional lunch"]
        },
        {
          title: "Grand Bazaar and Spice Market",
          description: ["Grand Bazaar", "Spice Market", "Traditional crafts", "Cultural dinner"]
        },
        {
          title: "Cappadocia Arrival",
          description: ["Flight to Cappadocia", "Hotel check-in", "Local orientation", "Traditional dinner"]
        },
        {
          title: "Cappadocia Exploration",
          description: ["Hot air balloon ride", "Goreme Open Air Museum", "Underground cities", "Local lunch"]
        },
        {
          title: "Cappadocia Adventure",
          description: ["Valley hiking", "Traditional pottery", "Local villages", "Cultural dinner"]
        },
        {
          title: "Return to Istanbul",
          description: ["Flight to Istanbul", "Free time", "Last-minute shopping", "Farewell dinner"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'African Safari': [
    {
      title: "Kenya Wildlife Safari",
      location: "Nairobi, Kenya",
      price: 1999,
      originalPrice: 2499,
      duration: "10 Days / 9 Nights",
      rating: 4.9,
      reviews: 156,
      description: "Experience the ultimate African safari adventure with the Big Five and stunning landscapes.",
      maxGuests: 8,
      minGuests: 2,
      highlights: ["Big Five game drives", "Maasai Mara", "Amboseli National Park", "Maasai village visit", "Hot air balloon safari"],
      includes: ["9 nights accommodation", "All meals", "Professional guide", "Game drives", "Transportation", "Park fees"],
      amenities: ["Luxury safari lodge", "WiFi", "Restaurant", "Safari vehicle", "Professional guide"],
      images: [
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Nairobi",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Amboseli National Park",
          description: ["Drive to Amboseli", "Game drive", "Elephant viewing", "Lodge check-in"]
        },
        {
          title: "Amboseli Safari",
          description: ["Early morning game drive", "Kilimanjaro views", "Afternoon game drive", "Lodge dinner"]
        },
        {
          title: "Maasai Mara",
          description: ["Drive to Maasai Mara", "Game drive", "Big Five spotting", "Lodge check-in"]
        },
        {
          title: "Maasai Mara Safari",
          description: ["Full day game drive", "Lion and cheetah viewing", "Picnic lunch", "Lodge dinner"]
        },
        {
          title: "Hot Air Balloon Safari",
          description: ["Early morning balloon ride", "Aerial game viewing", "Champagne breakfast", "Afternoon game drive"]
        },
        {
          title: "Maasai Village Visit",
          description: ["Maasai village tour", "Cultural experience", "Traditional dance", "Lodge dinner"]
        },
        {
          title: "Return to Nairobi",
          description: ["Drive to Nairobi", "Free time", "Last-minute shopping", "Farewell dinner"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'India': [
    {
      title: "Golden Triangle Tour",
      location: "Delhi, India",
      price: 1199,
      originalPrice: 1499,
      duration: "8 Days / 7 Nights",
      rating: 4.7,
      reviews: 189,
      description: "Explore India's Golden Triangle covering Delhi, Agra, and Jaipur with their magnificent monuments.",
      maxGuests: 15,
      minGuests: 2,
      highlights: ["Taj Mahal", "Red Fort", "Amber Fort", "Jama Masjid", "Pink City Jaipur"],
      includes: ["7 nights accommodation", "All meals", "Professional guide", "Entrance fees", "Transportation", "Cultural activities"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Concierge", "Airport transfers"],
      images: [
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Delhi Introduction",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Delhi Heritage",
          description: ["Red Fort", "Jama Masjid", "India Gate", "Traditional lunch"]
        },
        {
          title: "Agra and Taj Mahal",
          description: ["Drive to Agra", "Taj Mahal visit", "Agra Fort", "Traditional dinner"]
        },
        {
          title: "Agra Exploration",
          description: ["Sunrise at Taj Mahal", "Fatehpur Sikri", "Local markets", "Drive to Jaipur"]
        },
        {
          title: "Jaipur Pink City",
          description: ["Amber Fort", "City Palace", "Jantar Mantar", "Traditional lunch"]
        },
        {
          title: "Jaipur Heritage",
          description: ["Hawa Mahal", "Local bazaars", "Traditional crafts", "Cultural dinner"]
        },
        {
          title: "Return to Delhi",
          description: ["Drive to Delhi", "Free time", "Last-minute shopping", "Farewell dinner"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ],
  'Greece': [
    {
      title: "Athens and Santorini",
      location: "Athens, Greece",
      price: 1399,
      originalPrice: 1699,
      duration: "8 Days / 7 Nights",
      rating: 4.8,
      reviews: 234,
      description: "Discover the ancient history of Athens and the stunning beauty of Santorini.",
      maxGuests: 10,
      minGuests: 2,
      highlights: ["Acropolis", "Parthenon", "Santorini sunset", "Oia village", "Ancient Agora"],
      includes: ["7 nights accommodation", "All meals", "Professional guide", "Entrance fees", "Transportation", "Ferry tickets"],
      amenities: ["WiFi", "Air conditioning", "Restaurant", "Concierge", "Airport transfers"],
      images: [
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800"
      ],
      itinerary: [
        {
          title: "Arrival and Athens Introduction",
          description: ["Airport pickup", "Hotel check-in", "City orientation", "Welcome dinner"]
        },
        {
          title: "Ancient Athens",
          description: ["Acropolis", "Parthenon", "Ancient Agora", "Traditional lunch"]
        },
        {
          title: "Athens Heritage",
          description: ["National Archaeological Museum", "Plaka district", "Traditional crafts", "Cultural dinner"]
        },
        {
          title: "Santorini Arrival",
          description: ["Ferry to Santorini", "Hotel check-in", "Local orientation", "Sunset dinner"]
        },
        {
          title: "Santorini Exploration",
          description: ["Oia village", "Fira town", "Red Beach", "Traditional lunch"]
        },
        {
          title: "Santorini Adventure",
          description: ["Wine tasting", "Akrotiri archaeological site", "Beach relaxation", "Sunset dinner"]
        },
        {
          title: "Return to Athens",
          description: ["Ferry to Athens", "Free time", "Last-minute shopping", "Farewell dinner"]
        },
        {
          title: "Departure",
          description: ["Final breakfast", "Check-out", "Airport transfer"]
        }
      ]
    }
  ]
};

async function createDestinations() {
  console.log('Creating sample destinations...');
  
  for (const destination of sampleDestinations) {
    const { data, error } = await supabase
      .from('destinations')
      .insert([destination])
      .select()
      .single();
    
    if (error) {
      console.error(`Error creating destination ${destination.name}:`, error);
    } else {
      console.log(`✅ Created destination: ${destination.name} (ID: ${data.id})`);
    }
  }
}

async function createPackages() {
  console.log('\nCreating sample packages...');
  
  // Get all destinations
  const { data: destinations, error: destError } = await supabase
    .from('destinations')
    .select('*');
  
  if (destError) {
    console.error('Error fetching destinations:', destError);
    return;
  }
  
  let totalPackagesCreated = 0;
  
  for (const destination of destinations) {
    console.log(`\nProcessing destination: ${destination.name}`);
    
    const packages = samplePackages[destination.name] || [];
    
    if (packages.length === 0) {
      console.log(`No sample packages defined for ${destination.name}`);
      continue;
    }
    
    // Create multiple variations of each package (10 variations each)
    for (let i = 0; i < 10; i++) {
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
        
        const { images, itinerary, ...packageInfo } = variation;
        
        // Create the package
        const { data: packageResult, error: packageError } = await supabase
          .from('packages')
          .insert([{
            ...packageInfo,
            destinationId: destination.id
          }])
          .select()
          .single();
        
        if (packageError) {
          console.error(`Error creating package ${variation.title}:`, packageError);
          continue;
        }
        
        console.log(`✅ Created package: ${variation.title}`);
        
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
            console.log(`  📸 Added ${images.length} images`);
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
            console.log(`  📅 Added ${itinerary.length} itinerary items`);
          }
        }
        
        totalPackagesCreated++;
        
        // Add a small delay to avoid overwhelming the database
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }
  }
  
  console.log(`\n🎉 Successfully created ${totalPackagesCreated} sample packages!`);
}

async function main() {
  try {
    console.log('🚀 Starting to create sample data...\n');
    
    // First, check if destinations already exist
    const { data: existingDestinations, error: checkError } = await supabase
      .from('destinations')
      .select('*');
    
    if (checkError) {
      console.error('Error checking existing destinations:', checkError);
      return;
    }
    
    if (existingDestinations.length === 0) {
      await createDestinations();
    } else {
      console.log(`Found ${existingDestinations.length} existing destinations, skipping creation.`);
    }
    
    await createPackages();
    
    console.log('\n✅ Sample data creation completed!');
    
  } catch (error) {
    console.error('Error creating sample data:', error);
  }
}

// Run the script
main();
