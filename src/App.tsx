import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';
import Welcome from './components/Welcome/Welcome';
import AppProvider from './providers';

function App() {

    return (
        <AppProvider>
            <Welcome />
            <ColorSchemeToggle />
        </AppProvider>
    );
}

export default App;