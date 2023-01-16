export function Character(props) {
    const {name, desc, picture} = props;
    return (
        <div>
            <h1>{name}</h1>
            <p>{desc}</p>
            <img src={picture} alt={name}/>
        </div>
    )
}