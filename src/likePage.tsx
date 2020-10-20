import React from 'react'
import { Store } from './store'
import { IEpisodeProps } from './interfaces'
import { toggleLikeAction } from './actions'
import Spinner from './spinner'
import { Layout } from './layoutStyle'

const EpisodeList = React.lazy<any>(() => import('./episodesList'))

const LikePage = (): any => {
    const { state, dispatch } = React.useContext(Store)

    const props: IEpisodeProps | any = {
        episodes: state.likes,
        store: { state, dispatch },
        toggleLikeAction,
        likes: state.likes,
        favourites: state.favourites,
    }

    return (
        <React.Fragment>
            <React.Suspense fallback={<Spinner />}>
                <Layout>
                    <EpisodeList {...props} />
                </Layout>
            </React.Suspense>
        </React.Fragment>
    )
}

export default LikePage