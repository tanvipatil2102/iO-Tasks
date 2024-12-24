import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StsTableComponent } from './sts-table.component';

describe('StsTableComponent', () => {
  let component: StsTableComponent;
  let fixture: ComponentFixture<StsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
