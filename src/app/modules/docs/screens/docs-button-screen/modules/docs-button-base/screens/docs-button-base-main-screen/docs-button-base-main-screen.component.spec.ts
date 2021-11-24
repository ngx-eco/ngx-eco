import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsButtonBaseMainScreenComponent } from './docs-button-base-main-screen.component';

describe('DocsButtonBaseMainScreenComponent', () => {
  let component: DocsButtonBaseMainScreenComponent;
  let fixture: ComponentFixture<DocsButtonBaseMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsButtonBaseMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsButtonBaseMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
