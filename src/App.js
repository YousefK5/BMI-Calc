import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Form from './Components/Form';

function App() {
  return (
    <>
      <Header name="Ahmed" age="22"/>
      <Form />
      <Footer year='2022'/> 
    </>
  );
}

export default App;
