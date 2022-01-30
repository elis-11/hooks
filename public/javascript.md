// // email
// const emailElement = document.querySelector("#email");
// console.log(emailElement);
// // console.log("hello");

// const messageElement = document.querySelector("#message");
// console.log(messageElement);

// // clicked button  -7  https://careerfoundry.com/en/blog/web-development/should-you-learn-javascript/
// const submitButton = document.querySelector("#submit-button");
// submitButton.addEventListener("click", function (e) {
//   e.preventDefault();

//   const emailValue = emailElement.value;
//   const messageValue = messageElement.value;

//   console.log("clicked button");
//   console.log("Email:", emailValue);
//   console.log("Message:", messageValue);
// // });
-----------------
export const App = () => {
//--1
// const name = 'Dave'
// const name1 = 'John'
// --2
const handleNameChange = () => {
  const names = ['Rob', 'John', 'Dave', 'Peter', 'Luis']
  const concret = Math.floor(Math.random() *5)
  return names[concret]
}

  return (
    <div className="App">
      {/* --1 */}
      {/* Hi <p>Elis</p>
       <p>Hello {name1}!</p>
       <p>Hello {name}!</p>
      <p>Hello World!</p> */}
      {/* --2 */}
      Hello {handleNameChange()}!
    </div>
  );
};
-----------------
export const Content = () => {
  //--style
  const contentStyle = { color: "white" };

  //--1
  const handleNameChange = () => {
    const names = ["Rob", "John", "Dave", "Peter", "Luis"];
    const concret = Math.floor(Math.random() * 5);
    return names[concret];
  };
  //--2
  const handleClick = () => {
    console.log("You clicked it");
  };
  //--3
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  //--4
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    //--style
    <main style={contentStyle}>
      {/* --1 --20 */}
      <p onDoubleClick={handleClick}>
          Hello {handleNameChange()}!
      </p>
      {/* --2 --44 */}
      <button onClick={handleClick}>Click it</button>
      {/* --3 --44 */}
      <button onClick={() => handleClick2('Rob')}>Click it</button>
      {/* --4 --48 */}
      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  );
};
             || useState

 import { useState } from "react";

export const Content = () => {
  //--style
  const contentStyle = { color: "white" };

const [name, setName] = useState('')
const [count, setCount] = useState(0)

  //--1
  const handleNameChange = () => {
    const names = ["Rob", "John", "Dave", "Peter", "Luis"];
    const concret = Math.floor(Math.random() * 5);
    setName(names[concret]);
  };
  //--2
  const handleClick = () => {
      setCount(count + 1)
      setCount(count + 1)
    console.log(count);
  };
  //--3
  const handleClick2 = () => {
    console.log(count);
  };

  return (
    //--style
    <main style={contentStyle}>
      {/* --1 --20 */}
      <p onDoubleClick={handleClick}>
          Hello {name}!
      </p>
      {/*  --44 */}
      <button onClick={handleNameChange}>Change Name</button>
      {/* --2 --44 */}
      <button onClick={handleClick}>Click it</button>
      {/* --3 --48 */}
      <button onClick={handleClick2}>Click it</button>
    </main>
  );
};
