import * as Auth0 from "@auth0/auth0-react"

export default function Index() {
  const auth0 = Auth0.useAuth0()

  function handleSessionCreate() {
    auth0.loginWithRedirect()
  }

  function handleSessionDestroy() {
    auth0.logout()
  }

  if (auth0.isLoading) {
    return "Loading..."
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {auth0.isAuthenticated ? (
        <button onClick={handleSessionDestroy}>Log out</button>
      ) : (
        <button onClick={handleSessionCreate}>Log in</button>
      )}
    </div>
  )
}
