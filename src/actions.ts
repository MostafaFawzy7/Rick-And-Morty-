import { IAction, IEpisode, IState } from './interfaces'

export const fetchDataAction = (dispatch: any) => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    fetch(URL)
        .then(res => res.json())
        .then(data => (
            dispatch({
                type: 'FETCH_DATA',
                payload: data._embedded.episodes
            })
        ))
        .catch(err => console.log(err))
}

export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode | any): IAction => {
    const episodeInFav = state.favourites.includes(episode)
    let dispatchObj = {
        type: 'ADD_FAV',
        payload: episode
    }
    if (episodeInFav) {
        const favWithoutEpisode = state.favourites.filter(
            (fav: IEpisode) => fav.id !== episode.id
        )
        dispatchObj = {
            type: 'REMOVE_FAV',
            payload: favWithoutEpisode
        }
    }

    return dispatch(dispatchObj)
}
