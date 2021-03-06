import reducer from '../reducer'
import {
	setLoading,
	setError,
	setLocale,
	setStorageFlag,
	setStorageInfo,
} from '../actions'
import {initialState, ErrorRecord} from '../constants'

describe(`globalReducer`, () => {
	it(`Should return the initial state`, () => {
		expect(reducer(undefined, {})).toEqual(initialState)
	})
	it(`Should set error`, () => {
		const error = {
			code: 5,
			message: `test`,
			stack: `test`
		}
		const action = setError(error)
		const expectedResult = initialState.set(`error`, new ErrorRecord(error))
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
	it(`Should change loading state`, () => {
		const action = setLoading(true)
		const expectedResult = initialState.set(`loading`, true)
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
	it(`Should change locale state`, () => {
		const action = setLocale(`test`)
		const expectedResult = initialState.set(`locale`, `test`)
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
	it(`Should change "useStorage" state`, () => {
		const action = setStorageFlag(false)
		const expectedResult = initialState.set(`useStorage`, false)
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
	it(`Should change storageInfo state`, () => {
		const action = setStorageInfo(`test`)
		const expectedResult = initialState.set(`storageInfo`, `test`)
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
})