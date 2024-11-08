import { PostProps } from "./types"

export const responsePosts: PostProps[] = [
  {
    id: 1,
    content: [
      { type: "paragraph", content: "Servidor em express para reduzir o tamanho de Url, feito por mim.Link abaixo: " },
      { type: "link", content: "https://github.com/Massaronii/url-shortener" },
    ],
    publishedAt: new Date("2024-11-07 15:32:00"),
  },
]


export const responseArticles: PostProps[] = [
  {
    id: 1,
    content: [
      {
        type: "paragraph",
        content:
         "Eai pessoal, meu primeiro post e é como criar uma automação serverless com o aws framework, espero que consigam entender como funciona.Link abaixo para leitura:"
      },
  
      {
        type: "link",
        content:
          "https://dev.to/massaronii/como-criar-uma-automacao-com-aws-lambda-e-serverless-framework-3l2j",
      },
    ],
    publishedAt: new Date("2024-11-08 16:00:00"),
  },
]
