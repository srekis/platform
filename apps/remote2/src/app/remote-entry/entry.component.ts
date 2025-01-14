import {
  Component,
  Input,
  WritableSignal,
  effect,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Service } from '../service';

@Component({
  imports: [CommonModule, RouterModule],
  selector: `app-remote2-entry`,
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {
  @Input({ required: true }) public campaignId!: WritableSignal<string>;
  @Output() public buttonClicked = new EventEmitter<void>();

  @ViewChild('outlet') outlet!: RouterOutlet;

  public constructor(private service: Service) {
    effect(() => {
      console.log(
        'Remote2 app: campaignId from platform (host app)',
        this.campaignId()
      );
    });
  }

  protected clickButton() {
    this.buttonClicked.emit();
    this.service.increment();
  }
}
