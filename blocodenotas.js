document.getElementById('saveButton').addEventListener('click', function () {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;

    if (noteText) {
        const notesList = document.getElementById('notesList');
        const newNote = document.createElement('li');
        newNote.textContent = noteText;
        notesList.appendChild(newNote);
        noteInput.value = ''; // Limpar o campo de entrada
    } else {
        alert('Por favor, escreva uma anotação.');
    }
});