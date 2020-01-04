import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard"

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard >
      <CommentDetail    //component Detail is passed as a prop. Child component
            author="Sam"
            time="Today @ 5:00PM"
            comments="This is so True!"
            dp={Faker.image.avatar()}
          />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Jonathan"
        time="Today @ 3:00AM"
        comments="Very Informative!"
        dp={Faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Richie"
        time="Today @ 1:00AM"
        comments="Thanks!"
        dp={Faker.image.avatar()}
      />
    </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
