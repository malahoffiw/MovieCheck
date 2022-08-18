import React, { useState } from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header/Header"
import Movies from "./pages/Movies"
import Favorites from "./pages/Favorites";
import MoviePage from "./pages/MoviePage";
import Main from "./pages/Main";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
        }
    }
})

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
                <Switch>
                    <Route exact path="/">
                        <Main setIsOpen={setIsOpen}/>
                    </Route>
                    <Route exact path="/movies">
                        <Movies setIsOpen={setIsOpen}/>
                    </Route>
                    <Route exact path="/favorites">
                        <Favorites setIsOpen={setIsOpen}/>
                    </Route>
                    <Route path="/movies/:movieId">
                        <MoviePage setIsOpen={setIsOpen}/>
                    </Route>
                </Switch>
            </div>
        </QueryClientProvider>
    )
}

export default App