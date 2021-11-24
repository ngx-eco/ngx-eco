import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsControlBaseMainScreenComponent } from './docs-control-base-main-screen.component';

describe('DocsControlBaseMainScreenComponent', () => {
  let component: DocsControlBaseMainScreenComponent;
  let fixture: ComponentFixture<DocsControlBaseMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsControlBaseMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsControlBaseMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
