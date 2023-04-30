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

const CadastrarInfconst CadastrarInformacoes: React.FC = () =>{

    const inicialValues: FormValues {
        foto: '';
        nome: '';
        cargo: '';
        resumo: '';
    };

    constValidationScheme = Yup.object().shape({
        foto: yup.string().required('Campo obrigatório'),
        nome: yup.string().required('Campo obrigatório'),
        cargo: yup.string().required('Campo obrigatório'),
        resumo: yup.string().required('Campo obrigatório'),

    })

    const onSubmit = (values: FormValues, {resetForm} : {resetForm: () => void }) => {
        //logica de envio para backend
        console.log (values);
        resetForm();
        alert('Formulário enviado com sucesso');
    };
    
    
    return (
        <div className={styles.formWrapper}>

                <form action=""className={styles.form}>
                    
                <h2 className={styles.title}>Imformações Pessoais</h2>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="foto" className={styles.label}>Foto</label>
                        <input type="text" name="foto" id="foto" className={styles.input}/>
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="nome" className={styles.label}>None</label>
                        <input type="text" name="nome" id="nome" className={styles.input}/>
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="cargo" className={styles.label}>Cargo</label>
                        <input type="text" name="cargo" id="cargo" className={styles.input}/>
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="resumo" className={styles.label}>Resumo</label>
                        <textarea name="resumo" id="resumo" className={styles.textarea}></textarea>
                    </fieldset>

                </form>
                 
            </div>
    );
};
export default CadastrarInformacoes;