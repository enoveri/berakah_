import React from 'react';
import ChildrenGrid from '../components/sponsor/ChildrenGrid';

const SponsorChildPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sponsor Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">SPONSOR</h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">SPONSOR A LIFE. CHANGE A STORY.</h2>
              <p className="text-xl mb-6">
                Our Friends and Partners help us greatly to take the love of God and the Gospel of our Lord Jesus Christ to many in the rural communities in Uganda and the world.
              </p>
              <p className="text-xl mb-6">
                Your Prayers, Support and love upholds this ministry and helps us as we go into villages, Schools, Prisons and Nations to preach the Gospel, provide medical supplies and other humanitarian help.
              </p>
              <p className="text-xl mb-6">
                Your Partnership also helps to provide the much needed love, care and hope for the orphaned and vulnerable children at Berakhah Childcare.
              </p>
              <p className="text-xl mb-6">
                As we all know the needs are great and we are challenged to increase our outreach efforts in the communities we work, we pray you consider supporting this ministry with your prayers, Finances and any other way possible.
              </p>
              <p className="text-xl font-semibold">
                For a monthly donation of $20, $50, $100 or more you will help us in reaching thousands of lives with the love of God, take care of orphaned and vulnerable children.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-600 mb-4">Sponsor a Child</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Your sponsorship provides education, healthcare, nutrition, and a loving environment for these children.
                Choose a child to sponsor today and make a lasting impact on their life.
              </p>
            </div>

          <ChildrenGrid />

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Sponsor a Child?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              When you sponsor a child through Berakhah Childcare, you're not just providing financial support.
              You're giving a child hope, opportunity, and the chance for a better future. Your monthly donation
              helps provide education, healthcare, nutrition, and a loving environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Education</h3>
                <p className="text-gray-700">
                  Your sponsorship helps provide school fees, uniforms, books, and supplies, giving children
                  the opportunity to learn and grow.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Healthcare</h3>
                <p className="text-gray-700">
                  Sponsored children receive regular medical check-ups, vaccinations, and access to healthcare
                  when they're sick.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Nutrition</h3>
                <p className="text-gray-700">
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
