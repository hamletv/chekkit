import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import { getPosts } from './store/post';
import { getComments } from './store/comment';
import AllPosts from './components/posts/Posts';
import NewPost from './components/posts/MediaPost';
import MediaPost from './components/posts/MediaPost';
import SinglePost from './components/posts/SinglePost';
import LoginFormModal from './components/auth/LoginFormModal';
import CreatePost from './components/posts/CreatePost';
// import NavBar from './components/Navbar/NavBar';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getPosts());
      await dispatch(getComments());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          {/* <LoginFormModal /> */}
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/posts' exact={true} >
          <AllPosts/>
        </ProtectedRoute>
        <ProtectedRoute path='/posts/:id' exact={true} >
          <SinglePost/>
        </ProtectedRoute>
        {/* <ProtectedRoute path='/new' exact={true} >
          <MediaPost/>
        </ProtectedRoute> */}
        <ProtectedRoute path='/new' exact={true} >
          <CreatePost/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <AllPosts/>
        </Route>
        <Route>
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
