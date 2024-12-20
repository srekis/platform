import {CommonModule} from '@angular/common';
import {Component, computed, Signal, signal} from '@angular/core';
import {RemoteEntryComponent} from '@platform/remote';
import {RemoteWrapperComponent} from '../remote-wrapper/remote-wrapper.component';
import {TestWrapperComponent} from '../test-wrapper/test-wrapper.component';
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, RemoteEntryComponent, RemoteWrapperComponent, TestWrapperComponent, CounterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private products = signal([
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 15 },
    { name: 'Product C', price: 20 },
  ]);
  
  protected campaignId = signal('1');
  protected count = signal(0);
  protected totalValue = computed(() =>
    this.products().reduce((sum, product) => sum + product.price, 0)
  );

  protected onButtonClicked(): void {
    console.log('onButtonClicked');
    this.products.update(products => [...products, { name: `Product ${this.generateRandomId()}`, price: 25 }]);
  }

  protected onIncrementCounter(): void {
    this.count.update(count => count + 1);

    const doubleCount: Signal<number> = computed(() => this.count() * 2);
    console.log(doubleCount());
  }

  protected onCampaignIdChanged(): void {
    this.campaignId.set(this.generateRandomId());
  }

  private generateRandomId(): string {
    return crypto.randomUUID();
  }
}
