import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

/*describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'unittest'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('unittest');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to unittest!');
  }));
});  */

// this is a simple test for showing you how to fix a test result
// it simply tests if something is true

// describe holds the description of the suite of tests being created
// the second parameter of describe is the spec definitions
describe('AppComponent', () => {
  // the 'it' keyword is a function with an expectation which is revealed
  // by the VSCode intellisense; it is the description of the assertion
  // then within the it block the assertion is made to see if the 
  // value is as expected
  it('true should be true', () => {
    expect(true).toBe(false);
  });
});
// run this with ng test then correct the error


