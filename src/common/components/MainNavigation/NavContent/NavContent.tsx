import { FC } from "react";
import { TContent } from "../../../../types";
import { NavLink } from "react-router-dom";
import { navContent, navContentWrapper } from "./NavContent.css";

const NavContent: FC<TContent> = ({ name, path }) => {
  return (
    <div className={navContentWrapper}>
      <NavLink className={navContent} to={path}>
        {name}
      </NavLink>
    </div>
  );
};

export default NavContent;
