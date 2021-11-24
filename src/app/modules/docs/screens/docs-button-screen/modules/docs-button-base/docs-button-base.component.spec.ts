import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsButtonBaseComponent } from './docs-button-base.component';

describe('DocsButtonBaseComponent', () => {
  let component: DocsButtonBaseComponent;
  let fixture: ComponentFixture<DocsButtonBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsButtonBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsButtonBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
