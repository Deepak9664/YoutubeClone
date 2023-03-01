import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './Utils/Store.js';
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
    <div>
      <h1>Namstey Youtube</h1>
      <Head/>
      <Body/>
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