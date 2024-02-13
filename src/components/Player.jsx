export default function Player({ player, onClick }) {
    return (
    <tr key={player.id}>
        <td>{player.name}</td>
        <td>{player.breed}</td>
        <td>{player.status}</td>
        <td>
            <button onClick={() => handlePlayerClick(player.id)}View Player></button>
            <button onClick={() => handlePlayerDelete(player.id)}Delete Player></button>

        </td>
    </tr>
);
}