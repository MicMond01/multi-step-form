import advanced from "../assets/advanced.svg"
import arcade from "../assets/arcade.svg"
// import checkmark from "../assets/checkmark.svg"
import pro from "../assets/pro.svg"
// import thankyou from "../assets//thankyou.svg"

export const navigation = [
    {
        id: "1",
        step: "STEP 1",
        title: "YOUR INFO",
        lead: "/Personal"
    },
    {
        id: "2",
        step: "STEP 2",
        title: "SELECT PLAN",
        lead: "/Selectplans"
    },
    {
        id: "3",
        step: "STEP 3",
        title: "ADD-ONS",
        lead: "/Addons"
    },
    {
        id: "4",
        step: "STEP 4",
        title: "SUMMARY",
        lead: "/"
    }
]


export const allvalues = [
    {
        id: 1,
        icon: arcade,
        name: "Arcade",
        price: "$9/mo",
        figure: 9,
        on: false,
        duration: "Monthly"
    },
    {
        id: 2,
        icon: advanced,
        name: "Advanced",
        price: "$12/mo",
        figure: 12,
        on: false,
        duration: "Monthly"
    },
    {
        id: 3,
        icon: pro,
        name: "Pro",
        price: "$15/mo",
        figure: 15,
        on: false,
        duration: "Monthly"
    },
    {
        id: 4,
        icon: arcade,
        name: "Arcade",
        price: "$90/yr",
        figure: 90,
        free: "2 months free",
        duration: "Yearly"
    },
    {
        id: 5,
        icon: advanced,
        name: "Advanced",
        price: "$120/yr",
        figure: 120,
        free: "2 months free",
        duration: "Yearly"
    },
    {
        id: 6,
        icon: pro,
        name: "Pro",
        price: "$150/yr",
        figure: 150,
        free: "2 months free",
        duration: "Yearly"
    }
]


export const addOnValues = [
    {
        id: 1,
        name: "Online service",
        discription: "Access to multiplayer games",
        price: "+$10/yr",
        figure: 10,
        on: false
    },
    {
        id: 2,
        name: "Larger storage",
        discription: "Extral 1TB of cloud save",
        price: "+$20/yr",
        figure: 20,
        on: false
    },
    {
        id: 3,
        name: "Customizable profile",
        discription: "Custom theme on your profile",
        price: "+$20/yr",
        figure: 50,
        on: false
    }
]