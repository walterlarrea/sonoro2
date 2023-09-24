import SessionErrorAlert from "@/components/alerts/SessionErrorAlert";
import 'regenerator-runtime/runtime'
export default async function PrivateRoute({ children }) {
  return (
    <SessionErrorAlert>
      {children}
    </SessionErrorAlert>
  )
}