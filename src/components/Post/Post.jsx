import { Avatar } from "../Avatar/Avatar";
import styles from "./Post.module.css";
import { useState } from "react";
import { Comment } from "../Comment/Comment";

export function Post(props) {
  const [comment, setComment] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const handleComments = () => {
    event.preventDefault();
    setComentarios([...comentarios, comment]);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <div className={styles.titulo}>
            <Avatar src={props.avatarUrl} />
            <div className={styles.subtitulo}>
              <strong className={styles.text}>{props.autor}</strong>
              <p className={styles.text}>{props.conteudo}</p>
            </div>
          </div>

          <div className={styles.timer}>
            <p>Publicado há 15min</p>
          </div>
        </div>
        <div className={styles.comentario}>{props.comentario}
          <span>
            <div className={styles.link}>{props.link}
              <a>👉 gabriel.dev/student</a>
            </div>
            <a href="">{props.ahref}</a>
            <hr />
          </span>

          <form className={styles.input} onSubmit={handleComments}>
            <strong>Deixe seu comentário: </strong>
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              name="comment"
              placeholder="Digite seu comentário aqui"
              required
            />
            <footer>
              <button type="submit" className={styles.btn}>
                Publicar
              </button>
            </footer>
          </form>
          {comentarios.map((comentario) => (
            <Comment comentario={comentario} />
          ))}
        </div>
      </div>
    </>
  );
}
