export const load = async () => {
  // This is a simple server-side function that returns test data
  return {
    serverTime: new Date().toISOString(),
    message: 'Hello from Vercel server!',
    environment: process.env.VERCEL ? 'Vercel' : 'Local'
  };
};

