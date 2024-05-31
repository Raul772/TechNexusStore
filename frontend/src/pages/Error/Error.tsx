import { CircleX } from "lucide-react";

export default function () {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[300px] flex-col items-center justify-center rounded-xl bg-slate-300 dark:bg-slate-800 p-5">
        <CircleX size={30} />
        <h2 className="text-2xl font-bold">
          Erro 404
        </h2>
        <p>Verifique se o caminho está correto</p>
      </div>
    </div>
  )
};
