import ElementCreator from './../components/elementCreator'; 

export default function Form () {
    const root = document.getElementById('root');
    const form = new ElementCreator({ type: 'form',  parent: root});
    form.create();
    const formNode = document.getElementsByTagName('form')[0];
    const titel = new ElementCreator({ type: 'input',
    attributes: [{type: 'placeholder', value: 'Title...'}],
    parent: formNode});
    titel.create();
    const submitBtn = new ElementCreator({
        type: 'button', attributes: [{type: 'type', value: 'submit'}, {type: 'class', value: 'submitBtn'}],
        parent: formNode
    });
    submitBtn.create();
    const submitBtnNode = document.querySelector('.submitBtn');
    submitBtnNode.textContent = 'Add';
}