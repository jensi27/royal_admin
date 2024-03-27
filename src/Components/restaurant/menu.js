import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";

export const Menuprops = () => {
    const [image, setImage] = useState(null);
    return (
        <section className="home-section">
            <div className="wrapper">
                <div className="form_container">
                    <Formik
                        initialValues={{
                            title: "",
                            description: ""
                        }}
                        onSubmit={async (values) => {
                            const formData = new FormData(); // Create FormData object to send file
                            formData.append("title", values.title);
                            formData.append("description", values.description);
                            formData.append("image", image); // Append image file to FormData
                            
                            axios
                                .post("http://localhost:3000/specialitem/add", formData)
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
                                    <label>title</label>
                                    <Field type="text" name="title" />
                                    <div className="name" id="title" />
                                </div>
                            </div>
                            <div className="form_wrap">
                                <div className="form_item">
                                    <label>description</label>
                                    <Field type="text" name="description" />
                                    <div className="profession" id="description" />
                                </div>
                            </div>
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