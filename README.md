# Previsão

O **Previsão do Tempo** é uma aplicação web simples que permite consultar informações meteorológicas de um determinado local. Basta inserir o nome da cidade para obter detalhes sobre a temperatura atual e visualizar um ícone representando as condições climáticas.

## Objetivo do Projeto

O objetivo deste projeto é praticar a construção de aplicações web utilizando **TypeScript** e, além disso, aprimorar o consumo de APIs externas, como a do [OpenWeatherMap](https://openweathermap.org/).

## Tecnologias Utilizadas

- **JavaScript**: Para manipulação da DOM e integração com a API.
- **TypeScript**: Para tipagem estática e maior segurança no código.
- **Consumo de API**: Utilização da API do [OpenWeatherMap](https://openweathermap.org/) para obter informações meteorológicas.

## Funcionalidades

1. **Consulta de Previsão do Tempo**:
   - Insira o nome de uma cidade no campo de busca.
   - A aplicação exibe:
     - Temperatura atual em graus Celsius.
     - Nome do local consultado.
     - Ícone representando as condições climáticas.

2. **Validação de Entrada**:
   - O nome do local precisa ter pelo menos 3 caracteres.

3. **Estilo Simples e Intuitivo**:
   - Design claro e de fácil uso.

## Como Rodar Localmente

### 1. Pré-requisitos

- Tenha o **Node.js** instalado (opcional para o desenvolvimento com TypeScript).
- Uma chave de API do [OpenWeatherMap](https://openweathermap.org/).

### 2. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/previsao-do-tempo.git
cd previsao-do-tempo
