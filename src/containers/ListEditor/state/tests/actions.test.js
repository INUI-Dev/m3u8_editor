import {LOAD_NEW_LIST, SET_NEW_LIST} from '../constants'
import {loadNewList, setNewList} from '../actions'
import {testValues} from './constants'

describe(`ListEditor actions`, () => {
	describe(`loadNewList`, () => {
		it(`should return the type and payload object`, () => {
			const expectedResult = {
				type: LOAD_NEW_LIST,
				payload: testValues.string
			}
			expect(loadNewList(testValues.string)).toEqual(expectedResult)
		})
	})
	describe(`setNewList`, () => {
		it(`should return the type and payload object`, () => {
			const expectedResult = {
				type: SET_NEW_LIST,
				payload: testValues.string
			}
			expect(setNewList(testValues.string)).toEqual(expectedResult)
		})
	})
})