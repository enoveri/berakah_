import React from 'react';
import { FaBook } from 'react-icons/fa';

const StatementOfFaithPage = () => {
  const beliefs = [
    {
      id: 1,
      title: "The Trinity",
      content: "It is the testimony of both the Old and New Testaments and of the Christian Church that God is both One and Triune. The biblical revelation testifies that there is only one God and that He is eternally existent in three persons—Father, Son and Holy Spirit.",
      image: "/photos/Berakhah-Choir-2024-12.jpg"
    },
    {
      id: 2,
      title: "God the Father",
      content: "God the Father is the creator and sustainer of all things, and He created the universe in love. He created man in His own image for fellowship and called man back to Himself through Christ after the rebellion and fall of man.",
      image: "/photos/Berakhah-Choir-2024-8.jpg"
    },
    {
      id: 3,
      title: "The Son",
      content: "Jesus Christ is eternally God. He was together with the Father and the Holy Spirit from the beginning, and through Him all things were made. For man's redemption, He left heaven and became incarnate by the Holy Spirit through the virgin Mary; henceforth, He is forever one Christ with two natures—God and man—in one person.",
      image: "/photos/Berakhah-Choir-2024-10.jpg"
    },
    {
      id: 4,
      title: "The Holy Spirit",
      content: "The Holy Spirit is God, the Lord and giver of life, who was active in the Old Testament and given to the Church in fullness at Pentecost. He empowers the saints for service and witness, cleanses man from the old nature and conforms us to the image of Christ. The baptism in the Holy Spirit, subsequent to conversion, releases the fullness of the Spirit and is evidenced by the fruits and gifts of the Holy Spirit.",
      image: "/photos/Berakhah-Choir-2024-11.jpg"
    },
    {
      id: 5,
      title: "The Scripture",
      content: "We affirm that the Bible, containing the Old and New Testaments, is alone the only infallible, inspired Word of God, and that its authority is ultimate, final and eternal. It cannot be added to, subtracted from or superseded in any regard. The Bible is the source of all doctrine, instruction, correction and reproof. It contains all that is needed for guidance in godliness and practical Christian conduct.",
      image: "/photos/Berakhah-Choir-2024-13.jpg"
    },
    {
      id: 6,
      title: "The Atonement",
      content: "Christ's vicarious death on the cross paid the penalty for the sins of the whole world, but its benefits are only applicable to those who receive Jesus as personal Savior. Healing—body, soul and spirit—and all of God's provisions for His saints, are provided for in the atonement, but these must be appropriated.",
      image: "/photos/Berakhah-Choir-2024-17.jpg"
    },
    {
      id: 7,
      title: "Salvation",
      content: "The Word of God declares clearly that salvation is a free gift of God, based on the merits of the death of His Son, and is appropriated by faith. Salvation is affected by personal repentance, belief in the Lord Jesus (justification) and personal acceptance of Him into one's life as Lord and Savior (regeneration). The new life in Christ includes the privileges of adoption and inheritance in the kingdom of God's beloved Son. Salvation is an act of free will in response to God's personal love for mankind. It is predestined only in the sense that God, through His omniscience, foreknew those who would choose Him. It is secure in the eternal, unchanging commitment of God who does not lie and is forever the same. Salvation should produce an active life style of loving, obedience and service to Jesus Christ our savior.",
      image: "/photos/Berakhah-Child-care-980x586.jpg"
    },
    {
      id: 8,
      title: "The Christian Life",
      content: "We believe that the Scriptures portray the life of the saint in this world to be one of balance between what is imputed to us as Christians and what is imparted to us according to our faith and maturity. Hence, God's provision for His children is total, and the promises are final and forever. The shortcomings of the individual and of the Church are because of the still progressing sanctification of the saints. The Christian life is filled with trials, tests and warfare against a spiritual enemy. For those abiding in Christ until their deaths or His return, the promises of eternal blessing in the presence of God are assured. To remain faithful through all circumstances of life requires dependence upon the Holy Spirit and a willingness to die to personal desires and passions.",
      image: "/photos/childrens_church-1-980x653.jpeg"
    },
    {
      id: 9,
      title: "The Church",
      content: "The goal of the Church is to make disciples of all nations and to present the saints complete in Christ. The five-fold ministry of Ephesians 4 governs the Church, the offices of elder and deacon, as well as other offices mentioned in scripture. Church policy is a balance between congregation and eldership authority, emphasizing the final authority of the Church leadership. It is essential to the life of the Church that scriptural patterns of discipline are practiced and that oversight for Church discipline, individual and corporate, is exercised by the leadership of the Church.",
      image: "/photos/call2prayer.jpg"
    },
    {
      id: 10,
      title: "Baptism & the Lord's Supper",
      content: "The Word of God enjoins on the Church two perpetual ordinances of the Lord Jesus Christ. The first, baptism, is the outward sign of what God has already done in the individual's life and is a testimony to all that the person now belongs to Jesus. It is identification with Jesus and is affected in the name of the Father, the Son and the Holy Spirit. The Lord's Supper is a commemoration of the death of the Lord and is done in remembrance of Him until He comes again; it is a sign of our participation in Him. Both institutions are restricted to those who are believers.",
      image: "/photos/church-planting-1-980x653.jpeg"
    },
    {
      id: 11,
      title: "The Great Commission",
      content: "Jesus issued Christians a \"Great Commission\": to spread the Good News of His salvation to all peoples and every nation. To fulfill this commission, Christians must not only proclaim the love of God, but demonstrate it through deeds of compassion, such as feeding the poor and hungry, providing for orphans and the homeless and assisting the sick and distressed as God directs.",
      image: "/photos/church-planting-10-980x551.jpeg"
    },
    {
      id: 12,
      title: "Eschatology",
      content: "We affirm the bodily, personal, second coming of the Lord Jesus Christ, the resurrection of the saints, the millennium and the final judgment. The final judgment will determine the eternal status of both the saints and the unbelievers, determined by their relationship to Jesus Christ. We affirm with the Bible the final state of New Heavens and New earth.",
      image: "/photos/church-planting-12-980x735.jpeg"
    }
  ];

  return (
    <div className="min-h-screen py-16" style={{ backgroundColor: '#A6CFFF' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-2 text-center">STATEMENT OF FAITH</h1>
          <p className="text-xl text-blue-800 mb-12 text-center">
            What we believe
          </p>

          {/* Introduction */}
          <div className="rounded-xl shadow-md overflow-hidden mb-12 bg-[#EBF4FF] border border-blue-300 glow-blue">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="/photos/Berakhah-Choir-2024-1.jpg"
                  alt="Statement of Faith"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Core Beliefs</h2>
                <p className="text-blue-800 mb-6">
                  At International Great Faith Ministries, our faith is rooted in the timeless truths of Scripture.
                  We believe in the authority of God's Word and the transformative power of the Gospel of Jesus Christ.
                </p>
                <p className="text-blue-800">
                  The following statements outline the essential beliefs that guide our ministry, worship, and service.
                  These core doctrines unite us as a community of believers committed to loving God, loving people, and changing lives.
                </p>
              </div>
            </div>
          </div>

          {/* Beliefs Grid */}
          <div className="grid grid-cols-1 gap-8 mb-12">
            {beliefs.map((belief) => (
              <div
                key={belief.id}
                className="rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform transition-all duration-300 hover:scale-[1.01] group bg-blue-200 border border-blue-300 glow-blue"
              >
                <div className="md:flex items-start">
                  <div className="md:w-1/4 mb-4 md:mb-0 mr-6 transform transition-transform duration-300 group-hover:scale-105 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={belief.image}
                      alt={belief.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2 text-blue-900 transform transition-all duration-300 group-hover:text-blue-700">{belief.title}</h3>
                    <p className="text-blue-800 transition-all duration-300">
                      {belief.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="rounded-xl shadow-md overflow-hidden bg-[#EBF4FF] border border-blue-300 glow-blue">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-900">Join Us in Worship</h2>
                <p className="mb-6 text-blue-800">
                  We invite you to join us as we worship together and grow in our faith.
                  Visit one of our services to experience the love and community of International Great Faith Ministries.
                </p>
                <div>
                  <a
                    href="/contact"
                    className="inline-block px-6 py-3 rounded-md font-medium transition-colors"
                    style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)', color: 'white' }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/photos/our-home-980x652.jpg"
                  alt="Join Us in Worship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementOfFaithPage;
