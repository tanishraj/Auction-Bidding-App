import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ProductService {
	private apiBaseUrl : string = "http://arunreghunathan.pythonanywhere.com/auction";
	constructor(private http: Http) { }
	
	fetchProductList(){
		return this.http.get(this.apiBaseUrl);
	}

	getProduct(productId: number){
		return this.http.get('http://arunreghunathan.pythonanywhere.com/auction/?id=16');
	}

	delProduct(productId : number){
		console.log("Inside Delete method in services.");
		return this.http.delete(this.apiBaseUrl+'/'+productId);
	}
	
}