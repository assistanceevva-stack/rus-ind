import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type Props = {
  trigger: React.ReactNode;
};

const ContactDialog = ({ trigger }: Props) => {
  const { toast } = useToast();
  const STORAGE_KEY = "genrusin";
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entry = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    // Persist in localStorage as a JSON array
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const list: typeof entry[] = existingRaw ? JSON.parse(existingRaw) : [];
    list.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

    // Trigger download of current JSON file
    const blob = new Blob([JSON.stringify(list, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "genrusin.json";
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Запросить коммерческое предложение</DialogTitle>
          <DialogDescription>
            Оставьте контакты и кратко опишите задачу. Мы ответим в ближайшее время.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Ваше имя"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="company"
            placeholder="Компания"
            required
            value={formData.company}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Опишите задачу"
            rows={3}
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" variant="hero" className="w-full">
            Отправить заявку
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;







