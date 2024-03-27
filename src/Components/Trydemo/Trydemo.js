import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Tryprops } from './tryprops';

export const Trydemo = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const getfromdate = (e) => {
        const date = moment(e).format("DD/MM/YYYY");
        setStartDate(date)
    }
    const gettodate = (e) => {
        const date = moment(e).format("DD/MM/YYYY");
        setEndDate(date)
    }

    const [getdata, setdata] = useState([]);
    // console.log(getdata);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/booking/view");
                setdata(response.data.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, [getdata])

    const [getFilteredData, setFilteredData] = useState([])
    // console.log(getFilteredData);


    const handleDateFilter = () => {
        // console.log("Start Date:", startDate);
        // console.log("End Date:", endDate);

        const filteredResult = getdata.filter(item => {
            const itemDate = new Date(item.checkin);
            const checkdate = moment(itemDate).format("DD/MM/YYYY");
            // console.log("Item Check-in Date:", checkdate);

            return checkdate >= startDate && checkdate <= endDate;
        });

        // console.log("Filtered Result:", filteredResult);

        // setdata(filteredResult);
        setFilteredData(filteredResult)
    };

    return (
        <div>
            <input type="date" onChange={(e) => getfromdate(e.target.value)} />
            <input type="date" onChange={(e) => gettodate(e.target.value)} />

            <button onClick={handleDateFilter}>Filter Data</button>
            <div style={{ display: getFilteredData === true ? "none" : "block" }} >
                {
                    getdata.map((el, index) => {
                        // console.log(el.name);
                        const startdate = moment(el.checkin).format("DD/MM/YYYY")
                        const enddate = moment(el.checkout).format("DD/MM/YYYY")
                        return <Tryprops
                            name={el.name + " "}
                            email={el.email + " "}
                            checkin={startdate + " "}
                            checkout={enddate + " "}
                            adultno={el.adultno + " "}
                            childno={el.childno + " "}
                            room={el.room + " "}
                            message={el.message + " "}
                        />
                    })
                }
            </div>
            <br />
            <div style={{ display: getFilteredData ? "block" : "none" }} >
                {
                    getFilteredData.map((el, index) => {
                        // console.log(el.name);
                        const startdate = moment(el.checkin).format("DD/MM/YYYY")
                        const enddate = moment(el.checkout).format("DD/MM/YYYY")
                        return <Tryprops
                            name={el.name + " "}
                            email={el.email + " "}
                            checkin={startdate + " "}
                            checkout={enddate + " "}
                            adultno={el.adultno + " "}
                            childno={el.childno + " "}
                            room={el.room + " "}
                            message={el.message + " "}
                        />
                    })
                }
            </div>

        </div>
    )
}
