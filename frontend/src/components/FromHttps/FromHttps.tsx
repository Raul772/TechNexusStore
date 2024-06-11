import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FromHttps() {

  const { signin } = useAuth();
  const { email, password } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const login = async (email: string, password: string) => {
      
      const logged = await signin({ email, password });
      
      if(!('response' in logged)){ 
        navigate("/");
      }else{
        location.href = "https://localhost:443/signin/404"
      }
    } 

    if (email && password){
      login(email, password);
    }

  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center">

      <div className="flex w-[300px] flex-col items-center justify-center rounded-xl bg-slate-300 dark:bg-slate-800 p-5">
        <p>Redirecionando...</p>
      </div>

    </div>
  )
};
