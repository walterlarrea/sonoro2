'use client'
import { getCurrentUser } from "@/services/spotifyService";
import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext()

export function SessionProvider({ children }) {
  const [session, setSession] = useState(null)

  const checkSession = async () => {
    try {
      const response = await getCurrentUser()

      if (response?.data?.email) {
        setSession(response.data)
      } else {
        setSession(null)
      }
    } catch (error) {
      setSession(null)
    }
  };

  useEffect(() => {
    checkSession()
  }, [])

  return (
    <Context.Provider value={{ session, checkSession }}>{children}</Context.Provider>
  )
}

export function useSessionContext() {
  return useContext(Context)
}