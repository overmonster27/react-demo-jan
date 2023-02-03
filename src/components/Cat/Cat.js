const Cat = ({cat}) => {
    const {id, name} = cat;
    return (
        <div>
            {id}) {name}
            <button>Delate</button>
        </div>
    );
};

export {Cat};