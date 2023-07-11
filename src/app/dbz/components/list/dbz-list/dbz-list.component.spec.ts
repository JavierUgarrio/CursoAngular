import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzListComponent } from './dbz-list.component';

describe('DbzListComponent', () => {
  let component: DbzListComponent;
  let fixture: ComponentFixture<DbzListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzListComponent]
    });
    fixture = TestBed.createComponent(DbzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
