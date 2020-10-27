import React from 'react'
import { Store } from './store'
import { IEpisodeProps } from './interfaces'
import { toggleFavAction } from './actions'
import Spinner from './spinner'

const EpisodeList = React.lazy<any>(() => import('./episodesList'))

const FavPage = (): any => {
    const { state, dispatch } = React.useContext(Store)

    const props: IEpisodeProps | any = {
        episodes: state.favourites,
        store: { state, dispatch },
        toggleFavAction,
        favourites: state.favourites,
        likes: state.likes
    }

    return (
        <React.Fragment>
            <React.Suspense fallback={<Spinner />}>
                <EpisodeList {...props} />
            </React.Suspense>
        </React.Fragment>
    )
}

export default FavPage