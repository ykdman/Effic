import { contents } from "../../../utils/contents";
import {
  header,
  navigationWrapper,
  navContents,
  title,
  headerSub,
} from "./MainNavigation.css";
import NavContent from "./NavContent/NavContent";

const MainNavigation = () => {
  return (
    <header className={navigationWrapper}>
      <div className={header}>
        <div className={title}>
          <h1>Effic</h1>
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
