import { Injectable } from "@angular/core";
import { Product } from "src/models/product.model";

@Injectable({
    providedIn: 'root'
    
})
export class ProductService {
    getProducts(): Product[]{
        return [];

    }
    getFeaturesProducts(): Product[]{
        return this.getProducts().slice(3,8);
    }
    getBestSellingProducts(): Product[]{
        return this.getFeaturesProducts().slice(3,8);
    }
}

/*

 {
                id: 1,
                name: 'Sapato Classic',
                price: 150.32,
                imageUrl: 'assets/images/products/heels1.jpg',
                liked: false

            },
            {
                id: 1,
                name: 'Sapato Classic',
                price: 150.32,
                imageUrl: 'assets/images/products/heels1.jpg',
                liked: false

            },
            {
                id: 2,
                name: 'Sapato Classic',
                price: 150.32,
                imageUrl: 'assets/images/products/heels1.jpg',
                liked: false,

            },
            {
                id: 3,
                name: 'Sapato Classic',
                price: 150.32,
                imageUrl: 'assets/images/products/heels1.jpg',
                liked: false,

            },
            {
                id: 4,
                name: 'Sapato Classic',
                price: 150.32,
                imageUrl: 'assets/images/products/heels1.jpg',
                liked: false,

            },
            {
                id: 5,
                name: 'Sapato Classic',
                price: 150.32,
                imageUrl: 'assets/images/products/heels1.jpg',
                liked: false,

            },

        */