import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes as BrowserRoutes, Route, } from "react-router-dom";
import Home from './screen/home'
function Router() {
    return (
        <BrowserRouter>
            <BrowserRoutes>
        <Route path="/"  element={<Home />} />
            </BrowserRoutes>
      </BrowserRouter>

    )
}

export default Router
