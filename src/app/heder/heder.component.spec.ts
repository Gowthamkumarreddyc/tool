import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HederComponent } from './heder.component';

describe('HederComponent', () => {
  let component: HederComponent;
  let fixture: ComponentFixture<HederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HederComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
