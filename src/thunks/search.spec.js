import { expect, assert } from 'chai'
import * as sinon from 'sinon'
import applicationStore from '../application/store'
import * as ApiRepo from '../api/calls'
import { loadCurrentSearchQuery, searchThunk } from "./search";

let sandbox

describe('search thunks', () => {
	describe('#loadCurrentSearchQuery', () => {

		beforeEach(() => sandbox = sinon.createSandbox())
		afterEach(() => sandbox.restore())

		const query = 'search'

		it('should set noResultsFound value to state if body does not exist', async () => {
			sandbox.stub(ApiRepo, 'getRepos').resolves({ items: [] })

			const store = applicationStore({})
			await store.dispatch(loadCurrentSearchQuery(query))

			const state = store.getState()

			expect(state.searchReducer.noResults).to.equal(true)
		})

		it('should reset previous items before new query', async () => {
			sandbox.stub(ApiRepo, 'getRepos').resolves({ items: [{ id: 4 }, { id: 5 }] })
			const store = applicationStore({
				repoReducer: {
					uids: [1, 2, 3]
				}
			})

			await store.dispatch(loadCurrentSearchQuery(query))

			const state = store.getState()

			expect(state.repoReducer.uids.length).to.equal(2)
		})

		it('should set list of ids under the uid state branch', async () => {
			sandbox.stub(ApiRepo, 'getRepos').resolves({ items: [{ id: 1 }, { id: 2 }] })
			const store = applicationStore({})

			await store.dispatch(loadCurrentSearchQuery(query))

			const { uids } = store.getState().repoReducer

			uids.forEach((uid, index) => {
				expect(uid).to.equal(uids[index])
			})
		})

		it('should set items by id to state', async () => {
			const itemsRepoMock = [{
				id: 1,
				full_name: 'one'
			}]

			sandbox.stub(ApiRepo, 'getRepos').resolves({ items: itemsRepoMock })
			const store = applicationStore({})

			await store.dispatch(loadCurrentSearchQuery(query))

			const { repoReducer: { uids, byUid } } = store.getState()
			const uid = uids[0]

			expect(byUid[uid].id).to.equal(itemsRepoMock.id)
			expect(byUid[uid].fullName).to.equal(itemsRepoMock[0].full_name)
			expect(byUid[uid].license).to.equal('')
		})
	})

	describe('#searchThunk', () => {

		beforeEach(() => sandbox = sinon.createSandbox())
		afterEach(() => sandbox.restore())

		it('should make a request if more than 2 letters are typed only', async () => {
			const thunkMock = sandbox.stub(ApiRepo, 'getRepos').resolves({ items: [] })

			const query = 'search'

			const store = applicationStore({})
			await store.dispatch(searchThunk(query))

			assert(thunkMock.called)

		})

		it('should not make a request with query less than 2 letters length', async () => {
			const thunkMock = sandbox.stub(ApiRepo, 'getRepos').resolves({ items: [] })

			const query = 's'
			const store = applicationStore({})
			await store.dispatch(searchThunk(query))

			assert(thunkMock.notCalled)
		})
	})
})
