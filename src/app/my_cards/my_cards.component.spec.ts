/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { My_cardsComponent } from './my_cards.component';

describe('My_cardsComponent', () => {
  let component: My_cardsComponent;
  let fixture: ComponentFixture<My_cardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My_cardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My_cardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
