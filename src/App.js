import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
function App() {
  const data = [
    {
      title: 'K-POP',
      description: 'Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.',
      img: '/kpop.jpg'
    },
    {
      title: 'HIP HOP DANCE',
      description: 'All TDS dancers are invited to audition for our annual “I Love to Dance” performance. Dancers of all ages choose their own song and costume to perform their dance for the community. Auditions are in January, with the performance in early spring.'
    },
    {
      title: 'BREAK DANCE',
      description: 'Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.',
      img: '/dance.jpg'
    },
    {
      title: 'CLASSICAL DANCE',
      description: 'Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.',
      img: '/dance.jpg'
    },
    {
      title: 'BALET DANCE',
      description: 'Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.',
      img: '/dance.jpg'
    },
    {
      title: 'BELLY DANCE',
      description: 'Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.',
      img: '/dance.jpg'
    },
    {
      title: 'MODERN DANCE',
      description: 'Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.',
      img: '/dance.jpg'
    },
    {
      title: 'TAP DANCE',
      description: 'Here We make sure everyone gets a good friendly and same minded team for better teamwork and understanding.',
      img: '/dance.jpg'
    }
  ]
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
