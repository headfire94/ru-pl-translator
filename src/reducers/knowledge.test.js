import knowledge from './knowledge'
jest.mock('uuid/v4', () => jest.fn(() => 1));

describe('knowledge reducer', () => {
    it('should handle initial state', () => {
        expect(
            knowledge(undefined, {})
        ).toEqual([])
    });

    it('should handle addToLearn', () => {
        expect(
            knowledge([], {
                type: 'ADD_TO_LEARN',
                payload: 'text1'
            })
        ).toEqual([
            {
                text: 'text1',
                id: 1
            }
        ])
    });

    it('should handle removeFromLearn', () => {
        expect(
            knowledge([{
                text: 'text1',
                id: 1
            }], {
                type: 'REMOVE_FROM_LEARN',
                payload: 1
            })
        ).toEqual([])
    });
});