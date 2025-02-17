type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

import "./button.css";

function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
export default Button;
