import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Form from './Components/bmi-class/Form';
import Table from './Components/Table';
import UnstyledTable from './Components/TablePagination';
import FormF from './Components/bmi-function/FormF';

function App() {
  const students = [{
    "id": 1,
    "first_name": "Robinet",
    "last_name": "Simkin",
    "email": "rsimkin0@stanford.edu",
    "gender": "Female"
  }, {
    "id": 2,
    "first_name": "Keane",
    "last_name": "Cowlas",
    "email": "kcowlas1@pcworld.com",
    "gender": "Male"
  }, {
    "id": 3,
    "first_name": "Kelila",
    "last_name": "Soanes",
    "email": "ksoanes2@chron.com",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Levon",
    "last_name": "Bickardike",
    "email": "lbickardike3@un.org",
    "gender": "Male"
  }, {
    "id": 5,
    "first_name": "Candra",
    "last_name": "Leng",
    "email": "cleng4@opensource.org",
    "gender": "Female"
  }, {
    "id": 6,
    "first_name": "Shirleen",
    "last_name": "Cottham",
    "email": "scottham5@google.ru",
    "gender": "Female"
  }, {
    "id": 7,
    "first_name": "Aleta",
    "last_name": "Cometto",
    "email": "acometto6@gravatar.com",
    "gender": "Female"
  }, {
    "id": 8,
    "first_name": "Jimmie",
    "last_name": "Braunter",
    "email": "jbraunter7@ucoz.com",
    "gender": "Male"
  }, {
    "id": 9,
    "first_name": "Blithe",
    "last_name": "Arrundale",
    "email": "barrundale8@vimeo.com",
    "gender": "Female"
  }, {
    "id": 10,
    "first_name": "Jervis",
    "last_name": "Hambly",
    "email": "jhambly9@buzzfeed.com",
    "gender": "Agender"
  }];

  return (
    <>
      <Header name="Ahmed" age="22"/>
      {/* <Table data={students}/> */}
      {/* <Form /> */}
      <FormF />
      {/* <UnstyledTable /> */}
      <Footer year='2022'/> 
    </>
  );
}

export default App;
