import FunFact from "./FunFact"
import Movie from "./Movie"
import Shorts from "./Shorts"
import Leadership from "./Leadership"
import Home from "./Home"

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/shorts",
        element: <Shorts />
    },
    {
        path: "/movies/:id",
        element: <Movie />
    },
    {
        path: "/funfacts",
        element: <FunFact />
    },
    {
        path: "/leadership",
        element: <Leadership />
    }
]
export default routes;