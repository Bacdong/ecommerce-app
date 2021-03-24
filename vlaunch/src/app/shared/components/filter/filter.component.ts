import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  styles: string[] = [
    'Contemporary',
    'Modern',
    'Traditional',
    'Mid-Century Modern',
    'Farmhouse',
    'Transitional',
    'Industrial',
    'Scandinavian',
    'Rustic',
    'Coastal',
    'Eclectic',
    'Southwestern',
    'Tropical',
    'Craftsman',
    'Asian',
    'Victorian',
    'Mediterranean',
    'French Country',
    'Shabby-Chic Style'
  ];

  sizes: string[] = [
    'Compact',
    'Medium',
    'Large',
    'Expansive'
  ];

  colors: string[] = [
    'Red',
    'Orange',
    'Wood Tones',
    'Yellow',
    'Green',
    'Turqucise',
    'Blue',
    'Violet',
    'Pink',
    'Black & White',
    'Black',
    'Gray',
    'White',
    'Beige',
    'Brown'
  ];

  sortby = [
    { value: "popular", name: "Popular Today" },
    { value: "lates", name: "Latest Activity" },
    { value: "all", name: "All Time Popular" },
    { value: "new", name: "Newly Activity" },
  ];

  selectedSortby = this.sortby[0].value;

  constructor() { }

  ngOnInit(): void {
  }

}
