/* eslint-disable prettier/prettier */
export const getParseSearch = ({responseList, favouriteFilms}) => {
  let newFilmsToShowList = [];

  if(responseList.lenght <= 0) return newFilmsToShowList

  let responseFilterByElementsList = responseList.map((responseObj) => responseObj.show)

  responseFilterByElementsList.forEach(filmObj => {
      let indexInFavourtieList = favouriteFilms.findIndex((favouriteObj) => favouriteObj.id === filmObj.id );

      let newFilmObj ={
        id: filmObj.id,
        title: filmObj.name,
        description: filmObj.summary,
        imgUrl: filmObj.image?.original ? filmObj.image?.original : filmObj.image?.medium,
        selected: indexInFavourtieList > -1 ? true : false,
      }

      newFilmsToShowList.push(newFilmObj);
  });
  
  return newFilmsToShowList
};