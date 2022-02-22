import classNames from "classnames";
import {
  Box,
  Cpu,
  Grid,
  Home,
  Icon,
  Layout,
  LogIn,
  Settings,
} from "react-feather";
import {
  Link,
  LinkProps,
  To,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

const twitchScopes = ["user:read:email"];
const twitchAuthUrl =
  `https://id.twitch.tv/oauth2/authorize` +
  // @ts-ignore
  `?client_id=${window.envVars.TWITCH_CLIENT_ID}` +
  `&redirect_uri=http://localhost/login` +
  `&response_type=token` +
  `&scope=${twitchScopes.join(" ")}`;

// TODO: Fix this any
const openAuthWindow = (event: any) => {
  event.preventDefault();
  window.open(twitchAuthUrl);
};

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
  { to: "/components", label: "Components", icon: Box },
  { to: "/bot", label: "Bot Management", icon: Cpu },
  { to: "/extensions", label: "Extensions", icon: Grid },
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
        <li>
          <a
            href="/"
            onClick={(event) => openAuthWindow(event)}
            className="text-white px-6 py-6 hover:bg-gray-700 flex"
          >
            <LogIn />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
