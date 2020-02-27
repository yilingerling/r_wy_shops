import React, { Component } from 'react'
import "./css//bottomTba.css"
export default class bottomTab extends Component {
  render() {
    return (
      <div id="footerContainer">
      <div>
        <span class="iconfont icon-shouye"></span>
          <span class="txt">首页</span>
      </div>
      <div >
      <span class="iconfont icon-leimupinleifenleileibie1"></span>
          <span>分类</span>
      </div>
      <div>
      <span class="iconfont icon-zhidemai2"></span>
          <span>值得买</span>
      </div>
      <div >
      <span class="iconfont icon-che"></span>
          <span>购物车</span>
      </div>
      <div>
      <span class="iconfont icon-renwu"></span>
          <span>个人</span>
      </div>
  </div>
    )
  }
}
