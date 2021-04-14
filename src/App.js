import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import LessonContainer from './pages/LessonContainer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className='w-screen h-screen flex flex-col font-body'>
        {/* header */}

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/lists'>
            <LessonContainer page='lists' />
          </Route>

          <Route path='/lists/:lessonId'>
            <LessonContainer page='lists' />
          </Route>

          <Route path='/new'>
            <LessonContainer page='new' />
          </Route>

          <Route path='/about' component={About} />

          <Route path='/login' component={Login} />

          <Route path='*' component={NotFound} />
        </Switch>

        {/* footer */}
      </div>
    </Router>
  );
}

export default App;
