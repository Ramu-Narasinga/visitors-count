import './Header.css';

import ViewsIcon from './assets/Views.svg';

export const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg custom-navbar-bg">
      <a class="navbar-brand d-flex align-items-center" href="#">
       <img src={ViewsIcon} height='35' /> 
       <span class='views'>Views</span>
      </a>
    </nav>
  )
}