import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { API_ENDPOINT } from "@/constants";
import { redirect } from "react-router-dom";
import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(4, {
        message: "Имя пользователя должно состоять минимум из 4 символов.",
      })
      .max(20, {
        message: "Имя пользователя должно состоять максимум из 20 символов.",
      })
      .regex(new RegExp(/[а-яА-Яa-zA-Z0-9-_]/gm), {
        message:
          "Имя пользователя может содержать только символы кириллицы, латиницы, цифры и знаки '-' и '_'.",
      }),
    email: z.string().trim().email({
      message: "Некорретный формат адреса электронной почты",
    }),
    password: z
      .string()
      .min(8, {
        message: "Пароль должен состоять минимум из 8 символов.",
      })
      .max(64, {
        message: "Пароль должен состоять максимум из 64 символов.",
      }),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Пароли не совпадают.",
    path: ["confirmPassword"],
  });

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.clearErrors("root");
    try {
      const res = await fetch(`${API_ENDPOINT}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
          tos_accepted: true,
        }),
      });
      const data = await res.json();
      console.log(data);

      switch (res.status) {
        case 201:
          return redirect("/signin");
        case 400:
          form.setError("root", {
            type: "400",
            message: "Имя пользователя или адрес электронной почты уже заняты",
          });
          break;
        default:
          form.setError("root", {
            type: "500",
            message:
              "На стороне сервера произошла ошибка. Повторите запрос позже.",
          });
      }
    } catch (e) {
      form.setError("root", {
        type: "custom",
        message: "Не удалось выполнить запрос на сервер.",
      });
    }

    return null;
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            {form.formState.errors.root && (
              <p className={cn("text-sm font-medium text-destructive")}>
                {form.formState.errors.root.message}
              </p>
            )}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-1">
                    <FormLabel>Имя пользователя</FormLabel>
                    <FormControl>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Input
                              placeholder="username"
                              type="text"
                              {...field}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ваше публичное имя на сайте.</p>
                            <p>
                              Разрешены символы кириллицы, латиницы, цифры и
                              знаки '-' и '_'.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormControl>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-1">
                    <FormLabel>Электронная почта</FormLabel>
                    <FormControl>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Input placeholder="name@example.com" {...field} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ваш адрес электронной почты.</p>
                            <p>
                              Он будет использоваться в качестве логина при
                              входе в аккаунт.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormControl>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-1">
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Минимальная длина пароля 8 символов.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormControl>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-1">
                    <FormLabel>Повторите пароль</FormLabel>
                    <FormControl>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              Повторите пароль, чтобы удостовериться, что Вы его
                              запомнили.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormControl>
                    <FormMessage className="mt-1" />
                  </div>
                </FormItem>
              )}
            />
            <Button disabled={false}>Создать аккаунт</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
