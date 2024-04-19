import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";        // Route 사용하기 위한

import Header from './component/layout/Header';                         // import Header 컴포넌트
import Main from './component/Main';                                    // import Main 컴포넌트
import Footer from './component/layout/Footer';                         // import Footer 컴포넌트
import Sitemap from "./component/sitemap/Sitemap";                      // import Sitemap 컴포넌트

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            {/* Route 사용 */}
            <Routes>
                <Route path='/' element={<Main />}></Route>                       {/* Main */}
                <Route path='/sitemap' element={<Sitemap />}></Route>             {/* Sitemap */}
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;