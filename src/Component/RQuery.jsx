import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { useQuery } from '@tanstack/react-query'

const RQuery=()=>{
const {user}=useContext(AuthContext)
const {refetch, data: studentdata =[] } = useQuery({
       queryKey: ['studentdatas',user?.email],
       queryFn:async () => {
         const res = await fetch(`http://localhost:5000/studentdatas?email=${user?.email}`);
         return res.json();
          
       }
     })
     return [studentdata,refetch]

}
export default RQuery