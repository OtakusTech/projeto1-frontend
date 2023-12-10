import './App.css';
import RoutesMain from './routes';
import { ToastContainer } from 'react-toastify';

import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/css/argon-design-system-react.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <RoutesMain/>
      <ToastContainer />
    </div>
  );
}

export default App;
