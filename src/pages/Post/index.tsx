import { FaCalendarDay, FaComment, FaGithub } from "react-icons/fa";
import { HeaderContainer, Info, NavBar } from "./styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export function Post() {
  return (
    <HeaderContainer>
      <NavBar>
        <button>
          <MdOutlineKeyboardArrowLeft size={20} />
          <p>VOLTAR</p>
        </button>
        <a href="https://github.com/WagnerReis" target="_blank">
          <p>VER NO GITHUB</p>
          <FaArrowUpRightFromSquare size={12} />
        </a>
      </NavBar>
      <h1>JavaScript data types and data structures</h1>

      <Info>
        <div>
          <FaGithub size={18} />
          <p>WagnerReis</p>
        </div>
        <div>
          <FaCalendarDay size={18} />
          <p>Há 1 dia</p>
        </div>
        <div>
          <FaComment size={18} />
          <p>10 comentários </p>
        </div>
      </Info>
    </HeaderContainer>
  );
}
