import React from "react";
import Card from "./Card";

function Home() {
  const info = [
    {
      title: "How many team members can I invite?",
      body: "You can invite up to 6 team members at a time.",
    },
    {
      title: "What is the maximum file upload size?",
      body: "No more than 2GB. All files in your account must fit in your alloted storage space",
    },
    {
      title: "How do I reset my password?",
      body: "visit www.wesbite.com/reset to reset your password.",
    },
    {
      title: "Can I cancel my subscription?",
      body: "You can cancel your subscription at anytime from the dashboard.",
    },
    {
      title: "Do you provide additional support?",
      body: "Yes, you can contact us at support@website.com.",
    },
  ];

  const [state, setState] = React.useState([false, false, false, false, false]);

  function updateState(event) {
    const id1 = event.target.id;
    console.log(id1);
    // setState([false, false, false, false, false]);
    setState((prevState) =>
      prevState.map((state, idx) => (idx === id1 - 1 ? !state : false))
    );
  }

  return (
    <main>
      <div className="main">
        <section>
          <img src="images\illustration-woman-online-desktop.svg" alt="comp" />
          <img
            className="box-img"
            src="images\illustration-box-desktop.svg"
            alt="box"
          />
        </section>
        <h1>FAQ</h1>
        <div className="text-div">
          <div className="acc-div">
            {info.map((item, index) => {
              return (
                <Card
                  info={item}
                  state={state[index]}
                  id={index + 1}
                  updateState={updateState}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
