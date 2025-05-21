// This script handles direct navigation to routes
(function() {
  // Only run this script if we're not using hash routing already
  if (!window.location.hash && window.location.pathname !== '/') {
    var path = window.location.pathname;
    var cleanPath = path.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
    
    if (cleanPath) {
      // Redirect to the hash route
      window.location.replace(window.location.origin + '/#/' + cleanPath);
    }
  }
})();
