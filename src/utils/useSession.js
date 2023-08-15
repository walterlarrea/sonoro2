import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/spotifyService";

// Usar useSession si no se si tengo la sesion inciada (ej: header)
const useSession = () =>
  useQuery({
    queryKey: ["session"],
    queryFn: async () => (await getCurrentUser()).data,
  });

// Usar useLoadedSession si SE que tengo la sesion inciada (ej: mi perfil)
export const useLoadedSession = () => {
  const session = useSession();

  if (!session.data) {
    throw new Error("Sesion no cargada");
  }

  return session;
};

export default useSession;