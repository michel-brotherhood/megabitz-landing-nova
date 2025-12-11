import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  position?: string;
  challenges: string;
  bestTime: string;
  contactPreference: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log("Received contact form submission:", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });

    const bestTimeLabels: Record<string, string> = {
      morning: "Manhã (9h - 12h)",
      afternoon: "Tarde (13h - 18h)",
      evening: "Noite (18h - 21h)",
    };

    const contactPreferenceLabels: Record<string, string> = {
      phone: "Telefone",
      whatsapp: "WhatsApp",
      email: "E-mail",
    };

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #1a1a2e; border-bottom: 2px solid #6BE4E4; padding-bottom: 10px;">
          Nova Solicitação de Contato
        </h1>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Dados do Lead</h2>
          
          <p><strong>Nome:</strong> ${formData.name}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Telefone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
          ${formData.position ? `<p><strong>Cargo:</strong> ${formData.position}</p>` : ""}
        </div>
        
        <div style="background-color: #e8f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Desafio de TI</h2>
          <p style="white-space: pre-wrap;">${formData.challenges}</p>
        </div>
        
        <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Preferências de Contato</h2>
          <p><strong>Melhor horário:</strong> ${bestTimeLabels[formData.bestTime] || formData.bestTime}</p>
          <p><strong>Preferência:</strong> ${contactPreferenceLabels[formData.contactPreference] || formData.contactPreference}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          Este email foi enviado automaticamente pelo formulário de contato do site Megabitz.
        </p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Megabitz Site <contato@megabitz.com.br>",
      to: ["comercial@megabitz.com.br"],
      subject: `Nova solicitação de contato - ${formData.name}`,
      html: emailHtml,
      reply_to: formData.email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
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
