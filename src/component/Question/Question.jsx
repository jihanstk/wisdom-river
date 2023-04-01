import React from "react";

const Question = () => {
  return (
    <div>
      <h2 className="text-2xl text-center">Click the button billow </h2>
      <div className="my-16 grid grid-cols-2 gap-5">
        {/* The button to open modal */}
        <label htmlFor="my-modal-1" className="btn">
          Props vs state
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
        <label htmlFor="my-modal-1" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">
              Difference between Props vs state
            </h3>
            <p className="py-4">
              State: state is a way to manage internal data. State is mutable
              and can be changed within the component. State is use to hold data
              that changes over time, such as user input, re-render of the
              component when the state changes. <br /> <br /> Props: Props are
              short for "properties" and are passed down to a component from its
              parent component. props are immutable. Props are used to customize
              a component's behavior. props can be drilled component.
            </p>
          </label>
        </label>

        <label htmlFor="my-modal-2" className="btn">
          How does useState work?
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <label htmlFor="my-modal-2" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">How does useState work?</h3>
            <p className="py-4">
              useState is use for changed data or state on your web page. you
              need to import the useState hook from the react library. you
              declare a state variable using the useState hook. The hook takes
              an initial value as an argument and returns an array with two
              elements: the current state value and a function to update the
              state value. You can use the state variable in your component code
              just like any other variable
            </p>
          </label>
        </label>

        <label htmlFor="my-modal-3" className="btn">
          Purpose of useEffect other than fetching data.
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <label htmlFor="my-modal-3" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">
              Purpose of useEffect other than fetching data.
            </h3>
            <p className="py-4">
              Manipulating the DOM : You can use useEffect to manipulate the DOM
              directly, such as adding or removing event listeners, changing
              styles or class names, or updating the title of the document. This
              is useful when you need to make changes to the page based on user
              interaction or other external events. <br /> <br />
              Timer or interval functions: useEffect can be used to set up timer
              or interval functions that run repeatedly over a specified period
              of time. This is useful for creating animations, updating the UI
              at regular intervals, or running other time-based operations. you
              can use useState for Manipulating dom.
            </p>
          </label>
        </label>

        <label htmlFor="my-modal-4" className="btn">
          How Does React work?
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">How Does React work?</h3>
            <p className="py-4">
              React is a popular JavaScript library for building user interfaces
              (UIs). It uses a component-based architecture that makes it easy
              to create reusable UI elements and manage the state of your
              application. <br /> <br />
              1.You define your components: Components are the building blocks
              of a React application. They are small, reusable UI elements that
              can be combined to create more complex UIs. You define your
              components using JavaScript classes or functions that return JSX
              (a syntax extension to JavaScript that allows you to write
              HTML-like code in your JavaScript). <br />
              <br />
              2.You render your components: Once you have defined your
              components, you can render them to the DOM (Document Object Model)
              using the ReactDOM.render() method. This method takes your
              top-level component (usually called App) and a DOM element where
              you want to render your UI. <br /> <br />
              3.You manage your state: React uses a unidirectional data flow,
              where the state of your application flows down from the top-level
              component to its child components. You can manage your state using
              the useState and useReducer hooks, which allow you to define and
              update state in a functional component.
            </p>
          </label>
        </label>
      </div>
    </div>
  );
};

export default Question;
