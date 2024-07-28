
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepages from './pages/homepage';
import Contect from './pages/contect';
import Dashboard from './pages/dashboard';
import BlogGrid from './pages/blogGrid';
import BlogDetails from './pages/blogDetails';
import Aboutus from './pages/aboutus';
import Service from './pages/service';
import Product from './pages/product';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Homepages />} /> */}
        <Route path="/" element={<Homepages />}>
          <Route path="" element={<Dashboard />} />
          <Route path="contect" element={<Contect />} />
          <Route path="blog" element={<BlogGrid />} />
          <Route path="blogdetails" element={<BlogDetails />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="service" element={<Service />} />
          <Route path="product" element={<Product />} />
        </Route>
      
       

      </Routes>
    </Router>
  );
}

export default App;
