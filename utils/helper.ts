import {Page}  from '@playwright/test'


export class Helper
{

public static convertPriceToNumber(price:string) :number
{

let data:string=price.replace('$','');
let convertedPrice=parseInt(data);
return convertedPrice;

}

public static getProductDetails(): {productName:string, productQuantity:number ,productPrice:number }
{

    let details :{productName:string, productQuantity:number ,productPrice:number }= {
        productName :'Phone',
        productQuantity:1,
        productPrice: 123 
    }

 return details;
    
}
public static loginDetails():{userName:string, password:string}
{
      return  {userName:"tst123", password:"test345" } 

}


}