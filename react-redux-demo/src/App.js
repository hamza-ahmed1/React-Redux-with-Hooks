import logo from './logo.svg';
import './App.css';
import { store } from "./components/redux/store";
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeComponent/CakeContainer';
import HookCakeContainer from './components/CakeComponent/HookCakeContainer';
import IceCreameConainer from './components/iceCreamComponent/IceCreameConainer';
import NewCakeContainer from './components/CakeWithPayload/NewCakeContainer';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <CakeContainer/>
      <HookCakeContainer/>
      <IceCreameConainer/>
      <NewCakeContainer/>
    </Provider>

    </div>
  );
}

export default App;
