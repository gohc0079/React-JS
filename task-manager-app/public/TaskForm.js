import React, { useRef } from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker, { formatDates, normalizeDates } from "./DatePicker";
import image from "../img/default_image.png";

const Taskform = (props) => {
  let imageFile = null;
  const imageUploaderRef = useRef(null);
  const UploadedImageRef = useRef(null);
  const renderInput = ({ input, meta, type, placeholder, label }) => {
    const className = `eight wide field ${
      meta.error && meta.touched ? "error" : ""
    }`;
    return (
      <div className="ui form">
        <div className={className}>
          {label}
          <textarea {...input} type={type} placeholder={placeholder}></textarea>
          {renderError(meta)}
        </div>
      </div>
    );
  };

  const renderCheckbox = ({ input, type, label }) => {
    return (
      <div className="field">
        <div className="ui toggle checkbox ui-switch">
          <input {...input} type={type}></input>
          <label>{label}</label>
        </div>
      </div>
    );
  };

  const renderImage = ({ label }) => {
    const base64String = convertImageStr();
    let src;
    src = props.imageString
      ? `data: image / jpg; base64,${base64String} `
      : image;

    return (
      <div>
        <label>{label}</label>
        <div>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={onChange}
            ref={imageUploaderRef}
            style={{ display: "none" }}
          />
          <div
            className="imageUploader"
            style={{ height: "150px", width: "150px" }}
            onClick={() => {
              imageUploaderRef.current.click();
            }}
          >
            <img
              ref={UploadedImageRef}
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="task"
              src={src}
            ></img>
          </div>
        </div>
        Click to upload Image
      </div>
    );
  };

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const onSubmit = (formValues) => {
    const formData = new FormData();
    formData.append("description", formValues.description);
    formData.append("due", formValues.due);
    formData.append("completed", formValues.completed);
    console.log(imageFile);
    if (imageFile !== null) {
      formData.append("taskpic", imageFile);
    }

    props.onSubmit(formData);
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const { current } = UploadedImageRef;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    console.log(file);

    imageFile = file;
  };

  const convertImageStr = () => {
    if (props.imageString) {
      let buffer_str = new Uint8Array(props.imageString.data);
      const image_str = buffer_str.reduce((data, byte) => {
        return data + String.fromCharCode(byte);
      }, "");
      let base64String = btoa(image_str);
      return base64String;
    }
    return "";
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field
        label="Description:"
        name="description"
        component={renderInput}
        type="text"
      ></Field>
      <br />
      <Field
        label="Completed"
        name="completed"
        component={renderCheckbox}
        type="checkbox"
      ></Field>
      <br />
      <Field
        label="Task Picture: "
        name="taskpic"
        component={renderImage}
      ></Field>
      <br />
      <Field
        label="Due Date"
        name="due"
        component={DatePicker}
        parse={normalizeDates}
        format={formatDates}
        placeholder="Due Date"
      ></Field>
      <div className="ui-button">
        <button className="ui button primary">Submit</button>
      </div>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  const message = "Please enter a ";
  if (!formValues.description) {
    errors.description = message + "description";
  }
  if (!formValues.due) {
    errors.description = message + "due date";
  }
};

export default reduxForm({ form: "taskForm", validate })(Taskform);
