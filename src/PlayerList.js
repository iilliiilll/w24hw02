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
  { name: '루크 쇼', position: 'defender', number: 23, image: 'images/shaw.png' },
  { name: '메이슨 마운트', position: 'midfielder', number: 7, image: 'images/mount.png' },
  { name: '라스무스 호일룬', position: 'forward', number: 9, image: 'images/hojlund.png' },
  { name: '조슈아 지르크지', position: 'forward', number: 11, image: 'images/zirkzee.png' },
  { name: '코비 마이누', position: 'midfielder', number: 37, image: 'images/mainoo.png' },
  { name: '아마드 디알로', position: 'forward', number: 16, image: 'images/diallo.png' },
];

function PlayerList() {
  // 포지션별 그룹화
  const groupedPlayers = players.reduce((groups, player) => {
    groups[player.position] = groups[player.position] || [];
    groups[player.position].push(player);
    return groups;
  }, {}); // 초기값: 빈 객체
  

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
const positionNames = {
  forward: '공격수',
  midfielder: '미드필더',
  defender: '수비수',
  goalkeeper: '골키퍼',
};

function getPositionName(position) {
  return positionNames[position] || '기타';
}


export default PlayerList;
