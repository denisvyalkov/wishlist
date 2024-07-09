import { Component, Input } from '@angular/core';
import { Good } from '../../shared/models/models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'wish-good-description',
  styleUrls: ['good-description-component.scss'],
  templateUrl: 'good-description-component.html',
})
export class WishGoodDescription {
  @Input() good: Good | null = null;


}
