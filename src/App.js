import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import LessonContainer from './pages/LessonContainer';
import NotFound from './pages/NotFound';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <div className='w-screen h-screen flex flex-col font-body'>
        <Header />

        <Main>
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
        </Main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
