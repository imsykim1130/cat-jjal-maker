import styled from "styled-components";

const StyledHeartIcon = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;
  text-align: center;
  font-size: 2.2rem;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;

const MainCard = ({ img, onHeartClick, alreadyFavorite }) => {
  const heartIcon = alreadyFavorite ? "đ" : "đ¤";

  return (
    <div className="main-card" style={{ position: "relative", width: "500px" }}>
      <StyledHeartIcon onClick={onHeartClick}>{heartIcon}</StyledHeartIcon>
      <img src={img} alt="ęł ěě´" width="100%" />
    </div>
  );
};

export default MainCard;
