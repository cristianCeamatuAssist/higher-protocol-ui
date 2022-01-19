import { createGlobalStyle } from 'styled-components'

import Poppins from 'assets/fonts/Poppins-Regular.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        url(${Poppins})  format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: inherit;
      }
    }

    h3, .h3 {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
    }

    button {
      background: none;
      outline: none;
      border: none;
    }

    [disabled] {
      pointer-events: none;
      opacity: 0.8;
    }
`
