import * as Auth0 from "@auth0/auth0-react"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
})

export const loader = () => ({
  auth0: {
    clientId: process.env.AUTH0_CLIENT_ID,
    domain: process.env.AUTH0_DOMAIN,
  },
})

export default function App() {
  const data = useLoaderData()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Auth0.Auth0Provider
          clientId={data.auth0.clientId}
          domain={data.auth0.domain}
          authorizationParams={{
            redirect_uri: `http://localhost:8080`,
          }}
        >
          <Outlet />
        </Auth0.Auth0Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
