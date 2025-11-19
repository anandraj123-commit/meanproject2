import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideView } from './side-view';

describe('SideView', () => {
  let component: SideView;
  let fixture: ComponentFixture<SideView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
