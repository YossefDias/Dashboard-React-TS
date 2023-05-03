import React from "react";

import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from "./CadastrarInformacoes.module.css";
import Input from "../../../Componentes/forms/Imput/Input";

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

                    <Input
                    label="Foto"
                    name="foto"
                    errors={errors.foto}
                    touched={touched.foto}
                    />

                    <Input
                    label="Nome"
                    name="nome"
                    errors={errors.nome}
                    touched={touched.nome}
                    />
                    
                    <Input
                    label="Cargo"
                    name="cargo"
                    errors={errors.cargo}
                    touched={touched.cargo}
                    />
                   
                   
                    <button type="submit" className={styles.button}>Salvar</button>

                </Form>
            )}
            </Formik>

            
                 
            </div>
    );
};

export default CadastrarInformacoes;