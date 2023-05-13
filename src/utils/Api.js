// Appels API de l'application

export const getRandomMovie = () => {
    return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=2e0a9e72249514e45f19f77ee9930761`).then(res => res.json())
}

export const getAllGenres = () => {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=2e0a9e72249514e45f19f77ee9930761&language=en-FR`).then(res => res.json())
}

export const getGenreMoviesById = (genreId) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2e0a9e72249514e45f19f77ee9930761&with_genres=${genreId}`).then(res => res.json())
}

export const searchMovies = (searchData) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=2e0a9e72249514e45f19f77ee9930761&query=${searchData}`).then(res => res.json())
}

export const getTopRatedMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=2e0a9e72249514e45f19f77ee9930761&language=en-US&page=1`).then(res => res.json())
}

export const getTvShows = () => {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=2e0a9e72249514e45f19f77ee9930761&language=en-US&page=1`).then(res => res.json())
}

export const getTrendMovies = () => {
    return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=2e0a9e72249514e45f19f77ee9930761`).then(res => res.json())
}

export const getFavMovies = (moviesId) => {
  return Promise.all(
    moviesId.map((id) =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2e0a9e72249514e45f19f77ee9930761`
      ).then((response) => response.json())
    )
  );
};

export const getYtSearch = (filmName) => {
    return fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${filmName}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8380072445mshe04ccea12158b5dp153a56jsn59ea5fb2826d',
          'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        } 
    }).then(res => res.json())
}
