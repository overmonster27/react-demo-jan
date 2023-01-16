export function Main_component(props) {

    const {id, name, status, species, gender, image} = props;

    return (
        <div className={'Character_card'}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <img src={image} alt={name}/>
        </div>
    )
}