import { FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center py-8 px-10">
      <nav className="w-full flex flex-row items-center justify-between">
        <Link to="/">
          <span className="text-4xl font-medium mr-10">КиноZOV</span>
        </Link>

        <div className="relative w-1/2 mx-10">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="text-slate-300" />
          </div>
          <input
            id="movie_search"
            name="movie_search"
            type="text"
            placeholder="Начните вводить название фильма"
            className={cn(
              "flex h-10 w-full border-b-2 bg-background px-3 py-0 \
          text-sm file:border-0 file:bg-transparent file:text-sm \
          file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 \
          disabled:cursor-not-allowed disabled:opacity-50",
              "ps-10 focus:border-black transition duration-300",
            )}
          />
        </div>

        <div className="flex flex-row">
          <Link
            to="/signin"
            className={cn(buttonVariants({ variant: "ghost" }), "")}
          >
            Вход
          </Link>
          <Link
            to="/signup"
            className={cn(buttonVariants({ variant: "ghost" }), "")}
          >
            Регистрация
          </Link>
        </div>
        {/*
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/signin">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Вход</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Регистрация</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        */}
      </nav>
    </header>
  );
}
