import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import AboutPage from './component/AboutPage';
import Profile from './component/Profile';
import ShoppingList from './component/ShoppingList';
import EventClick from './component/EventClick';
import UpdateTheScreen from './component/UpdateTheScreen';
import ShareData from './component/ShareData';
import ThinkInReact from './component/ThinkInReact';
import WritingMarkup from './component/WritingMarkup';
import CurlyBraces from './component/CurlyBraces';

function App() {
  return (
    <div>
      <Button></Button>
      <AboutPage></AboutPage>
      <Profile></Profile>
      <ShoppingList></ShoppingList>
      <EventClick></EventClick>
      <UpdateTheScreen></UpdateTheScreen>
      <ShareData></ShareData>
      <ThinkInReact></ThinkInReact>
      <WritingMarkup></WritingMarkup>
      <CurlyBraces></CurlyBraces>
    </div>
  );
}

export default App;
