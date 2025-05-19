import React from 'react';

const FeaturedEvents = () => {
  return (
    <section className="py-12 bg-blue-50 border-t border-blue-200 leaf-section">
      <div className="container mx-auto px-4">
        {/* Featured Event Banner - Removed Church Planting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Prayer Requests & Testimonies */}
          <div className="content-box bg-blue-200 rounded-xl shadow-lg overflow-hidden border border-blue-300 glow-blue">
            <div className="p-8">
              <h3 className="hover-swell text-xl font-bold mb-4 text-blue-900">PRAYER REQUESTS & TESTIMONIES</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="leaf-button hover-swell block w-full px-4 py-3 bg-blue-100 text-blue-800 text-center rounded-md font-semibold text-lg shadow-md hover:bg-blue-300 transition-colors border border-blue-300"
                >
                  SHARE PRAYER REQUESTS
                </a>
                <a
                  href="#"
                  className="leaf-button hover-swell block w-full px-4 py-3 bg-blue-100 text-blue-800 text-center rounded-md font-semibold text-lg shadow-md hover:bg-blue-300 transition-colors border border-blue-300"
                >
                  SHARE YOUR TESTIMONY
                </a>
              </div>
            </div>
          </div>

          {/* Current Teaching Series */}
          <div className="content-box bg-blue-200 rounded-xl shadow-lg overflow-hidden border border-blue-300 glow-blue">
            <div className="p-8">
              <h3 className="hover-swell text-xl font-bold mb-4 text-blue-900">CURRENT TEACHING SERIES</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="leaf-button hover-swell block w-full px-4 py-3 bg-blue-100 text-blue-800 text-center rounded-md font-semibold text-lg shadow-md hover:bg-blue-300 transition-colors border border-blue-300"
                >
                  WATCH THE VIDEO
                </a>
                <a
                  href="#"
                  className="leaf-button hover-swell block w-full px-4 py-3 bg-blue-100 text-blue-800 text-center rounded-md font-semibold text-lg shadow-md hover:bg-blue-300 transition-colors border border-blue-300"
                >
                  LISTEN TO THE AUDIO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
