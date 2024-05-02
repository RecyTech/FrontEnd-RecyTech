import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVenderProductoComponent } from './form-vender-producto.component';

describe('FormVenderProductoComponent', () => {
  let component: FormVenderProductoComponent;
  let fixture: ComponentFixture<FormVenderProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormVenderProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormVenderProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
