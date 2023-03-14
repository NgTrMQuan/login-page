import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';
import { UserContext } from './context/UserContext';
import { LanguageContext } from './context/LanguageContext';
import { useContext } from 'react';

function App() {
  const { username } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  const dictionary = {
    'vi': ["Xin chào"],
    'en': ["Welcome"],
    'korea': ["안녕하세요"]
  }

  return (
      <div className="App">
        <Header/>
        <div className="main_container">
          {
            username?
            <div className="welcome_text">{`${dictionary[language][0]} ${username}!`}</div>:
            <Form/>
          }
        </div>
        <Footer/>
      </div>
  );
}

export default App;
