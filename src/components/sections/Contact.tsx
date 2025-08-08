import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const body = encodeURIComponent(`Hi Arpan,%0D%0A%0D%0A${message}%0D%0A%0D%0A— ${name} (${email})`);
    window.location.href = `mailto:arpans24@iitk.ac.in?subject=Portfolio%20Contact&body=${body}`;

    toast({
      title: "Message drafted",
      description: "Your email client should open with a prefilled message.",
    });

    form.reset();
  }

  return (
    <section id="contact" className="container mx-auto py-20">
      <header className="mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Contact</h2>
        <p className="mt-2 text-muted-foreground">Email: arpans24@iitk.ac.in • Phone: +91-7076648870</p>
      </header>

      <form onSubmit={onSubmit} className="mx-auto max-w-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1" htmlFor="name">Name</label>
            <Input id="name" name="name" required className="bg-secondary/50" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1" htmlFor="email">Email</label>
            <Input id="email" name="email" type="email" required className="bg-secondary/50" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-muted-foreground mb-1" htmlFor="message">Message</label>
          <Textarea id="message" name="message" rows={5} required className="bg-secondary/50" />
        </div>
        <div className="pt-2">
          <Button type="submit" variant="gold">Send Message</Button>
        </div>
      </form>

      <div className="mt-6 text-sm text-muted-foreground">
        <p>
          GitHub: <a className="story-link" href="https://github.com/arcticOS2" target="_blank" rel="noopener noreferrer">github.com/arcticOS2</a>
        </p>
        <p>
          LinkedIn: <a className="story-link" href="https://linkedin.com/in/arcticos" target="_blank" rel="noopener noreferrer">linkedin.com/in/arcticos</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
