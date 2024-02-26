"use client"

import { getUiSDK, openModal } from "@/shared/sdk-ui";
import { useEffect } from "react"


export const InitSDK = () => {
    useEffect(() => {
        (async () => {
            const sdk = await getUiSDK();  
            openModal(sdk)
        })();   
    },[])

    return <></>
}