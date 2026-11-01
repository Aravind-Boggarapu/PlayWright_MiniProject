import { fa, faker  } from "@faker-js/faker";



export class DataGenerator

{
public static getFirstName(): string
{
let firstName=faker.person.firstName()
return  firstName;

}


public static getLastName(): string
{
    let lastName=faker.person.lastName();

    return lastName;
}

public static getEmail(): string
{

    let email=faker.internet.email();

    return email; 
}

public static getTelephone(): string
{
    return faker.phone.number();
}

public static getProductName(): string
{
 let prodcut=faker.commerce.product();

 return prodcut;

}


public static getNumber(): number
{
    let number=faker.number.int({min:1,max:999});

    return number;

}
public static generateInvalidLoginPayload() : {username:string ,password:string }
{

let username = faker.internet.username();
let password = faker.internet.password();
return {username , password }
}

public static generateProductPayload() :{title:string , price:string, description:string }
{
 let details:{title:string , price:string, description:string } =
 {
    title:faker.book.title(),
    price:faker.commerce.price(),
    description:faker.commerce.productName(),
 }

 return   details 

}

}