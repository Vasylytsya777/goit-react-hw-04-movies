import styled from "styled-components";

const Wrapper = styled.div`
  .homepage {
    padding: 20px;
  }
  .homepage_title {
    font-weight: 700;
    font-size: 30px;
    line-height: 2;
    color: black;
  }
  .trending__list {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 10px;
  }
  .trending__list-item:not(:last-child) {
    margin-bottom: 1px;
  }
  .trending__list-link {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.63;
    color: black;
    text-decoration: none;
  }
  .trending__list-link:hover {
    color: green;
  }
`;

export default Wrapper;
