import { setLoading, setLoaderName } from "./common";

const apiKey = import.meta.env.VITE_BASE_URL;

export const handlePreview = async (name: string) => {
  // e.preventDefault();
  try {
    setLoading(true);
    setLoaderName(name);
    const res = await fetch(
      `${apiKey}/mega/download-link/${encodeURIComponent(name)}`
    );
    if (res.ok) {
      const result = await res.json();
      const FileLink = result.downloadLink;

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
  setLoading(false);
};
