import './Header.css';

import ViewsIcon from './assets/Views.svg';

export const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-bg bg-dark">
      <a class="navbar-brand d-flex align-items-center" href="#">
       <img src={ViewsIcon} height='35' /> 
       <span class='views'>Views</span>
      </a>
      
      <a href="https://projects.ramunarasinga.com">
        <img src="https://visitors-count.onrender.com/api/count/incr/badge.svg?url=http://localhost:3000"/>
      </a>
    </nav>
  )
}