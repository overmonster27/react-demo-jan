const Dog = ({dog}) => {
    const {id, name} = dog;
    return (
        <div>
            {id}) {name}
            <button>Delate</button>
        </div>
    );
};

export {Dog};