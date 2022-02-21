import { Home, Icon, Layout, Settings } from "react-feather";
import {
  Link,
  LinkProps,
  To,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import classNames from "classnames";

const NavigationLink = ({ to, children }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={classNames("text-white px-6 py-6 hover:bg-gray-700 flex", {
        "bg-indigo-700": isActive,
      })}
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
    <div className="bg-gray-800 h-full">
      <ul>
        {navigation &&
          navigation.map((item) => (
            <li key={item.label}>
              <NavigationLink to={item.to}>
                <item.icon />
                <span className="sr-only" aria-label={item.label}>
                  {item.label}
                </span>
              </NavigationLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navigation;
