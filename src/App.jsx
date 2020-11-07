import './App.css';
import AppBar from './components/app-bar';
import Screen from './components/screen';
import Keyboard from './components/keyboard';

export default function App() {
    return (
        <div id="app">
            <AppBar />
            <div id="main">
                <div>
                    <Screen/>
                    <Keyboard />
                </div>
            </div>
        </div>
    );
}
