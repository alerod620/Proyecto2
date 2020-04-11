import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
var collectionPath = path.join(__dirname, '../collection.json');
describe('ng-add', function () {
    it('works', function () {
        var runner = new SchematicTestRunner('schematics', collectionPath);
        var tree = runner.runSchematic('ng-add', {}, Tree.empty());
        expect(tree.files).toEqual([]);
    });
});
//# sourceMappingURL=index_spec.js.map