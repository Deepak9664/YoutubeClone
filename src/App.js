import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './Utils/Store.js';
import { Provider } from 'react-redux'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from './Components/MainContainer';
import Watchpage from './Components/Watchpage';

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
    path:"/",
    element:<MainContainer/>
},
{
  path:"/watch",
  element:<Watchpage/>
},
]
}])


function App() {
  return (
    <Provider store={store}>
    <div>
     
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
{/** 
*Head
Body
SideBar
MainContainer
ButtonList
VideoConTAINER
VideoCard
*/
  
}