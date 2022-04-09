import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-row',
  templateUrl: './empty-row.component.html',
  styleUrls: ['./empty-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyRowComponent implements OnInit {
  @Input() height: string;

  constructor() {
    this.height = '0';
  }

  ngOnInit(): void {

  }

}
