

import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scrollY = new BehaviorSubject<number>(0);
  scrollY$ = this.scrollY.asObservable();

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this._document.addEventListener('scroll', ($event) => {
      this.scrollY.next(this.onContentScrolled());
    });
  }

  onContentScrolled(): number {
    const offset = window.pageYOffset;
    return offset;
  }

  ngOnInit(): void {
  }

}
