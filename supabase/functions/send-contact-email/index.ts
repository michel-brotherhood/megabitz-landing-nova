import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees?: string;
  challenges?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log('Sending email with data:', formData);

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a5f;">Nova mensagem de contato - Megabitz</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Telefone:</strong> ${formData.phone}</p>
          <p><strong>Empresa:</strong> ${formData.company}</p>
          ${formData.employees ? `<p><strong>Tamanho da Empresa:</strong> ${formData.employees}</p>` : ''}
          ${formData.challenges ? `<p><strong>Desafios:</strong> ${formData.challenges}</p>` : ''}
        </div>
        
        <p style="color: #666; font-size: 12px;">Este email foi enviado automaticamente do formulário de contato do site.</p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Megabitz <onboarding@resend.dev>",
      to: ["contato@agenciattx.com.br"],
      subject: `Nova mensagem de ${formData.name} - ${formData.company}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
};

serve(handler);
