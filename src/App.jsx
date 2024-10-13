import { RouterProvider } from 'react-router-dom';
import routers from './Routers';
import './App.css';


function App() {
  return (
    <>
    
      <RouterProvider router={routers} />
     
    </>
  );
}

export default App;
