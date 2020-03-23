import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArtListComponent } from './page-art-list.component';

describe('PageArtListComponent', () => {
  let component: PageArtListComponent;
  let fixture: ComponentFixture<PageArtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
