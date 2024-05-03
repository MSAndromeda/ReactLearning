export default function Log({ gameTurnsLog }) {
  return (
    <ol id="log">
      {gameTurnsLog.map((log) => (
        <li key={`${log.square.row}${log.square.col}`}>
          {log.player} selected {log.square.row},{log.square.col}
        </li>
      ))}
    </ol>
  );
}
