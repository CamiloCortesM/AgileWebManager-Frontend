import { useRef } from "react";
import { FormAuth, HeaderAuth } from "../components";

export const AuthPage = () => {
  const inputs = useRef([]);

  const onNumberAuthentication = (e) => {
    e.preventDefault();
    const code = inputs.current.map((input) => input.value).join("");
    console.log(code);
  };

  const handleInput = (event, index) => {
    const inputValue = event.target.value;
    if (inputValue.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && event.target.value === "" && index > 0) {
      inputs.current[index - 1].focus();
      inputs.current[index - 1].value = "";
    }
  };

  return (
    <div className="container__auth">
      <img
        className="auth__wave"
        src="/public/icons/wave-auth.svg"
        alt="wave"
      />
      <div className="auth">
        <HeaderAuth />
        <div className="auth__body">
          <p className="auth__error">incorrect verification code</p>
          <FormAuth
            handleInput={handleInput}
            handleKeyDown={handleKeyDown}
            inputs={inputs}
            onNumberAuthentication={onNumberAuthentication}
          />
        </div>
      </div>
    </div>
  );
};
