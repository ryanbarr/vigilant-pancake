import { Home, Icon, Layout, Settings } from "react-feather";
import { Link, LinkProps, To } from "react-router-dom";

const NavigationLink = ({ to, children }: LinkProps) => {
  return (
    <Link
      to={to}
      className="text-white px-6 py-6 w-full hover:bg-indigo-700 flex"
    >
      {children}
    </Link>
  );
};

type NavigationItem = {
  to: To;
  label: string;
  icon?: Icon;
};

const navigation: NavigationItem[] = [
  { to: "/", label: "Dashboard", icon: Home },
  { to: "/overlays", label: "Overlays", icon: Layout },
  { to: "/settings", label: "Settings", icon: Settings },
];

const Navigation = () => {
  return (
    <div className="bg-indigo-900 h-full">
      <ul>
        {navigation &&
          navigation.map((item) => (
            <li key={item.label}>
              <NavigationLink to={item.to}>
                <item.icon className="mr-3" />
                <span>{item.label}</span>
              </NavigationLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navigation;
