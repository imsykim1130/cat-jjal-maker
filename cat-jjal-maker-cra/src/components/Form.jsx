import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 0;
  border-radius: 0.7rem;
  padding: 0.5rem 1rem;
  background-color: green;
  color: white;
`;

const Form = ({ updateMainCat }) => {
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [value, setValue] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  function handleInputChange(e) {
    const userValue = e.target.value;
    setErrorMsg(""); //  초기화
    if (includesHangul(userValue)) {
      setErrorMsg("한글은 입력할 수 없습니다.");
    }
    setValue(userValue.toUpperCase());
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    setErrorMsg(""); // 초기화
    if (value === "") {
      setErrorMsg("빈 값으로 만들 수 없습니다.");
      return;
    }

    updateMainCat(value);
    setValue("");
  }

  return (
    <form onSubmit={handleFormSubmit} className="input-form">
      <input
        type="text"
        name="name"
        placeholder="영어 대사를 입력해주세요"
        value={value}
        onChange={handleInputChange}
      />
      <StyledButton type="submit">생성</StyledButton>

      <p style={{ color: "red" }}>{errorMsg}</p>
    </form>
  );
};

export default Form;
