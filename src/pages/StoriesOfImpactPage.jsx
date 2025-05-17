import React from 'react';
import { FaPlay } from 'react-icons/fa';

const StoriesOfImpactPage = () => {
  // Sample stories data
  const stories = [
    {
      id: 1,
      name: "ALLAN WANDERA",
      videoUrl: "#",
      thumbnailUrl: "https://images.unsplash.com/photo-1548187669-0b84947d8e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote: ""
    },
    {
      id: 2,
      name: "MOREEN",
      videoUrl: "#",
      thumbnailUrl: "https://images.unsplash.com/photo-1604406464259-85a3f6e2034c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote: "I would always fall sick almost everyday"
    },
    {
      id: 3,
      name: "JOYCE",
      videoUrl: "#",
      thumbnailUrl: "https://images.unsplash.com/photo-1604406464259-85a3f6e2034c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote: ""
    },
    {
      id: 4,
      name: "GERALD",
      videoUrl: "#",
      thumbnailUrl: "https://images.unsplash.com/photo-1604406464259-85a3f6e2034c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote: ""
    }
  ];

  // Video player component
  const VideoThumbnail = ({ story }) => {
    return (
      <div className="relative group">
        <div className="aspect-video overflow-hidden rounded-lg">
          <img 
            src={story.thumbnailUrl} 
            alt={`${story.name}'s Story`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-blue-500 bg-opacity-80 flex items-center justify-center cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
                <FaPlay className="text-white text-xl ml-1" />
              </div>
            </div>
          </div>
          {story.quote && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white">
              <p className="italic text-lg">{story.quote}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gray-800">STORIES OF </span>
              <span className="text-gray-700">IMPACT</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A few of our children whose lives have been transformed by the love and support of our sponsors and
              donors around the world. We couldn't be more proud.
            </p>
          </div>

          {/* First story - Full width */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {stories[0].name}'S STORY
            </h2>
            <div className="max-w-4xl mx-auto">
              <VideoThumbnail story={stories[0]} />
            </div>
          </div>

          {/* Second and third stories - Side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {stories[1].name}'S STORY
              </h2>
              <VideoThumbnail story={stories[1]} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {stories[2].name}'S STORY
              </h2>
              <VideoThumbnail story={stories[2]} />
            </div>
          </div>

          {/* Fourth story - Full width */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {stories[3].name}'S STORY
            </h2>
            <div className="max-w-4xl mx-auto">
              <VideoThumbnail story={stories[3]} />
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-600 rounded-xl shadow-md overflow-hidden text-white">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Make a Difference Today</h2>
              <p className="mb-6">
                Your support can transform a child's life. Consider sponsoring a child or making a donation to help us continue our work.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/sponsor-child" 
                  className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Sponsor a Child
                </a>
                <a 
                  href="/donate" 
                  className="inline-block px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesOfImpactPage;
