import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Products: any;
  popularItem: any;
  count:number=0;
  public counter : number = 0; 
  
  item = this.Products;
  constructor(){  
   this.Products = [
    {
      "id":1,
      "name": "Item1",
      "price": 175,
     "discount": 5,
    
     "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      },
      {
      "id":2,
      "name": "Item2",
      "price": 190,
      "discount": 7,
      count: 0,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      },
      {
        "id":3,
      "name": "Item3",
      "price": 213,
      "discount": 20,
      count: 0,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      },
      {
        "id":4,
      "name": "Item4",
      "price": 217,
      "discount": 18,
      count : 0,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      },
       {
        "id":5,
      "name": "Item5",
      "price": 319,
      "discount": 31,
      count : 0,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      },
      {
        "id":6,
      "name": "Item6",
      "price": 499,
      "discount": 44,
      count: 0,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      }
  ]
 }
 Increment()
{
  
   this.counter += 1;
   console.log(this.counter);
}
}
