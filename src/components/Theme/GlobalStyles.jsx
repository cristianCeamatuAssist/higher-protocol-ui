import { createGlobalStyle } from 'styled-components'

import Poppins from 'assets/fonts/Poppins-Regular.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        url(${Poppins})  format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    h3, .h3 {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
    }
`
