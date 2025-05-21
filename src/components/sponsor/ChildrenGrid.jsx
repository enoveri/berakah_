import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChildrenGrid = () => {
  const [visibleChildren, setVisibleChildren] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const childrenPerPage = 20;

  // List of children's names
  const children = [
    "Nambozo Zuena",
    "Misiswera Modi",
    "Nabukwasi Gift",
    "Wanyoto Aron",
    "Kande Wallen",
    "Nagudi Jesca Patience",
    "Negesa Flavia",
    "Madanda Jovan",
    "Salimu Esili",
    "Magwali Joel",
    "Wanyama Ronny",
    "Negesa Shinah",
    "Muswala Abbey",
    "Nyegesa Bushira",
    "Wawomole John",
    "Namonye Brian",
    "Kadoli Alvin",
    "Wamaye Willington",
    "Melessi Kamiti",
    "Nabukisa Doreen Vivian",
    "Namono Rhoda Julia",
    "Botto Michael",
    "Muswala Micah",
    "Yokana Gidudu",
    "Mude Ben Simon",
    "Bisuku Joseph",
    "Wakilo Mutwalibu",
    "Wasukira Deo",
    "Masaba Emma",
    "Wamanga Salim",
    "Nambozo Topi",
    "Nambozo Sofiane Sarah",
    "Kalungi Faruk",
    "Mweru Joseph",
    "Napagi Nathan",
    "Gimeyi Abel",
    "Wokilo Asanasiyo",
    "Nakayenze Gift",
    "Wadamba Philimon",
    "Madanga Joseph",
    "Nabuduwa Ruth",
    "Namonye Peter",
    "Galenda Naume",
    "Muduwa Grace Namwene",
    "Wamanla Vicent",
    "Namataka Desire Felina",
    "Nabukwasi Vanesa",
    "Fuzi Wilson",
    "Namataka Bridget",
    "Nabukwasi Joan",
    "Namono Vivian Esther",
    "Kadoli Levi",
    "Nagudi Precious Amerida",
    "Wadada Brian",
    "Mulenge Jacinta",
    "Nabaya Jonathan",
    "Nambozo Aggy",
    "Nabugasha Prosy",
    "Wangoboya Willison Nick",
    "Kyalo Charles",
    "Mugide Rose",
    "Wodamba Samuel",
    "Otwaihile Jeremiah Gidudu",
    "Nabugwere Margret",
    "Namono Vicky",
    "Wabende Elijah",
    "Kitobo Jonathan",
    "Gonyi Joel",
    "Namataka Esther",
    "Aliyi Juma Wodada",
    "Namalikhe Gloria",
    "Wambede Akifoferi",
    "Wabulo Sam",
    "Nagudi Aisha",
    "Namono Gladys",
    "Nagudi Joy",
    "Nambozo Serina",
    "Nafuna Gift Perina",
    "Mwambu Joram",
    "Nabaya Sulaian Sekaniya",
    "Nafuna Hamzat Irene",
    "Nadunga Joyce",
    "Napangi Yeku",
    "Madeyo Ian",
    "Negesa Gift",
    "Muzaki Gift",
    "Nambozo Leah",
    "Magombe Christopher",
    "Nakadowa Dan",
    "Wabugye Alocious",
    "Neumbe Sauuda",
    "Wabulo Wilson",
    "Kwaga Mallis",
    "Wetaka Shafik",
    "Wabulo Stephen",
    "Wangwanyi Jonathan",
    "Namataka Rosemary",
    "Nabukwasi Precilla",
    "Nagudi Sarah Keisha",
    "Wambede Aoron",
    "Namataka Olivia",
    "Kibety Micheal",
    "Masolo Jonh",
    "Mafabi Innocent Orogot",
    "Magomu James",
    "Nabuduwa Patience",
    "Mulengi Rogers Emmauel",
    "Mude Jackson",
    "Musika Emma",
    "Wambogo Godfrey",
    "Nagudi Miracle Mary",
    "Nandudu Agnes",
    "Nagudi Lorena",
    "Naduunga Florence",
    "Nambozo Mercy",
    "Senyundo Ashiraf",
    "Mude Peter",
    "Mugide Melian Eve",
    "Mafabi Yassin",
    "Wetaka Arafat",
    "Makada Emma",
    "Bwayirisa Joshua",
    "Selukuma Shalik",
    "Maduku John Nickson",
    "Nadule Ben Andrew",
    "Masibo Patience",
    "Mudebo Stephen",
    "Mugide Joy",
    "Nakibi Wilson Favor",
    "Magombe Kelan",
    "Nandudu Joyce",
    "Luguda Silver",
    "Nabukonde Flavia",
    "Nagudi Nerika",
    "Nabubolo Aidah",
    "Nafuna Asha",
    "Bonto Elisah",
    "Nabude Beatrice Mariam",
    "Nabukwasi Racheal",
    "Gidudu Robert",
    "Kadoli James",
    "Onyot Ivan",
    "Maside Edwin",
    "Gudoyi Dan",
    "Kadoli Philip",
    "Namataka Connie",
    "Mwenge Elizabeth",
    "Nadenge William",
    "Muzaki Betty",
    "Budiyo James",
    "Kizito Micheal",
    "Gidudu Emma",
    "Nambuba Mary Zaion",
    "Wabulo Ammon",
    "Namono Jesca",
    "Wambewo Jude",
    "Nadunga Betty Jesca",
    "Masaba Mathias",
    "Masaba David",
    "Lugosi Grace",
    "Nandege Arone",
    "Nabugwere Margulita",
    "Mugide Isabel",
    "Nandudu Lina",
    "Mugoya Samuel",
    "Nazamba Kenneth",
    "Wambede Elijah",
    "Mugoya Mariam Serena",
    "Muduwa Mellisa",
    "Nambafu Angela",
    "Muyekho Jenipher",
    "Masibo Marthar",
    "Nambozo Loyce",
    "Magomu Cyrus",
    "Nabukwasi Rehana",
    "Gidudu Joseph",
    "Masibo Joy",
    "Mugerwa Gerald",
    "Waniala Boniface",
    "Nabutono Justine Zemoyi",
    "Nabaya Anderson Lameka",
    "Nagudi Merissa",
    "Nabukenya Shalwar",
    "Kutwa Akisam",
    "Okurut James Peter",
    "Kainza Angela Elizabeth",
    "Wobulo Trevor",
    "Buwule Patricia",
    "Wanyoto Enock",
    "Wambede Gaad",
    "Nabutoto Christine",
    "Nandudu Meridah Namataka",
    "Namataka Moreen",
    "Natiwa Jovan",
    "Nambuba Dorcus",
    "Rode Mercy",
    "Nambozo Primah",
    "Galenda Renanah Joyce",
    "Nasoro Felix",
    "Ajambo Faith Mary",
    "Nadunga Priscilla",
    "Namatome Kellen",
    "Nadule Jonan",
    "Magombe Jeremiah",
    "Namono Shakirah",
    "Nabukisa Charity",
    "Waniaye Edrin",
    "Negesa Merisa",
    "Wanyenya Patience",
    "Nalunga Fatuma",
    "Nagudi Sharifah",
    "Dombo Ramazan Wetaka",
    "Namalike Jovia",
    "Masibo Maula",
    "Nabukwasi Gorret",
    "Woniala Paul",
    "Nabukwasi Vicky",
    "Gizamba Perez",
    "Kamiti Angel Prossy",
    "Namataka Doreen",
    "Nabondi Eddy Wakilo",
    "Nandege Emma",
    "Nafuna Mary",
    "Wamaniala James Kelement",
    "Nabude Jessica",
    "Wambede Joshua",
    "Nambafu Angella",
    "Mugide Mary",
    "Nakibi Timothy",
    "Mukisa Edward",
    "Balayo David",
    "Muduwa Favour",
    "Wambede Allan",
    "Nandudu Joy",
    "Wakilo Partrick",
    "Nabukonde Miracle",
    "Wakiro Dan",
    "Nangulu Shami",
    "Kigele William",
    "Nangoye Emma",
    "Magomu Enock",
    "Wetaka Abudul",
    "Wambede Nicholas",
    "Wadamba Mark",
    "Masolo Isaac",
    "Nagudi Esther Nabuduwa",
    "Musamali Jackson",
    "Wobulo Tom",
    "Nambozo Miracle",
    "Foze Christopher",
    "Nakaye Mutwalibu",
    "Kadoli Modecai",
    "Apolot Grace",
    "Nafuna Oliva Namono",
    "Zibuli Mick",
    "Nangayi Promise Daniel",
    "Nabaya Emmanuel",
    "Sera Agness Nabuduwa",
    "Mafabi Hassan",
    "Nabukonde Beth",
    "Mweru Eli Peter",
    "Nabukwasi Mary Primah",
    "Amuya Esther Magret",
    "Muduwa Melisa",
    "Nabumbo Rebecca",
    "Nabutono Justine",
    "Masaba Tonny",
    "Yokana Benard",
    "Negesa Patricia",
    "Kisa Beatrice",
    "Gidudu Paul",
    "Sentongo Alex",
    "Nagudi Aminah Hafuwa",
    "Nambozo Peldah",
    "Nandudu Esther Grace",
    "Namonye Deo",
    "Gidongo Richard",
    "Mafabi David",
    "Neumbe Dinah",
    "Namono Rodah Julia",
    "Zam Zam Kadija",
    "Botto Micheal",
    "Wadamba Jordan",
    "Neumbe Gloria",
    "Gidudu Jotham",
    "Nambozo Vasha",
    "Namonye Aramanzani",
    "Namalwa Esther",
    "Nabukwasi Mary",
    "Namono Violet",
    "Wabulo Trevor",
    "Nabukwasi Patricia",
    "Nabukwasi Zainah",
    "Mude Maurice",
    "Kidiya Haruna",
    "Muzize Christopher",
    "Nakhumitsa Judith Angel",
    "Nangulu Stella",
    "Wamaniala Micheal",
    "Nambozo Esther Rose",
    "Wambede Paul",
    "Bwailisa Emma",
    "Namono Caroline Moreen",
    "Nadunga Bushirah",
    "Wabulo Micheal",
    "Nagudi Merisa",
    "Nambozo Trinity",
    "Nagudi Shamirah Nambozo",
    "Nabuduwa Erina",
    "Nambozo Sarah",
    "Wandulu Emma",
    "Mugide Shifa",
    "Namono Prossy",
    "Wadeya Timothy",
    "Precious Irene",
    "Mudebo Tonny",
    "Namataka Precious",
    "Nafuna Immaculate Birungi",
    "Mafabi Steven",
    "Manyele John",
    "Nabute Sharifa",
    "Nambozo Ketty",
    "Musika Brian",
    "Kibogo Luke",
    "Abbas Bollo",
    "Womayi Isaiah",
    "Nambozo Esther",
    "Nabukwasi Jane",
    "Neumbe Catherine",
    "Keeya Edimond Mudebo",
    "Namonye Patrick Peter",
    "Woswaga Derick Ephrime",
    "Namono Charity",
    "Liyoni Mark",
    "Mutwaba Junior",
    "Wanedeya Innocent",
    "Nambafu Joseline",
    "Namono Irene",
    "Wambede Peter Paul",
    "Nambozo Sofianah Sarah",
    "Mpumbu Hani",
    "Nagudi Mariam",
    "Nambozo Jane",
    "Nabondi Eidi Wakilo",
    "Nafuna Sarah Charity",
    "Wambede Peter",
    "Wabede Jackson",
    "Webule John",
    "Neumbe Gloria",
    "Wandera Hamidu",
    "Nambozo Shadiah",
    "Magombe Levi Peter",
    "Madoyi Calista",
    "Magomu Wilson",
    "Namono Rebecca",
    "Kasirye Sowali",
    "Nangulu Shami",
    "Wodada Brian",
    "Namalike Gift",
    "Nabukwasi Peace",
    "Wamaniala Isaac",
    "Gudoyi Ivan",
    "Wadulu Eliabu",
    "Magomu Stephen",
    "Nabukwasi Betty",
    "Nabude Costince",
    "Nabukwasi Mary Sharon",
    "Nafuna Fatuma",
    "Nandudu Reginah",
    "Neumbe Favour",
    "Namono Suzan",
    "Nafuna Joan",
    "Wekoye Bob",
    "Mutogole Metrinda",
    "Wadamba John Johovah",
    "Magombe Steven Baziliyo",
    "Nagudi Azida Angela",
    "Nagwere Earn",
    "Kamugisha Mark Wadamba",
    "Mutwalibu Nakaye",
    "Mafabi Isa",
    "Namono Joy",
    "Moodi Francis",
    "Wadamba Dan",
    "Nabude Jesca",
    "Masaba Joram",
    "Kupanga Isaac",
    "Nandudu Daphine",
    "Namono Petience",
    "Nabuduwa Angela",
    "Negesa Maria Donath",
    "Mboto Lamech",
    "Wafula Joel",
    "Wambede Joseph",
    "Nambafu Martha",
    "Mutwaba Junior",
    "Negesa Gloria",
    "Muduwa Mary",
    "Wokowo Sabina",
    "Wetaka Jude",
    "Makann Kevin",
    "Muduwa Christine",
    "Gidudu Willson",
    "Nambafu Lilian Rodah",
    "Nadunga Rose",
    "Wanadwadi Joseph",
    "Kusasila Peace",
    "Kissa Vicky",
    "Wokowo Raymond",
    "Wanyala Coment Samuel",
    "Nandudu Joy",
    "Nambozo Charity",
    "Nambozo Miracle Sarah",
    "Wambede Tonny",
    "Okiringi Samson",
    "Makwasi Peter Isaiah",
    "Negesa Shina Sumaya",
    "Muwanguzi Trevor",
    "Mafabi Andrew",
    "Nambozo Mary",
    "Muzaki Sharon",
    "Nandudu Justa",
    "Mafabi Emma",
    "Nagudi Beatrice",
    "Masibo Martha",
    "Nafuna Alice",
    "Nabugasha Florence",
    "Wosaza Hussein",
    "Waniale Jessy",
    "Waniale Eyan",
    "Nambuba Phiona",
    "Nandudu Sarah",
    "Mafabi Sam",
    "Mutebi Lawrence",
    "Namulembwa Bakali",
    "Nabulumbi Jesca",
    "Nagudi Jane",
    "Gidongo Morvin",
    "Nabugwere Mary Fridah",
    "Nambozo Lydia",
    "Nasike Sarah",
    "Makwasi Mark",
    "Muduwa Beth",
    "Masaba Kevin",
    "Wambede Nasuru",
    "Nabugwere Moreen",
    "Mafabi Wilson",
    "Nambozo Christine",
    "Magomu Emma",
    "Nabukonde Jenifer",
    "Namataka Sarah",
    "Sabunyo Joshua",
    "Tobola Sarah",
    "Nabaya Anderson",
    "Kwaga Shanita",
    "Wafula Zeverio",
    "Nabusagu Samuel",
    "Mutoto Abbey",
    "Nandudu Gloria",
    "Wamaniala Vicent",
    "Mudabali Isaac",
    "Nadunga Loyce",
    "Mafabi Simon Peter Moses",
    "Nafuna Lamulah",
    "Natiwa Micah",
    "Gonyi Hillary",
    "Namataka Edith",
    "Magombe Dison",
    "Mafabi Peter",
    "Kadooli Elijah",
    "Nabulobi Caroline",
    "Nafuna Gift",
    "Maluti Charles"
  ];

  // Load initial set of children when component mounts
  useEffect(() => {
    // Load first set of children
    const endIndex = currentPage * childrenPerPage;
    setVisibleChildren(children.slice(0, endIndex));
  }, [currentPage, children, childrenPerPage]);

  // Add scroll event listener to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to a specific element
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Scroll to the element with a small offset
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle load more button click
  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate a small delay to show loading state
    setTimeout(() => {
      setCurrentPage(prevPage => prevPage + 1);
      setIsLoading(false);
      // Scroll to the last visible child before loading more
      if (visibleChildren.length > 0) {
        scrollToElement(`child-${visibleChildren.length - 1}`);
      }
    }, 500);
  };

  return (
    <>
      {/* Display counter showing how many children are displayed out of total */}
      <div className="mb-4 text-right font-bold text-blue-800 text-lg">
        Showing {visibleChildren.length} of {children.length} children
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleChildren.map((child, index) => (
          <div
            key={index}
            id={`child-${index}`}
            className="bg-blue-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow transform transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-blue-300"
            style={{ animationDelay: `${(index % 20) * 50}ms` }}
          >
            <div className="p-4 text-center">
              <div className="h-16 flex items-center justify-center">
                <h3 className="text-xl font-bold text-blue-800 px-2 py-1 rounded">{child}</h3>
              </div>
              <Link
                to={`/sponsor-child/${encodeURIComponent(child)}`}
                className="mt-4 inline-block w-full px-4 py-3 bg-sky-500 text-white rounded-md font-bold text-lg hover:bg-sky-600 transition-colors shadow-lg"
                style={{ color: 'white !important' }}
              >
                SPONSOR
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button - only show if there are more children to load */}
      {visibleChildren.length < children.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className={`px-8 py-4 ${isLoading ? 'bg-sky-600' : 'bg-sky-500 hover:bg-sky-600'} text-white rounded-md font-bold text-lg transition-colors shadow-lg`}
            style={{ color: 'white !important' }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </span>
            ) : 'Load More'}
          </button>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-sky-500 text-white p-3 rounded-full shadow-lg hover:bg-sky-600 transition-colors z-50"
          style={{ color: 'white !important', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ChildrenGrid;
