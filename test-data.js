const { supabase } = require("./src/config/supabase");

async function insertSampleServices() {
    console.log("🛎️ Inserting sample services...\n");

    const sampleServices = [
        {
            title: "Airport Transfer Service",
            description: "<p>Professional and reliable airport transfer service with comfortable vehicles and experienced drivers. We provide door-to-door service with flight monitoring to ensure timely pickups and drop-offs.</p><p><strong>Features:</strong></p><ul><li>24/7 availability</li><li>Flight monitoring</li><li>Professional drivers</li><li>Comfortable vehicles</li><li>Meet & greet service</li></ul>",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        },
        {
            title: "Hotel Booking Assistance",
            description: "<p>Let us help you find and book the perfect accommodation for your stay. Our team has partnerships with top hotels and can secure the best rates and amenities for your trip.</p><p><strong>What we offer:</strong></p><ul><li>Best price guarantee</li><li>Wide selection of hotels</li><li>Special group rates</li><li>24/7 customer support</li><li>Flexible cancellation policies</li></ul>",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            title: "Tour Guide Services",
            description: "<p>Explore destinations like a local with our professional tour guide services. Our knowledgeable guides provide insider insights and ensure you don't miss any hidden gems.</p><p><strong>Services include:</strong></p><ul><li>Local expert guides</li><li>Customizable itineraries</li><li>Multiple language support</li><li>Historical and cultural insights</li><li>Photography assistance</li></ul>",
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80"
        },
        {
            title: "Travel Insurance",
            description: "<p>Protect your investment and travel with peace of mind. Our comprehensive travel insurance covers medical emergencies, trip cancellations, lost luggage, and more.</p><p><strong>Coverage includes:</strong></p><ul><li>Medical emergencies</li><li>Trip cancellation/interruption</li><li>Lost or delayed baggage</li><li>Flight delays</li><li>24/7 emergency assistance</li></ul>",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            title: "Car Rental Service",
            description: "<p>Rent a car and explore at your own pace. We offer a wide range of vehicles from economy cars to luxury SUVs, all with comprehensive insurance and 24/7 roadside assistance.</p><p><strong>Fleet includes:</strong></p><ul><li>Economy and compact cars</li><li>SUVs and minivans</li><li>Luxury vehicles</li><li>GPS navigation systems</li><li>Comprehensive insurance</li></ul>",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    try {
        // Check if services already exist
        const { data: existingServices } = await supabase
            .from("services")
            .select("id")
            .limit(1);

        if (existingServices && existingServices.length > 0) {
            console.log("✅ Sample services already exist, skipping insertion.");
            return;
        }

        // Insert sample services
        const { data, error } = await supabase
            .from("services")
            .insert(sampleServices)
            .select();

        if (error) {
            console.error("❌ Error inserting sample services:", error);
        } else {
            console.log(`✅ Successfully inserted ${data?.length || 0} sample services`);
            data?.forEach((service, index) => {
                console.log(`   ${index + 1}. ${service.title}`);
            });
        }
    } catch (error) {
        console.error("❌ Failed to insert sample services:", error);
    }
}

async function testDatabaseData() {
    console.log("🔍 Testing database data...\n");

    try {
        // Test reservations
        console.log("📋 Checking reservations table:");
        const { data: reservations, error: reservationsError } = await supabase
            .from("reservations")
            .select("*")
            .limit(5);
        
        if (reservationsError) {
            console.error("❌ Reservations error:", reservationsError);
        } else {
            console.log(`✅ Found ${reservations?.length || 0} reservations`);
            if (reservations?.length > 0) {
                console.log("Sample reservation:", {
                    id: reservations[0].id,
                    firstName: reservations[0].firstName,
                    email: reservations[0].email,
                    created_at: reservations[0].created_at
                });
            }
        }

        // Test messages
        console.log("\n💬 Checking messages table:");
        const { data: messages, error: messagesError } = await supabase
            .from("messages")
            .select("*")
            .limit(5);
        
        if (messagesError) {
            console.error("❌ Messages error:", messagesError);
        } else {
            console.log(`✅ Found ${messages?.length || 0} messages`);
            if (messages?.length > 0) {
                console.log("Sample message:", {
                    id: messages[0].id,
                    firstName: messages[0].firstName,
                    email: messages[0].email,
                    createdAt: messages[0].createdAt
                });
            }
        }

        // Test custom trips
        console.log("\n🚗 Checking custom_trips table:");
        const { data: customTrips, error: customTripsError } = await supabase
            .from("custom_trips")
            .select("*")
            .limit(5);
        
        if (customTripsError) {
            console.error("❌ Custom trips error:", customTripsError);
        } else {
            console.log(`✅ Found ${customTrips?.length || 0} custom trips`);
            if (customTrips?.length > 0) {
                console.log("Sample custom trip:", {
                    id: customTrips[0].id,
                    firstName: customTrips[0].firstName,
                    email: customTrips[0].email,
                    createdAt: customTrips[0].createdAt
                });
            }
        }

        // Test packages
        console.log("\n📦 Checking packages table:");
        const { data: packages, error: packagesError } = await supabase
            .from("packages")
            .select("*")
            .limit(5);
        
        if (packagesError) {
            console.error("❌ Packages error:", packagesError);
        } else {
            console.log(`✅ Found ${packages?.length || 0} packages`);
        }

        // Test services
        console.log("\n🛎️ Checking services table:");
        const { data: services, error: servicesError } = await supabase
            .from("services")
            .select("*")
            .limit(5);
        
        if (servicesError) {
            console.error("❌ Services error:", servicesError);
        } else {
            console.log(`✅ Found ${services?.length || 0} services`);
            if (services?.length > 0) {
                console.log("Sample service:", {
                    id: services[0].id,
                    title: services[0].title,
                    created_at: services[0].created_at
                });
            }
        }

        console.log("\n🎯 Database test completed!");

    } catch (error) {
        console.error("❌ Database test failed:", error);
    }
}

async function main() {
    await insertSampleServices();
    await testDatabaseData();
}

main();
