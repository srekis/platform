import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternalMicroFrontendComponent } from './external-micro-frontend.component';

describe('ExternalMicroFrontendComponent', () => {
  let component: ExternalMicroFrontendComponent;
  let fixture: ComponentFixture<ExternalMicroFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalMicroFrontendComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalMicroFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
