import { Content } from "./Content";
import "./Name.scss";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Name = () => {
  return (
    <div className="Name">
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
};
