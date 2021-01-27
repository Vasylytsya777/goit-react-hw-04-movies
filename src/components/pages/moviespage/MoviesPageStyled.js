import styled from "styled-components";

const Wrapper = styled.div`
  .movies {
    padding: 20px;
  }
  .movies__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.63;
    color: green;
  }
  .movies__form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    overflow: hidden;
  }
  .movies__form-input {
    display: inline-block;
    width: 100%;
    height: 50px;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 4px;
    outline: none;
    padding-left: 15px;
  }
  .movies__form-input::placeholder {
    font-size: 20px;
  }
  .movies__form-btn {
    background-color: white;
    color: black;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 4px;
    height: 50px;
    cursor: pointer;
    outline: none;
    margin-left: 20px;
    padding: 10px 25px;
  }
  .movies__form-btn:hover {
    border: 2px solid green;
    background-color: white;
    color: green;
  }

  .movies__form-btn-label {
    font-size: 18px;
  }
  .movies__search-list {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 40px;
  }
  .movies__search-list-item:not(:last-child) {
    margin-bottom: 1px;
  }
  .movies__search-list-link {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.63;
    color: black;
    text-decoration: none;
  }
  .movies__search-list-link:hover {
    color: green;
  }
`;

export default Wrapper;
