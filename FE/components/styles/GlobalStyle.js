import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { colors, fontSize, fontWeights, lineHeights } from "./setups";

const GlobalStyle = createGlobalStyle`
${reset}

html {
font-size: 62.5%; // 1rem = 10px 변경 
}

body {  
	background: ${colors.white_main};
	font-family: 'SF Pro Display';
	font-style: normal;
	font-weight: ${fontWeights.basic};
	font-size: ${fontSize.basic};
	line-height: ${lineHeights.basic};
}

body * {  
	font-family: 'SF Pro Display';
	font-style: normal;
	font-weight: ${fontWeights.basic};
	font-size: ${fontSize.basic};
	line-height: ${lineHeights.basic};
	color: ${colors.gray_main};
	text-decoration: none;
}
`;

export default GlobalStyle;
