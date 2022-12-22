const API_KEY = process.env.API_KEY;

export default {
    fetchTreanding: {
        title: "Treanding",
        url: `/trending/movie/week?api_key=${API_KEY}`,
    },
    fetchTopRated: {
        title: "TopRated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchComedyMoies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTv: {
        title: "TV",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
};
