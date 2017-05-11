import translator from './translator'

describe('translator reducer', () => {
    it('should handle initial state', () => {
        expect(
            translator(undefined, {})
        ).toEqual({
            russian: '',
            english: '',
            polish: ''
        })
    });

    it('should handle handleSearchSuccess', () => {
        expect(
            translator({
                russian: '',
                english: '',
                polish: ''
            }, {
                type: 'RUSSIAN_SEARCH_SUCCESS',
                payload: {
                    language: 'ru',
                    value: 'привет'
                }
            })
        ).toEqual({
            russian: 'привет',
            english: '',
            polish: ''
        })
    });
});