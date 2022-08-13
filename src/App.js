import React, { useState } from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header/Header"
import Movies from "./pages/Movies"
import Favorites from "./pages/Favorites";
import Serials from "./pages/Serials";

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Switch>
                <Route exact path="/">
                    <Movies setIsOpen={setIsOpen}/>
                </Route>
                <Route path="/serials">
                    <Serials setIsOpen={setIsOpen}/>
                </Route>
                <Route path="/favorites">
                    <Favorites setIsOpen={setIsOpen}/>
                </Route>
            </Switch>
        </div>
    )
}

export default App