describe('The question list', () => {
    beforeAll(() => {
        console.log('Before all!')
    });

    beforeEach(() => {
        console.log('before each')
    });

    afterAll(() => {
        console.log('after all')
    });

    afterEach(() => {
        console.log('after each')
    });


    it ('Should display a list of items', () => {
        expect(2+2).toEqual(4);
    });

    it.skip('Should be diferent', () => {
        expect(22+2).toEqual(24);
    });
});