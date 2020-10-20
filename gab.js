const id = document.querySelector('#id')
const fullname = document.querySelector('#fullanme')
const male = document.querySelector('#male')
const female = document.querySelector('#female')
const btn = document.querySelector('.formulir')
const tabel = document.querySelector('tbody')
const gender = [male,female]
const faculty = document.querySelector('#fakultas')
const prodi = document.querySelector('#jurusan')
const form = document.querySelector('#formulir')
form.addEventListener('submit',addstudent);

//addstudent pada tabel
function addstudent(add){   
    add.preventDefault()

    const kelamin = gender.reduce(x =>{
        if(x.checked){
            return x.value
        }
    })
    const insertRows = document.createElement('tr')
    const dataId = document.createElement('td')
    const datafullname = document.createElement('td')
    const datagender = document.createElement('td')
    const datafaculty = document.createElement('td')
    const dataprodi = document.createElement('td')
    const datadelete = document.createElement('button')

    dataId.innerHTML = id.value;
    datafullname.innerHTML = fullname.value;
    datagender.innerHTML = kelamin;
    datafaculty.innerHTML = faculty.value;
    dataprodi.innerHTML = prodi.value;
    
    insertRows.appendChild(dataId)
    insertRows.appendChild(datafullname)
    insertRows.appendChild(datagender)
    insertRows.appendChild(datafaculty)
    insertRows.appendChild(dataprodi)
    insertRows.appendChild(datadelete)

    tabel.appendChild(insertRows)



}