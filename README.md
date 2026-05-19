# 🚀 Pedidos Veloz

Sistema baseado em arquitetura de microsserviços desenvolvido para demonstrar conceitos modernos de Cloud Computing, DevOps, conteinerização, orquestração e CI/CD.

---

# 📌 Objetivo

O projeto tem como objetivo simular uma plataforma de pedidos online utilizando microsserviços independentes, permitindo escalabilidade, modularização e facilidade de manutenção.

A aplicação foi estruturada seguindo boas práticas utilizadas em ambientes corporativos modernos, utilizando:

- Microsserviços
- API Gateway
- Docker
- Kubernetes
- CI/CD
- Observabilidade
- Escalabilidade horizontal

---

# 🏗️ Arquitetura do Sistema

```txt
Cliente
   ↓
API Gateway
   ↓
--------------------------------
| Pedidos | Pagamentos | Estoque |
--------------------------------
   ↓
PostgreSQL
   ↓
Prometheus + Grafana
```

---

pedidos-veloz/
│
├── .github/
│   │
│   └── workflows/
│       └── ci-cd.yml
│
├── docs/
│   └── relatorio-tecnico.md
│
├── k8s/
│   │
│   ├── deployments/
│   │   ├── api-gateway-deployment.yaml
│   │   ├── pedidos-deployment.yaml
│   │   ├── pagamentos-deployment.yaml
│   │   └── estoque-deployment.yaml
│   │
│   ├── services/
│   │   ├── api-gateway-service.yaml
│   │   ├── pedidos-service.yaml
│   │   ├── pagamentos-service.yaml
│   │   └── estoque-service.yaml
│   │
│   ├── configmaps/
│   │   └── app-config.yaml
│   │
│   ├── secrets/
│   │   └── app-secret.yaml
│   │
│   └── hpa/
│       └── pedidos-hpa.yaml
│
├── services/
│   │
│   ├── api-gateway/
│   │   ├── Dockerfile
│   │   ├── index.js
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   ├── pedidos/
│   │   ├── Dockerfile
│   │   ├── index.js
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   ├── pagamentos/
│   │   ├── Dockerfile
│   │   ├── index.js
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   └── estoque/
│       ├── Dockerfile
│       ├── index.js
│       ├── package.json
│       └── package-lock.json
│
├── .env
├── .gitignore
├── docker-compose.yml
└── README.md

# 🧩 Microsserviços

## 📦 Serviço de Pedidos
Responsável pelo gerenciamento de pedidos realizados pelos clientes.

## 💳 Serviço de Pagamentos
Responsável pelo processamento e status de pagamentos.

## 📦 Serviço de Estoque
Responsável pelo controle de produtos e quantidades disponíveis.

## 🌐 API Gateway
Responsável por centralizar as requisições e comunicação entre cliente e microsserviços.

---

# ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- Docker
- Docker Compose
- Kubernetes
- GitHub Actions
- PostgreSQL
- Prometheus
- Grafana
- OpenTelemetry

---

# 🐳 Docker e Conteinerização

O projeto foi preparado para execução utilizando containers Docker.

Cada microsserviço possui:

- Dockerfile próprio
- Isolamento de dependências
- Comunicação interna via rede Docker
- Estrutura preparada para deploy em Kubernetes

---

# ☸️ Kubernetes

O ambiente Kubernetes foi estruturado utilizando:

- Deployments
- Services
- ConfigMaps
- Secrets
- Horizontal Pod Autoscaler (HPA)

Além disso, foram configuradas estratégias de:

- Rolling Update
- Readiness Probe
- Liveness Probe

---

# 🔄 CI/CD

A pipeline CI/CD foi estruturada utilizando GitHub Actions.

Fluxo automatizado:

1. Build das aplicações
2. Geração das imagens Docker
3. Publicação em registry
4. Preparação para deploy automatizado

---

# 📊 Observabilidade

O projeto foi preparado para monitoramento utilizando:

## Prometheus
Coleta de métricas da aplicação e infraestrutura.

## Grafana
Visualização de dashboards e monitoramento em tempo real.

## OpenTelemetry
Tracing distribuído entre microsserviços.

---

# 🔒 Segurança

Foram consideradas práticas de segurança como:

- Uso de Secrets para credenciais
- Containers não-root
- Separação de configurações via ConfigMaps
- RBAC
- Network Policies

---

# 📈 Escalabilidade

A arquitetura permite escalabilidade horizontal utilizando Kubernetes HPA (Horizontal Pod Autoscaler), possibilitando aumento automático de réplicas conforme uso de CPU/memória.

---

# ▶️ Como Executar

## Executar localmente com Node.js

### Serviço de Pedidos

```bash
cd services/pedidos
node index.js
```

### Serviço de Pagamentos

```bash
cd services/pagamentos
node index.js
```

### Serviço de Estoque

```bash
cd services/estoque
node index.js
```

### API Gateway

```bash
cd services/api-gateway
node index.js
```

---

# 🐳 Docker Compose

```bash
docker compose up -d
```

---

# ☸️ Kubernetes

```bash
kubectl apply -f k8s/
```

---

# 📁 Documentação Técnica

A documentação técnica completa encontra-se na pasta:

```txt
docs/
```

---

# 🎓 Projeto Acadêmico

Projeto desenvolvido para fins acadêmicos na disciplina de Cloud Computing / DevOps, com foco em arquitetura de microsserviços, conteinerização e automação de infraestrutura.
