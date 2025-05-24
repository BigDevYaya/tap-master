import { useContext } from "react";
import * as Yup from "yup";
import { AppContext } from "./AppContext";
import { Pin } from "lucide-react";




export const loginSchema = Yup.object({
    name : Yup.string().matches(/^[A-Za-z]+$/, "Enter first name only")
    .required("Name is required")
})

export const withdrawalSchema = (dollarCount) => Yup.object({
    walletAddress : Yup.string().matches(/^.{24,}$/
, "Check wallet address").required('Wallet address is required'),
    amount : Yup.number().typeError("Amount must be a number").test('is-less-than', 'Insufficient balance', value => value <= dollarCount).required('Amount is required'),
    pin: Yup.string()
    .required('Pin is required')
    .matches(/^\d{4}$/, 'Pin must be exactly 4 digits')
})