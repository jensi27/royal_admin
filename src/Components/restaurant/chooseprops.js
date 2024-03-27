import React, { useState } from "react";
import './restaurant1.css'
import { Field, Form, Formik } from "formik";
import axios from "axios";

export const Chooseprops = () => {
    return (
        <section className="home-section">
            <div className="wrapper">
                <div className="form_container">
                    <Formik
                        initialValues={{
                            no: '',
                            title: '',
                            descrption: '',
                        }}
                        onSubmit={async (values) => {
                            console.log(values)
                            axios.post("http://localhost:3000/choosers/add", values)
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }}
                    >
                        <Form name="form">
                            <div className="form_wrap">
                                <div className="form_item">
                                    <label>no</label>
                                    <Field type="number" name="no" />
                                    <div className="number" id="no" />
                                </div>
                            </div>
                            <div className="form_wrap">
                                <div className="form_item">
                                    <label>Title</label>
                                    <Field type="text" name="title" />
                                    <div className="name" id="title" />
                                </div>
                            </div>
                            <div className="form_wrap">
                                <div className="form_item">
                                    <label>Description</label>
                                    <Field
                                        as="textarea"
                                        name="description"
                                        id="description"
                                        cols="44"
                                        rows="5"
                                    ></Field>
                                </div>
                            </div>

                            <div className="btn">
                                <input type="submit" />
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    );

}