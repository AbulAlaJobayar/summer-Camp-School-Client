import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const PaymentData = () => {
       const {user}=useContext(AuthContext)
       const {refetch, data: payment =[] } = useQuery({
              queryKey: ['paymenthistory',user?.email],
              queryFn:async () => {
                const res = await fetch(`https://assinment-12-server-ten.vercel.app/paymenthistory?email=${user?.email}`);
                return res.json();
                 
              }
            })
            return [payment,refetch]
       
       }
export default PaymentData;