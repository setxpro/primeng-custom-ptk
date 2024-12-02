import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengCustomComponent } from './primeng-custom.component';

describe('PrimengCustomComponent', () => {
  let component: PrimengCustomComponent;
  let fixture: ComponentFixture<PrimengCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
