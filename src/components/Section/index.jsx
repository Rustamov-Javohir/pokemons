import Card from "../Card";
import "./section.styled.css";

const Section = ({ pokemons }) => {
    return (
        <section className='hero'>
            <div className='container'>
                <div className='hero__wrapper'>
                    {pokemons.length > 0 &&
                        pokemons.map((poke) => (
                            <Card key={poke.id} poke={poke} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Section;
