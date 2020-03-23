import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewArtComponent } from './page-new-art.component';

describe('PageNewArtComponent', () => {
  let component: PageNewArtComponent;
  let fixture: ComponentFixture<PageNewArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
