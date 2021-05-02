import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ChartsService } from '../../services';
import { DashedLineChartData, LineChartData, PieChartData } from '../../models';

@Component({
  selector: 'app-claim-page',
  templateUrl: './claim-page.component.html',
  styleUrls: ['./claim-page.component.scss'],
})
export class ClaimPageComponent {
  public lineChartData$: Observable<LineChartData>;
  public dashedLineChartData$: Observable<DashedLineChartData>;
  public pieChartData$: Observable<PieChartData>;

  constructor(private service: ChartsService) {
    this.lineChartData$ = this.service.loadLineChartData();
    this.dashedLineChartData$ = this.service.dashedLineChartData();
    this.pieChartData$ = this.service.loadPieChartData();
  }
}
