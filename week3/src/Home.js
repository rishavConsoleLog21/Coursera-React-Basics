import camp from "./assets/images/camp.jpg";

function Home() {
  const randomImageUrl = "https://source.unsplash.com/random/800x600";
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <div>
        <h1>Camping With Us</h1>
        <img height={200} src={camp} alt="camping" />
      </div>
      {/* <div>
        <h1>Camping With Us</h1>
        <img height={200} src={require("./assets/images/camp.jpg")} alt="camping" />
      </div> */}
      <div>
        <h1>Random Image From Unsplasg</h1>
        <img height={200} src={randomImageUrl} alt="camping" />
      </div>
    </div>
  );
}
//above are the 3 example of how to use image in react
export default Home;