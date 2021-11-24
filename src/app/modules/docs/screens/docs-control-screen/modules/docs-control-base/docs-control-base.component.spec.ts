import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsControlBaseComponent } from './docs-control-base.component';

describe('DocsControlBaseComponent', () => {
  let component: DocsControlBaseComponent;
  let fixture: ComponentFixture<DocsControlBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsControlBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsControlBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
