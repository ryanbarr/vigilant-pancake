import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" className="text-blue-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/test" className="text-blue-700">
            Test
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
