document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos
    const skillsList = document.getElementById("skillsList");
    const addSkillBtn = document.getElementById("add-skill");
    const educationList = document.getElementById("educationList");
    const addEducationBtn = document.getElementById("add-education");
    const languagesList = document.getElementById("lenguajesList");
    const addLanguageBtn = document.getElementById("add-lenguaje");

    // Función para agregar un ítem (habilidad, idioma o educación)
    function addItem(list, promptText, itemType) {
        const item = prompt(promptText);
        if (item) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
            ${itemType === 'education' ? `<strong>${item}</strong><br>` : item}
            <button class="edit-btn"><i class="bi bi-pencil"></i></button>
            <button class="delete-btn"><i class="bi bi-trash"></i></button>
        `;

            listItem.querySelector(".edit-btn").addEventListener("click", () => editItem(listItem, itemType));
            listItem.querySelector(".delete-btn").addEventListener("click", () => deleteItem(listItem, list));

            list.appendChild(listItem);
        }
    }


    // Función para editar un ítem
    function editItem(listItem, itemType) {
        const itemText = itemType === 'education' ? listItem.querySelector("strong").textContent : listItem.firstChild.textContent;
        const newItem = prompt("Modificar el ítem", itemText);
        if (newItem) {
            if (itemType === 'education') {
                listItem.querySelector("strong").textContent = newItem;
            } else {
                listItem.firstChild.textContent = newItem;
            }
        }
    }

    // Función para eliminar un ítem
    function deleteItem(listItem, list) {
        if (confirm("¿Está seguro de que desea eliminar este ítem?")) {
            list.removeChild(listItem);
        }
    }

    // Añadir eventos a los botones de agregar
    addSkillBtn.addEventListener("click", () => addItem(skillsList, "Ingrese el nombre de la habilidad:", 'skill'));
    addEducationBtn.addEventListener("click", () => addItem(educationList, "Ingrese el nombre del título educativo:", 'education'));
    addLanguageBtn.addEventListener("click", () => addItem(languagesList, "Ingrese el nombre del idioma:", 'language'));

    // Delegar eventos para editar y eliminar ítems ya existentes
    function setupEventListeners(list, itemType) {
        list.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("edit-btn")) {
                editItem(target.parentElement, itemType);
            } else if (target.classList.contains("delete-btn")) {
                deleteItem(target.parentElement, list);
            }
        });
    }

    setupEventListeners(skillsList, 'skill');
    setupEventListeners(educationList, 'education');
    setupEventListeners(languagesList, 'language');
});
