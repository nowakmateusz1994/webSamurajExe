// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
    const text = e.target.value;
    div.textContent = '';
    passwords.forEach((password, index) => {

        if (text.toLowerCase() == password.toLowerCase()) {
            div.textContent = messages[index];
            e.target.value = '';
        } else {
            console.log('złe hasło')
        }
    })
}

input.addEventListener("input", showMessage)