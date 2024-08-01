import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="images/logo.png" alt="logo" className="w-20" />
    </Link>
  );
}
