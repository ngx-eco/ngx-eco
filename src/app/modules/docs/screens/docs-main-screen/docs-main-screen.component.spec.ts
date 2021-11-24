import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsMainScreenComponent } from './docs-main-screen.component';

describe('DocsMainScreenComponent', () => {
  let component: DocsMainScreenComponent;
  let fixture: ComponentFixture<DocsMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
