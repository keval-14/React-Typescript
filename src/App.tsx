import './App.css';
import {Box} from './Componants/Context/Box'
import {ThemeContextProvider} from './Componants/Context/ThemeContext'

function App() {
  return (
    <div className="App">

      <ThemeContextProvider>

      <Box/>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
