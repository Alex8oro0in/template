import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotListFilterComponent } from './bot-list-filter.component';

describe('BotListFilterComponent', () => {
  let component: BotListFilterComponent;
  let fixture: ComponentFixture<BotListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
