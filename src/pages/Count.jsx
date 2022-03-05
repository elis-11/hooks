import React from 'react';
import elis from "../images/favicon.ico";

import '../styles/Count.scss'


export const Count = () => {
  return (<div>
    <h2>COUNT</h2>

<div className="Count">
  <div className="container">
  <ul>
    <li>
      Tralala 1
    </li>
    <li>
      Tralala 2
    </li>
    <li>
      Tralala 3
    </li>
  </ul>
  <div className="input">
  <input type="text" className='i-1'/>
  <button>Push</button>
  </div>
  </div>
  <div className="container">
    <img src={elis} alt="logo" className="logo" />
  </div>
</div>
  </div>)
};
