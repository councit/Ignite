//react imports
import { useEffect } from "react";
//Redux imports
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
//styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  //Fetching data from loadgames action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get data from games state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <GameDetail />
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
            id={game.id}
          ></Game>
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
            id={game.id}
          ></Game>
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
            id={game.id}
          ></Game>
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
