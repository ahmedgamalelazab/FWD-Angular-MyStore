import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheerUserComponent } from './cheer-user.component';

describe('CheerUserComponent', () => {
  let component: CheerUserComponent;
  let fixture: ComponentFixture<CheerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheerUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
