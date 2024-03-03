/** @jsx jsx */
import { jsx } from '@emotion/react'

import styles from "./styles";

export const Header = () => (
  <header css={styles.header}>
    <span>made using  </span>
    <a href="https://flagcdn.com/" target="blank">
      Flag CDN
    </a>
  </header>
);

export default Header;
