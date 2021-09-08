import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRouter,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="discover"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
            onClick={toggle}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
            onClick={toggle}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
            onClick={toggle}
          >
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to="/signin" onClick={toggle}>
            Sign In
          </SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
