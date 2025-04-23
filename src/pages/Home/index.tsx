import { ProfileContextProvider } from "../../contexts/ProfileContext";
import { useIssues } from "../../hooks/useIssues";
import { Card } from "./components/Card";
import { Profile } from "./components/Profile";
import { HomeContainer, MainHeader, CardGrid } from "./styles";
import { debounce } from "lodash";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export function Home() {
  const { issues, fetchIssues } = useIssues();
  const [search, setSearch] = useState("");

  const handleSearchChange = useCallback((value: string) => {
    const debouncedSearch = debounce((searchValue: string) => {
      setSearch(searchValue);
    }, 2000);
    debouncedSearch(value);
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(event.target.value);
  };

  useEffect(() => {
    fetchIssues(search);
  }, [fetchIssues, search]);

  console.log("search: ", search);

  return (
    <HomeContainer>
      <ProfileContextProvider>
        <Profile />
      </ProfileContextProvider>

      <MainHeader>
        <strong>Publicações</strong>
        <span>{issues.totalCount} publicações</span>
      </MainHeader>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleInputChange}
      />

      <CardGrid>
        {issues.items.map((issue) => {
          return (
            <Card
              key={issue.id}
              issue={{
                ...issue,
                createdAt: issue.createdAt.toString(),
              }}
            />
          );
        })}
      </CardGrid>
    </HomeContainer>
  );
}
