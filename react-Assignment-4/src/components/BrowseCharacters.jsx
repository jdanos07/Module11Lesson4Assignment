import { Link } from "react-router-dom";

const BrowseCharacters = () => {
    const characters = [
        { id: 1, name: "Spider-Man" },
        { id: 2, name: "Iron Man" },
    ];

    return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
                {characters.map((char) => (
                    <li key={char.id}>
                        <Link to={`/characters/${char.id}`}>{char.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;