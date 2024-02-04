import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { BookingItem } from "../_components/booking-item";
import { Header } from "../_components/header";
import { db } from "../_lib/prisma";
import { BarbershopItem } from "./_components/barbershop-item";
import { Search } from "./_components/search";

export default async function Home() {
  //chamar prisma e pegar as barbearias
  const barbershops = await db.barbershop.findMany({})
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Fulano</h2>
        <p className="capitalize text-sm">
          {format(new Date(), `EEEE, dd 'de' MMMM 'de' yyyy`, {
          locale: ptBR
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-zinc-400 font-bold mb-3">Agendamentos</h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="text-xs uppercase text-zinc-400 font-bold mb-3 px-5">Recomendados</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
    </div>
  );
}
