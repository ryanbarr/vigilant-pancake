import { ReactNode } from "react";
import { Link, LinkProps, To } from "react-router-dom";

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

type NavigationItem = {
  to: To;
  label: string;
};

const navigation: NavigationItem[] = [
  { to: "/", label: "Dashboard" },
  { to: "/overlays", label: "Overlays" },
  { to: "/settings", label: "Settings" },
];

const Navigation = () => {
  return (
    <div className="bg-indigo-900 h-full">
      <ul>
        {navigation &&
          navigation.map((item) => (
            <li key={item.label}>
              <NavigationLink to={item.to}>{item.label}</NavigationLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navigation;
