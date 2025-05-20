import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AppContext = createContext();

// Provider component that wraps the app
export const AppProvider = ({ children }) => {
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dark mode state (if you want to implement dark mode later)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Prayer request form state
  const [prayerRequests, setPrayerRequests] = useState([]);

  // User authentication state (simplified for now)
  const [user, setUser] = useState(null);

  // Latest events/announcements
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Sunday Service',
      date: '2025-05-18T09:00:00',
      description: 'Join us for worship at 9:00 AM'
    },
    {
      id: 2,
      title: 'Prayer Night',
      date: '2025-05-21T18:00:00',
      description: 'A special evening of prayer and worship'
    },
    {
      id: 3,
      title: 'Youth Conference',
      date: '2025-05-30T10:00:00',
      description: 'Annual youth conference with special guest speakers'
    }
  ]);

  // Toggle mobile menu
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);

    // Add or remove body class for menu overlay
    if (newMenuState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Add a prayer request
  const addPrayerRequest = (request) => {
    setPrayerRequests([...prayerRequests, { id: Date.now(), ...request }]);
  };

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  }, [window.location.pathname]);

  // Apply dark mode to body if enabled
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // The context value that will be provided
  const contextValue = {
    isMenuOpen,
    toggleMenu,
    isDarkMode,
    toggleDarkMode,
    prayerRequests,
    addPrayerRequest,
    user,
    setUser,
    events
  };

  // Provide the context to children components
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the app context
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContext;
