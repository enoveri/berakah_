import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image (Fallback) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('./photos/call2prayer.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* Local Video Background */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-auto min-w-full min-h-full max-w-none"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover'
          }}
        >
          <source src="./videos/gidudu.org home video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" style={{ zIndex: 2 }}></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            LOVING GOD.
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            LOVING PEOPLE...
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 leading-tight">
            CHANGING LIVES...
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-16 max-w-4xl mx-auto font-light">
            IGFM brings the love of God and the gospel of our Lord and savior Jesus Christ by
            serving people's spiritual and physical needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <Link to="/sponsor" className="px-12 py-5 bg-white text-[#00308F] text-2xl rounded-none font-bold hover:bg-gray-100 transition-colors shadow-xl transform hover:scale-105">
            SPONSOR
          </Link>
          <Link to="/donate" className="px-12 py-5 bg-[#00308F] text-white text-2xl rounded-none font-bold hover:bg-blue-900 transition-colors shadow-xl transform hover:scale-105 border-2 border-white">
            DONATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
