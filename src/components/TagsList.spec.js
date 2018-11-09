import React from 'react';
import TagsList from './TagsList';
import renderer from 'react-test-renderer';

describe('The tags list', ()=> {
    it('render as expected', ( ()=> {
        const tree = renderer.create(<TagsList tags={['css', 'html', 'swift']} />)
        .toJSON();
        console.log(tree);

        expect(tree).toMatchSnapshot();
    }));
});

