# 📑 Relatório Técnico — DevOps

## 1. Arquitetura de Microsserviços e DevOps em Ambientes Cloud-Native
A **arquitetura de microsserviços** divide uma aplicação em pequenos serviços independentes, cada um responsável por uma funcionalidade específica. Esses serviços se comunicam via **APIs** (HTTP/REST ou mensageria assíncrona).

🔹 **Comparação com Monólitos**  
- **Monolítica**: aplicação única, difícil de escalar e manter.  
- **Microsserviços**: independência, escalabilidade e manutenção facilitada.  

O **DevOps** integra desenvolvimento e operações com **automação, CI/CD e monitoramento**, acelerando entregas em ambientes **cloud-native**. Ferramentas como **Docker**, **Kubernetes** e **pipelines automatizados** são fundamentais.

---

## 2. Conteinerização: Docker vs Kubernetes
A **conteinerização** empacota aplicações e dependências em ambientes isolados (containers), garantindo consistência entre desenvolvimento, testes e produção.

### 🐳 Docker
- Criação de imagens leves e portáveis  
- Execução isolada de aplicações  
- Ideal para desenvolvimento local  

### ☸️ Kubernetes
- Orquestração de múltiplos containers  
- Escalabilidade automática  
- Alta disponibilidade e balanceamento de carga  
- Auto-recuperação de falhas  

**Diferença principal:**  
- **Docker** → executa containers  
- **Kubernetes** → gerencia e orquestra containers em escala  

---

## 3. Orquestração de Containers
A **orquestração** automatiza o gerenciamento de containers em larga escala:  
- Inicialização e distribuição de carga  
- Escalonamento automático  
- Recuperação de falhas  

➡️ O **Kubernetes** é a principal ferramenta, garantindo resiliência e escalabilidade em sistemas distribuídos.

---

## 4. CI/CD em Ambientes Distribuídos
O **CI/CD (Continuous Integration / Continuous Delivery)** garante integração e entrega contínua de software.

- **Integração Contínua (CI):** código integrado frequentemente em repositório central + testes automatizados.  
- **Entrega Contínua (CD):** automação da entrega, mantendo software sempre pronto para produção.  

Em sistemas distribuídos, CI/CD assegura consistência entre microsserviços e acelera o ciclo de desenvolvimento.

---

## 5. Observabilidade: Métricas, Logs e Traces
A **observabilidade** permite entender o estado interno de sistemas distribuídos.

- 📊 **Métricas**: indicadores como CPU, memória, tempo de resposta (ex.: Prometheus).  
- 📜 **Logs**: registros detalhados de eventos para depuração e auditoria.  
- 🔍 **Traces**: rastreamento de requisições entre microsserviços (ex.: OpenTelemetry).  

Esses pilares garantem **confiabilidade e desempenho**.

---

## 6. Justificativa das Decisões Arquiteturais
- **Microsserviços + API Gateway** → organização, escalabilidade e manutenção facilitada.  
- **Docker** → padronização do ambiente de execução.  
- **Kubernetes** → escalabilidade automática e gerenciamento eficiente em produção.  
- **CI/CD com GitHub Actions** → automação de build e entrega, redução de erros manuais.  
- **Observabilidade** → monitoramento proativo e identificação rápida de problemas.  

---

## ✅ Conclusão
A arquitetura proposta aplica conceitos modernos de **Cloud Computing e DevOps**, com foco em:  
- **Microsserviços**  
- **Conteinerização**  
- **Orquestração**  
- **CI/CD**  
- **Observabilidade**  

Essa abordagem reflete práticas corporativas reais, garantindo **escalabilidade, flexibilidade e confiabilidade**.

