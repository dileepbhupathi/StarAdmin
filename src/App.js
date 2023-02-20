import './App.css';
import { StarAdminBody } from './components/StarAdminBody/StarAdminBody';
import { StarAdminHeader } from './components/StarAdminHeader/StarAdminHeader';

function App() {
  return (
    <div className='app'>
      <StarAdminHeader/>
      <StarAdminBody/>
    </div>
  );
}

export default App;
