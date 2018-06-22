import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stat = true;
 @Output() togglesidebar = new EventEmitter<{status: boolean}>();
  constructor() { }
  sidebartoggle() {
    this.stat = !this.stat;
    this.togglesidebar.emit({status: this.stat});
  }
  ngOnInit() {
  }

}
