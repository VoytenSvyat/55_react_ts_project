import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import GlobalStyles from "./styles/GlobalStyles"

//Lessons imports
// импорт компонента Lesson06 по умолчанию
// при импорте по умолчанию можно использовать другое названия для компонента
// import Task6 from './lessons/Lesson06/Lesson06';
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from "./lessons/Lesson07/Lesson07"
// import Lesson08 from "./lessons/Lesson08/Lesson08"
// import Lesson06 from "./lessons/Lesson06/Lesson06"
// import Lesson09 from "./lessons/Lesson09/Lesson09"
// import Lesson10 from "./lessons/Lesson10/Lesson10"
// import Lesson11 from "./lessons/Lesson11/Lesson11"
// import Lesson12 from "./lessons/Lesson12/Lesson12"
// import Lesson14 from "./lessons/Lesson14/Lesson14"
// import Lesson13 from "./lessons/Lesson13/Lesson13"

//Homeworks imports
// import Homework06 from "./homeworks/Homework06/Homework06"
// import Homework07 from "./homeworks/Homework07/Homework07"
// import Homework08 from "./homeworks/Homework08/Homework08"
// import Homework09 from "./homeworks/Homework09/Homework09"
// import Homework10 from "./homeworks/Homework10/Homework10"
// import Homework11 from "./homeworks/Homework11/Homework11"
// import Homework12 from "./homeworks/Homework12/Homework12"
// import Homework14 from "./homeworks/Homework14/Homework14"
// import Homework15 from "./homeworks/Homework15/Homework15"

//Consultations imports
// import Consultation04 from "./consultations/Consultation04/Consultation04"
// import Consultation05 from "./consultations/Consultation05/Consultation05"


function App() {

  return (
    //BrowserRouter - глобальная обертка для всего приложения, которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - обертка, которая собирает все маршрути приложения  */}
        <Routes>
        {/* Route - компонент библиотеки, в которий маршрут и тот компонент(страницу), 
        которий должен бить визван, если виполнен переход по єтому маршруту */}
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App