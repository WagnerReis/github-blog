import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

interface Profile {
  name: string;
  login: string;
  bio: string;
  avatarUrl: string;
  url: string;
  company: string;
  followers: number;
}

interface ProfileContextType {
  profileData: Profile;
  fetchProfileData: () => Promise<void>;
}

interface ProfileContextProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextType);

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [profileData, setProfileData] = useState<Profile>({
    name: "",
    login: "",
    bio: "",
    avatarUrl: "",
    url: "",
    company: "",
    followers: 0,
  });

  const fetchProfileData = useCallback(async () => {
    try {
      const response = await api.get("/users/WagnerReis");

      setProfileData({ ...response.data, avatarUrl: response.data.avatar_url });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  return (
    <ProfileContext.Provider value={{ profileData, fetchProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
}
