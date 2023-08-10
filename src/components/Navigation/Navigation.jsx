import { Link } from "react-router-dom";
import { Call } from "../Call/Call";

export const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="gallery">Галерея</Link>
        <Link to="services">Послуги</Link>
        <Link to="useful">Корисне</Link>
      </nav>
      <Call />
      {/* <ul>
        <li>Увійти</li>
        <li>Реєстрація</li>
      </ul> */}
    </>
  );
};
