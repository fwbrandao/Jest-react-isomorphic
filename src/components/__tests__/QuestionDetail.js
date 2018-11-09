import { mapStateToProps, QuestionDetailDisplay} from '../QuestionDetail';
import React from 'react';
import renderer from 'react-test-renderer';

describe('The question Detail component', () => {
    describe('The container Element', ()=> {
        describe('mapStateToProps', () => {
            it('should map the state props correctly', ()=> {
                const sampleQuestion = {
                    question_id:42,
                    body:'space is big'
                };

                const appState = {
                    questions:[sampleQuestion]
                };
                const ownprops = {
                    question_id:42,
                };
                const componentState = mapStateToProps(appState, ownprops);
                console.log(componentState);
            });
        });
    });

    describe('the Display element', () => {
        it('Should not regress', () => {
            const tree = renderer.create(
                <QuestionDetailDisplay
                title="tilte"
                body='43'
                answer_count={0}
                tags={['hitchhicking']}
                />
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
});