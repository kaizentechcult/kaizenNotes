import { Component, createSignal, onMount } from "solid-js";

const Notes: Component = () => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  const [data, setData] = createSignal<any[]>([]);

  onMount(async () => {
    const res = await fetch(`${apiKey}/data/files`);
    const files = await res.json();
    console.log(files);
    setData(files);
  });

  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a sample SolidJS page.</p>
      {data().length > 0 && (
        <ul>
          {data().map((file) => (
            <li>{file}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;
