import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArtDetailsComponent } from './page-art-details.component';

describe('PageArtDetailsComponent', () => {
  let component: PageArtDetailsComponent;
  let fixture: ComponentFixture<PageArtDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArtDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
