import { Formik, Form } from "formik";
import React from "react";

import * as Yup from "yup";
import styles from "./CadastrarExperiencia.module.css";
import Input from "../../../Componentes/forms/Input";
import Textarea from "../../../Componentes/forms/Textarea";
import Select from "../../../Componentes/forms/Select";


import { Experiencia, createExperiencia } from "../../../services/experienciaService";

const CadastrarExperiencia: React.FC = () => {
   const initialValues: Experiencia = {
      id: 0,
      titulo: "",
      descricao: "",
      tipo: "",
      anoInicio: "",
      anoFim: "",
   };

   const validationSchema = Yup.object().shape({
      titulo: Yup.string().required("Campo obrigatório"),
      descricao: Yup.string(),
      tipo: Yup.string().required("Campo obrigatório"),
      anoInicio: Yup.string().required("Campo obrigatório"),
      anoFim: Yup.string().required("Campo obrigatório"),
   });

   const onSubmit = async (values: Experiencia, { resetForm }: { resetForm: () => void }) => {
      try {
         await createExperiencia(values);
         console.log(values);
         resetForm();
         alert("Formulário enviado com sucesso!");
      } catch (error) {
         console.log(error);
         alert("Ocorreu um erro ao enviar o formulário");
      }
   };

   return (
      <div className={styles.formWrapper}>
         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => (
               <Form className={styles.form}>
                  <h2 className={styles.title}>Cadastro de Experiência</h2>
                  <Input label="Título" name="titulo" errors={errors.titulo} touched={touched.titulo} />
                  <Input label="Ano Início" name="anoInicio" errors={errors.anoInicio} touched={touched.anoInicio} />
                  <Input label="Ano Fim" name="anoFim" errors={errors.anoFim} touched={touched.anoFim} />

                  <Select
                     label="Tipo"
                     name="tipo"
                     options={[
                        { value: "profissional", label: "Profissional" },
                        { value: "academico", label: "Acadêmico" },
                     ]}
                     errors={errors.tipo}
                     touched={touched.tipo}
                  />

                  <Textarea label="Descrição" name="descricao" errors={errors.descricao} touched={touched.descricao} />
                  <button type="submit" className={styles.button}>
                     Cadastrar
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default CadastrarExperiencia;