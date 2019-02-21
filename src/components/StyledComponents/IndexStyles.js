//Skapar upp alla styled components för index för export

import styled from 'styled-components'

/* ********** */

//Index-page
export const StyledH1WithUnderline = styled.h1`
text-align: center;
position: relative;
padding-bottom: 10px;
::after {
    display: block;
      content: '';
     width: 10%;
     height: 1px;
     background: #4DC5D8;
     position: absolute;
     bottom: 0;
     left: 45%;
   }
`;