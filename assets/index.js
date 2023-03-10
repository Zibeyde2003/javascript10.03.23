const people =[
   { name:"jhon",surname:"Doe",age:30},
   {  name:"jhon",surname:"Doe",age:30},
{name:"jhon",surnamr:"Doe",age:30},
]
const tableBody=
document.querySelector("my-table tbody");
people.forEach(person=>{
    const row =
    document.createElement("tr");

    const nameCell =
    document.create.Element("td");
    nameCell.textContent=person.name;
})
