import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/index.css';

const TinyPlayer = () => (
  <div id="TinyPlayer" className="base" styleName="tiny-player-container">
    <h1>RTP: React Tiny Player</h1>
  </div>
);

export default CSSModules(TinyPlayer, styles);
