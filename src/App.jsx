import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div className={styles.posts}>
            <Post
              autor="Gabriel Reis"
              conteudo="Desenvolvedor"
              avatarUrl="http://github.com/GabrielReissss.png"
              comentario="Fala galeraa 👋
              Acabei de subir mais um projeto no meu portifólio. É um projeto
              que fiz no NLW, evento da Rocketseat. Entra la e confere o que eu
              fiz durante esse evento. Vamo pra cima time 🚀"
              ahref="#novo projeto #nlw #rocketseat"
            />
          </div>
          <div className={styles.posts}>
            <Post
              autor="João"
              conteudo="Aluno"
              avatarUrl="https://images.tcdn.com.br/img/img_prod/731014/pin_icebrg_anao_de_jardim_199_1_f6473573baf8a42f70958720e6a98a96.jpg"
              comentario="Eai time. Tudo certo. 
              Então to muito perdido nas aulas, vou morder a canela de vocês!"
              ahref="#Perdido    #Estudando    #Canelinha"

            />
          </div>
          <div className={styles.posts}>
            <Post
              autor="Posseidon"
              conteudo="Expert"
              avatarUrl="https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png"
              comentario="Fácil demais esse conteudo ai. 
              Ve alguma coisa mais difícil. Manjo muito no React aqui em Muçum."
              ahref="#Barbada    #SóPeloJob    #LáEle"
            />
          </div>
        </main>
      </div>
    </>
  );
}
export default App;
