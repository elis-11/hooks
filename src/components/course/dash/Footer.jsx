import React from 'react'
import './Dash.scss';


export const Footer = () => {
    const today = new Date();
  return (
<footer>
<p>Copyright &copy; {today.getFullYear()}</p>
</footer>
    )
}
