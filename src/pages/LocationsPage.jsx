import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const LocationsPage = () => {
  // Sample locations data
  const locations = [
    {
      id: 1,
      name: 'Berakah Church Main Campus',
      address: '123 Main Street, Mbale City',
      phone: '+256 700 000000',
      email: 'main@berakahchurch.com',
      serviceTimes: [
        'Sunday: 9:00 AM & 11:00 AM',
        'Wednesday: 6:00 PM (Prayer Service)'
      ]
    },
    {
      id: 2,
      name: 'Berakah Church North Campus',
      address: '456 North Road, Mbale',
      phone: '+256 701 000000',
      email: 'north@berakahchurch.com',
      serviceTimes: [
        'Sunday: 9:30 AM',
        'Friday: 6:00 PM (Youth Service)'
      ]
    },
    {
      id: 3,
      name: 'Berakah Church East Campus',
      address: '789 East Avenue, Mbale',
      phone: '+256 702 000000',
      email: 'east@berakahchurch.com',
      serviceTimes: [
        'Sunday: 10:00 AM',
        'Tuesday: 5:30 PM (Bible Study)'
      ]
    },
    {
      id: 4,
      name: 'Berakah Church Kampala Campus',
      address: '101 Central Road, Kampala',
      phone: '+256 703 000000',
      email: 'kampala@berakahchurch.com',
      serviceTimes: [
        'Sunday: 8:30 AM & 10:30 AM',
        'Thursday: 6:00 PM (Praise & Worship)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-2 text-center">Our Locations</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Find a Berakah Church location near you
          </p>
          
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Multiple Locations, One Church</h2>
              <p className="text-gray-600 mb-6">
                Berakah Church is one church in multiple locations. No matter which campus you attend, 
                you'll experience the same welcoming atmosphere, powerful worship, and relevant Bible teaching.
              </p>
              <p className="text-gray-600">
                We believe in making church accessible to everyone, which is why we continue to expand 
                to new locations. Each of our campuses has its own unique flavor while maintaining the 
                heart and vision of Berakah Church.
              </p>
            </div>
          </div>
          
          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {/* This would be replaced with an actual map/image */}
                  <span className="text-gray-500 font-medium">Location Map</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{location.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="mr-3 text-blue-600">
                        <FaMapMarkerAlt />
                      </div>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-3 text-blue-600">
                        <FaPhone />
                      </div>
                      <p className="text-gray-600">{location.phone}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-3 text-blue-600">
                        <FaEnvelope />
                      </div>
                      <p className="text-gray-600">{location.email}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-3 text-blue-600">
                        <FaClock />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Service Times:</p>
                        {location.serviceTimes.map((time, index) => (
                          <p key={index} className="text-gray-600">{time}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="bg-blue-600 rounded-xl shadow-md overflow-hidden text-white">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Visit Us This Weekend</h2>
              <p className="mb-6">
                We would love to have you join us at any of our locations this weekend. 
                Come experience the warmth and community of Berakah Church.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
