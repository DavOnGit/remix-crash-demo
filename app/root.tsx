import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { DevErrorBoundary } from "remix-crash";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export const ErrorBoundary: React.FC<{error: Error}> = ({ error }) => {
  if (process.env.NODE_ENV === "development") {
    return <DevErrorBoundary error={error} />;
  }

  return (
    <div>
      <p>Oops something very wrong happened...</p>
    </div>
  );
}