// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/accueil',
          permanent: true,
        },
      ];
    },
  };
  