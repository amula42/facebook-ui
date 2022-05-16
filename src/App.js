import './App.css';
import Feed from './component/Feed';
import Login from './Login';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { useStateValue } from './component/StateProvider';

function App() {
  const [{user}] = useStateValue();
  return (
    <div className="app">
      {!user ? ( <Login /> ) : 
      <>
      <Navbar />

      <div className='app_body'>
        <Sidebar />
        <Feed />
      </div>
      </>}
    </div>
  );
}

export default App;
