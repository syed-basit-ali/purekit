import { cloneDeep as _cloneDeep } from 'lodash';
import { cloneDeep } from '../../src/lang';

const objects = [{ a: 1 }, { b: 2 }];

describe('Lang', () => {
	describe('cloneDeep', () => {
		it('_.cloneDeep(objects)', () => {
			const deep = cloneDeep(objects);
			const _deep = _cloneDeep(objects);

			expect(deep[0] === objects[0]).toEqual(_deep[0] === objects[0]);
		});
	});
});