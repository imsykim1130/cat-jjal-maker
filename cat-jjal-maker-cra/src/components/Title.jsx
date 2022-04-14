import styled from "styled-components";

const StyledTitle = styled.h1`
  color: green;
  font-weight: bold;
`;
const Title = (props) => {
  return (
    <div>
      <StyledTitle>{props.children}</StyledTitle>
    </div>
  );
};

export default Title;
