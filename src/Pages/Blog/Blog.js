import React from 'react';

const Blog = () => {
    return (
      <div className="w-5/6 lg:w-3/4 mx-auto">
        <div className="pt-24 px-12">
          <div className="pb-6">
            <h2 className="text-3xl sm:text-2xl pb-12 pl-2 lg:pl-[100px]">
              1. How will you improve the performance of a React Application?
            </h2>
            <ul className="pl-2 lg:pl-[100px]">
              <li> 1.Keeping component state local where necessary</li>
              <li>
                2. Memoizing React components to prevent unnecessary re-renders
              </li>
              <li> 3. Code-splitting in React using dynamic import()</li>
              <li> 4. Windowing or list virtualization in React</li>
              <li> 5. Lazy loading images in React</li>
            </ul>
          </div>
          <div className="pb-6">
            <h2 className="text-3xl sm:text-2xl pb-12 pl-2 lg:pl-[100px]">
              2. What are the different ways to manage a state in a React
              application?
            </h2>
            <ul className="pl-2 lg:pl-[100px]">
              <li> 1.Local state</li>
              <li>2. Global state</li>
              <li> 3. Server state</li>
              <li> 4.URL state</li>
            </ul>
            <p className=" pl-2 lg:pl-[100px] pt-2">
              1.<u>Local (UI) state</u> Local state is data we manage in one or
              another component. Local state is most often managed in React
              using the useState hook. For example, local state would be needed
              to show or hide a modal component or to track values for a form
              component, such as form submission, when the form is disabled and
              the values of a form’s inputs.
            </p>
            <p className=" pl-2 lg:pl-[100px] pt-2">
              2.<u>Global state</u> Global state is data we manage across
              multiple components. Global state is necessary when we want to get
              and update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global.
            </p>
            <p className=" pl-2 lg:pl-[100px] pt-2">
              3.<u>Server state</u> Data that comes from an external server that
              must be integrated with our UI state. Server state is a simple
              concept, but can be hard to manage alongside all of our local and
              global UI state. There are several pieces of state that must be
              managed every time you fetch or update data from an external
              server, including loading and error state. Fortunately there are
              tools such as SWR and React Query that make managing server state
              much easier.
            </p>
            <p className=" pl-2 lg:pl-[100px] pt-2">
              4.<u>URL state</u> Data that exists on our URLs, including the
              pathname and query parameters. URL state is often missing as a
              category of state, but it is an important one. In many cases, a
              lot of major parts of our application rely upon accessing URL
              state. Try to imagine building a blog without being able to fetch
              a post based off of its slug or id that is located in the URL!
              There are undoubtedly more pieces of state that we could identify,
              but these are the major categories worth focusing on for most
              applications you build.
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-3xl sm:text-2xl pb-12 pl-2 lg:pl-[100px]">
              3. How does prototypical inheritance work?
            </h2>
            <p className=" pl-2 lg:pl-[100px] pt-2">
              Simply put, prototypical inheritance refers to the ability to
              access object properties from another object. We use a JavaScript
              prototype to add new properties and methods to an existing object
              constructor. We can then essentially tell our JS code to inherit
              properties from a prototype. Prototypical inheritance allows us to
              reuse the properties or methods from one JavaScript object to
              another through a reference pointer function.
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-3xl sm:text-2xl pb-12 pl-2 lg:pl-[100px]">
              4.Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h2>
            <p className=" pl-2 lg:pl-[100px] pt-2">
              state management is one of the core feature of react js. In React js web development we do not set the state directly because of upgradation . If we decleare the state directly then the value of the state can not be updated . Thats why we do not set the state directly in react.            
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-3xl sm:text-2xl pb-12 pl-2 lg:pl-[100px]">
              6. What is a unit test? Why should write unit tests?
            </h2>
            <p className=" pl-2 lg:pl-[100px] pt-2">
              In computer programming, unit testing is a software testing method
              by which individual units of source code—sets of one or more
              computer program modules together with associated control data,
              usage procedures, and operating procedures—are tested to determine
              whether they are fit for use. <br /> The purpose of a unit test in
              software engineering is to verify the behavior of a relatively
              small piece of software, independently from other parts. Unit
              tests are narrow in scope, and allow us to cover all cases,
              ensuring that every single part works correctly.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;