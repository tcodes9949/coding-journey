let contacts = [
{name: "Jeff", age: 18, email: "gmail"},
{name: "Tim", age: 49, email: "gmail"},
{name: "Bret", age: 22, email: "yahoo"
}
]

  console.log(contacts[1].name)
  console.log(contacts[0].email)
for ( let i = 0; i < contacts.length; i++) {
  if ( contacts[i].age >= 25 ) {
  console.log(
  contacts[i].name + " - "  + contacts[i].email)
}
}
