import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export function useProfile() {
  const context = useContext(ProfileContext);

  return context;
}
