document.getElementById('calculatorForm').addEventListener('submit', function (event) {

    event.preventDefault();
    hitung();
    document.getElementById('CelsiustoFahreinheit').value = '';
});

document.getElementById('CelsiustoFahreinheit').addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        hitung();
        document.getElementById('CelsiustoFahreinheit').value = '';
    }
});

function hitung() {
    var CelsiustoFahreinheit = document.getElementById('CelsiustoFahreinheit').value;
    if (isNaN(CelsiustoFahreinheit)) {
        alert('Masukkan Angka.');
        return;
    }

    var fahreinheit = (CelsiustoFahreinheit * (9/5)) + 32;
    document.getElementById('result').innerHTML = fahreinheit.toFixed() + "°F";
    document.getElementById('formula').innerHTML = CelsiustoFahreinheit + "°C" + " x (9/5) + 32" + " = " + fahreinheit.toFixed() + "°F" ;

}