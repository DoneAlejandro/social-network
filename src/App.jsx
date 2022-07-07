import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  //   debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path={"/*"}
            element={
              <Profile
              // store={props.store}
              // profilePage={props.state.profilePage}
              // dispatch={props.dispatch}
              />
            }
          />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          {/* <Route path="/news" element={<News state={props.state.sidebar} />} />
          <Route
            path="/music"
            element={<Music state={props.state.sidebar} />}
          />
          <Route
            path="/settings"
            element={<Settings state={props.state.sidebar} />}
          /> */}
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
