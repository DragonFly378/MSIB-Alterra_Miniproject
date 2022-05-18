import React from "react";
import Button from "../../components/button/Button";
import "./Form.scss";

const Form = ({ inputs, submit, changeHandler, btnTitle, type }) => {
  return (
    <>
      <form onSubmit={submit}>
        {inputs.map((input, inputIdx) => (
          <div key={inputIdx} className="konten-form">
            <label>{input.label}</label>
            <br />
            <input
              required
              onChange={changeHandler}
              type={input.type}
              placeholder={input.placeholder}
              value={input.value}
              name={input.name}
              autoComplete="on"
            />
          </div>
        ))}

        {inputs.length > 2 ? (
          inputs[2].value === "" ? (
            <></>
          ) : inputs[2].value !== inputs[3].value ? (
            <>
              <p className="text-danger">**password tidak sama</p>
            </>
          ) : (
            <>
              <p>**password sama </p>
            </>
          )
        ) : (
          <></>
        )}

        <Button
          className="btn"
          title={btnTitle}
          color="#fff"
          background="#027878"
          type="submit"
        />
      </form>
    </>
  );
};

export default Form;
