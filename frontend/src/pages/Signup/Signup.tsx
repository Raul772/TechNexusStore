import axios from "axios";
import { FormEvent, useState } from "react";


export default function Signup() {

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [loading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const postUser = async () => {
      const response = await axios.post(`${API_BASE_URL}api/user/`, {
        name,
        email,
        password
      });

      if (response) {
        location.href = "http://localhost:80/"
      }
    }
    postUser();
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[300px] flex-col items-center justify-center rounded-xl bg-slate-300 dark:bg-slate-800 p-5">
        {
          loading ? <p>Por favor, aguarde...</p> : <>
            <h2 className="pb-5 text-lg font-bold">
              Cadastre-se!
            </h2>

            <div className="hidden">
              <p>Sign up failed</p>
            </div>
            <hr />
            <form
              className="w-full"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="mb-2">
                <label
                  htmlFor="input-name-for-credentials-provider"
                  className="mb-2 block text-sm font-bold dark:text-slate-200"
                >
                  Nome
                </label>
                <input
                  name="name"
                  id="input-name-for-credentials-provider"
                  type="text"
                  placeholder="Fulano de tal"
                  className="w-full rounded px-1 py-2 text-black"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="input-email-for-credentials-provider"
                  className="mb-2 block text-sm font-bold dark:text-slate-200"
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
                  className="mb-2 block text-sm font-bold dark:text-slate-200"
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
                  Cadastrar
                </button>
              </div>
            </form>
          </>}
      </div>
    </div>
  )
};
