import './App.css';
import Feed from './component/Feed';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className='app_body'>
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
