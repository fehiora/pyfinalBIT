import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataUserComponent } from './updata-user.component';

describe('UpdataUserComponent', () => {
  let component: UpdataUserComponent;
  let fixture: ComponentFixture<UpdataUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdataUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
