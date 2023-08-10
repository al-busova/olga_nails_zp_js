import { FaInstagram, FaTelegram } from "react-icons/fa";

export const SocialLinks= () => {
  return (
    <ul>
      <li>
        <a
          href="https://www.instagram.com/busova.nails.zp/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://t.me/alona_busova" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
      </li>
      {/* <li>
        <FaViber />
      </li> */}
    </ul>
  );
};
