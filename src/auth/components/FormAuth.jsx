import React from "react";

export const FormAuth = ({ handleInput, inputs, handleKeyDown }) => {
  return (
    <form className="auth__body__form">
      <label for="auth-code">Enter the authentication codes:</label>
      <div class="auth-code-input">
        <input
          type="text"
          id="auth-code-1"
          name="auth-code-1"
          maxlength="1"
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
          maxlength="1"
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
          maxlength="1"
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
          maxlength="1"
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
          maxlength="1"
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
          maxlength="1"
          pattern="[0-9]"
          ref={(el) => (inputs.current[5] = el)}
          onInput={(event) => handleInput(event, 5)}
          onKeyDown={(event) => handleKeyDown(event, 5)}
          required
        />
      </div>
    </form>
  );
};
