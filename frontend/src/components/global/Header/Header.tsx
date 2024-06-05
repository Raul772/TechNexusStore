import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { Separator } from "@radix-ui/react-separator";
import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShieldAlert, ShoppingCartIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "../ModeToggle/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import Cart from "../Cart/cart";

export default function Header() {

  const { user, status, signout } = useAuth();

  const handleLogoutClick = () => {
    signout();
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

          {status === "authenticated" && user && (
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-2 py-4">
                <Avatar>
                  {user.image && <AvatarImage src={user.image} />}
                  <AvatarFallback>
                    {user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm opacity-75">Boas Compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <SheetClose asChild>
                <Link to={"https://localhost:443/signin"}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <LogInIcon size={16} /> Fazer Login
                  </Button>
                </Link>
              </SheetClose>
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
              <NavLink to="/">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <HomeIcon size={16} /> Início
                </Button>
              </NavLink>
            </SheetClose>

            <SheetClose asChild>
              <NavLink to="/deals">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <PercentIcon size={16} /> Ofertas
                </Button>
              </NavLink>
            </SheetClose>

            <SheetClose asChild>
              <NavLink to="/catalog">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} /> Catálogo
                </Button>
              </NavLink>
            </SheetClose>

            <SheetClose asChild>
              <NavLink to="/security-policy">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ShieldAlert size={16} /> Política de segurança
                </Button>
              </NavLink>
            </SheetClose>

            <ModeToggle />

          </div>
        </SheetContent>
      </Sheet>

      <NavLink to="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Tech</span>Nexus
        </h1>
      </NavLink>



      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <Cart />
        </SheetContent>
      </Sheet>


    </Card>)
};
