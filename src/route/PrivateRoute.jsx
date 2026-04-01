import React from 'react';
import ProductDetail from '../page/ProductDetail';
import { Navigate } from 'react-router';

const PrivateRoute = ({ authenticate }) => {
  return (
    //    {/* App의 로그인 상태에 따라 다르게 보여질 페이지 login O -> 디테일페이지, false -> login페이지 */}
    authenticate === true ? (
      <ProductDetail />
    ) : (
      <Navigate to="/login" />
    )
  );
};

export default PrivateRoute;
