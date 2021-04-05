import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pages;
  @Input() rootPath;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  public changePage(page: number): void {
    if (page === this.pages.current_page) return;
    this.onPageChange.emit(page);
  }
}
