import { Content } from "./Content";
import "./Dash.scss";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Dash = () => {

  return (
    <div className="Dash">
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
};
