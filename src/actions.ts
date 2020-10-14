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

