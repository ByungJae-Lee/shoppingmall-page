import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {
  // 받은 API를 UI에 보여주는 state
  const [productList, setProductList] = useState([]);

  // db.json API 호출 함수
  const getProducts = async () => {
    let url = `http://localhost:4000/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data', data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
