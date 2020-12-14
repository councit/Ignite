//npm imports
import axios from "axios";
//redux imports

//project imports
import { gameDetailsUrl, gameScreenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsUrl(id));
  const screenshotData = await axios.get(gameScreenshotUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
