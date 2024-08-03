import ElementCreator from './../components/elementCreator'; 



export default function Form () {
   // create another form and remove it
   // when the user enters their name(for storage)
   const validation = () => {
    const pattern = /[a-zA-Z0-9_ ]{3,10}/gm
    return pattern.test(titelNode.value) 
    ? true : false
   }
   function handleRemove (elementName) {
    const selectedTodo = ulNode.querySelector(`.${elementName}`);
    const confirmed = confirm('Are you sure?');
    if (confirmed) selectedTodo.remove();
   }
   function handleSubmit  (e) {
    e.preventDefault();
    const titleValue = titelNode.value;
    const li = new ElementCreator(
        {
            type: 'li',
            attributes: [
                {type: 'value', value: titleValue},
                {type: 'class', value: titleValue}  
            ],
            parent: ulNode
        }
    );
    
    const valid = validation();
    if (valid) {
        li.create();
        const liNode = ulNode.querySelector(`.${titleValue}`);
        liNode.textContent = titleValue;
        const deleteBtnObj = new ElementCreator(
            {
                type: 'button',
                attributes: [
                    {type: 'class', value: `delete-btn ${titleValue}`}  
                ],
                parent: liNode
            }
        );
        deleteBtnObj.create();
        const deleteBtnNodes = liNode.querySelectorAll(`.delete-btn, ${titleValue}`);
        for (let i = 0; i < deleteBtnNodes.length; i++) {
            let selectedLiNode = ulNode.querySelector(`.${titleValue}`)
            deleteBtnNodes[i].textContent = 'x';
            deleteBtnNodes[i].addEventListener('click', () => handleRemove(titleValue));
        }
    }  
    titelNode.value = '';
   }


    const root = document.getElementById('root');
    const formObj = new ElementCreator({ type: 'form',  parent: root});
    formObj.create();
    const formNode = document.getElementsByTagName('form')[0];
    formNode.onsubmit = (e) => handleSubmit(e);
    const titelObj = new ElementCreator({ type: 'input',
    attributes: [{type: 'placeholder', value: 'Title...'},
        {type: 'id', value: 'title-input'}
    ], parent: formNode});
    titelObj.create();
    const titelNode = document.getElementById('title-input');
    const submitBtnObj = new ElementCreator({
        type: 'button', attributes: [{type: 'type', value: 'submit'}, {type: 'class', value: 'submitBtn'}],
        parent: formNode
    });
    submitBtnObj.create();
    const submitBtnNode = document.querySelector('.submitBtn');
    submitBtnNode.textContent = 'Add';
    const ulObj = new ElementCreator({
         type: 'ul', attributes : [{type: 'class', value: 'todo-list'}],
        })
    ulObj.create();
    const ulNode = document.querySelector('.todo-list');  
    const deleteBtnNodes = ulNode.getElementsByClassName(`delete-fn, ${titelNode.value}`);
}