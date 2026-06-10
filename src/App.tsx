import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import VideoLibrary from './pages/VideoLibrary';
import AlarmClock from './pages/AlarmClock';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import Challenges from './pages/Challenges';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="videos" element={<VideoLibrary />} />
          <Route path="alarm" element={<AlarmClock />} />
          <Route path="progress" element={<Progress />} />
          <Route path="profile" element={<Profile />} />
          <Route path="challenges" element={<Challenges />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
