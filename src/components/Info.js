import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Info = () => (
    <div style={kabegami2}>
      <h3　style={infom}>GANABA!!について</h3>
      <List component="nav"  aria-label="mailbox folders">
          <Divider />
          <ListItem button>
            <ListItemText primary={text1} />
          </ListItem>
          <p>　GANMA!!は頑張る皆さんのための時間管理アプリです。頑張ろうと思ったときにこのアプリを開いて時間を記録しましょう！</p>
          <br />
          <Divider />
          <ListItem button>
            <ListItemText primary="構成要素" />
          </ListItem>
          <p>　本アプリでは下記技術を用いており、各サービスの仕様変更ならびに障害発生時には、本アプリの提供・公開を中断する場合もございます。予めご了承下さい。</p>
          <ul>Firebase Hosting</ul>
          <ul>ShangriLa Anime API V1</ul>
          <ul>React・Redux・Material-UI</ul>
          <br />
          <Divider />
          <ListItem button>
            <ListItemText primary="ソース・説明など" />
          </ListItem>
          <p></p>
          <a>　ソース：GitHub</a>
          <ul>説明：こちらで作り方解説</ul>
          <br />
          <Divider />
          <ListItem button>
            <ListItemText primary="軽い自己紹介" />
          </ListItem>
          <ul>フリーランスで働き方改革＆模索中。モノを作る事が好き。プログラミングの講師業もやってます。PHP、Ruby on Railsあたりを好んでおりますが基本雑食。フロントエンド～サーバーサイドまでやれる、なんちゃってフルスタックエンジニアを目指しています。ブログでWordPressやRoR系のネタで記事投稿してますので是非遊びにいらして下さい。ご指摘・ご質問などは、Twitterもしくは当方ブログお問い合わせよりご連絡下さい。</ul>
          <br />
          <Divider />      
      </List>
    </div>
)
    
const text1 = "GANBA!!とは？？"

const infom = {
    textAlign:"center"
}

const kabegami2 = {
    backgroundColor: '#ffffbb	',
    paddingTop:"20px",
  }
        
export default Info
