import { Component } from 'inferno';
import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GenerateVisitorsCountBadge } from './features/GenerateVisitorsCountBadge/GenerateVisitorsCountBadge';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <GenerateVisitorsCountBadge />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
