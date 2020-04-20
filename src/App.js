import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Home from './components/Home'
import Detail from './components/Detail'
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <>
    <BrowserRouter>
      <Route path="/" component={Home} exact = {true} />
      <Route path="/detail/:id" component={Detail}/>
      <Redirect from="*" to="/" />{/* 위 규칙을 벗어나면: 루트(/) 요청으로 리다이렉션 */}
    </BrowserRouter>
    <GlobalStyle />
    </>
  );
}

export default App;
