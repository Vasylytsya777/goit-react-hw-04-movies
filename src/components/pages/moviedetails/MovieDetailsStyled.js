import styled from "styled-components";

const Wrapper = styled.div`
  .details {
    padding: 20px;
  }
  .details-btn {
    border: 2px solid black;
    background-color: white;
    color: black;
    font-size: 20px;
    border-radius: 4px;
    height: 50px;
    cursor: pointer;

    margin-left: 20px;
    padding: 10px 30px;
    margin-bottom: 20px;
  }
  .details-btn:hover {
    border: 2px solid green;
    background-color: white;
    color: green;
  }
  .details__info {
    display: flex;
    margin-bottom: 40px;
  }
  .details__info-description {
    margin-left: 20px;
  }

  .details__info-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.63;
    color: black;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .details__info-list {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.63;
    color: #696969;
  }
  .details__info-genre {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .details__info-genre-item {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.63;
    color: #696969;
  }
  .details__info-genre-item:not(:last-child) {
    margin-right: 15px;
  }

  .inform__list {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .inform__list-item {
    font-weight: 700;
    font-size: 15px;
    line-height: 1.63;
    color: black;
  }
  .inform__list-item:not(:last-child) {
    margin-right: 15px;
  }
  .inform__list-item-link {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.63;
    color: #696969;
    text-decoration: none;
    text-transform: uppercase;
  }
  .inform__list-item-link:hover {
    color: green;
  }
  .active-info-link {
    color: green;
  }
`;

export default Wrapper;
