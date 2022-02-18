import { Button } from "@mui/material";
import { render } from "@testing-library/react";
import React, { useRef, useState } from "react";
import { text } from "stream/consumers";

export function UploadImage() {
    const uploadFile: any = useRef();
    const [image, setImage] = useState<string>();//tipar como string a imagem

    function openFileExplorer() {
        uploadFile.current.click(); // comando usado para abrir o navegador
    }

    function handleFile(event: any) {
        parseFileToBase64(event.target.files[0])
    }

    function parseFileToBase64(file: File) {
        file.text().then(() => {
            let reader: FileReader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                const document: string | ArrayBuffer | null = reader.result //conversão de valores 
                if (typeof document === 'string') {

                    //para aceitar apenas string
                    setImage(document.slice(document.lastIndexOf(',') + 1, document.length));
                    console.log(document.slice(document.lastIndexOf(',') + 1, document.length));
                }
            }
        })

    }

    return (

        <div style={{
            width: '100',
            height: '150px'
        }} >
            <input ref={uploadFile}
                style={{ display: 'none' }}
                type="file"
                onChange={handleFile}
            />
            <img src={`data:image/jpeg;base64.${image}`} alt="" />
            <Button onClick={openFileExplorer} variant="outlined" />
            <h3>
                abrir explorer
            </h3>
        </div>
    );
}