
import './App.css'
import {BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Counter } from './components/pages/Home/components/Counter';
import { DataDisplay } from './components/pages/User';
function App() {
// Define some simple components for our pages
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home Page!</p>
      {/* Programmatically navigate to About page */}
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <button onClick={() => navigate('/about')}>Go to About</button>
      <button onClick={() => navigate('/counter')}>Go to Counter</button>

    </div>
  );
};

const About = () => (
  <div>
    <h2>About</h2>
    <p>This is the About Page.</p>
  </div>
);

const NotFound = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <a href="/about">About</a> |{' '}
        <Link to="/posts">Posts</Link>
      </nav>

      {/* Routes is a replacement for Switch in React Router v6 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path='/posts' element={<DataDisplay url="https://jsonplaceholder.typicode.com/posts"/>} />
        {/* The '*' path acts as a catch-all for any undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
