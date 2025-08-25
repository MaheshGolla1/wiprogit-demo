import React, { useEffect, useState } from "react";
import axios from "axios";
import PlayerForm from "./PlayerForm";
import PlayerList from "./PlayerList";

function FootballApp() {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    // Fetch players from JSON server
    const fetchPlayers = async () => {
        const response = await axios.get("http://localhost:3003/players");
        setPlayers(response.data);
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    // Add new player
    const addPlayer = async (player) => {
        await axios.post("http://localhost:3003/players", player);
        fetchPlayers();
    };

    // Update player
    const updatePlayer = async (player) => {
        await axios.put(`http://localhost:3003/players/${player.id}`, player);
        fetchPlayers();
    };

    // Delete player
    const deletePlayer = async (id) => {
        await axios.delete(`http://localhost:3003/players/${id}`);
        fetchPlayers();
    };

    // Select player for editing
    const editPlayer = (player) => {
        setSelectedPlayer(player);
    };

    // Clear selection
    const clearSelection = () => {
        setSelectedPlayer(null);
    };

    return (
        <div className="container mt-4">
            <PlayerForm
                addPlayer={addPlayer}
                updatePlayer={updatePlayer}
                selectedPlayer={selectedPlayer}
                clearSelection={clearSelection}
            />
            <PlayerList
                players={players}
                editPlayer={editPlayer}
                deletePlayer={deletePlayer}
            />
        </div>
    );
}

export default FootballApp;
