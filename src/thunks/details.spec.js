import { assert, expect } from 'chai'
import * as sinon from 'sinon'
import applicationStore from '../application/store'
import * as ApiRepo from '../api/calls'
import { loadLoadCommitCountPerWeek, toggleStarredStatus } from './details';

let sandbox

describe('details page', () => {

	const uid = 1

	describe('#toggleStarredStatus', () => {

		beforeEach(() => sandbox = sinon.createSandbox())
		afterEach(() => sandbox.restore())

		it('should call `unstarARepo` if repo is starred', async () => {

			const thunkMock = sandbox.stub(ApiRepo, 'unstarARepo').resolves({})
			const starredRepoStatus = true

			const store = applicationStore({})
			await store.dispatch(toggleStarredStatus('path', uid, starredRepoStatus))

			assert(thunkMock.called)
		})

		it('should call `starARepo` if repo is not starred', async () => {

			const thunkMock = sandbox.stub(ApiRepo, 'starARepo').resolves({})
			const starredRepoStatus = false

			const store = applicationStore({})
			await store.dispatch(toggleStarredStatus('path', uid, starredRepoStatus))

			assert(thunkMock.called)
		})
	})

	describe('#loadLoadCommitCountPerWeek', () => {

		beforeEach(() => sandbox = sinon.createSandbox())
		afterEach(() => sandbox.restore())

		const contributors = 10
		const issues = 1

		it('should make `getCommitsActivity` api call', async () => {
			const thunkMock = sandbox.stub(ApiRepo, 'getCommitsActivity').resolves({})

			const store = applicationStore({
				repoReducer: {
					uids: [uid],
					byUid: {
						[uid]: {
							issues,
							contributors
						}
					}
				}
			})

			await store.dispatch(loadLoadCommitCountPerWeek('path', uid))

			assert(thunkMock.called)
		})

		it('should calculate effective commits', async () => {

			// mocks
			const dataMock = {
				status: 200,
				body: [{
					"days": [
						0,
						3,
						7,
						4,
						15,
						1,
						0
					],
					"total": 30,
					"week": 1521936000
				}]
			}

			const contributors = 10
			const issues = 1

			sandbox.stub(ApiRepo, 'getCommitsActivity').resolves(dataMock)

			const store = applicationStore({
				repoReducer: {
					uids: [uid],
					byUid: {
						[uid]: {
							issues,
							contributors
						}
					}
				}
			})

			//execution
			await store.dispatch(loadLoadCommitCountPerWeek('path', uid))

			const state = store.getState()

			const commits = dataMock.body[0].total
			const effectiveCommits = contributors * commits / issues

			expect(state.commitsData[0].commits).to.eq(effectiveCommits)

		})

	})


})
