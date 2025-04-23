import { FaBuilding, FaGithub } from "react-icons/fa";

import {
  ProfileContainer,
  ProfileContent,
  Details,
  Description,
  Info,
} from "./styles";
import { PiUsersFill } from "react-icons/pi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useProfile } from "../../../../hooks/useProfile";

export function Profile() {
  const { profileData } = useProfile();

  return (
    <ProfileContainer>
      <ProfileContent>
        <img
          src="https://avatars.githubusercontent.com/u/44514009?v=4"
          alt=""
        />

        <Details>
          <header>
            <h2>{profileData.name}</h2>
            <a href={profileData.url} target="_blank">
              <p>GITHUB</p>
              <FaArrowUpRightFromSquare size={12} />
            </a>
          </header>

          <Description>{profileData.bio}</Description>

          <Info>
            <div>
              <FaGithub size={18} />
              <p>{profileData.login}</p>
            </div>
            {profileData.company && (
              <div>
                <FaBuilding size={18} />
                <p>{profileData.company}</p>
              </div>
            )}
            <div>
              <PiUsersFill size={18} />
              <p>{profileData.followers} seguidores </p>
            </div>
          </Info>
        </Details>
      </ProfileContent>
    </ProfileContainer>
  );
}
