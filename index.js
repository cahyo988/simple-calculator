function getValues() {
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    return{angka1, angka2}
}

function displayResult(result){
    document.getElementById('hasil').innerHTML='Hasil:'+ result;
}

function handleKali(){
    const {angka1, angka2} = getValues();
    result = angka1 * angka2;
    displayResult(result);
}
function handleBagi(){
    const {angka1, angka2} = getValues();
    result = angka1 / angka2;
    displayResult(result);
}
function handleTambah(){
    const {angka1, angka2} = getValues();
    result = angka1 + angka2;
    displayResult(result);
}
function handleKurang(){
    const {angka1, angka2} = getValues();
    result = angka1 - angka2;
    displayResult(result);
}