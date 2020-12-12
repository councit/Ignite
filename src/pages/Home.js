import { useEffect } from "react";
//Redux imports
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesActions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
