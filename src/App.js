import React from 'react';
import "../src/bottomTab/css/bottomTba.css"
import{Route,Switch,Redirect} from "react-router-dom"

class App extends React.Component{

  render(){
       return (
        <div id="footerContainer">
        <div>
          <a href="./pages/home">
            <p className="iconfont icon-shouye"></p>
            <p className="txt">首页</p>
          </a>
        </div>
        <div >
          <a href="./pages/kind">
            <p className="iconfont icon-leimupinleifenleileibie1"></p>
            <p>分类</p>
          </a>
        </div>
        
        <div>
          <a href="./pages/good">
            <p className="iconfont icon-zhidemai2"></p>
            <p>值得买</p>
          </a>
        </div>
        <div >
          <a href="./pages/sCart">
            <p className="iconfont icon-che"></p>
            <p>购物车</p>
          </a>
        </div>
        <div>
          <a className="active" href="./pages/person">
            <p className="iconfont icon-renwu"></p>
            <p>个人</p>
          </a>
        </div>
    </div>
    )
  }
}

export default App;
