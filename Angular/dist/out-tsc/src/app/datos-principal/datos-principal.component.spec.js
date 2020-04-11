import { async, TestBed } from '@angular/core/testing';
import { DatosPrincipalComponent } from './datos-principal.component';
describe('DatosPrincipalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DatosPrincipalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DatosPrincipalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=datos-principal.component.spec.js.map