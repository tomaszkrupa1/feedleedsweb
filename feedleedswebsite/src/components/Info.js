import "./InfoStyles.css";
import InfoData from "./InfoData";

const Info = () => {
  return (
    <div className="info">
      <h1>What we do</h1>
      <p>Sample text 123</p>

      <InfoData
      className="first-info"
        heading="TESTING FOREVER "
        text="This is some sample text that will be filled later"
        img1="https://cdn.apollo.audio/one/media/6440/dafd/664a/3f05/a1e5/b5f6/homeless%20man.jpg?quality=80&format=jpg&width=960&ratio=16-9"
        img2="https://cdn.apollo.audio/one/media/6440/dafd/664a/3f05/a1e5/b5f6/homeless%20man.jpg?quality=80&format=jpg&width=960&ratio=16-9"
      />

      <InfoData
      className="first-info-reverse"
        heading="TESTING FOREVER "
        text="This is some sample text that will be filled later"
        img1="https://cdn.apollo.audio/one/media/6440/dafd/664a/3f05/a1e5/b5f6/homeless%20man.jpg?quality=80&format=jpg&width=960&ratio=16-9"
        img2="https://cdn.apollo.audio/one/media/6440/dafd/664a/3f05/a1e5/b5f6/homeless%20man.jpg?quality=80&format=jpg&width=960&ratio=16-9"
      />
    </div>
  );
};

export default Info;
