import { Link, LinkProps } from "react-router-dom";

const NavigationLink = ({ to, children }: LinkProps) => {
  return (
    <Link
      to={to}
      className="text-white px-6 py-6 inline-block w-full hover:bg-indigo-700"
    >
      {children}
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className="bg-indigo-900 h-full">
      <ul>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/test">Test</NavigationLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
