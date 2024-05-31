import { useState } from "react";

export default function Signin(){
  
  const [loading, setLoading] = useState(false);


  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[300px] flex-col items-center justify-center rounded-xl bg-slate-800 p-5">
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
              action="http://localhost/api/auth/callback/credentials"
              method="POST"
              className="w-full"
            >
              <div className="mb-2">
                <label
                  htmlFor="input-email-for-credentials-provider"
                  className="mb-2 block text-sm text-slate-200"
                >
                  E-mail
                </label>
                <input
                  name="email"
                  id="input-email-for-credentials-provider"
                  type="email"
                  placeholder="joãozinho@exemplo.com"
                  className="w-full rounded px-1 py-2 text-black"
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="input-password-for-credentials-provider"
                  className="mb-2 block text-sm text-slate-200"
                >
                  Senha
                </label>
                <input
                  name="password"
                  id="input-password-for-credentials-provider"
                  type="password"
                  className="w-full appearance-none rounded px-1 py-2 text-black shadow"
                />
              </div>
              <div className="mt-5 grid justify-center">
                <button
                  className="rounded border-2 border-slate-700 px-8 py-4 font-bold text-white hover:bg-slate-700"
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
