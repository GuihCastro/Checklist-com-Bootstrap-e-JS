function addItem() {
    const checklistItems = document.getElementById('checklist-items');
    const newItem = document.getElementById('floatingTextarea').value;

    if (newItem.trim() === '') {
        alert('Por favor, insira informações válidas para o item.');
        return;
    }

    const inputTextarea = document.createElement('div');
    inputTextarea.classList.add('form-check');
    inputTextarea.innerHTML = `
        <input class="form-check-input" type="checkbox" id="item${checklistItems.childElementCount + 1}">
        <label class="form-check-label" for="item${checklistItems.childElementCount + 1}">
            ${newItem}
        </label>
        <button type="button" class="btn btn-outline-danger btn-sm" onclick="removeItem(this)"><i class="fas fa-times"></i></button>
        <br><br>

    `;
    checklistItems.appendChild(inputTextarea);

    document.getElementById('floatingTextarea').value = '';
}

function removeItem(button) {
    const itemToRemove = button.parentElement;
    itemToRemove.remove();
}

document.getElementById('addItem').addEventListener('click', addItem);

const checklist = document.getElementById('checklist-items');
checklist.addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
        const label = event.target.nextElementSibling;
        if (event.target.checked) {
            label.classList.add('checked');
        } else {
            label.classList.remove('checked');
        }
    }
});