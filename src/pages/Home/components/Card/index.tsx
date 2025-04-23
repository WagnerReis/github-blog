import { useNavigate } from "react-router-dom";
import { CardContainer } from "./styles";
import { dateFormatter } from "../../../../utils/dateFormatter";

interface Issue {
  title: string;
  body: string;
  createdAt: string;
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
          <span>{dateFormatter(issue.createdAt)}</span>
        </div>
      </header>

      <p>{issue.body}</p>
    </CardContainer>
  );
}
