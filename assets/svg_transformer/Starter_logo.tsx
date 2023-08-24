import React from 'react';
import { StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Starter_logo() {
  const svgMarkup = `<svg width="569" height="569" viewBox="0 0 569 569" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M284.5 569C441.625 569 569 441.625 569 284.5C569 127.375 441.625 0 284.5 0C127.375 0 0 127.375 0 284.5C0 441.625 127.375 569 284.5 569ZM284.5 525C417.324 525 525 417.324 525 284.5C525 151.676 417.324 44 284.5 44C151.676 44 44 151.676 44 284.5C44 417.324 151.676 525 284.5 525Z" fill="#222222"/>
    <rect x="148" y="146" width="273" height="71" fill="#222222"/>
    <rect x="148" y="249" width="273" height="71" fill="#222222"/>
    <rect x="148" y="352" width="273" height="71" fill="#222222"/>
    </svg>
    `;

  const SvgImage = () => <SvgXml xml={svgMarkup} width="301px" />;
  return <SvgImage />;
}

const styles = StyleSheet.create({
  svg: {
    width: 200,
    height: 200,
  },
});
