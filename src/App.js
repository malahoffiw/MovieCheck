import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import Movies from "./pages/Movies"
import Favorites from "./pages/Favorites";
import MoviePage from "./pages/MoviePage";
import Main from "./pages/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="appBody">
            <div className="contentBody">
                <Router>
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
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App