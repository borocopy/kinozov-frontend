import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button';
import SignUpForm from '@/pages/signup/components/signup-form';

export default function SignUp() {
  return (
    <>
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="absolute right-4 top-4 md:right-10 md:top-8">
          <Link
            to="/signin"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              ""
            )}
          >
            Вход
          </Link>
          <Link
            to="/signup"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              ""
            )}
          >
            Регистрация
          </Link>
        </div>
        <div className="relative hidden h-full flex-col bg-muted pt-8 px-10 pb-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-4xl font-medium">
            <Link to="/">КиноZOV</Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Этот сайт невероятен!&rdquo;
              </p>
              <footer className="text-sm">Команда КиноZOV</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-left">
              <h1 className="text-2xl font-semibold tracking-tight">
                Регистрация
              </h1>
              <p className="text-sm text-muted-foreground">
                Введите адрес электронной почты и придумайте хороший пароль
              </p>
            </div>
            <SignUpForm />
            <div className={cn("grid gap-6")}>
              <p className="px-4 text-center text-sm text-muted-foreground">
                Нажимая &laquo;Создать аккаунт&raquo; Вы соглашаетесь с нашими {" "}
                <Link
                  to="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Правилами пользования сервисом
                </Link>{" "}
                и даёте{" "}
                <Link
                  to="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Согласие на обработку данных
                </Link>
                .
              </p>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Уже есть аккаунт?
                  </span>
                </div>
              </div>
              <Link
                to="/signin"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  ""
                )}
              >
                Войти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
