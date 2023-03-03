import { useRef } from "react";
import { FormAuth } from "../components/FormAuth";
import { HeaderAuth } from "../components/HeaderAuth";

export const AuthPage = () => {
  const inputs = useRef([]);

  function handleInput(event, index) {
    const inputValue = event.target.value;
    if (inputValue.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  }

  function handleKeyDown(event, index) {
    if (event.key === "Backspace" && event.target.value === "" && index > 0) {
      inputs.current[index - 1].focus();
      inputs.current[index - 1].value = "";
    }
  }

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
          <FormAuth
            handleInput={handleInput}
            handleKeyDown={handleInput}
            inputs={inputs}
          />
        </div>
        <div className="Auth__footer">
          <button type="submit" className="auth__footer__botton botton">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
