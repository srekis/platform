import {
  Component,
  Input,
  WritableSignal,
  effect,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Service } from '../service';

@Component({
  imports: [CommonModule, RouterModule],
  selector: `app-remote2-entry`,
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
  //   console.log(this.outlet)
  //   if (this.outlet && this.outlet.component && this.outlet.component instanceof HomeComponent) {
  //     const childComponent = this.outlet.component;
  //
  //     childComponent.buttonClicked.subscribe(() => {
  //       console.log('clicked')
  //       this.service.increment();
  //       this.buttonClicked.emit();
  //     });
  //   }
  }

  clickButton() {
    this.buttonClicked.emit();
    this.service.increment();
  }
}
