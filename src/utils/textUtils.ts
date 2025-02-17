interface TruncateTextParams {
  text: string;
  maxLength: number;
}
export const truncateText = ({ text, maxLength }: TruncateTextParams) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
