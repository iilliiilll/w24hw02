import { useState } from 'react';

function PlayerCard({ player }) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(prevState => !prevState);
  };

  return (
    <>
      <div className="player-card">
        {/* 이미지를 클릭하면 YouTube로 연결 */}
        <a
          href={`https://www.youtube.com/results?search_query=${player.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={player.image} alt={player.name} className="player-image" />
        </a>

        {/* 이름을 클릭하면 토글 */}
        <h3 className="player-name" onClick={toggleDetails}>
          {player.name}
        </h3>

        {/* 토글이 열리면 등번호와 포지션 표시 */}
        {detailsVisible && (
          <div className="player-details">
            <p>등번호: {player.number}</p>
            <p>포지션: {player.position}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PlayerCard;
