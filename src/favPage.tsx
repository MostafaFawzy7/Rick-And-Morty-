import React from 'react'
import { Store } from './store'
import { IEpisodeProps } from './interfaces'
import { toggleFavAction } from './actions'
import Spinner from './spinner'

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
        <React.Fragment>
            <React.Suspense fallback={<Spinner />}>
                <section className="episode-layout">
                    <EpisodeList {...props} />
                </section>
            </React.Suspense>
        </React.Fragment>
    )
}

export default FavPage