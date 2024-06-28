import logo from './logo.svg';
import './App.css';
import State from './components/State';
import UpdateState from './components/UpdateState';
import UpdatingObjects from './components/UpdatingObjects';
import ResettingState from './components/ResettingState';
import AvoidingRecreting from './components/AvoidingRecreting';
function App() {
  return (
    <div>
      <State></State>
      <UpdateState></UpdateState>
      <UpdatingObjects></UpdatingObjects>
      <ResettingState></ResettingState>
      <AvoidingRecreting></AvoidingRecreting>
    </div>
  );
}

export default App;
