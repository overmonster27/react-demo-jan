const Rocket = ({rocket: {mission_name, launch_year, links: {mission_patch}}}) => {

    return (
        <div className='Rocket'>
            <div>Mission name:{mission_name}</div>
            <div>Launch year:{launch_year}</div>
            <img className='Picture' src={mission_patch} alt={mission_name}/>
        </div>
    );
};

export {Rocket};