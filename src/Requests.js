const key = "fa50b3e03f4fc1fdae4148c912dc14d8";

const requests = {
  requestNetflix: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTv: `https://api.themoviedb.org/3/tv/popular?api_key=fa50b3e03f4fc1fdae4148c912dc14d8`,
};

export default requests;

// https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213
