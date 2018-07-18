import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    products: any[] = [
        {
            'productName': 'arut',
            'productWins': 12,
            'productCards': 10000
        },
        {
            'productName': 'mounish',
            'productWins': 100,
            'productCards': 15000
        },
        {
            'productName': 'srijah',
            'productWins': 125,
            'productCards': 90000
        },
        {
            'productName': 'priya',
            'productWins': 200,
            'productCards': 25000
        },
        {
            'productName': 'raghuraman',
            'productWins': 125,
            'productCards': 90000
        }
    ];
}
