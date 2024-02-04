import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
  barbershop: Barbershop
}

export function BarbershopItem({barbershop}: BarbershopItemProps) {
  return (
    <Card className="min-w-40 max-w-40 rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="relative w-full h-40">
          <div className="absolute top-2 left-2 z-50">
            <Badge className="flex items-center gap-1 opacity-90" variant="secondary">
              <StarIcon size={12} className="fill-primary text-primary"/>
              <span className="text-xs">5,0</span>
            </Badge>
          </div>
          <Image 
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            className="rounded-2xl"
            style={{
              objectFit: "cover"
            }}
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-zinc-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button variant="secondary" className="w-full mt-3">
            Resenvar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}