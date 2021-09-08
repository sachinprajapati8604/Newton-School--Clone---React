import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Course from './component/Course/Course'
import Leaderboard from './component/Leaderboard/Leaderboard';
import MyTimeline from './component/MyTimeline/MyTimeline';
import Milestone from './component/Milestone/Milestone';
import Arena from './component/Arena/Arena';
import MockInterview from './component/MockInterview/MockInterview';
import Doubts from './component/Doubts/Doubts';
import Interview from './component/Interview/Interview';
import Placement from './component/Placement/Placement';


function App() {
  return (
    <Router>
      <div>
        <Home/>
        <Switch>
        <Route exact path="/">
            <Course />
          </Route>
          <Route exact path="/course">
            <Course />
          </Route>
          <Route exact path="/my-timeline">
            <MyTimeline/>
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard/>
          </Route>
          <Route exact path="/milestone">
            <Milestone/>
          </Route>
          <Route exact path="/arena">
            <Arena/>
          </Route>
          <Route exact path="/mockinterview">
            <MockInterview/>
          </Route>
          <Route exact path="/doubt">
            <Doubts/>
          </Route>
          <Route exact path="/interview">
            <Interview/>
          </Route>
          <Route exact path="/placement">
            <Placement/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
