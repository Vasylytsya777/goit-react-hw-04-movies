import styled from "styled-components";

const Wrapper = styled.div`
  .cast {
    padding: 20px;
  }

  .cast__list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .cast__list-item:not(:last-child) {
    margin-bottom: 40px;
  }
  .cast__list-item-img {
    font-weight: 500;
    font-size: 15px;
    line-height: 1.63;
    color: #696969;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .cast__list-item-name {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.63;
    color: #696969;
  }
  .cast__list-item-character {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.63;
    color: #696969;
  }
`;

export default Wrapper;
