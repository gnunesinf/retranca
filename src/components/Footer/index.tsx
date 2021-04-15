import { FooterContainer } from "./styles";

import { SiLinkedin, SiInstagram, SiGmail } from "react-icons/Si";

export function Footer() {
  return (
    <FooterContainer>
      <nav>
        <ul>
          <li>
            <a href="">
              <SiLinkedin size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <SiInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <SiGmail size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </FooterContainer>
  );
}
