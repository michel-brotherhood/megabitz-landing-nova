# Configuração do Google Analytics e Google Ads

Este documento explica como ativar o Google Analytics e Google Ads no site da Megabitz.

## Google Analytics

### 1. Criar conta no Google Analytics
1. Acesse: https://analytics.google.com/
2. Crie uma conta ou faça login
3. Crie uma propriedade para o site
4. Copie o ID de medição (formato: G-XXXXXXXXXX)

### 2. Ativar no site
Abra o arquivo `index.html` e:
1. Localize as linhas comentadas do Google Analytics (linhas 12-19)
2. Substitua `G-XXXXXXXXXX` pelo seu ID real
3. Remova os comentários `<!--` e `-->`

Exemplo:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123XYZ');
</script>
```

## Google Ads

### 1. Criar conta no Google Ads
1. Acesse: https://ads.google.com/
2. Crie uma conta ou faça login
3. Configure sua primeira campanha
4. Copie o ID de conversão (formato: AW-XXXXXXXXXX)

### 2. Ativar no site
Abra o arquivo `index.html` e:
1. Localize as linhas comentadas do Google Ads (linhas 21-28)
2. Substitua `AW-XXXXXXXXXX` pelo seu ID real
3. Remova os comentários `<!--` e `-->`

Exemplo:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-123456789"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-123456789');
</script>
```

## Rastreamento de Conversões

Para rastrear quando um formulário é enviado, você pode adicionar eventos de conversão.

### Exemplo de evento de conversão no Google Ads:
```javascript
// Adicionar no sucesso do envio do formulário
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXXX/CONVERSION_ID',
  'value': 1.0,
  'currency': 'BRL'
});
```

## Teste
Após ativar, você pode testar usando:
- **Google Analytics**: Relatórios em tempo real
- **Google Ads**: Tag Assistant ou Google Tag Manager Preview
- **Extensão**: Tag Assistant Legacy (Chrome)

## Importante
- Sempre teste após fazer deploy na Vercel
- Aguarde 24-48h para dados começarem a aparecer nos relatórios
- Configure metas/conversões no painel do Google Analytics
- Configure conversões no painel do Google Ads
