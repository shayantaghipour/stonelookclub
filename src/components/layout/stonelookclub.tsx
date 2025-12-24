import { useEffect } from "react";

const StoneLookClub = () => {
  useEffect(() => {
    document.title = "Stone Look Blog";
  }, []);

  return (
    <main style={{ minHeight: "100vh", padding: "120px 80px" }}>
      <h1>Stone Look Blog</h1>
      <p>Coming soon...</p>
    </main>
  );
};

export default StoneLookClub;
