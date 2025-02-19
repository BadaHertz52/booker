interface A11MessageProps {
  isHidden: boolean;
  message: string;
}
const A11yMessage = ({ isHidden, message }: A11MessageProps) => {
  return (
    <p className="sr-only" aria-live="assertive" aria-hidden={isHidden} aria-atomic="true">
      {message}
    </p>
  );
};

export default A11yMessage;
