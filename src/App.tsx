import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Components/AllRoutes';

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
 
  return (

    <div className="App">
      <h1 className='z-50 w-full fixed bg-gray-300 top-0 text-2xl font-bold p-4'>
        {
          currentRoute == "/" ? 'Contact Management App' : currentRoute == "/contact_form" ? "Contacts" : "Charts and Maps"
        }
      </h1>
      <div className='flex w-full'>
        <div className='sticky  top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full '>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;