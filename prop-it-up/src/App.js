import './App.css';
import Header from './components/PersonCard';

function App() {
  return (
    <div className='App'>
      <Header firstName={ "Jane" } lastName ={ "Doe" } age ={ "45" } hairColor ={ "Black" } />
      <Header firstName={ "John" } lastName ={ "Smith" } age ={ "88" } hairColor ={ "Brown" } />
      <Header firstName={ "Fillmore" } lastName ={ "Millard" } age ={ "50" } hairColor ={ "Brown" } />
      <Header firstName={ "Smith" } lastName ={ "Maria" } age ={ "62" } hairColor ={ "Brown" } />
    </div>
  );
}

export default App;
