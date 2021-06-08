import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RayModel } from '../models/ray.model'
import { RayService } from '../services/ray.service'

@Component({
  selector: 'app-ray-create',
  templateUrl: './ray-create.component.html',
  styleUrls: ['./ray-create.component.css'],
})
export class RayCreateComponent implements OnInit {
  model: RayModel = {
    capacity: 0,
    rayDescription: '',
    rayName: '',
    totalproduct: 0,
    rayonImg: null,
  }
  constructor(
    private readonly rayService: RayService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  async onSave() {
    console.log({ model: this.model })
    try {
      if (!this.model.rayName) {
        alert('Ray name should be valid')
        return
      }
      if (!this.model.rayDescription) {
        alert('Ray Description should be valid')
        return
      }
      if (this.model.capacity <= 0) {
        alert('Capacity should be positive')
        return
      }
      if (this.model.totalproduct <= 0) {
        alert('Total should be positive')
        return
      }
      const results: any = await this.rayService.saveRays(this.model)
      this.router.navigate(['/rays/list'])
    } catch (error) {
      console.log({ error })
    }
  }
}
