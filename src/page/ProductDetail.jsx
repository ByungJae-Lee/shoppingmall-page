import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProductDetail = () => {
  // id읽어오는 useParams
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/ByungJae-Lee/shoppingmall-page/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col className='product-tags'>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>
            {product?.choice === true ? 'Conscious choice' : ''}
          </div>

          {/* 사이즈 버튼 */}
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
            >
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Small
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Large
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Xlarge
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* 장바구니 버튼 */}
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
장바구니 담기            </Button>
          
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

