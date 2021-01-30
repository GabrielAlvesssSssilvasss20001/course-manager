// Failed in trying to enable an interface to create instances of the Course class. Will try it again later.
// interface courseInterface{
//     id: number,
//     name: string,
//     imageUrl: string,
//     price: number,
//     code: string,
//     duration: number,
//     rating: number

//     setValues(id: number, name:string, imageUrl: string, price: number, code: string, duration:number, rating:number): void;
// }; implements courseInterface

export class Course{
    id: number = 0;
    name: string = '';
    imageUrl: string = '';
    price: number = 0;
    code: string = '';
    description: string = '';
    duration: number = 0;
    rating: number = 0;
    releaseDate: string = '0/0/0';

    // constructor(id: number, name:string, imageUrl: string, price: number, code: string, duration:number, rating:number, releaseDate: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.imageUrl = imageUrl;
    //     this.price = price;
    //     this.code = code;
    //     this.duration = duration;
    //     this.rating = rating;
    //     this.releaseDate = releaseDate;
    // };
};