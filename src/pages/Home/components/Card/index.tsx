import { useNavigate } from "react-router-dom";
import { CardContainer } from "./styles";

export function Card() {
  const navigate = useNavigate();
  function handleShowPost() {
    navigate("/post/1");
  }

  return (
    <CardContainer onClick={handleShowPost}>
      <header>
        <strong>JavaScript data types and data structures</strong>
        <div>
          <span>Há 1 dia</span>
        </div>
      </header>

      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </CardContainer>
  );
}
