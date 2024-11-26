import Check from "../assets/img/check.png";
import Info from "../assets/img/info-icon.svg";
import {useState} from "react";
import {motion} from "motion/react";


const Pricing = () => {
    let features = [
        {
            id:1,
            title: "All your favourite bands & Genre",
        },
        {
            id:2,
            title: "Including every other style of Music",
        },
        {
            id:3,
            title: "HiFi Sound Quality",
        },
        {
            id:4,
            title: "Background information on all artists",
        },
        {
            id:5,
            title: "Up to 10% Direct Artist Support",
        },
        {
            id:6,
            title: "More money for bands and artists",
        },

    ];
    const [emp, setEmp] = useState({price:"€10.99"});
    const [month, setMonth] = useState({price:"€10.99"});
    function changePriceMonth() {
        setMonth({price:emp.price});
    }
    const [yearly, setYearly] = useState({price:"€131.88"});
    function changePriceYear() {
        setMonth({price:yearly.price});
    }
    const [student, setStudent] = useState({price:"€65.94"});
    function changePriceStudent() {
        setMonth({price:student.price});
    }





    return (

        <div className="pricing-section bg-black-400 bg-gradient-to-t from-black-300 from-0% to-black-400 to-25% text-Orange-200">
            <div className="container mx-auto max-md:px-6">
                <motion.div animate={{y:0}}
                            initial={{y:200,opacity:0}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:2}}

                            viewport={{ once: true, amount: 0.2 }}
                            className="pricing-plans max-w-4xl pb-32 max-md:pb-24 mx-auto">
                    <div className="content-head text-center">
                        <h1 className="text-center text-6xl max-w-3xl max-md:text-4xl mx-auto font-TitlingGothicFB text-white tracking-wide leading-none uppercase">
                            We have got a <span
                                className="bg-gradient-to-r from-Orange-200 to-Orange-100 text-transparent bg-clip-text">plans & Pricing</span> that’s
                            Perfect for you
                        </h1>
                        <p className={`mx-auto text-center transition-all ease-in mt-2 text-black-150 font-Poppins-Regular max-md:text-md text-base max-w-lg leading-7`}>
                            Save even more on annual plans & combine them with a Student or Family discount.
                        </p>



                        <div className="button-group mt-12 bg-black-200 w-fit mx-auto p-1 max-md:rounded-3xl rounded-full text-center">
                            <button onClick={changePriceMonth}
                                className={`min-w-44 max-md:min-w-full text-base font-Poppins-Regular text-black-50  py-2 text-center focus:text-white focus:bg-black-250 rounded-full`

                            }>Monthly
                            </button>
                            <button onClick={changePriceYear}
                                className=" min-w-44 max-md:min-w-full text-base font-Poppins-Regular text-black-50  focus:bg-black-250 focus:text-white   py-2  rounded-full">
                                Annual (-16%)
                            </button>
                            <button onClick={changePriceStudent}
                                className="min-w-44 max-md:min-w-full text-base font-Poppins-Regular text-black-50 focus:bg-black-250  focus:text-white  py-2  rounded-full">
                                Students (-50%)
                            </button>
                        </div>
                    </div>
                    <div className="content-body mx-auto mt-20 max-md:mt-12">
                        <div
                            className="card bg-black-100 p-[2px] rounded-3xl  hover:bg-gradient-to-l  bg-gradient-to-r from-Orange-200 to-black-100/10 transition ease-in duration-300">
                            <div className="body p-[1px] bg-black-100 rounded-3xl">
                                <div className="grid  grid-cols-12 max-md:grid-cols-1 gap-0 p-8 max-md:p-6">
                                    <div className="absolute justify-self-end">
                                        <img className="" src={Info} alt=""/>
                                    </div>
                                    <div className="price-body col-span-6 max-md:col-span-1  border-r-2 max-md:border-r-0 max-md:border-b-2 border-black-250 min-w-xl">
                                        <h5 className="font-Poppins-Medium tracking-tight uppercase text-white text-4xl">ROKK
                                            HIFI</h5>
                                        <div className="rate">
                                            <h4 className="text-Orange-200 max-md:text-4xl text-5xl mt-4 tracking-tight font-Poppins-Medium">{month.price}
                                                <span
                                                    className="font-Poppins-Regular text-xl text-black-150">/per month</span>
                                            </h4>
                                        </div>
                                        <p className=" mt-4 font-Poppins-Regular text-lg text-black-150">30 Days Free
                                            Trial</p>
                                        <div className="btn">
                                            <div className="relative mt-12 max-md:mb-12">
                                                <a href=""
                                                   className=" shadow-xl shadow-Orange-200/20 hover:shadow-Orange-200/30 font-Poppins-Bold  max-md:py-4 max-md:px-5 max-md:text-sm py-4 px-8 rounded-full bg-Orange-200  text-white tracking-[3px] uppercase text-md hover:text-black-400 hover:bg-gradient-to-r hover:from-Orange-200 hover:to-Orange-100 transition-all">START
                                                    YOUR FREE TRIAL</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="features wi-full   mr-[-100px] col-span-6 max-md:mt-6">

                                        {features.map(feature => (
                                            <div className="feature-item pl-8 max-md:pl-0 ">
                                                <div className="item items-center py-2 inline-flex">
                                                    <span className="inline-block w-5 mr-2 max-md:w-4"><img src={Check}
                                                                                                 alt=""/></span>
                                                    <h6 className="text-base max-md:text-sm text-black-50 font-Poppins-Regular tracking-normal">{feature.title}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}


export default Pricing
