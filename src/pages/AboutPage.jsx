import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  // Ministry sections data
  const ministrySections = [
    {
      id: 4,
      title: "CALL2PRAYER MBALE CHURCH",
      description: "A church after God's heart committed to evangelism, loving God, loving people and changing lives.\nWe are located in Mbale-City 900m From Mbale S.S on Kakungulu Drive Half London Area.",
      link: "/call2prayer"
    },
    {
      id: 5,
      title: "PASTORS NETWORK - UGANDA",
      description: "Pastor Paul Gidudu envisions supporting pastors and their families in their ministry to the masses. This dream gave rise to Pastor's Network Uganda, a platform that provides training, encouragement, empowerment, exposure, and sponsorship to fulfill the crucial need of supporting pastors and their families in their noble endeavors.",
      link: "/pastors-network"
    },
    {
      id: 1,
      title: "International Great Faith Ministries (IGFM)",
      description: "The International Great Faith Ministries (IGFM) is committed to reaching out to every unreached people group, addressing both their spiritual and physical needs. Our efforts include Church Planting, Evangelism, Leadership Development, and the provision of care for vulnerable individuals and orphaned children through Berakhah Childcare.",
      link: "/about-igfm"
    },
    {
      id: 3,
      title: "BERAKHAH CHOIR",
      description: "Berakhah Children's Choir travels to different places performing unique cultural music and dances, sharing their life changing stories and testimonies while developing their talents but at the same time creating awareness of the plight of orphans and vulnerable children in the rural villages of Uganda.",
      link: "/berakhah-choir"
    },
    {
      id: 7,
      title: "WIDOWS AND ELDERLY CARE",
      description: "Widows and Elderly care is a cause that is incredibly close to our hearts here at IGFM and Berakhah. In many communities where we work, access to social services is nonexistent. This leaves widows and vulnerable elderly individuals without the most basic necessities, such as medical care and even food. It's a heartbreaking reality that some are left to starve to death simply because there are no support systems in place.",
      link: "/widows-elderly-care"
    },
    {
      id: 2,
      title: "BERAKHAH CHILDCARE",
      description: "Berakhah Childcare exists to care for orphaned and vulnerable children in Uganda's rural villages providing for their physical, emotional, Spiritual and educational needs empowering them to become Uganda's future leaders.\n\nBerakhah childcare home in Busamaga- Buwalasi 14km or 9miles North of Mbale town in Uganda is where orphaned and vulnerable children find the much needed love and care and the home of Berakhah Children's Choir.",
      link: "/berakhah-childcare"
    },
    {
      id: 8,
      title: "CHILDREN'S CHURCH",
      description: "Mat 19:14 But Jesus said, Let the children come to me. Don't stop them!\n\nAt IGFM, we believe children are a major mission field where we have found by experience the harvest to be plenty yet the laborers are indeed few.\n\nIn the communities we serve, we see a generation of children in need of guidance, love, and spiritual care. Now more than ever, it is crucial for us to provide a safe place where they can encounter the transformative power of God's love. It is our responsibility, as stewards of God's grace, to rise to this challenge and labor fervently to make sure every child is given an opportunity to hear the gospel.",
      link: "/childrens-church"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 leaf-bg">
      <div className="leaf-decoration leaf-top-left"></div>
      <div className="leaf-decoration leaf-top-right"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center leaf-accent">About Us</h1>

          {/* Vision and Mission Section */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="h-64 bg-blue-200 overflow-hidden">
              <img
                src="/photos/pastors-2.jpg"
                alt="Pastors Network"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 leaf-accent">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                We are an English-speaking, cell-based community church, celebrating Christ,
                growing and multiplying as each one reaches one; touching those around us with the
                love of Jesus, bringing healing to the cities and the nations.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 leaf-accent">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To be a loving family sharing Christ with the world, by:
              </p>
              <ul className="leaf-list pl-6 text-gray-600 mb-6 space-y-2">
                <li>Expressing God's love through worship and service</li>
                <li>Experiencing transformation through discipleship</li>
                <li>Expanding God's Kingdom through evangelism</li>
                <li>Extending compassion through community development and social justice initiatives</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 leaf-accent">Our Values</h2>
              <ul className="leaf-list pl-6 text-gray-600 space-y-2">
                <li><strong>Bible-based teaching:</strong> We are committed to the Word of God as our foundation and guide.</li>
                <li><strong>Cell-based community:</strong> We believe in close-knit family units where discipleship happens.</li>
                <li><strong>Passionate worship:</strong> We express our love for God through vibrant, authentic worship.</li>
                <li><strong>Intentional discipleship:</strong> We help each other grow to spiritual maturity.</li>
                <li><strong>Generous living:</strong> We give freely of our time, talents, and treasures.</li>
                <li><strong>Compassionate outreach:</strong> We demonstrate God's love through practical care.</li>
              </ul>
            </div>
          </div>

          {/* Ministry Sections */}
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center leaf-accent">Our Ministries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {ministrySections.map((section) => (
              <div
                key={section.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl leaf-card ministry-container"
              >
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-blue-600 mb-4 leaf-accent">{section.title}</h2>
                  <div className="text-gray-700 whitespace-pre-line ministry-content">
                    {section.description}
                  </div>
                  <Link
                    to={section.link}
                    className="ministry-button"
                  >
                    MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="leaf-decoration leaf-bottom-left"></div>
      <div className="leaf-decoration leaf-bottom-right"></div>
    </div>
  );
};

export default AboutPage;
