import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Header() {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row items-center justify-between">
        <Image src="/logo.png" alt="FSW Barber" width={120} height={22}/>
        <Button variant="outline" size="icon" className="w-8 h-8">
          <MenuIcon size={18}/>
        </Button>
      </CardContent>
    </Card>
  )
}