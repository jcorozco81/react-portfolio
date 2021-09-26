import React from 'react';


// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Resume() {
  const message = 'Resume';

  return (
    <div className="container">
      <h2>{message}</h2>
    </div>
  );
}

export default Resume;
