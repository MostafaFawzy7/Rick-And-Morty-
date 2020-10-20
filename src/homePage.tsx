import React from 'react'
import { Store } from './store'
import { IEpisodeProps } from './interfaces'
import { fetchDataAction, toggleFavAction, toggleLikeAction } from './actions'
import Spinner from './spinner'
import { Layout } from './layoutStyle'

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
        favourites: state.favourites,
        toggleLikeAction,
        likes: state.likes
    }

    return (
        <React.Fragment>
            <React.Suspense fallback={<Spinner />}>
                <Layout>
                    <section className="episode-layout">
                        <EpisodeList {...props} />
                    </section>
                </Layout>
            </React.Suspense>
        </React.Fragment>
    )

}

export default HomePage