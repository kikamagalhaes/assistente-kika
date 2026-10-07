# Assistente Kika — Extensão Chrome com Gemini

Extensão simples para Google Chrome (Manifest V3) que lê o texto da página atual e envia para o Google Gemini junto com o seu comando. Útil para resumir, explicar ou transformar o conteúdo que você está lendo.

## Como instalar (modo desenvolvedor)

1. Abra `chrome://extensions` no Chrome.
2. Ative o **Modo do desenvolvedor** (canto superior direito).
3. Clique em **Carregar sem compactação** e selecione esta pasta.
4. Clique no ícone da extensão para abrir o painel.

## Configuração

1. Crie uma chave gratuita em <https://aistudio.google.com/apikey>.
2. Cole a chave no campo da extensão quando solicitado.
3. Nunca commite sua chave real no código.

## Como usar

1. Abra qualquer página.
2. Digite o comando (ex.: "Resuma os pontos principais").
3. Clique em **Analisar Página**.

## Stack

JavaScript puro, Chrome Extensions Manifest V3, Google Gemini API (`gemini-1.5-flash`).

## Segurança

Este repositório não contém nenhuma chave de API. A chave é informada pelo usuário em tempo de uso.
