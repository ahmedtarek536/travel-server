const { createClient } = require('@supabase/supabase-js');

// Test the package creation system
async function testPackageCreation() {
  console.log('🧪 Testing Package Creation System...\n');

  try {
    // Test package data that matches the database schema
    const testPackage = {
      title: "Test Adventure Package",
      location: "Bali, Indonesia",
      price: 1299.99,
      originalPrice: 1499.99,
      duration: "7 days, 6 nights",
      rating: 4.8,
      reviews: 25,
      description: "<h2>Amazing Bali Adventure</h2><p>Experience the best of Bali with this comprehensive package.</p>",
      destinationId: 1, // Assuming destination ID 1 exists
      maxGuests: 8,
      minGuests: 2,
      highlights: ["Visit ancient temples", "Beach activities", "Cultural experiences"],
      includes: ["Hotel accommodation", "Daily breakfast", "Airport transfers"],
      amenities: ["Free WiFi", "Swimming Pool", "Spa Access"],
      images: [
        "https://example.com/bali-temple.jpg",
        "https://example.com/bali-beach.jpg"
      ],
      itinerary: [
        {
          title: "Arrival & Welcome",
          description: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
        },
        {
          title: "Temple Tour",
          description: ["Visit Tanah Lot", "Uluwatu Temple", "Traditional dance show"]
        }
      ]
    };

    console.log('📦 Test Package Data:');
    console.log(JSON.stringify(testPackage, null, 2));
    console.log('\n✅ Test data prepared successfully!');
    console.log('\n📋 Next Steps:');
    console.log('1. Start your server: npm start');
    console.log('2. Go to admin panel and create a new package');
    console.log('3. Use the test data above as a reference');
    console.log('4. Check the database to verify data is saved correctly');
    console.log('\n🔍 Database Tables to Check:');
    console.log('- packages: Main package information');
    console.log('- packageImages: Package images');
    console.log('- itinerary: Daily activities');

  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run the test
testPackageCreation();










