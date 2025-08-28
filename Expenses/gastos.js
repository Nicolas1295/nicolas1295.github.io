function total(){


//const food = document.getElementById('food');
//console.log(food);
//<input type="number" id="food" placeholder="Food">

//const food = document.getElementById('food').value;
//console.log(food);

    // Convert to a number with parseFloat and use || 0 to avoid NaN if the input is empty
    // parseFloat converts a text (string) into a number
    // || means "if that doesn't work, use the value on the right"

    const food = parseFloat(document.getElementById('food').value) || 0;
    const housing = parseFloat(document.getElementById('housing').value) || 0;
    const transportation = parseFloat(document.getElementById('transportation').value) || 0;
    const utilities = parseFloat(document.getElementById('utilities').value) || 0;
    const health = parseFloat(document.getElementById('health').value) || 0;
    const education = parseFloat(document.getElementById('education').value) || 0;
    const work = parseFloat(document.getElementById('work').value) || 0;
    const savings = parseFloat(document.getElementById('savings').value) || 0;
    const unexpected = parseFloat(document.getElementById('unexpected').value) || 0;

    const total = food + housing + transportation + utilities + health + education + work + savings + unexpected;

    const table = document.querySelector('#exp tbody')
    const row = document.createElement('tr') // Create a new table row element (it exists only in memory, not in the table yet)
    const columnfood = document.createElement('td') // Create a new table column element (it exists only in memory, not in the table yet)
    const columnhousing = document.createElement('td')
    const columntransportation = document.createElement('td')
    const columnutilities = document.createElement('td')
    const columnhealth = document.createElement('td')
    const columneducation = document.createElement('td')
    const columnwork = document.createElement('td')
    const columnsavings = document.createElement('td')
    const columnunexpected = document.createElement('td')
    const columntotal = document.createElement('td')

    columnfood.textContent = food; // Put the variable's value into the cell
    columnhousing.textContent = housing;
    columntransportation.textContent = transportation;
    columnutilities.textContent = utilities;
    columnhealth.textContent = health;
    columneducation.textContent = education;
    columnwork.textContent = work;
    columnsavings.textContent = savings;
    columnunexpected.textContent = unexpected;
    columntotal.textContent = total;

    row.appendChild(columnfood); // Put the cell into the row
    row.appendChild(columnhousing);
    row.appendChild(columntransportation);
    row.appendChild(columnutilities);
    row.appendChild(columnhealth);
    row.appendChild(columneducation);
    row.appendChild(columnwork);
    row.appendChild(columnsavings);
    row.appendChild(columnunexpected);
    row.appendChild(columntotal);

    table.appendChild(row); // Put the rows into the table

    clearform(); // 👈 this at the end


}

function clearform(){

    // Clear the input field (reset it to empty after using the value)
    document.getElementById('food').value = '';
    document.getElementById('housing').value = '';
    document.getElementById('transportation').value = '';
    document.getElementById('utilities').value = '';
    document.getElementById('health').value = '';
    document.getElementById('education').value = '';
    document.getElementById('work').value = '';
    document.getElementById('savings').value = '';
    document.getElementById('unexpected').value = '';

}

function cleartable() {
  const bodytable = document.querySelector('table tbody');
  bodytable.innerHTML = ''; // Remove all rows (clear the table body)
}