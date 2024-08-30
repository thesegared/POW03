document.addEventListener("DOMContentLoaded", () => {
    const skillsList = document.getElementById("skillsList");
    const addSkillBtn = document.getElementById("addSkillBtn");
    const academicHistoryElement = document.getElementById("academicHistory");
    const editAcademicHistoryBtn = document.getElementById("editAcademicHistoryBtn");

    // Function to add a skill
    function addSkill() {
        const skill = prompt("Ingrese el nombre de la habilidad:");
        if (skill) {
            const listItem = document.createElement("li");

            // Create text node for skill
            const skillText = document.createElement("span");
            skillText.textContent = skill;
            listItem.appendChild(skillText);

            // Create edit button
            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.addEventListener("click", () => editSkill(listItem, skillText));
            listItem.appendChild(editBtn);

            // Create delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => deleteSkill(listItem));
            listItem.appendChild(deleteBtn);

            skillsList.appendChild(listItem);
        }
    }

    // Function to edit a skill
    function editSkill(listItem, skillText) {
        const newSkill = prompt("Modificar la habilidad", skillText.textContent);
        if (newSkill) {
            skillText.textContent = newSkill;
        }
    }

    // Function to delete a skill
    function deleteSkill(listItem) {
        if (confirm("¿Está seguro de que desea eliminar esta habilidad?")) {
            skillsList.removeChild(listItem);
        }
    }

    // Function to edit the academic history
    function editAcademicHistory() {
        const newHistory = prompt("Modificar el historial académico", academicHistoryElement.textContent);
        if (newHistory) {
            academicHistoryElement.textContent = newHistory;
        }
    }

    // Add event listeners to buttons
    addSkillBtn.addEventListener("click", addSkill);
    editAcademicHistoryBtn.addEventListener("click", editAcademicHistory);
});
