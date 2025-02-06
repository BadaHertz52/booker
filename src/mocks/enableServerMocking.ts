export const enableServerMocking = async () => {
  // npm run build 후, CI,Storybook 배포 환경에서 모킹 활성화
  if (process.env.NODE_ENV === 'production' && !process.env.ACTIVATE_MOCK_SERVER) return;

  const { server } = await import('./server');
  server.listen({ onUnhandledRequest: 'bypass' });
  console.log('서버 모킹 활성화');
};
