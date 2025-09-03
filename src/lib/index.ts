export const fetchUsers = async ()=>{
    const res =await fetch("https://jsonplaceholder.typicode.com/users")
   return res.json()
}


export const fetchUserById = async (id:string)=>{
    const res =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
   return res.json()
}
