import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path={"/"}
            element={<Profile state={props.state.profilePage.posts} />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                state={props.state.profilePage.posts}
                addPost={props.addPost}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs state={props.state.dialogsPage} />}
          />
          <Route path="/news" element={<News state={props.state.sidebar} />} />
          <Route
            path="/music"
            element={<Music state={props.state.sidebar} />}
          />
          <Route
            path="/settings"
            element={<Settings state={props.state.sidebar} />}
          />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
