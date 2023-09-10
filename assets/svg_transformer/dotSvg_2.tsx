import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function DotSvg_2(props: {
  width: number;
  color: string;
  height?: number;
}) {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="8" viewBox="0 0 24 8" fill="none">
  <circle cx="20" cy="4" r="4" transform="rotate(-180 20 4)" fill="#1B5E20"/>
  <circle opacity="0.5" cx="4" cy="4" r="4" transform="rotate(-180 4 4)" fill="#1B5E20"/>
</svg> 
  `;

  const SvgImage = () => (
    <SvgXml
      xml={svgMarkup}
      width={props.width || 301}
      height={props.height || 301}
    />
  );
  return <SvgImage />;
}
