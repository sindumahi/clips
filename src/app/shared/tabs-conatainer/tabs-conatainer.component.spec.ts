import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsConatainerComponent } from './tabs-conatainer.component';

describe('TabsConatainerComponent', () => {
  let component: TabsConatainerComponent;
  let fixture: ComponentFixture<TabsConatainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsConatainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsConatainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
