import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models';

import {
  DashedLineChartData,
  HeatmapChartData,
  LineChartData,
  PieChartData,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  public loadLineChartData(): Observable<LineChartData> {
    return of({
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    });
  }
  public loadEmployeeTableData(): Observable<Employee[]> {
    return of([
      {
        name: 'Joe James',
        company: 'Example Inc.',
        city: 'Yonkers',
        state: 'NY',
      },
      {
        name: 'John Walsh',
        company: 'Example Inc.',
        city: 'Hartford',
        state: 'CT',
      },
      { name: 'Bob Herm', company: 'Example Inc.', city: 'Tampa', state: 'FL' },
      {
        name: 'James Houston',
        company: 'Example Inc.',
        city: 'Dallas',
        state: 'TX',
      },
      {
        name: 'Prabhakar Linwood',
        company: 'Example Inc.',
        city: 'Hartford',
        state: 'CT',
      },
      {
        name: 'Kaui Ignace',
        company: 'Example Inc.',
        city: 'Yonkers',
        state: 'NY',
      },
      {
        name: 'Esperanza Susanne',
        company: 'Example Inc.',
        city: 'Hartford',
        state: 'CT',
      },
      {
        name: 'Christian Birgitte',
        company: 'Example Inc.',
        city: 'Tampa',
        state: 'FL',
      },
      {
        name: 'Meral Elias',
        company: 'Example Inc.',
        city: 'Hartford',
        state: 'CT',
      },
      {
        name: 'Deep Pau',
        company: 'Example Inc.',
        city: 'Yonkers',
        state: 'NY',
      },
      {
        name: 'Sebastiana Hani',
        company: 'Example Inc.',
        city: 'Dallas',
        state: 'TX',
      },
      {
        name: 'Marciano Oihana',
        company: 'Example Inc.',
        city: 'Yonkers',
        state: 'NY',
      },
      {
        name: 'Brigid Ankur',
        company: 'Example Inc.',
        city: 'Dallas',
        state: 'TX',
      },
      {
        name: 'Anna Siranush',
        company: 'Example Inc.',
        city: 'Yonkers',
        state: 'NY',
      },
      {
        name: 'Avram Sylva',
        company: 'Example Inc.',
        city: 'Hartford',
        state: 'CT',
      },
      {
        name: 'Serafima Babatunde',
        company: 'Example Inc.',
        city: 'Tampa',
        state: 'FL',
      },
      {
        name: 'Gaston Festus',
        company: 'Example Inc.',
        city: 'Tampa',
        state: 'FL',
      },
    ]);
  }
  public dashedLineChartData(): Observable<DashedLineChartData> {
    return of({
      series: [
        {
          name: 'Claims',
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
       
      ],
      categories: [
        'Jan',
        'Fev',
        'Mars',
        'Avr',
        'Mai',
        'Juin',
        'Juit',
        'Aout',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ],
    });
  }
  

  public loadPieChartData(): Observable<PieChartData> {
    return of({
      series: [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ],
      labels: ['Time', 'Quality', 'Service', 'Other'],
    });
  }

  public loadHeatmapChartData(): Observable<HeatmapChartData> {
    return of({
      series: [
        {
          name: 'Metric1',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric2',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric3',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric4',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric5',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric6',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric7',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric8',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric9',
          data: this.generateApexHeatmapChartData(18, {
            min: 0,
            max: 90,
          }),
        },
      ],
    });
  }

  private generateApexHeatmapChartData(count, yrange): number[] {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = 'w' + (i + 1).toString();
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({ x, y });
      i++;
    }
    return series;
  }
}
