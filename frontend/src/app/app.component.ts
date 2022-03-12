import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Last Press';

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
}
