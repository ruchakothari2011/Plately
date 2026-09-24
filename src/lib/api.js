const API=import.meta.env.VITE_API_URL||'http://localhost:5000/api';
export const api=async(path,options={})=>{const token=localStorage.getItem('plately-token');const res=await fetch(API+path,{...options,headers:{'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`}:{}) ,...(options.headers||{})}});const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data.message||'Request failed');return data};
export const register=(body)=>api('/auth/register',{method:'POST',body:JSON.stringify(body)});
export const login=(body)=>api('/auth/login',{method:'POST',body:JSON.stringify(body)});
export const createOrder=(body)=>api('/orders',{method:'POST',body:JSON.stringify(body)});
export const createPayment=(orderId)=>api('/payments/create-order',{method:'POST',body:JSON.stringify({orderId})});
export const verifyPayment=(body)=>api('/payments/verify',{method:'POST',body:JSON.stringify(body)});
