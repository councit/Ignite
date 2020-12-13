//styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//redux imports
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailActions";

const Game = ({ name, released, image, id }) => {
  //Load Detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt="game backgrounds"></img>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 5px;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
