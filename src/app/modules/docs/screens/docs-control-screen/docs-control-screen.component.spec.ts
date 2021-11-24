import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsControlScreenComponent } from './docs-control-screen.component';

describe('DocsControlScreenComponent', () => {
  let component: DocsControlScreenComponent;
  let fixture: ComponentFixture<DocsControlScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsControlScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsControlScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
