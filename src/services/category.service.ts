import { Injectable } from "@angular/core";
import { Category } from "src/models/category.model";

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    getCategories(): Category[] {
        return [
            {
                title: 'Homens', // lembrar de preencher com images da categoria de homens 
                image: ''
            },
            {
                title: 'Mulheres', // lembrar de preencher com images da categoria de mulheres
                image: ''
            },
            {       
                title: 'Kids', // lembrar de preencher com images da categoria de crianças
                image: ''
            }
        ]
    }
}