import './styles.css';

export const FormAuth = ({
  handleInput,
  inputs,
  handleKeyDown,
  onNumberAuthentication,
}) => {
  const generatedInputs = [];

  for (let i = 0; i < 6; i++) {
    generatedInputs.push(
      <input
        key={i}
        type="text"
        id={`auth-code-${i + 1}`}
        name={`auth-code-${i + 1}`}
        maxLength="1"
        pattern="[0-9]"
        ref={(el) => (inputs.current[i] = el)}
        onInput={(event) => handleInput(event, i)}
        onKeyDown={(event) => handleKeyDown(event, i)}
      />
    );
  }
  return (
    <form className="auth__body__form" onSubmit={onNumberAuthentication}>
      <label htmlFor="auth-code">Enter the authentication codes:</label>
      <div className="auth-code-input">{generatedInputs}</div>
      <button type="submit" className="auth__form__button">
        Send
      </button>
    </form>
  );
};
