import { useState } from "react";
import styles from "./ListaPortfolio.module.css";

interface Portfolio {
   link: string;
   image: string;
   title: string;
}

const ListaPortfolio: React.FC = () => {
   const [portfolio, setPortfolio] = useState<Portfolio[]>([
      {
         link: "https://academy.comeialabs.com.br",
         image: "https://picsum.photos/300/200?random=1",
         title: "Portfolio 1",
      },
      {
         link: "https://academy.comeialabs.com.br",
         image: "https://picsum.photos/300/200?random=2",
         title: "Portfolio 2",
      },
      {
         link: "https://academy.comeialabs.com.br",
         image: "https://picsum.photos/300/200?random=3",
         title: "Portfolio 3",
      },
   ]);

   const handleEdit = (index: number) => {};

   const handleDelete = (index: number) => {};

   return (
      <table className={styles.table}>
         <thead>
            <tr>
               <th>Título</th>
               <th>Imagem</th>
               <th>Link</th>
               <th>Ações</th>
            </tr>
         </thead>
         <tbody>
            {portfolio.map((itemPortfolio, index) => (
               <tr key={index}>
                  <td>{itemPortfolio.title}</td>
                  <td>
                     <img src={itemPortfolio.image} alt={itemPortfolio.title} className={styles.image} />
                  </td>
                  <td>
                     <a href={itemPortfolio.link} target="_blank" rel="noreferrer">
                        {itemPortfolio.link}
                     </a>
                  </td>
                  <button onClick={() => handleEdit(index)}>Editar</button>
                  <button onClick={() => handleDelete(index)}>Excluir</button>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default ListaPortfolio;