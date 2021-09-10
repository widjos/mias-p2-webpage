import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CountryNamesComponent } from './country-names.component';

describe('CountryNamesComponent', () => {
  let component: CountryNamesComponent;
  let fixture: ComponentFixture<CountryNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryNamesComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
