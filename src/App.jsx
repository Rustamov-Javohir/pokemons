import { useState } from "react";
import Section from "./components/Section";
import { pokemons as data } from "./data/pokemons";

const App = () => {
    const [pokemons, setPokemons] = useState(data);
    // const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <Section pokemons={pokemons} />
        </>
    );
};

export default App;
