import styled from "styled";
/*import "./Button.css"; */

/*
export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="Button">
      {children}
    </button>
  );
}*/

const Button = styled.button`
  color: aliceblue;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font: inherit;
  width: 100%;
  background-color: ${({ buttonType }) =>
    buttonType === "New game" ? "green" : "red"};
`;

export default Button;
