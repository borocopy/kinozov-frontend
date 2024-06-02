import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  email: z.string().email({
    message: 'Некорректный формат адреса электронной почты.',
  }).min(1, {
    message: 'Адрес электронной почты не может быть пустым.',
  }),
  password: z.string().min(1, {
    message: 'Пароль не может быть пустым.',
  })
})

// const INVALID_CREDENTIALS = "Адрес электронной почты или пароль не верны.";

export default function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
       <div className="grid gap-2">
        <FormField
        control={form.control}
        name="email"
        render={({field}) => (
          <FormItem>
          <div className="grid gap-1">
          <FormLabel>Электронная почта</FormLabel>
          <FormControl>
            <Input type="email" placeholder="name@example.com" {...field}/>
          </FormControl>
          <FormMessage className="mt-1" />
          </div>
          </FormItem>
        )}/>
        <FormField
        control={form.control}
        name="password"
        render={({field}) => (
          <FormItem>
          <div className="grid gap-1">
          <FormLabel>Пароль</FormLabel>
          <FormControl>
            <Input type="password" placeholder="••••••••" {...field}/>
          </FormControl>
          <FormMessage className="mt-1" />
          </div>
          </FormItem>
        )}/>
         <Button type="submit" disabled={false}>Войти</Button>
        </div>
      </form>
    </Form>
  );
}
