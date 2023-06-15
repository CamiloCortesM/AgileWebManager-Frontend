export const FormAuth = ({
  handleInput,
  inputs,
  handleKeyDown,
  onNumberAuthentication,
}) => {
  return (
    <form className="auth__body__form" onSubmit={onNumberAuthentication}>
      <label htmlFor="auth-code">Enter the authentication codes:</label>
      <div className="auth-code-input">
        <input
          type="text"
          id="auth-code-1"
          name="auth-code-1"
          maxLength="1"
          pattern="[0-9]"
          ref={(el) => (inputs.current[0] = el)}
          onInput={(event) => handleInput(event, 0)}
          onKeyDown={(event) => handleKeyDown(event, 0)}
          required
        />
        <input
          type="text"
          id="auth-code-2"
          name="auth-code-2"
          maxLength="1"
          pattern="[0-9]"
          ref={(el) => (inputs.current[1] = el)}
          onInput={(event) => handleInput(event, 1)}
          onKeyDown={(event) => handleKeyDown(event, 1)}
          required
        />
        <input
          type="text"
          id="auth-code-3"
          name="auth-code-3"
          maxLength="1"
          pattern="[0-9]"
          ref={(el) => (inputs.current[2] = el)}
          onInput={(event) => handleInput(event, 2)}
          onKeyDown={(event) => handleKeyDown(event, 2)}
          required
        />
        <input
          type="text"
          id="auth-code-4"
          name="auth-code-4"
          maxLength="1"
          pattern="[0-9]"
          ref={(el) => (inputs.current[3] = el)}
          onInput={(event) => handleInput(event, 3)}
          onKeyDown={(event) => handleKeyDown(event, 3)}
          required
        />
        <input
          type="text"
          id="auth-code-5"
          name="auth-code-5"
          maxLength="1"
          pattern="[0-9]"
          ref={(el) => (inputs.current[4] = el)}
          onInput={(event) => handleInput(event, 4)}
          onKeyDown={(event) => handleKeyDown(event, 4)}
          required
        />
        <input
          type="text"
          id="auth-code-6"
          name="auth-code-6"
          maxLength="1"
          pattern="[0-9]"
          ref={(el) => (inputs.current[5] = el)}
          onInput={(event) => handleInput(event, 5)}
          onKeyDown={(event) => handleKeyDown(event, 5)}
          required
        />
      </div>
      <button type="submit" className="auth__footer__botton botton">
        Send
      </button>
    </form>
  );
};
