import React, {Component} from 'react';

import Publication from './Publication';

class PostList extends Component {
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Victor Vitória",
              avatar: "https://avatars0.githubusercontent.com/u/32142925?s=460&v=4"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
                },
                content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
              }
            ]
          },
          {
            id: 2,
            author: {
              name: "Victor Vitória",
              avatar: "https://avatars0.githubusercontent.com/u/32142925?s=460&v=4"
            },
            date: "04 Jun 2019",
            content: "Fala galera, beleza? \n \n Estou fazendo o Bootcamp GoStack da RocketSeat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.",
            comments: [
              {
                id: 1,
                author: {
                  name: "Robson Marques",
                  avatar: "https://avatars2.githubusercontent.com/u/861751?s=460&v=4"
                },
                content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
              },
              {
                id: 2,
                author: {
                  name: "Carlos Levir",
                  avatar: "https://avatars0.githubusercontent.com/u/40604081?s=460&v=4"
                },
                content: "Que maaaaasssa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
              }
            ]
          },
          {
            id: 3,
            author: {
              name: "Victor Vitória",
              avatar: "https://avatars0.githubusercontent.com/u/32142925?s=460&v=4"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
                },
                content: "Conteúdo do comentário"
              }
            ]
          },
          {
            id: 4,
            author: {
              name: "Victor Vitória",
              avatar: "https://avatars0.githubusercontent.com/u/32142925?s=460&v=4"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
                },
                content: "Conteúdo do comentário"
              }
            ]
          },
        ]
    };

    render(){
      return (
        <ul class="post-list">
          { this.state.posts.map(
              post => (
                  <Publication key={post.id} post={post} />
                )
            )
          }
        </ul>
      );
    };
};

export default PostList;