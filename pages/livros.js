import styles from '../styles/recommended.module.css';

export default function PodCast() {
  return (
    <div>

      {/* Header */}
      <div className={styles.header}>
        <img src='/logomaior.png' alt="Logo" className={styles.logo} />
      </div>

      <h1 className={styles.h1}>Recomendações de Podcasts</h1>


      <div className={styles.content}>

      
        <div className={styles.leftSection}>
          <img src='/livro.png' alt="Livro" />
        </div>

        {/* Parte central */}
        <div className={styles.centralSection}>
           <p><a href='https://www.editoracrv.com.br/produtos/detalhes/31087-violencias-e-bullying-na-escolabranalise-e-prevencao' target='_blank'>
            Editora CRV: </a> Cyberbullying in social media within educational institutions: featuring student, employee, and parent information:  <a href='https://books.google.com.br/books?hl=pt-BR&lr=&id=9iovBQAAQBAJ&oi=fnd&pg=PR7&dq=livros+cyberbullying+in+social+media+within+educational+institutions:+featuring+student,+employee,+and+parent+information&ots=ry0dkSMQea&sig=6X7HY1ca8mrr_Mi4pYAxvrUm5zg#v=onepage&q&f=false' target='_blank'>Cyberbullying in Social Media within Educational Institutions</a></p>


           <p>Violência escolar: <a href='https://www.estantevirtual.com.br/livros/maria-auxiliadora-elias/violencia-escolar/767596071?show_suggestion=0' target="_blank">Vivência Escolar</a></p>

           <p>Fúria narcísica entre alunos e professores: as práticas de cyberbullying e os tabus presentes da profissão de ensinar: <a href='https://books.google.com.br/books?hl=pt-BR&lr=&id=Iik9EAAAQBAJ&oi=fnd&pg=PA2&dq=cyberbullying+teses+de+doutorado&ots=5Dlo3CwmP0&sig=pEbFvouJA_CQ50ed8qupcVT4Jk4#v=onepage&q=cyberbullying%20teses%20de%20doutorado&f=false' target="_blank">Fúria narcísica entre alunos e professores</a></p>

           <p>Evoluamos:<a href='https://placamae.org/wp-content/uploads/2021/08/Evoluamos_Placamãe.Org_.pdf' target="_blank"> https://placamae.org/wp-content/uploads/2021/08/Evoluamos_Placamãe.Org_.pdf</a></p>

    
        </div>

        {/* Imagem à direita */}
        <div className={styles.rightSectionPodBook}>
          <img src='/livrosAvatar.png' alt="Avatar flutuante lendo um livro" />
        </div>

      </div>
      <a href='/indicacoes' className={styles.link}>Voltar</a>
    </div>
  );
}