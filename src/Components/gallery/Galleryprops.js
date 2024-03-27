import React, { useState } from "react";
import './galleryprops.css'
import { Field, Form, Formik } from "formik";
import axios from "axios";

export const Galleryprops = () => {
    const [image, setImage] = useState(null);
    return (
        <section className="home-section">
            <div className="wrapper">
                <div className="form_container">
                    <Formik
                        initialValues={{
                            name: "",
                            category: ""
                        }}
                        onSubmit={async (values) => {
                            const formData = new FormData(); // Create FormData object to send file
                            formData.append("image", image); // Append image file to FormData
                            formData.append("category", values.category);
                
                            
                            axios
                                .post("http://localhost:3000/gallery/add", formData)
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
                                    <label>category</label>
                                    <Field type="text" name="category" />
                                    <div className="name" id="category" />
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