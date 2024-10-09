import './Layout.css';
import {Outlet} from 'react-router-dom'
const Layout = ()=>{
    return(
        <div className="layoutContainer">
            <div className="layoutContentContainer">
                  <Outlet/>
            </div>
        </div>
    )
}

export default Layout;