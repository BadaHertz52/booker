export const enableServerMocking = async () => {
  if (process.env.NODE_ENV === 'production' && !process.env.CI) return;

  const { server } = await import('./server');
  server.listen({ onUnhandledRequest: 'bypass' });
  console.log('서버 모킹 활성화');
};
