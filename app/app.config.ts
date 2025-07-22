export default {
  api: {
    baseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
  },
  features: {
    enableBeta: process.env.FEATURE_ENABLE_BETA === 'true',
  },
};
