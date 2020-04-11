import { TestBed } from '@angular/core/testing';
import { NodoService } from './login.service';
describe('NodoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(NodoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=login.service.spec.js.map