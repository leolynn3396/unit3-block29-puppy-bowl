export function PlayerDetails({player}) {
    return (
<dialog open={player.id}>
    <h2>{player.name}</h2>
    <img src={player.Url} alt={player.name} width={200}/>
</dialog>
    );
}