"use client";
import Box from "./Box"
import "./Books.css"
import { useEffect, useState } from "react";

interface Dic {

}

export default async function books(){
    const [data, setData] = useState({})
    
    
    return(
        <div className={["Books"].join(" ")}>
            {/* {
            Object.keys(data).map((key:string)=>(
                <Box name={data[key as keyof typeof data]["name"]} link = {data[key as keyof typeof data]["webViewLink"]} image = {data[key as keyof typeof data]["thumbnailLink"]}/>
            ))
        } */}
        </div>
    )
}