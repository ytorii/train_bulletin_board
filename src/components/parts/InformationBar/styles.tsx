import { css } from '@emotion/css';
import { keyframes } from '@emotion/react';

const linear = keyframes`
  from { opacity: 1; transform: translate(100%); }
  to { opacity: 1; transform: translate(-150%); }
`
export const loopAnimation = css`
  animation: ${linear} 7s linear infinite;
`;