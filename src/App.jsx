import { Route, Routes } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';

/*
1. 전체상품, 로그인, 상품상세 페이지
1-1. 네비게이션 바 제작
2. 전체상품 페이지 -> 전체상품을 볼 수 있음
3. 로그인 버튼 누르면 -> 로그인 페이지가 나타남
4. 상품디테일을 눌렀으나, 로그인이 안되면, 로그인 페이지가 먼저 나옴
5. 로그인 된 경우, 상품 디테일 페이지를 볼 수 있음
6. 로그아웃 버튼을 클릭하면 -> 로그아웃 됨
7. 로그아웃 되면, 상품 디테일 페이지를 볼 수 없음, 다시 로그인 해야 페이지가 보임
8. 로그인 하면, 로그아웃이 보이고, 로그아웃 하면 로그인이 보인다
9. 상품 검색이 가능해야함
*/

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
