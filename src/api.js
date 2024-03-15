const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT/players`;

export async function getPlayers() {
    try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        return result.data.players;
    } catch (error) {
        console.error(error)
    }
}

export async function getPlayer(playerId) {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`);
        const result = await response.json();
        return result.data.players;
    } catch (error) {
        console.error(error);
    }
}

export async function createPlayer(name, breed) {
    try {
        const response = await fetch(`${API_URL}/players`,{
        method: "POST",
            headers: {
            "Contect-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            breed
        })
    });
    const result = await response.json();
    return result;
} catch (error) {
    console.error(error);
}
    }

