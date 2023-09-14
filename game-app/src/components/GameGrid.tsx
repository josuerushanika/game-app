import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";


const GameGrid = () => {
const {games, error} = useGames(); 

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid column={3} spacing={10}>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
