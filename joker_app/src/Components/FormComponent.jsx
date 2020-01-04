import React, { Component } from "react";

function FormComponent(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="first"
          value={props.first}
          placeholder="First Name"
          onChange={props.onHandle}
        />
        <br />
        <input
          type="text"
          name="last"
          value={props.last}
          placeholder="Last name"
          onChange={props.onHandle}
        />
        <br />
        <input
          type="text"
          name="age"
          value={props.age}
          placeholder="Age"
          onChange={props.onHandle}
        />

        {/**Useful form elements
         * <textarea /> element
         * <input type = "checkbox" />
         * <input type = "radio" />
         * <select > and <option> elements
         */}
        <br />
        <label>
          <input
            type="checkbox"
            checked={props.isFriendly}
            onChange={props.onHandle}
            name="isFriendly"
          />
          Is Friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.onHandle}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.onHandle}
          />
          Female
        </label>
        <br />
        {/**formik - react library for forms */}
        <label>
          <b>Favorite Colour: </b>
        </label>
        <select
          value={props.favColour}
          onChange={props.onHandle}
          name="favColour"
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.onHandle}
            checked={props.isVegan}
          />
          Vegan?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.onHandle}
            checked={props.isKosher}
          />
          Kosher?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.onHandle}
            checked={props.isLactoseFree}
          />
          Kosher?
        </label>
        <br />
        <button>Submit</button>
        <hr />
        <h3>Entered Information</h3>
        {props.showDetails && (
          <div>
            <p>
              Your Name: <b>{props.first + " " + props.last}</b>
            </p>
            <p>
              Your Age: <b>{props.age}</b>
            </p>
            <p>
              Your Favorite Colour: <b>{props.favColour}</b>
            </p>
            <p>
              Your dietary restrictions: Vegan :
              <b>{props.isVegan ? "Yes" : "No"}</b> <br />
              Kosher :<b> {props.isKosher ? "Yes" : "No"}</b>
              <br />
              Lactose Free : <b>{props.isLactoseFree ? "Yes" : "No"}</b>
              <br />
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default FormComponent;
