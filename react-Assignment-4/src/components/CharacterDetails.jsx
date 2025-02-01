import { useParams } from "react-router-dom";

const CharacterDetails = () => {
    const { id } = useParams();

    const characters = [
        { id: "1", name: "Spider-Man" },
        { id: "2", name: "Iron Man" },
    ];

    const character = characters.find((char) => char.id === id);
    

    return (
        <div>
            <h2>Character Details</h2>
            {character ? (
                <p>Displaying details for: <strong>{character.name}</strong></p>
            ) : (
                <p>Character not found</p>
            )}
        </div>
    );
};

export default CharacterDetails;