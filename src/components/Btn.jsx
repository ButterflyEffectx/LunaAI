import { Button } from "@mui/material";


const Btn = ({ children, className, onClick, href }) => {
  return (
    <Button
      className={`cursor-pointer overflow-hidden !lowercase !p-0 !m-0 !min-w-0 !min-h-0 !bg-transparent !bg-white ${className}`}
      onClick={onClick}
      href={href}
      target="_blank"
    >
      {children}
    </Button>
  );
};

export default Btn;
