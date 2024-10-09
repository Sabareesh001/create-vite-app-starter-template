import { useRoutes } from "react-router-dom"
import publicRoutes from "./PublicRoutes";
import privateRoutes from "./PrivateRoutes";
import fallBackRoutes from "./FallBackRoutes";

const Routes = ()=>{
    const routes = useRoutes(
        [
            
        ]
    )
    return routes;
}

export default Routes;
