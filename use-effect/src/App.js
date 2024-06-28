import logo from './logo.svg';
import './App.css';
import UserEffect from './components/UserEffect';
import WrappingEffects from './components/WrappingEffects';
import UpdatingStateBased from './components/UpdatingStateBased';
import SpecifyingReactive from './components/SpecifyingReactive';
import RemovingUnnecessary from './components/RemovingUnnecessary';
import FetchingData from './components/FetchingData';
import Controlling from './components/Controlling';
function App() {
  return (
    <div>
      <UserEffect></UserEffect>
      <WrappingEffects></WrappingEffects>
      <UpdatingStateBased></UpdatingStateBased>
      <SpecifyingReactive></SpecifyingReactive>
      <RemovingUnnecessary></RemovingUnnecessary>
      <FetchingData></FetchingData>
      <Controlling></Controlling>
    </div>
  );
}

export default App;
