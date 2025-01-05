import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Iproduct } from '../../models/products.model';
import { CommonModule, NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  private _apiService = inject(ApiService);
  private _router = inject(Router);
  productList: Iproduct[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:Iproduct[])=>{
      console.log(data);
      this.productList = data;
      this.loading = false
    });
  }

  navegate(id: number): void{
    this._router.navigate(['/product', id]);
  }


}
