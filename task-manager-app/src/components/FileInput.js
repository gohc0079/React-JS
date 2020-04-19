import React from "react";

const FieldFileInput = (props) => {
  let formData = new FormData();
  const onChange = (e) => {
    const {
      input: { onChange },
    } = props;
    onChange(e.target.files[0]);
  };

  const { label } = props; //whatever props you send to the component from redux-form Field
  return (
    <div>
      <label>{label}</label>
      <div>
        <input type="file" accept=".jpg, .png, .jpeg" onChange={onChange} />
      </div>
    </div>
  );
};
export default FieldFileInput;
