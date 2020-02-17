import React from "react"
import netlify from "netlify-auth-providers"

export default () => {
  const handleLogin = e => {
    e.preventDefault()
    const authenticator = new netlify.default({})

    authenticator.authenticate(
      { provider: "github", scope: "user" },
      (err, data) => {
        err
          ? console.log("Error Authenticating with GitHub: " + err)
          : console.log(
              "Authenticated with GitHub. Access Token: " + data.token
            )
      }
    )
  }

  return (
    <div>
      <div>Hello world!</div>
      <div onClick={handleLogin}>Login</div>
    </div>
  )
}
