import logo from './logo.svg';
import './App.css';
import ConditionallyReturningJsx from './components/ConditionallyReturningJsx';
import ConditionalOperator from './components/ConditionalOperator';
import PackingList from './components/PackingList';
function App() {
  return (
    <div>
      <ConditionallyReturningJsx></ConditionallyReturningJsx>
      <ConditionalOperator></ConditionalOperator>
      <PackingList></PackingList>
    </div>
  );
}

export default App;
