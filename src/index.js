import React from "react"
import ReactDOM from "react-dom/client"
import 'remixicon/fonts/remixicon.css'

import { ContextProvider } from "./Context"
import App from "./App"
import "./styles/index.scss"

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <ContextProvider>
            <App />
        </ContextProvider>
    </QueryClientProvider>
);
