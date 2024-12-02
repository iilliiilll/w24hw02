import PlayerCard from './PlayerCard';

const players = [
  { name: '마커스 래시포드', position: 'forward', number: 10, image: 'images/rashford.png' },
  { name: '알레한드로 가르나초', position: 'forward', number: 17, image: 'images/garnacho.png' },
  { name: '브루노 페르난데스', position: 'midfielder', number: 8, image: 'images/fernandes.png' },
  { name: '크리스티안 에릭센', position: 'midfielder', number: 14, image: 'images/eriksen.png' },
  { name: '리산드로 마르티네즈', position: 'defender', number: 6, image: 'images/martinez.png' },
  { name: '디오구 달로', position: 'defender', number: 20, image: 'images/dalot.png' },
  { name: '안드레 오나나', position: 'goalkeeper', number: 24, image: 'images/onana.png' },
  { name: '해리 매과이어', position: 'defender', number: 5, image: 'images/maguire.png' },
];

function PlayerList() {
  // 포지션별 그룹화
  const groupedPlayers = players.reduce((groups, player) => {
    if (!groups[player.position]) {
      groups[player.position] = [];
    }
    groups[player.position].push(player);
    return groups;
  }, {});

  return (
    <div className="player-list">
      {Object.entries(groupedPlayers).map(([position, players]) => (
        <div key={position} className="position-section">
          {/* 포지션 제목 */}
          <h2 className="position-title">{getPositionName(position)}</h2>

          {/* 선수 카드 */}
          <div className="cards-container">
            {players.map(player => (
              <PlayerCard key={player.number} player={player} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// 포지션 이름을 한글로 변환
function getPositionName(position) {
  switch (position) {
    case 'forward':
      return '공격수';
    case 'midfielder':
      return '미드필더';
    case 'defender':
      return '수비수';
    case 'goalkeeper':
      return '골키퍼';
    default:
      return '기타';
  }
}

export default PlayerList;
