import { Link } from "react-router-dom";

function LogoButton() {
  return (
    <Link to="/" className="font-brand text-3xl absolute left-40 text-red-300">
      Yupp!
    </Link>
  );
}

export default LogoButton;
