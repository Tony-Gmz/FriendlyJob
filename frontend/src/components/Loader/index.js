import React from 'react';

import './loader.scss';

const Loader = () => (
  <>
    <div id="cooking">
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div id="area">
        <div id="sides">
          <div id="pan" />
          <div id="handle" />
        </div>
        <div id="pancake">
          <div id="pastry" />
        </div>
      </div>
    </div>
  </>
);

export default Loader;
