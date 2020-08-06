import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTrabajoComponent } from './menu-trabajo.component';

describe('MenuTrabajoComponent', () => {
  let component: MenuTrabajoComponent;
  let fixture: ComponentFixture<MenuTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
