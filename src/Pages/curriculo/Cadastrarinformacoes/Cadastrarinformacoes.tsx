import React from "react";

import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from "./CadastrarInformacoes.module.css";

interface FormValues {
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
}

const CadastrarInformacoes: React.FC = () =>{

    const inicialValues: FormValues = {
        foto: '',
        nome: '',
        cargo: '',
        resumo: '',
    };

    const validationScheme = Yup.object().shape({
        foto: Yup.string().required('Campo obrigatório'),
        nome: Yup.string().required('Campo obrigatório'),
        cargo: Yup.string().required('Campo obrigatório'),
        resumo: Yup.string().required('Campo obrigatório'),

    })

    // function onSubmit (values: FormValues, {resetForm}: {resetForm: () => void}) {
    //     // logica de envio para backend
    //     console.log('Formulário enviado com sucesso');
    // }

    const onSubmit = (values: FormValues, {resetForm} : {resetForm: () => void }) => {
        //logica de envio para backend
        console.log (values);
        resetForm();
        alert('Formulário enviado com sucesso');
    };
    
    
    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={inicialValues} validationSchema={validationScheme} onSubmit={onSubmit}>
            {({ errors, touched }) => (
                
            <Form className={styles.form}>

                    
                <h2 className={styles.title}>Imformações Pessoais</h2>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="foto" className={styles.label}>Foto</label>
                        <Field
                         type= "text"
                         id= "foto"
                         name= "foto" 
                         className={`${styles.input} ${touched.foto && errors.foto && styles.error}`}
                         />
                        <ErrorMessage name="foto" component="div" className={styles.error}/>
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="nome" className={styles.label}>None</label>
                        {/* <input type="text" name="nome" id="nome" className={styles.input}/> */}
                        <Field  
                        type= "text"
                        id= "nome"
                        name= "nome" 
                        className={`${styles.input} ${touched.foto && errors.foto && styles.error}`}
                        />
                        <ErrorMessage name="nome" component="div" className={styles.error}/>
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="cargo" className={styles.label}>Cargo</label>
                        {/* <input type="text" name="cargo" id="cargo" className={styles.input}/> */}
                        <Field
                        type= "text"
                        id= "cargo"
                        name= "cargo" 
                        className={`${styles.input} ${touched.foto && errors.foto && styles.error}`}
                        />
                        <ErrorMessage name="cargo" component="div" className={styles.error}/>
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="resumo" className={styles.label}>Resumo</label>
                        {/* <textarea name="resumo" id="resumo" className={styles.textarea}></textarea> */}
                        <Field
                        type= "text"
                        id= "resumo"
                        name= "resumo" 
                        className={`${styles.input} ${touched.foto && errors.foto && styles.error}`}
                        />
                        <ErrorMessage name="resumo" component="div" className={styles.error}/>
                    </fieldset>

                    <button type="submit" className={styles.button}>Salvar</button>

                </Form>
            )}
            </Formik>

            
                 
            </div>
    );
};

export default CadastrarInformacoes;