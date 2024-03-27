import React, { useState } from "react";
import './restaurant1.css'
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
                           image:""
                        }}
                        onSubmit={async (values) => {
                            const formData = new FormData(); // Create FormData object to send file
                            formData.append("image", image); // Append image file to FormData
                        
                            axios
                                .post("http://localhost:3000/rgallery/add", formData)
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