/* eslint-disable prettier/prettier */
export const getParseSearch = ({responseList}) => {
  let newFilmsToShowList = [];

  if(responseList.lenght <= 0) return newFilmsToShowList

  let responseFilterByElementsList = responseList.map((responseObj) => responseObj.show)

  responseFilterByElementsList.forEach(filmObj => {
      let newFilmObj ={
        title: filmObj.name,
        description: filmObj.summary,
        imgUrl: filmObj.image?.original ? filmObj.image?.original : filmObj.image?.medium,
        selected: false
      }

      newFilmsToShowList.push(newFilmObj);
  });
  
  return newFilmsToShowList
};