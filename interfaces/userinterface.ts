// interface IAddress{
//     address: {
//         street:string ;
//         suite:string ;
//         city:string ;
//         zipcode:String,
//         geo: {
//             lat:String,
//             lng:String
//         }
//     },
// }
//
// interface IUser {
//
//     id: number;
//     name:string;
//     username:string ;
//     email:string ;
//
// }
// export {IUser}

interface IUser {

    id: number;
    name:string;
    username:string ;
    email:string ;
   address: {
        street:string ;
        suite:string ;
        city:string ;
        zipcode:String,
        geo: {
            lat:String,
            lng:String
        }
    },
}

export {IUser}