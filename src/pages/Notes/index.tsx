import { Component, createSignal, For, onMount } from "solid-js";

type File = {
  name: string;
  size: number;
  path: string;
};

const Notes: Component = () => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  const [data, setData] = createSignal<File[]>([]);

  onMount(async () => {
    try {
      const res = await fetch(`${apiKey}/mega/files`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
      const files = await res.json();
      setData(files);
      console.log(data());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a sample SolidJS page.</p>
      <ul>
        <li>
          <p>Name: {data()[0]?.name}</p>
          <p>Size: {data()[0]?.size}</p>
          <p>Path: {data()[0]?.path}</p>
        </li>
      </ul>
    </div>
  );
};

export default Notes;
