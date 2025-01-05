import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Iproduct } from '../../models/products.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  loading:boolean = true;
  public product?: Iproduct;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this._apiService.getProdut(params['id']).subscribe((data: Iproduct)=>{
        this.product = data;
          this.loading = false;
      })
    })
  }

}
