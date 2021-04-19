import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import LessonContainer from './pages/LessonContainer';
import NewLesson from './pages/NewLesson';
import NotFound from './pages/NotFound';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AuthenticationContext from './context/authentication/authenticationContext';

function App() {
  const authenticationContext = useContext(AuthenticationContext);
  const { isAuthenticated, isLoading, checkCookie } = authenticationContext;

  useEffect(() => {
    checkCookie();
  }, [checkCookie]);

  return (
    <Router>
      <div className='w-screen h-screen flex flex-col font-body'>
        <Header />

        <Main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
              path='/lists'
              exact
            >
              <LessonContainer />
            </ProtectedRoute>

            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
              path='/lists/:lessonId'
            >
              <LessonContainer />
            </ProtectedRoute>

            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
              path='/new'
            >
              <NewLesson />
            </ProtectedRoute>

            <Route path='/about' component={About} />
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='*' component={NotFound} />
          </Switch>
        </Main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
