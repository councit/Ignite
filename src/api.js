//Base URL
const baseUrl = "https://api.rawg.io/api/";

//Getting Current Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  //Formatting month to 2 digits
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting Current Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  //Formatting day to 2 digits
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Formatting Data to year/month/day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
//Concating formatted date segments
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

//Calling Popular Games within a range of lastYear -> currentDate. Then ordering top 10 by rating
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
//Calling upcoming games within a range of next year
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added`;
//Calling new games that have already been released
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released`;
//Concating full API call
export const popularGamesUrl = () => `${baseUrl}${popularGames}`;
export const upcomingGamesUrl = () => `${baseUrl}${upcomingGames}}`;
export const newGamesUrl = () => `${baseUrl}${newGames}}`;
//Details for single game quiery
export const gameDetailsUrl = (gameId) => `${baseUrl}games/${gameId}`;
