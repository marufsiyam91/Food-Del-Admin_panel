import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <main>
        <Navbar/>
        <hr/>
        <div>
          <Sidebar/>
        </div>
    </main>
  )
}

export default App