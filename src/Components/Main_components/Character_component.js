import {Main_component} from "./Main_component";

export function Character_component() {
    return (
        <div className={'Container'}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Main_component
                id={1}
                name={"Rick Sanchez"}
                status={"Alive"}
                species={"Human"}
                gender={"male"}
                image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
            />

            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Main_component
                id={2}
                name={"Morty Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"male"}
                image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
            />

            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Main_component
                id={3}
                name={"Summer Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"female"}
                image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
            />

            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Main_component
                id={4}
                name={"Beth Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"female"}
                image={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}
            />

            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Main_component
                id={5}
                name={"Jerry Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"male"}
                image={"https://rickandmortyapi.com/api/character/avatar/5.jpeg"}
            />

            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Main_component
                id={6}
                name={"Fandango Cluster Princess"}
                status={"Alive"}
                species={"Alien"}
                gender={"female"}
                image={"https://rickandmortyapi.com/api/character/avatar/6.jpeg"}
            />

        </div>
    )
}