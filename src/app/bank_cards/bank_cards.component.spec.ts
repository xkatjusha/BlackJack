/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Bank_cardsComponent } from './bank_cards.component';

describe('Bank_cardsComponent', () => {
  let component: Bank_cardsComponent;
  let fixture: ComponentFixture<Bank_cardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bank_cardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bank_cardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
