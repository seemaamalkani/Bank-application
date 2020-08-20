import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserdataService } from '../../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class ProductComponent implements OnInit {

  index: number = 0;
  items: any;
  public itemList: any = new Array;
  public itemNameList: any = new Array;
  public show: any = false;
  public count: any = 0;
  flag: any = false;

  menuState: string = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor(private apiservice: UserdataService, private router: Router) { }

  ngOnInit() {
    this.showProduct();
  }
  selectedItem() {
    console.log(this.itemNameList);
    console.log("item is added into invoice", this.itemNameList);
    this.apiservice.setItem(this.itemNameList);
    this.show = true;
    this.count = 0;
    this.itemNameList.forEach(element => {
      this.count = this.count + (element.price * element.quantity);
    });
  }

  // Add the selected items to selected item list
  addItem(id, name, price, quantity) {
    if (quantity) {
      this.itemList.push(id);
      var itemList: any = new Array;

      let obj = {
        "name": name,
        "price": price,
        "quantity": quantity
      }
      let index1 = -1;
      if (this.itemNameList.length > 0) {
        this.itemNameList.forEach((item, index) => {
          if (item.name === obj.name) {
            this.flag = true;
            item.name = obj.name;
            item.price = obj.price;
            item.quantity = obj.quantity;
            console.log('Quantity: ', item.quantity);
            
            if (item.quantity === '0') {
              index1 = index;
            }
          }
        });
        if (index1 > -1) {
          this.itemNameList.splice(index1, 1);
        }
        if (!this.flag) {
          this.itemNameList.push(obj);
        }
      } else {
        console.log('esle');
        this.itemNameList = [obj];
      }
      this.flag = false;
      this.selectedItem();
    } else {
      console.log('Item: ', id,name,price,quantity);
      
    }
  }
  // calculate the selected items 
  inVoice() {
    this.count = 0;
    this.itemNameList.forEach(element => {
      this.count = this.count + (element.price * element.quantity);
    });
    alert(this.count);
    this.apiservice.setShoppingBalance(this.count);
    this.router.navigate(['payment']);
  }

  // Fetch the details of product from stored data
  showProduct() {
    this.apiservice.fetchData()
      .map(response => response.json())
      .subscribe((data) => { console.log(data); this.items = data; });
  }

  logout() {
    this.router.navigate(['']);
  }

}

