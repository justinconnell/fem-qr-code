import './App.css';
import qrCode from './assets/images/image-qr-code.png';
import {Card} from "./components/Card.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {
  const title = "Improve your front-end skills by building projects";
  const description = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";
  const image = qrCode;
  const imageAlt = "QR Code"

  return (
    <>
      <main>
        <Card
          image={image}
          imageAlt={imageAlt}
          title={title}
          description={description}
        />
      </main>

      <Footer codedBy="Justin Connell"/>
    </>
  );
}

export default App
