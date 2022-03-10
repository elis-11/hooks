import { useRef } from "react";
import "../App.scss";

export const Scrolling = () => {
  const paraRef = useRef(null);
  const clickHandler = () => {
    paraRef.current &&
      paraRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="Scrolling">
      <button onClick={clickHandler}>Scroll to Next para</button>
      <p className="section">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eum
        repudiandae ut tempore laudantium, provident labore doloremque sit
        magnam, minima temporibus explicabo voluptatibus cupiditate a culpa
        reprehenderit magni, qui aspernatur! Laborum a iure doloribus, officia
        earum asperiores ut, hic voluptates libero sed consequuntur facere
        itaque natus quisquam! Numquam explicabo sint saepe porro, qui quibusdam
        nam eum minima quasi temporibus. Non?
      </p>
      <p className="section" ref={paraRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eum
        repudiandae ut tempore laudantium, provident labore doloremque sit
        magnam, minima temporibus explicabo voluptatibus cupiditate a culpa
        reprehenderit magni, qui aspernatur! Laborum a iure doloribus, officia
        earum asperiores ut, hic voluptates libero sed consequuntur facere
        itaque natus quisquam! Numquam explicabo sint saepe porro, qui quibusdam
        nam eum minima quasi temporibus. Non?
      </p>
      <p className="section" ref={paraRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eum
        repudiandae ut tempore laudantium, provident labore doloremque sit
        magnam, minima temporibus explicabo voluptatibus cupiditate a culpa
        reprehenderit magni, qui aspernatur! Laborum a iure doloribus, officia
        earum asperiores ut, hic voluptates libero sed consequuntur facere
        itaque natus quisquam! Numquam explicabo sint saepe porro, qui quibusdam
        nam eum minima quasi temporibus. Non?
      </p>
      <p className="section" ref={paraRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eum
        repudiandae ut tempore laudantium, provident labore doloremque sit
        magnam, minima temporibus explicabo voluptatibus cupiditate a culpa
        reprehenderit magni, qui aspernatur! Laborum a iure doloribus, officia
        earum asperiores ut, hic voluptates libero sed consequuntur facere
        itaque natus quisquam! Numquam explicabo sint saepe porro, qui quibusdam
        nam eum minima quasi temporibus. Non?
      </p>
      <p className="section" ref={paraRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eum
        repudiandae ut tempore laudantium, provident labore doloremque sit
        magnam, minima temporibus explicabo voluptatibus cupiditate a culpa
        reprehenderit magni, qui aspernatur! Laborum a iure doloribus, officia
        earum asperiores ut, hic voluptates libero sed consequuntur facere
        itaque natus quisquam! Numquam explicabo sint saepe porro, qui quibusdam
        nam eum minima quasi temporibus. Non?
      </p>
      <p className="section" ref={paraRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eum
        repudiandae ut tempore laudantium, provident labore doloremque sit
        magnam, minima temporibus explicabo voluptatibus cupiditate a culpa
        reprehenderit magni, qui aspernatur! Laborum a iure doloribus, officia
        earum asperiores ut, hic voluptates libero sed consequuntur facere
        itaque natus quisquam! Numquam explicabo sint saepe porro, qui quibusdam
        nam eum minima quasi temporibus. Non?
      </p>
      <p className="section">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eum
        repudiandae ut tempore laudantium, provident labore doloremque sit
        magnam, minima temporibus explicabo voluptatibus cupiditate a culpa
        reprehenderit magni, qui aspernatur! Laborum a iure doloribus, officia
        earum asperiores ut, hic voluptates libero sed consequuntur facere
        itaque natus quisquam! Numquam explicabo sint saepe porro, qui quibusdam
        nam eum minima quasi temporibus. Non?
      </p>
    </div>
  );
};
