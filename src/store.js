import { reactive } from "vue";

export const store = reactive({
    moviesList: [],
    seriesList: [],
    searchedFilm: '',
    loading: true,
    filterMoviesGenres: '',
    filterSeriesGenres: '',
    filterChoice: '',
    actors: [],
    genres: [],
});