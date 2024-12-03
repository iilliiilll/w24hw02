import './App.css';
import PlayerList from './PlayerList';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      {/* 고정된 헤더 */}
      <Header />

      {/* 본문 컨텐츠를 헤더 높이만큼 아래로 밀기 */}
      <div className="body-padding">
        <PlayerList />
      </div>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default App;
