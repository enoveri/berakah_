import React, { useState } from 'react';
import { FaPlay, FaHeadphones, FaDownload, FaShareAlt, FaCalendarAlt, FaUser, FaBook } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';

const TeachingSeriesPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Current teaching series data
  const currentSeries = {
    title: "Faith That Moves Mountains",
    description: "In this powerful series, Pastor Paul Gidudu explores the transformative power of faith and how we can apply it to overcome life's challenges.",
    image: "/photos/call2prayer.jpg",
    startDate: "June 2, 2024",
    endDate: "July 7, 2024",
    speaker: "Pastor Paul Gidudu",
    videoUrl: "https://www.youtube.com/watch?v=nkpv3ftETtI",
    audioUrl: "/audio/faith-that-moves-mountains.mp3",
    downloadUrl: "/downloads/faith-that-moves-mountains.pdf",
    scripture: "Matthew 17:20",
    episodes: [
      {
        id: 1,
        title: "The Foundation of Faith",
        date: "June 2, 2024",
        description: "Discover the biblical foundation of faith and why it's essential for every believer.",
        videoUrl: "https://www.youtube.com/watch?v=nkpv3ftETtI",
        audioUrl: "/audio/faith-foundation.mp3",
        thumbnail: "/photos/Berakhah-Choir-2024-8.jpg"
      },
      {
        id: 2,
        title: "Overcoming Doubt",
        date: "June 9, 2024",
        description: "Learn practical strategies to overcome doubt and strengthen your faith in difficult times.",
        videoUrl: "https://www.youtube.com/watch?v=JfQXs28brnY",
        audioUrl: "/audio/overcoming-doubt.mp3",
        thumbnail: "/photos/pastors-1.jpg"
      },
      {
        id: 3,
        title: "Faith in Action",
        date: "June 16, 2024",
        description: "Explore how faith must be accompanied by action to see God's promises fulfilled in your life.",
        videoUrl: "https://www.youtube.com/watch?v=PcO-Zjslp8s",
        audioUrl: "/audio/faith-in-action.mp3",
        thumbnail: "/photos/childrens_church-1-980x653.jpeg"
      }
    ]
  };

  // Past teaching series data
  const pastSeries = [
    {
      id: 1,
      title: "The Power of Prayer",
      description: "A six-week series on developing a powerful prayer life.",
      image: "/photos/widows_elderly_care-1-480x320.jpeg",
      date: "April - May 2024",
      episodes: 6
    },
    {
      id: 2,
      title: "Kingdom Living",
      description: "Understanding and applying the principles of God's Kingdom in everyday life.",
      image: "/photos/church-planting-1-980x653.jpeg",
      date: "February - March 2024",
      episodes: 8
    },
    {
      id: 3,
      title: "Spiritual Warfare",
      description: "Equipping believers with biblical strategies for spiritual victory.",
      image: "/photos/Berakhah-Child-care-980x586.jpg",
      date: "January 2024",
      episodes: 4
    }
  ];

  const handlePlayVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideo(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeVideo = () => {
    setShowVideo(false);
    setCurrentVideo(null);
  };

  return (
    <div className="min-h-screen py-16" style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center" style={{ color: '#3B9AE1' }}>Teaching Series</h1>
          <p className="text-xl mb-12 text-center" style={{ color: '#5D4BA0' }}>
            Grow in your faith through our biblical teaching
          </p>

          {/* Video Player (when active) */}
          {showVideo && (
            <div className="mb-12 rounded-xl shadow-md overflow-hidden glow-container variant-1">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold" style={{ color: '#FFD8A8' }}>Now Playing</h2>
                  <button
                    onClick={closeVideo}
                    className="text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <ReactPlayer
                    url={currentVideo}
                    width="100%"
                    height="100%"
                    controls
                    playing
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex">
                <button
                  className={`px-6 py-3 font-medium ${activeTab === 'current' ? 'text-white' : 'bg-white hover:bg-blue-100'}`}
                  style={{
                    background: activeTab === 'current' ? 'linear-gradient(135deg, #1E3A8A 0%, #5D4BA0 100%)' : '',
                    color: activeTab === 'current' ? '#FFF8E6' : '#3B9AE1'
                  }}
                  onClick={() => setActiveTab('current')}
                >
                  Current Series
                </button>
                <button
                  className={`px-6 py-3 font-medium ${activeTab === 'past' ? 'text-white' : 'bg-white hover:bg-blue-100'}`}
                  style={{
                    background: activeTab === 'past' ? 'linear-gradient(135deg, #5D4BA0 0%, #1E3A8A 100%)' : '',
                    color: activeTab === 'past' ? '#FFF8E6' : '#3B9AE1'
                  }}
                  onClick={() => setActiveTab('past')}
                >
                  Past Series
                </button>
              </div>
            </div>
          </div>

          {/* Current Series */}
          {activeTab === 'current' && (
            <div>
              {/* Series Overview */}
              <div className="bg-blue-500 rounded-xl shadow-md overflow-hidden mb-8 glow-container">
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img
                      src={currentSeries.image}
                      alt={currentSeries.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-2xl font-bold text-[#007FFF] mb-2">{currentSeries.title}</h2>
                    <p className="text-white mb-4">{currentSeries.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center">
                        <FaCalendarAlt className="text-[#007FFF] mr-2" />
                        <span className="text-white">{currentSeries.startDate} - {currentSeries.endDate}</span>
                      </div>
                      <div className="flex items-center">
                        <FaUser className="text-[#007FFF] mr-2" />
                        <span className="text-white">{currentSeries.speaker}</span>
                      </div>
                      <div className="flex items-center">
                        <FaBook className="text-[#007FFF] mr-2" />
                        <span className="text-white">Key Scripture: {currentSeries.scripture}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <button
                        onClick={() => handlePlayVideo(currentSeries.videoUrl)}
                        className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors border border-[#007FFF]"
                      >
                        <FaPlay className="mr-2" /> Watch Series Intro
                      </button>
                      <a
                        href={currentSeries.audioUrl}
                        className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors border border-[#007FFF]"
                      >
                        <FaHeadphones className="mr-2" /> Listen to Audio
                      </a>
                      <a
                        href={currentSeries.downloadUrl}
                        className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors border border-[#007FFF]"
                      >
                        <FaDownload className="mr-2" /> Download Notes
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Episodes */}
              <h3 className="text-xl font-bold text-blue-700 mb-4">Series Episodes</h3>
              <div className="space-y-4 mb-12">
                {currentSeries.episodes.map((episode) => (
                  <div key={episode.id} className="bg-blue-500 rounded-lg shadow-md overflow-hidden glow-container">
                    <div className="md:flex">
                      <div className="md:w-1/4 h-48 md:h-auto">
                        <img
                          src={episode.thumbnail}
                          alt={episode.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/4 p-4">
                        <h4 className="text-lg font-bold text-[#007FFF] mb-1">
                          {episode.id}. {episode.title}
                        </h4>
                        <p className="text-white text-sm mb-2">{episode.date}</p>
                        <p className="text-white mb-4">{episode.description}</p>

                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => handlePlayVideo(episode.videoUrl)}
                            className="flex items-center px-3 py-1 bg-blue-700 text-white text-sm rounded-md hover:bg-blue-800 transition-colors border border-[#007FFF]"
                          >
                            <FaPlay className="mr-1" /> Watch Video
                          </button>
                          <a
                            href={episode.audioUrl}
                            className="flex items-center px-3 py-1 bg-blue-700 text-white text-sm rounded-md hover:bg-blue-800 transition-colors border border-[#007FFF]"
                          >
                            <FaHeadphones className="mr-1" /> Listen
                          </a>
                          <button
                            className="flex items-center px-3 py-1 bg-blue-700 text-white text-sm rounded-md hover:bg-blue-800 transition-colors border border-[#007FFF]"
                          >
                            <FaShareAlt className="mr-1" /> Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Series */}
          {activeTab === 'past' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {pastSeries.map((series) => (
                <div key={series.id} className="bg-blue-500 rounded-lg shadow-md overflow-hidden glow-container">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={series.image}
                      alt={series.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#007FFF] mb-1">{series.title}</h3>
                    <p className="text-white text-sm mb-2">{series.date} • {series.episodes} episodes</p>
                    <p className="text-white mb-4">{series.description}</p>

                    <button
                      className="w-full flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors border border-[#007FFF]"
                    >
                      <FaPlay className="mr-2" /> View Series
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeachingSeriesPage;
