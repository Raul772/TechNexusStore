import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {

  const { signin } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signin({ email, password });
    navigate("/");
  }



  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[300px] flex-col items-center justify-center rounded-xl bg-slate-300 dark:bg-slate-800 p-5">
        {
          loading ? <p>Por favor, aguarde...</p> : <>
            <h2 className="pb-5 text-lg font-bold">
              Entre com seu e-mail e senha!
            </h2>

            <div className="hidden">
              <p>Sign in failed. Check the details you provided are correct.</p>
            </div>
            <hr />
            <form
              className="w-full"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="mb-2">
                <label
                  htmlFor="input-email-for-credentials-provider"
                  className="mb-2 block text-sm dark:text-slate-200"
                >
                  E-mail
                </label>
                <input
                  name="email"
                  id="input-email-for-credentials-provider"
                  type="email"
                  placeholder="joãozinho@exemplo.com"
                  className="w-full rounded px-1 py-2 text-black"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="input-password-for-credentials-provider"
                  className="mb-2 block text-sm dark:text-slate-200"
                >
                  Senha
                </label>
                <input
                  name="password"
                  id="input-password-for-credentials-provider"
                  type="password"
                  className="w-full appearance-none rounded px-1 py-2 text-black shadow"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-5 grid justify-center">
                <button
                  className="rounded border-2 border-slate-700 px-8 py-4 font-bold dark:text-white hover:bg-slate-700"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </>}
      </div>
    </div>
  )
};
