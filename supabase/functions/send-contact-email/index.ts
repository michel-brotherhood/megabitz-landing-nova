import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

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

    const smtpHost = Deno.env.get('SMTP_HOST') || '';
    const smtpPort = parseInt(Deno.env.get('SMTP_PORT') || '465');
    const smtpUser = Deno.env.get('SMTP_USER') || '';
    const smtpPassword = Deno.env.get('SMTP_PASSWORD') || '';

    const emailContent = `Nova mensagem de contato recebida:

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}
${formData.employees ? `Tamanho da Empresa: ${formData.employees}` : ''}
${formData.challenges ? `Desafios: ${formData.challenges}` : ''}

---
Este email foi enviado automaticamente do formulário de contato do site.`;

    // Create connection
    const conn = await Deno.connectTls({
      hostname: smtpHost,
      port: smtpPort,
    });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // Helper function to send command and read response
    async function sendCommand(conn: Deno.TlsConn, command: string): Promise<string> {
      await conn.write(encoder.encode(command + '\r\n'));
      const buffer = new Uint8Array(1024);
      const n = await conn.read(buffer);
      if (!n) throw new Error("No response from server");
      return decoder.decode(buffer.subarray(0, n));
    }

    try {
      // Read initial greeting
      const buffer = new Uint8Array(1024);
      await conn.read(buffer);

      // SMTP handshake
      await sendCommand(conn, `EHLO ${smtpHost}`);
      await sendCommand(conn, `AUTH LOGIN`);
      await sendCommand(conn, btoa(smtpUser));
      await sendCommand(conn, btoa(smtpPassword));
      await sendCommand(conn, `MAIL FROM:<${smtpUser}>`);
      await sendCommand(conn, `RCPT TO:<megabitz@agenciattx.com.br>`);
      await sendCommand(conn, `DATA`);

      // Send email content
      const emailMessage = `From: ${smtpUser}\r\nTo: megabitz@agenciattx.com.br\r\nSubject: Nova mensagem de ${formData.name} - ${formData.company}\r\nContent-Type: text/plain; charset=utf-8\r\n\r\n${emailContent}\r\n.\r\n`;
      await conn.write(encoder.encode(emailMessage));
      
      // Read final response
      await conn.read(buffer);
      
      // Close connection
      await sendCommand(conn, 'QUIT');
      conn.close();

      console.log("Email sent successfully");

      return new Response(
        JSON.stringify({ success: true }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      );
    } catch (smtpError) {
      conn.close();
      throw smtpError;
    }
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
