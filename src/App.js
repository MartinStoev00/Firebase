import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
  const [img, setImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setImg={setImg} />
      {img && <Modal img={img} setImg={setImg} />}
    </div>
  );
}

export default App;
