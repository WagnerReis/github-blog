import { FaCalendarDay, FaComment, FaGithub } from "react-icons/fa";
import { HeaderContainer, Info, NavBar, ContentContainer } from "./styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MarkdownRenderer } from "../../components/MarkdownRenderer";
import { markdownFormatter } from "../../utils/markdownFormatter";
import { useNavigate, useParams } from "react-router-dom";
import { useIssues } from "../../hooks/useIssues";
import { useEffect, useState } from "react";
import { dateFormatter } from "../../utils/dateFormatter";

interface IssueContent {
  title: string;
  body: string;
  owner: string;
  url: string;
  comments: number;
  createdAt: Date;
}

export function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchExpecificIssue } = useIssues();

  const [issue, setIssue] = useState<IssueContent | null>(null);

  useEffect(() => {
    async function loadIssue() {
      const fetchedIssue = await fetchExpecificIssue(id as string);
      setIssue(fetchedIssue);
    }
    loadIssue();
  }, [fetchExpecificIssue, id]);

  return (
    <>
      {issue ? (
        <>
          <HeaderContainer>
            <NavBar>
              <button onClick={() => navigate(-1)}>
                <MdOutlineKeyboardArrowLeft size={20} />
                <p>VOLTAR</p>
              </button>
              <a href={issue.url} target="_blank">
                <p>VER NO GITHUB</p>
                <FaArrowUpRightFromSquare size={12} />
              </a>
            </NavBar>
            <h1>{issue.title}</h1>
            <Info>
              <div>
                <FaGithub size={18} />
                <p>{issue.owner}</p>
              </div>
              <div>
                <FaCalendarDay size={18} />
                <p>{dateFormatter(String(issue.createdAt))}</p>
              </div>
              <div>
                <FaComment size={18} />
                <p>
                  {issue.comments}{" "}
                  {issue.comments != 1 ? "comentários" : "comentário"}
                </p>
              </div>
            </Info>
          </HeaderContainer>
          <ContentContainer>
            <MarkdownRenderer content={markdownFormatter(issue.body)} />
          </ContentContainer>
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
}
