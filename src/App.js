import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import AllTools from './Pages/Home/AllTools';
import Home from './Pages/Home/Home';
import ToolDetails from './Pages/Home/ToolDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
// import Purchase from './Pages/Purchase/Purchase';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';
import "react-toastify/dist/ReactToastify.css";
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route
          path="purchase"
          element={
            <RequireAuth>
              {/* <Purchase></Purchase> */}
              <AllTools></AllTools>
            </RequireAuth>
          }
        ></Route>
        <Route path='purchase/:id' element={<ToolDetails></ToolDetails>}></Route>
        <Route 
          path="dashboard"
          element={<Dashboard> </Dashboard>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
