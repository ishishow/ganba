import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Main from './components/Main.js'
import Info from './components/Info.js'
import Settings from './components/Setting.js'
import './css/app.css'
import {FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,} from 'react-share'
const App = () => (
  <Router>
    <div>
      <Header />
      <div atyle={{}}>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route path='/main' component={Main} />
        <Route path='/info' component={Info} />
        <Route path='/settings' component={Settings} />
      </div>
      <Footer />
    </div>
  </Router>
)

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
            <p className='next'>
              <Link to="/main"><div onClick={this.props.closePopup}>次へ</div></Link>
            </p>
            <p className='tojiru'>
              <div onClick={this.props.closePopup}>閉じる</div>
            </p>
        </div>
      </div>
    );
  }
}

class Pop extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='app'>
        <h1>頑張るあなたのための時間管理ツール</h1>
        <div className='saa' onClick={this.togglePopup.bind(this)}>さあ、はじめよう！</div>
        {this.state.showPopup ? <Popup text='このページは頑張った時間を計測するページです。' closePopup={this.togglePopup.bind(this)}/>: null}
      </div>
    );
  }
};

const Header = () => (
  <div style={styleHeader}>
    <img src="https://images.cooltext.com/5334241.png" alt="GANBA!! ☆ " />
    <p>
    [<a href='/home'>トップページ</a>]
    [<a href='/main'>メインページ</a>]
    [<a href='/info'>GANBA!!とは？？</a>]
    [<a href='/settings'>設定</a>]
    </p>
  </div>
)

const Footer = () => (
<div style={styleFooter}>
  <h5>
    [<a href='/home'>トップページ</a>]
    [<a href='/main'>メインページ</a>]
  </h5>
  <div style={{lineHeight: '5px'}}>
    <TwitterShareButton via="kiotera_tech" ><TwitterIcon size={32} round /></TwitterShareButton><br />
    <FacebookShareButton quote={'GANBA!!'}><FacebookIcon size={32} round /></FacebookShareButton><br />
    {/* <EmailShareButton subject={'GANBA!!'}><EmailIcon size={32} round /></EmailShareButton> */}
  </div>
</div>
)

const Home = () => (
  <div style={kabegami}>
    <img src="https://images.cooltext.com/5334249.png"  alt="Let's begin GANBA!! ☆ " />
    <p　style={{fontSize:'18',color:'#ccc'}}>みなさん！,GANBA!!で頑張りましょう！！</p>
    <div style={{color:'#88ff33'}}>
      <Pop /> 
    </div>
  </div>
)

const styleHeader ={
  backgroundColor: '#d2ffd2	',
  fontFamily: 'italic',
  color: '5e7fca',
  marginTop: 0,
  padding: 15,
}

const styleFooter ={
  backgroundColor: '#d2ffd2',
  color: '#5e7fca',
  marginBottom: 0,
  padding: 25
}

const kabegami = {
  backgroundColor: '#ffffbb',
  textAlign:"center",
  paddingTop:"20px",
  height: '480px',
}

export default App;