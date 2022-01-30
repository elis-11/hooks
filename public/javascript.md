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