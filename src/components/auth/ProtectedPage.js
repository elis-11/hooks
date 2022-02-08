import React from "react"
import { Auth } from "./Auth"
import { useNavigate } from "react-router-dom"

const ProtectedPage = ({ x }) => {
  const navigate = useNavigate()
  return (
    <div>
      <p>You are logged in. Welcome to protected page! Value of x is {x}</p>
      <button
        onClick={() => {
          Auth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/protected" } } })
          )
        }}
      >
        Sign out
      </button>
    </div>
  )
}

export default ProtectedPage
