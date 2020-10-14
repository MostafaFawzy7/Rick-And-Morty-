import React from 'react'
import { Store } from './store'
import { IEpisodeProps } from './interfaces'
import { toggleFavAction } from './actions'

const EpisodeList = React.lazy<any>(() => import('./episodesList'))

const FavPage = (): any => {
    const { state, dispatch } = React.useContext(Store)

    const props: IEpisodeProps = {
        episodes: state.favourites,
        store: { state, dispatch },
        toggleFavAction,
        favourites: state.favourites
    }

    return (
        <React.Suspense fallback={<div>loading ...</div>}>
            <div className="episode-layout">
                <EpisodeList {...props} />
            </div>
        </React.Suspense>
    )
}

export default FavPage