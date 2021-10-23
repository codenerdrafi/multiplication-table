// input type specified here

function isInputNumber(evt){
    const ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
}

//main coding started here

function getResult(){
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    const clear = document.getElementById('clear');
    const textarea = document.getElementById('input');
    if(input <= 0 || input > 1000) {
        alert('Please enter a valid number or numbers between 1 and 1000')
    } 
    else{
        output.innerHTML = " ";
        output.style.display = "block";
        for(let i=0; i<=10; i++){
        const result = `${input} * ${i} = ${input * i} <hr>`;
        output.innerHTML += result;
        }
        textarea.value = '';
        clear.style.display = "block"
    }
};
function clearTable(){
    const output = document.getElementById('output');
    const clear = document.getElementById('clear');
    clear.style.display = 'none';
    output.style.display = 'none';
};