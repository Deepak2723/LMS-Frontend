import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/Aboutus';
import NotFound from './Pages/NotFound';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import { CourseList } from './Pages/Course/CourseList';
import Contact from './Pages/ContactUs';
import Denied from './Pages/Denied';
import CourseDescription from './Pages/CourseDescription';

function App() {
  return (
    <>
    <Routes>

     <Route path="/" element= {<HomePage />}></Route>
     <Route path="/about" element= {<AboutUs />}></Route>
     <Route path="/*" element= {<NotFound />}></Route>
     <Route path="/signup" element= {<SignUp />}></Route>
     <Route path="/login" element= {<Login />}></Route>
     <Route path="/courses" element= {<CourseList />}></Route>
     <Route path="/contact" element= {<Contact />}></Route>
     <Route path="/denied" element= {<Denied />}></Route>
     <Route path="/course/description" element= {<CourseDescription />}></Route>
     <Route element= {<RequireAuth allowedRoles={["ADMIN"]} />}></Route>

     </Routes>
    </>
  )
}

export default App
