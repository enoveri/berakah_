import React from 'react';
import ChildrenGrid from '../components/sponsor/ChildrenGrid';

const SponsorChildPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Sponsor Hero Section with Background Image */}
      <div className="relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/photos/Berakhah-Child-care-980x586.jpg')" }}
        ></div>
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>SPONSOR</h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-yellow-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>SPONSOR A LIFE. CHANGE A STORY.</h2>
              <div className="bg-sky-500/75 p-6 rounded-lg shadow-lg mb-8 max-w-3xl mx-auto">
                <p className="text-xl mb-6 leading-relaxed text-white">
                  Our Friends and Partners help us greatly to take the love of God and the Gospel of our Lord Jesus Christ
                  to many rural communities in Uganda and beyond. Your prayers, support, and love uphold this ministry as we
                  reach villages, schools, prisons, and nations.
                </p>
                <p className="text-xl mb-6 leading-relaxed text-white">
                  Your partnership provides the much-needed love, care, and hope for orphaned and vulnerable children at
                  Berakhah Childcare. As the needs continue to grow, we're challenged to increase our outreach efforts
                  in the communities we serve.
                </p>
                <div className="mt-8 bg-sky-500 p-5 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-2xl font-bold text-white mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    For a monthly donation of <span className="text-yellow-300">$20</span>, <span className="text-yellow-300">$50</span>,
                    or <span className="text-yellow-300">$100</span>, you'll help us reach thousands with God's love and provide
                    care for orphaned and vulnerable children.
                  </p>
                  <a
                    href="#/sponsor-child"
                    className="inline-block px-8 py-4 bg-sky-600 text-white rounded-md font-bold text-xl hover:bg-sky-700 transition-colors shadow-lg"
                    style={{ color: 'white !important' }}
                  >
                    SPONSOR NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-blue-800 mb-6 bg-white bg-opacity-80 py-3 px-6 rounded-lg inline-block shadow-lg border-2 border-blue-400">Sponsor a Child</h1>
              <p className="text-2xl text-blue-900 max-w-3xl mx-auto bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
                Your sponsorship provides education, healthcare, nutrition, and a loving environment for these children.
                Choose a child to sponsor today and make a lasting impact on their life.
              </p>
            </div>

          <ChildrenGrid />

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 bg-blue-100 py-2 px-4 rounded-lg inline-block shadow-md border-2 border-blue-300">Why Sponsor a Child?</h2>
            <p className="text-blue-900 max-w-3xl mx-auto mb-8 text-lg">
              When you sponsor a child through Berakhah Childcare, you're not just providing financial support.
              You're giving a child hope, opportunity, and the chance for a better future. Your monthly donation
              helps provide education, healthcare, nutrition, and a loving environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-green-100 p-6 rounded-lg shadow-md border-2 border-green-300">
                <h3 className="text-xl font-bold mb-3 text-green-800">Education</h3>
                <p className="text-green-900">
                  Your sponsorship helps provide school fees, uniforms, books, and supplies, giving children
                  the opportunity to learn and grow.
                </p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg shadow-md border-2 border-purple-300">
                <h3 className="text-xl font-bold mb-3 text-purple-800">Healthcare</h3>
                <p className="text-purple-900">
                  Sponsored children receive regular medical check-ups, vaccinations, and access to healthcare
                  when they're sick.
                </p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg shadow-md border-2 border-blue-300">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Nutrition</h3>
                <p className="text-blue-900">
                  Your support ensures children receive nutritious meals, helping them grow strong and healthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SponsorChildPage;
