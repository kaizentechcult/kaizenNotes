import { Component, createSignal, For, onMount } from "solid-js";

type File = {
  name: string;
  size: number;
  path: string;
};

const Notes: Component = () => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  const [data, setData] = createSignal<File[]>([]);
  const [fileName, setFileName] = createSignal("");
  const [result, setResult] = createSignal("");

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

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${apiKey}/mega/download-link/${encodeURIComponent(fileName())}`
      );
      if (res.ok) {
        const result = await res.json();
        const FileLink = result.downloadLink;
        console.log(FileLink);

        const link = document.createElement("a");
        link.href = FileLink;
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
        document.body.appendChild(link);
        link.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true })
        );
        link.remove();
      } else {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a sample SolidJS page.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter file name:
          <input
            class="text-black"
            type="text"
            value={fileName()}
            onChange={(e) => setFileName(e.currentTarget.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
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
