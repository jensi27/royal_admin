import React, { useState } from "react";
import './roomprops.css'
import { Field, Form, Formik } from "formik";
import axios from "axios";

export const Roomprops = () => {
    const [image, setImage] = useState(null);
    return (
        <section className="home-section">
            <div className="wrapper">
                <div className="form_container">
                    <Formik
                        initialValues={{
                            price: "",
                            name: "",
                            bed: "",
                            bath: "",
                            description: "",
                        }}
                        onSubmit={async (values) => {
                            const formData = new FormData(); // Create FormData object to send file
                            formData.append("image", image); // Append image file to FormData
                            formData.append("price", values.price);
                            formData.append("name", values.name);
                            formData.append("bed", values.bed);
                            formData.append("bath", values.bath);
                            formData.append("description", values.description);

                            axios
                                .post("http://localhost:3000/room/add", formData)
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
                                    <label>Image</label>
                                    <input
                                        type="file"
                                        id="formFile"
                                        onChange={(e) => setImage(e.target.files[0])} // Update selected image file
                                    />
                                </div>
                            </div>
                            <div className="form_wrap">
                                <div className="form_item">
                                    <label>Price</label>
                                    <Field type="text" name="price" />
                                    <div className="price" id="price" />
                                </div>
                            </div>
                            <div className="form_wrap">
                                <div className="form_item">
                                    <label>Name</label>
                                    <Field type="text" name="name" />
                                    <div className="name" id="name" />
                                </div>
                            </div>
                            <div className="form_wrap fullname">
                                <div className="form_item">
                                    <label>Bed</label>
                                    <Field type="text" name="bed" />
                                    <div className="bed" id="bed" />
                                </div>
                                <div className="form_item">
                                    <label>Bath</label>
                                    <Field type="text" name="bath" />
                                    <div className="bath" id="bath" />
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