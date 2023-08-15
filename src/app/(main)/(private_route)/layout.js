import SessionErrorAlert from "@/components/alerts/SessionErrorAlert";

export default async function PrivateRoute({ children }) {
  return (
    <SessionErrorAlert>
      {children}
    </SessionErrorAlert>
  )
}