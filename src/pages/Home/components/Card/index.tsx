import { useNavigate } from "react-router-dom";
import { CardContainer } from "./styles";

interface Issue {
  title: string;
  body: string;
  createdAt: Date;
}

interface CardProps {
  issue: Issue;
}

export function Card({ issue }: CardProps) {
  const navigate = useNavigate();
  function handleShowPost() {
    navigate("/post/1");
  }

  return (
    <CardContainer onClick={handleShowPost}>
      <header>
        <strong>{issue.title}</strong>
        <div>
          <span>{issue.createdAt.toISOString()}</span>
        </div>
      </header>

      <p>{issue.body}</p>
    </CardContainer>
  );
}
