import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTextComponent } from './widget-text.component';

describe('WidgetHtmlComponent', () => {
  let component: WidgetTextComponent;
  let fixture: ComponentFixture<WidgetTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
