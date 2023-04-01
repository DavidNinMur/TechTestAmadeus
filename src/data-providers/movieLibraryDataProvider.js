import axios from 'axios';

export const getAllMoviesBySearch = async ({ queryStr }) => {

    const optionsObj = {
        method: 'GET',
        url: `https://api.tvmaze.com/search/shows?q=${queryStr}`
    }

    let response = await axios(optionsObj)
    return response.data;
}