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

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img
          src="https://avatars.githubusercontent.com/u/44514009?v=4"
          alt=""
        />

        <Details>
          <header>
            <h2>Wagner Reis</h2>
            <a href="https://github.com/WagnerReis" target="_blank">
              <p>GITHUB</p>
              <FaArrowUpRightFromSquare size={12} />
            </a>
          </header>

          <Description>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Description>

          <Info>
            <div>
              <FaGithub size={18} />
              <p>WagnerReis</p>
            </div>
            <div>
              <FaBuilding size={18} />
              <p>Freelancer</p>
            </div>
            <div>
              <PiUsersFill size={18} />
              <p>10 seguidores </p>
            </div>
          </Info>
        </Details>
      </ProfileContent>
    </ProfileContainer>
  );
}
