import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router';

const ProductAll = () => {
  // 받은 API를 UI에 보여주는 state
  const [productList, setProductList] = useState([]);

  const [query, setQuery] = useSearchParams();

  // db.json API 호출 함수
  const getProducts = async () => {
    // 쿼리값
    let searchQuery = query.get('q') || '';
    console.log('쿼리값은?', searchQuery);
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data', data);
    setProductList(data);
  };
// 쿼리값이 바뀔 때 마다 실행됨
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container className="product-container">
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
