import ElementCreator from './../components/elementCreator'; 



export default function Form () {
    //note !!!!!
   // use localStorage to handle state

   const validation = (titleValue) => {
    const pattern = /[a-zA-Z0-9_ ]{3,10}/gm
    return pattern.test(titleValue) 
    ? true : false
   }
   function handleRemove (elementName) {
    const selectedTodo = ulNode.querySelector(`.${elementName}`);
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        localStorage.removeItem(`${elementName}`, `${elementName}`);
        selectedTodo.remove()
    };
   };
   function submitEdit (e,edittedLi) {
    e.preventDefault();
    const titleValue = titelNode.value;
    const valid = validation(titleValue);
    if (valid) {
        storage.setItem(`${titleValue}`, `${titleValue}`)
        edittedLi.textContent = titleValue;
        addBtns('delete',titleValue, edittedLi);
        addBtns('edit', titleValue ,edittedLi);
    }
   }
   function handleEdit (value) {
    formNode.removeChild(submitBtnNode);
    const editBtnObj = new ElementCreator({
        type: 'button',
        attributes: [
            { type: 'class', value: 'editSubmitBtn' }
        ],
        parent: formNode
    });
    editBtnObj.create();
    const editBtnNode = formNode.querySelector('.editSubmitBtn');
    editBtnNode.textContent = 'Edit';
    
    titelNode.value = value;
    const edittedLiNode = document.querySelector(`.${value}`);
    const valid = validation(value);
    if (valid) {
        console.log(valid)
        editBtnNode.addEventListener('click', (e) => submitEdit(e,edittedLiNode));
        storage.removeItem(`${value}`);

    }
    
    // newLiNode.textContent = titelNode.value;
    // ulNode.appendChild(newLiNode);
    // addBtns('delete', titelNode.value, newLiNode);
    // addBtns('edit', titelNode.value, newLiNode);
   }
   function addBtns (type , titleValue, parent) {
    const btnsObj = new ElementCreator({
        type: 'button',
        attributes: [
            {type: 'class', value: `${type}-btn ${titleValue}`}
        ],
        parent: parent
    });
    btnsObj.create();
    const btnsNodes = Array.from(parent.querySelectorAll(`.${type}-btn, ${titleValue}`));
    btnsNodes.forEach(node => {
        node.textContent = type
        type==='delete' ? node.addEventListener('click', () => handleRemove(titleValue))
        : node.addEventListener('click', () => handleEdit(titleValue));
    });
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
    
    const valid = validation(titleValue);
    if (valid) {
        li.create();
        const liNode = ulNode.querySelector(`.${titleValue}`);
        liNode.textContent = titleValue;
        addBtns('delete',titleValue, liNode);
        addBtns('edit', titleValue ,liNode);
        localStorage.setItem(`${titleValue}`, `${titleValue}`);
    }  
    titelNode.value = '';
   }

    const createStorageLi = () => {
        storageKeys.forEach(key => {
            const titleValue = storage[key];
            const liObj = new ElementCreator(
                {
                    type: 'li',
                    attributes: [
                        {type: 'value', value: titleValue},
                        {type: 'class', value: titleValue}  
                    ],
                    parent: ulNode
                }
            );
            liObj.create();
            const liNode = ulNode.querySelector(`.${titleValue}`);
            liNode.textContent = titleValue;
            addBtns('delete',titleValue, liNode);
            addBtns('edit', titleValue , liNode);
        });
    }
    const root = document.getElementById('root');
    const formObj = new ElementCreator({ type: 'form',  parent: root});
    formObj.create();
    const formNode = document.getElementsByTagName('form')[0];
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
    submitBtnNode.addEventListener('click', e => handleSubmit(e))
    const ulObj = new ElementCreator({
         type: 'ul', attributes : [{type: 'class', value: 'todo-list'}],
        })
    ulObj.create();
    const ulNode = document.querySelector('.todo-list');  
    const storage = localStorage;
    const storageKeys = Object.keys(storage);
    createStorageLi();
}