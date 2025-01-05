import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'product', component:ProductComponent},
    {path:'product/:id', component:ProductDetailsComponent},
    {path:'contact', component:ContactComponent},
    {path:'**', redirectTo:'', pathMatch:'full'}
];
