interface A11MessageProps {
  message: string;
  isHidden?: boolean;
  isAbleTab?: boolean;
}
const A11yMessage = ({ isHidden = false, message, isAbleTab = false }: A11MessageProps) => {
  return (
    <p
      className="sr-only"
      aria-live="assertive"
      aria-hidden={isHidden}
      aria-atomic="true"
      //eslint-disable-next-line
      tabIndex={isAbleTab ? 0 : -1}
    >
      {message}
    </p>
  );
};

export default A11yMessage;
