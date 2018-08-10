import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
    // this is the reference to the counter component
    let component: CounterComponent;
    // the reference to the component with a few others things added on
    // to allow for change detection from within the tests you are running, 
    // native elements, the component instance, etc
    // 
    let fixture: ComponentFixture<CounterComponent>;
    let debugElement: DebugElement;
    let htmlElement: HTMLElement;

   // asynch since you need to call compileComponents
    beforeEach(async(() => {
        // new module just like any other module is created
        TestBed.configureTestingModule({
            declarations:[CounterComponent]
        })
        // waits for asynch templates to be loaded
        .compileComponents();
    }));
        

    beforeEach(() => {
        // gives testing version of CounterComponent
        fixture = TestBed.createComponent(CounterComponent);
        //get instance of teswing component 
        component = fixture.componentInstance;

        fixture.detectChanges();
        // query the elements in the components dom 
        debugElement = fixture.debugElement.query(By.css('p'));
        htmlElement = debugElement.nativeElement;

    });

    it('should display the current number of the counter', () => {
        // text on screen is number one ... the default
        expect(htmlElement.textContent).toEqual('Number: 1');
    })

    it('should increment by one', () => {
        //setup
        const initialValue = component.counter;
        //run
        component.increment();
        const newValue = component.counter;

        expect(newValue).toBeGreaterThan(initialValue);

    })


    it('should decrement by one', () => {
        //setup
        const initialValue = component.counter;
        //run
        component.decrement();
        const newValue = component.counter;

        expect(newValue).toBeLessThan(initialValue);

    })

});
