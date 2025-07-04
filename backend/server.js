import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load({ envPath: "./backend/.env" });

async function enviarCorreo({ name, email, message }) {
  const client = new SmtpClient();
  await client.connectTLS({
    hostname: "smtp.gmail.com",
    port: 465,
    username: env.EMAIL_USER,
    password: env.EMAIL_PASS,
  });

  await client.send({
    from: `${name} <${env.EMAIL_USER}>`,
    to: env.EMAIL_USER,
    subject: `Mensaje de ${email}`,
    content: message,
  });

  await client.close();
}

serve(async (req) => {
  const url = new URL(req.url);

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method === "POST" && url.pathname === "/send-email") {
    try {
      if (!env.EMAIL_USER || !env.EMAIL_PASS) {
        throw new Error("EMAIL_USER o EMAIL_PASS no definidas");
      }

      const { name, email, message } = await req.json();

      if (!name || !email || !message) {
        return new Response("Faltan datos requeridos", { status: 400 });
      }

      await enviarCorreo({ name, email, message });

      return new Response("Correo enviado con éxito", {
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    } catch (err) {
      console.error("❌ Error al enviar:", err);
      return new Response("Error al enviar correo", { status: 500 });
    }
  }

  return serveDir(req, {
    fsRoot: "./dist",
    urlRoot: "",
    showDirListing: false,
    defaultDocument: "index.html",
  });
});
