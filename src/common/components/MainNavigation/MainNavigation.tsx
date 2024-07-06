import { Link } from "react-router-dom";
import { contents } from "../../../share/utils/contents";
import {
  header,
  navigationWrapper,
  navContents,
  title,
  headerSub,
  titleText,
} from "./MainNavigation.css";
import NavContent from "./NavContent/NavContent";

const MainNavigation = () => {
  return (
    <header className={navigationWrapper}>
      <div className={header}>
        <div className={title}>
          <Link to="/" className={titleText}>
            <h1>Effic</h1>
          </Link>
        </div>
      </div>
      <nav className={navContents}>
        {contents.map((content) => (
          <NavContent
            key={content.name + content.path}
            name={content.name}
            path={content.path}
          />
        ))}
      </nav>
      <div className={headerSub}>Good Time!</div>
    </header>
  );
};

export default MainNavigation;
