import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  employees?: string;
  challenges?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, employees, challenges }: ContactEmailRequest = await req.json();
    
    console.log("Sending email with data:", { name, email, phone, company });

    const client = new SmtpClient();

    await client.connectTLS({
      hostname: Deno.env.get("SMTP_HOST") || "",
      port: parseInt(Deno.env.get("SMTP_PORT") || "465"),
      username: Deno.env.get("SMTP_USER") || "",
      password: Deno.env.get("SMTP_PASSWORD") || "",
    });

    const emailBody = `
      <h2>Nova Solicitação de Contato</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
      ${employees ? `<p><strong>Número de Funcionários:</strong> ${employees}</p>` : ''}
      ${challenges ? `<p><strong>Desafios:</strong> ${challenges}</p>` : ''}
    `;

    await client.send({
      from: Deno.env.get("SMTP_USER") || "",
      to: "smtp@idlab.art.br",
      subject: `Nova Solicitação de Contato - ${name}`,
      content: emailBody,
      html: emailBody,
    });

    await client.close();

    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado com sucesso!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
