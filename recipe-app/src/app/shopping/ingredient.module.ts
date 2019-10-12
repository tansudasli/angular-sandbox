import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import {AppModule} from '../app.module';



@NgModule({
  declarations: [ShoppingComponent],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class IngredientModule { }
