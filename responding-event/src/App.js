import logo from './logo.svg';
import './App.css';
import ReadingProps from './ReadingProps';
import EventPropagation from './EventPropagation';
import StoppingPropagation from './StoppingPropagation';
function App() {
  return (
    <div>
      <ReadingProps></ReadingProps>
      <EventPropagation></EventPropagation>
      <StoppingPropagation></StoppingPropagation>
    </div>
  );
}

export default App;
