import FunFact from "./pages/FunFact"
import Movie from "./pages/Movie"
import Shorts from "./pages/Shorts"
import Leadership from "./pages/Leadership"
import Home from "./pages/Home"


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