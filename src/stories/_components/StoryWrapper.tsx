interface StoryWrapperProps {
  children: React.ReactNode;
  message: string;
}

const StoryWrapper = ({ children, message }: StoryWrapperProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <h2>{message}</h2>
      <div style={{ border: '1px solid black', padding: '32px', borderRadius: '12px' }}>{children}</div>
    </div>
  );
};

export default StoryWrapper;
