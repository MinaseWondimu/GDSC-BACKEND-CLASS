function addEmployee(){

  let a= {
        id:1,
        name:"markan",
        position:"CEO",
        department:"Administration"


    }
   let b={
        id:2,
        name:"MANASSEH",
        position:"accountant",
        department:"Accounting and finance"
    }
    let c={
        id:3,
        name:"yonas",
        position:"Marketing Manager",
        department:"Marketing"
    }
    function listEmployees(){
        console.log(JSON.stringify(a.name))
        console.log(JSON.stringify(b.name))
        console.log(JSON.stringify(c.name))
        
    }

   listEmployees()
   let id=2
function findemployee(id){
  if (id===1){
    console.log(a.name)
  } else if(id===2){
    console.log(b.name)
  }
 else {
     console.log(c.name)
   
 }
      
    }

findemployee(2)
function updateEmployee(id,newname,newposition,newdepartment){
Object.assign(a,{
    id:1,
   newname:"Birhanu",
   newposition:"Team leader",
   newdepartment:"Leadership"

})
Object.assign(b,{
    id:2,
    newname:"milkiyas",
    newposition:"casher",
    newdepartment:"Bookkeeping"
})
Object.assign(c,{
    id:3,
    newnamename:"Meaza",
    newposition:"sales administrator",
    newdepartment:"sales force administration"
    
})

}
updateEmployee()
function deleteEmployee(id){
    let del=1
    if(del===2){
        delete a.id
        delete a.name
        delete a.department
        delete a.position
    }
    else if(del===2){
        delete b.id
        delete b.name
        delete b.position
        delete b.department
    }
    else{
        delete c.id
        delete c.name
        delete c.position
        delete c.department
    }

}
console.log(deleteEmployee())
console.log(a)
}
addEmployee()

