// ============================================================
//  CONFIGURAÇÃO DA LOJA — gerada pelo Admin em 12/10/2026 às 14:24
//  Para mudar, edite a loja no admin e exporte de novo.
// ============================================================
window.LOJA = {
  "nome": "Burger House",
  "slug": "burger-house",
  "logo": "assets/logo.webp",
  "favicon": "assets/icone.png",
  "whatsapp": "5516997974877",
  "endereco": "R. Virgilio Tagliavini ",
  "instagram": "brasa_burgeer",
  "cores": {
    "principal": "#E8590C",
    "secundaria": "#1C1917",
    "escuro": "#8A3B12"
  },
  "layout": "lista",
  "mostrarBanner": true,
  "fuso": "America/Sao_Paulo",
  "horarios": {
    "dom": [
      "18:00-23:00"
    ],
    "seg": [],
    "ter": [
      "18:00-23:00"
    ],
    "qua": [
      "18:00-23:00"
    ],
    "qui": [
      "18:00-23:00"
    ],
    "sex": [
      "18:00-23:00"
    ],
    "sab": [
      "18:00-23:00"
    ]
  },
  "fechadoManual": false,
  "tempoEntrega": "30 a 45 min",
  "tempoRetirada": "20 a 30 min",
  "aceitaEntrega": true,
  "aceitaRetirada": true,
  "taxaEntrega": 8,
  "pedidoMinimo": 0,
  "pagamentos": [
    "Pix",
    "Dinheiro",
    "Crédito",
    "Débito"
  ],
  "cupons": {
    "CODIGO10": {
      "tipo": "percentual",
      "valor": 10,
      "minimo": 75,
      "validade": "2026-10-15"
    }
  },
  "banner": {
    "titulo": "Combo da casa 15% off",
    "subtitulo": "Toda terça e quarta",
    "imagem": "assets/banner.webp"
  },
  "seo": {
    "titulo": "Burger House",
    "descricao": "Burgers artesanais, combos e porções. Peça pelo WhatsApp.",
    "imagem": "",
    "url": ""
  },
  "urlPadrao": "https://{slug}.netlify.app",
  "categorias": [
    "Burgers",
    "Bebidas",
    "Porções"
  ],
  "grupos": {
    "ponto": {
      "titulo": "Ponto da carne",
      "tipo": "unico",
      "estilo": "escolha",
      "obrigatorio": true,
      "opcoes": [
        {
          "nome": "Mal passado"
        },
        {
          "nome": "Ao ponto"
        },
        {
          "nome": "Bem passado"
        }
      ]
    },
    "adicionais": {
      "titulo": "Adicionais",
      "tipo": "multiplo",
      "estilo": "adicional",
      "prefixo": "+ ",
      "opcoes": [
        {
          "nome": "Bacon",
          "preco": 4
        },
        {
          "nome": "Queijo extra",
          "preco": 4
        },
        {
          "nome": "Catupiry",
          "preco": 2
        }
      ]
    },
    "remover": {
      "titulo": "Remover",
      "tipo": "multiplo",
      "estilo": "remocao",
      "opcoes": [
        {
          "nome": "Sem cebola"
        },
        {
          "nome": "Sem tomate"
        },
        {
          "nome": "Sem molho"
        }
      ]
    }
  },
  "produtos": [
    {
      "id": "przdw96",
      "categoria": "Burgers",
      "nome": "X-Tudo",
      "preco": 25,
      "grupos": [
        "adicionais",
        "remover"
      ],
      "descricao": "Pão, hamburguer, tomate, alface, cebola, ovo, catupiry..serve até 2 pessoas",
      "imagem": "assets/produtos/x-tudo.webp"
    },
    {
      "id": "puo32b1",
      "categoria": "Burgers",
      "nome": "X-Salada",
      "preco": 18,
      "grupos": [
        "adicionais",
        "remover"
      ],
      "descricao": "Pão, hamburguer, alface, ovo, catupiry..",
      "imagem": "assets/produtos/x-salada.webp"
    },
    {
      "id": "ppyq6m4",
      "categoria": "Burgers",
      "nome": "X-Bacon",
      "preco": 18,
      "grupos": [
        "adicionais",
        "remover"
      ],
      "descricao": "Pão, bacon, hamburguer, tomate, alface, cebola, ovo, catupiry..",
      "imagem": "assets/produtos/x-bacon.webp"
    },
    {
      "id": "piehmnb",
      "categoria": "Burgers",
      "nome": "X-Calabresa",
      "preco": 23,
      "grupos": [
        "adicionais",
        "remover"
      ],
      "descricao": "Pão, calabresa, hamburguer, tomate, alface, cebola, ovo, catupiry..",
      "imagem": "assets/produtos/x-calabresa.webp"
    },
    {
      "id": "pb0knmj",
      "categoria": "Burgers",
      "nome": "X-Frango",
      "preco": 23,
      "grupos": [
        "adicionais",
        "remover"
      ],
      "descricao": "Pão, Frango, hamburguer, tomate, alface, cebola, ovo, catupiry..",
      "imagem": "assets/produtos/x-frango.webp"
    },
    {
      "id": "pfe9ifb",
      "categoria": "Bebidas",
      "nome": "Coca cola 1L",
      "preco": 8,
      "descricao": "",
      "imagem": "assets/produtos/coca-cola-1l.webp"
    },
    {
      "id": "px1k5iu",
      "categoria": "Bebidas",
      "nome": "Fanta Uva 2L",
      "preco": 12,
      "descricao": "",
      "imagem": "assets/produtos/fanta-uva-2l.webp"
    },
    {
      "id": "p9bjlq8",
      "categoria": "Bebidas",
      "nome": "Guarana 2L ",
      "preco": 12,
      "descricao": "",
      "imagem": "assets/produtos/guarana-2l.webp"
    },
    {
      "id": "prvom64",
      "categoria": "Bebidas",
      "nome": "Splite 2L",
      "preco": 12,
      "descricao": "",
      "imagem": "assets/produtos/splite-2l.webp"
    },
    {
      "id": "p6i4aa8",
      "categoria": "Porções",
      "nome": "Batata Frita P",
      "preco": 14,
      "descricao": "",
      "imagem": "assets/produtos/batata-frita-p.webp"
    },
    {
      "id": "pzpf5hn",
      "categoria": "Porções",
      "nome": "Batata Frita M",
      "preco": 22,
      "disponivel": false,
      "descricao": "",
      "imagem": "assets/produtos/batata-frita-p.webp"
    }
  ]
};
