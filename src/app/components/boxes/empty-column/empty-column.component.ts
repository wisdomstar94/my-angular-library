import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-column',
  templateUrl: './empty-column.component.html',
  styleUrls: ['./empty-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyColumnComponent implements OnInit {
  @Input() width: string;

  constructor() {
    this.width = '0';
  }

  ngOnInit(): void {

  }

}
