import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { StoreProvider } from './store'
import { Router, RouteComponentProps } from '@reach/router'
import HomePage from './homePage'
import FavPage from './favPage'

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps)=> props.pageComponent

const root = document.getElementById('root') 

ReactDOM.render(
    <StoreProvider>
        <Router>
            <App path='/'>
                <RouterPage pageComponent={<HomePage />} path='/' />
                <RouterPage pageComponent={<FavPage />} path='/faves' />
            </App>
        </Router>
    </StoreProvider>,
    root
)