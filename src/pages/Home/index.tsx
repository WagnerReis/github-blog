import { useIssues } from "../../hooks/useIssues";
import { Card } from "./components/Card";
import { Profile } from "./components/Profile";
import { HomeContainer, MainHeader, CardGrid } from "./styles";

export function Home() {
  const { issues } = useIssues();
  console.log(issues);

  return (
    <HomeContainer>
      <Profile />

      <MainHeader>
        <strong>Publicações</strong>
        <span>{issues.totalCount} publicações</span>
      </MainHeader>

      <input type="text" placeholder="Buscar conteúdo" />

      <CardGrid>
        {issues.items.map((issue) => {
          return (
            <Card
              key={issue.id}
              issue={{
                ...issue,
                createdAt: new Date(issue.created_at.toString()),
              }}
            />
          );
        })}
      </CardGrid>
    </HomeContainer>
  );
}
