//npm imports
import axios from "axios";
//redux imports

//project imports
import { gameDetailsUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
    },
  });
};
