import { Separator } from "@radix-ui/react-separator";
import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShieldAlert, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { ModeToggle } from "../ModeToggle/mode-toggle";

export default function Header() {

  const [status, setStatus] = useState("unauthenticated");


  const handleLoginClick = async () => {


    // TODO


  };

  const handleLogoutClick = async () => {


    // TODO


  };






  return (
    <Card className="flex items-center border-none justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-2 py-4">
                <Avatar>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas Compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} /> Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} /> Fazer Logout
              </Button>
            )}

            <SheetClose asChild>
              <Link to="/">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <HomeIcon size={16} /> Início
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link to="/deals">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <PercentIcon size={16} /> Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link to="/catalog">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} /> Catálogo
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link to="/security-policy">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ShieldAlert size={16} /> Política de segurança
                </Button>
              </Link>
            </SheetClose>

            <ModeToggle />

          </div>
        </SheetContent>
      </Sheet>

      <Link to="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Tech</span>Nexus
        </h1>
      </Link>



      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        {/* <SheetContent>
          <Cart />
        </SheetContent> */}
      </Sheet>


    </Card>)
};
