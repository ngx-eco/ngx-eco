import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsButtonScreenComponent } from './docs-button-screen.component';

describe('DocsButtonScreenComponent', () => {
  let component: DocsButtonScreenComponent;
  let fixture: ComponentFixture<DocsButtonScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsButtonScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsButtonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
