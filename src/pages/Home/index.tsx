import { Profile } from "./components/Profile";
import { HomeContainer, MainHeader, CardGrid, Card } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <MainHeader>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </MainHeader>

      <input type="text" placeholder="Buscar conteúdo" />

      <CardGrid>
        <Card>
          <header>
            <strong>JavaScript data types and data structures</strong>
            <div>
              <span>Há 1 dia</span>
            </div>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Card>

        <Card>
          <header>
            <strong>JavaScript data types and data structures</strong>
            <div>
              <span>Há 1 dia</span>
            </div>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Card>

        <Card>
          <header>
            <strong>JavaScript data types and data structures</strong>
            <div>
              <span>Há 1 dia</span>
            </div>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Card>

        <Card>
          <header>
            <strong>JavaScript data types and data structures</strong>
            <div>
              <span>Há 1 dia</span>
            </div>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Card>

        <Card>
          <header>
            <strong>JavaScript data types and data structures</strong>
            <div>
              <span>Há 1 dia</span>
            </div>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Card>
      </CardGrid>
    </HomeContainer>
  );
}
