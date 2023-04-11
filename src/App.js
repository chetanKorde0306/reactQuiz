// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import Switch from 'react-router-dom'
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz'
import Result from './pages/Result/Result.js'
import { useState } from 'react';
import axios from "axios";

function App() {
  const [name,setName] = useState("");
  const [ questions , setQuestions] =useState();
  const[score,setScore] = useState(0);
  const fetchQuestion= async(category="",difficulty="")=>{
        const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
        // console.log(data);
        setQuestions(data.results);
        // console.log(questions)
  }
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques12.png)" }}>
        {/* <Header /> */}
   
        <Routes>
          <Route path='/' exact element={<Home name = {name} setName={setName} fetchQuestion={fetchQuestion
          }/>}> </Route>
          <Route path='/quiz' exact element={<Quiz
          name = {name}
          questions = {questions}
          score = {score}
          setScore = {setScore}
          setQuestions ={setQuestions}
          />}> </Route>
          <Route path="/result" exact element={<Result
          name={name} score={score}
          />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
