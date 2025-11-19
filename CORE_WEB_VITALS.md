# Core Web Vitals - Monitoramento de Performance

Este projeto está configurado para medir e reportar automaticamente as Core Web Vitals, que são métricas essenciais para avaliar a experiência do usuário.

## 📊 Métricas Monitoradas

### Core Web Vitals (Métricas Principais)

#### 1. **LCP - Largest Contentful Paint** (Carregamento)
- **O que é**: Tempo até o maior elemento de conteúdo aparecer na tela
- **Meta**: < 2.5 segundos ✅
- **Precisa melhorar**: 2.5-4.0 segundos ⚠️
- **Ruim**: > 4.0 segundos ❌

**Como melhorar:**
- Otimizar imagens (usar WebP, tamanhos adequados)
- Implementar lazy loading
- Minimizar recursos que bloqueiam renderização
- Usar CDN para assets estáticos

#### 2. **INP - Interaction to Next Paint** (Interatividade)
- **O que é**: Tempo de resposta às interações do usuário
- **Meta**: < 200 ms ✅
- **Precisa melhorar**: 200-500 ms ⚠️
- **Ruim**: > 500 ms ❌

**Como melhorar:**
- Reduzir tempo de execução de JavaScript
- Code splitting e lazy loading de componentes
- Otimizar event handlers
- Usar web workers para processamento pesado

#### 3. **CLS - Cumulative Layout Shift** (Estabilidade Visual)
- **O que é**: Quantidade de movimento inesperado de elementos na página
- **Meta**: < 0.1 ✅
- **Precisa melhorar**: 0.1-0.25 ⚠️
- **Ruim**: > 0.25 ❌

**Como melhorar:**
- Sempre incluir dimensões em imagens e vídeos
- Reservar espaço para conteúdo dinâmico
- Evitar inserir conteúdo acima de conteúdo existente
- Usar CSS aspect-ratio para media responsiva

### Outras Métricas Importantes

#### 4. **FCP - First Contentful Paint**
- **O que é**: Tempo até o primeiro conteúdo aparecer
- **Meta**: < 1.8 segundos ✅

#### 5. **TTFB - Time to First Byte**
- **O que é**: Tempo de resposta do servidor
- **Meta**: < 600 ms ✅

## 🔍 Como Visualizar as Métricas

### 1. Console do Navegador (Desenvolvimento)

As métricas são automaticamente registradas no console do navegador durante o desenvolvimento:

```
✅ LCP - Value: 1234ms, Rating: good
⚠️ INP - Value: 245ms, Rating: needs-improvement
❌ CLS - Value: 0.15, Rating: poor
```

### 2. Google Analytics (Produção)

Quando o Google Analytics estiver configurado no `index.html`, as métricas serão automaticamente enviadas como eventos personalizados:

1. Descomente e configure o Google Analytics em `index.html`
2. Substitua `G-XXXXXXXXXX` pelo seu ID real
3. As métricas aparecerão em: **Analytics → Eventos → Web Vitals**

### 3. Google PageSpeed Insights

Para análise detalhada:

1. Acesse: https://pagespeed.web.dev/
2. Digite a URL do site: `https://megabitz.com.br`
3. Clique em "Analisar"

O relatório mostrará:
- Core Web Vitals scores
- Sugestões específicas de otimização
- Comparação com dados de usuários reais (Field Data)
- Dados de laboratório (Lab Data)

## 📈 Melhores Práticas Implementadas

### Otimizações já aplicadas neste projeto:

- ✅ Lazy loading de imagens
- ✅ Componentes otimizados com React
- ✅ Tailwind CSS para CSS minificado
- ✅ Vite para bundling otimizado
- ✅ Imagens modernas (WebP)
- ✅ Semantic HTML para melhor renderização

### Próximas otimizações recomendadas:

1. **Implementar CDN** para assets estáticos
2. **Configurar cache headers** apropriados
3. **Adicionar preload** para recursos críticos
4. **Implementar service worker** para PWA
5. **Otimizar fontes** com font-display: swap

## 🎯 Metas de Performance

Para um site de negócios como o da Megabitz, as metas recomendadas são:

| Métrica | Meta | Status Atual |
|---------|------|--------------|
| LCP | < 2.5s | Monitorando |
| INP | < 200ms | Monitorando |
| CLS | < 0.1 | Monitorando |
| FCP | < 1.8s | Monitorando |
| TTFB | < 600ms | Monitorando |

## 🔧 Comandos Úteis

### Testar performance localmente:
```bash
npm run build
npm run preview
```

### Analisar bundle size:
```bash
npm run build -- --mode production
```

### Lighthouse CI (se configurado):
```bash
npx lighthouse https://megabitz.com.br --view
```

## 📚 Recursos Adicionais

- [Web Vitals - Google](https://web.dev/vitals/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Chrome DevTools - Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)

## 🆘 Troubleshooting

### As métricas não aparecem no console?
- Verifique se está em modo de desenvolvimento
- Abra o Console do navegador (F12 → Console)
- Recarregue a página

### As métricas não estão sendo enviadas para o Google Analytics?
- Verifique se o GA está configurado em `index.html`
- Confirme que o ID do GA está correto
- Use o Google Tag Assistant para debug

### Scores ruins no PageSpeed Insights?
- Teste em rede mais rápida
- Limpe cache do navegador
- Verifique se há erros de console
- Compare Field Data vs Lab Data
