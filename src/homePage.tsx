import React from 'react'
import { Store } from './store'
import { IEpisodeProps } from './interfaces'
import { fetchDataAction, toggleFavAction } from './actions'

const EpisodeList = React.lazy<any>(() => import('./episodesList'))

const HomePage = () => {
    const { state, dispatch } = React.useContext(Store)

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    })

    const props: IEpisodeProps = {
        episodes: state.episodes,
        store: { state, dispatch },
        toggleFavAction,
        favourites: state.favourites
    }

    return (
        <React.Fragment>
            <React.Suspense fallback={<div>loading ...</div>}>
                <section className="episode-layout">
                    <EpisodeList {...props} />
                </section>
            </React.Suspense>
        </React.Fragment>
    )

}

export default HomePage