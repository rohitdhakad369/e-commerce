import { Link } from "@mui/material";

const Logo = () => {
  return (
    <div className="items-center justify-center gap-4 hidden min-[1300px]:flex">
      <Link href="/">
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <path
            d="M20 50 L60 20 Q80 50, 60 80 L20 50 Z"
            fill="#333"
            stroke="#333"
            strokeWidth="2"
          />
          <polygon points="40,40 70,50 40,60" fill="#FFFFFF" />
        </svg>
      </Link>
      <h1 className="font-inter font-bold text-2xl">SHOPLANE</h1>
    </div>
  );
};

export default Logo;


