function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <img src={player.image} alt={player.name} className="player-image" />
      <h3>{player.name}</h3>
      <p>포지션: {player.position}</p>
      <p>등번호: {player.number}</p>
    </div>
  );
}

export default PlayerCard;
