
import './App.css'
import Footer from "./footer/footer";
import Navbar from'./componets/navbar/navbar'
import Banner from './componets/banner/banner'
import Blogs from './componets/blogs/blogs' 
import { ToastContainer } from 'react-toastify';
import Another from './another/another';


function App() {






  return (
    <>
  <div>
  <Navbar></Navbar>
  <Banner></Banner>
  
  <Blogs></Blogs>
<Footer></Footer>
<ToastContainer />
</div>
    </>
  )
}

export default App


