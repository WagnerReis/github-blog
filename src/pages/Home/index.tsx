import { Card } from "./components/Card";
import { Profile } from "./components/Profile";
import { HomeContainer, MainHeader, CardGrid } from "./styles";

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardGrid>
    </HomeContainer>
  );
}
