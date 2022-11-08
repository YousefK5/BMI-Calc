import React, { useEffect, useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mount");
  }, []);

  useEffect(() => {
    if (count === 0) {
      return;
    } else {
      console.log("Update");
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Home;
