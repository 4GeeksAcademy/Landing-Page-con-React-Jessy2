import { Button } from "bootstrap";
import React from "react";

function Card({ titulo, subtitulo, descripcion, img, urlButton }) {

    return (
        <div className="card shadow-sm p-1 mb-5 bg-body-tertiary rounded" style={{ width: "18rem;" }}>
            <div className="">
                <img src={img} className="object-fit-cover position-top" alt="..." />
            </div>

            <div className="card-body justify-content-center text-center">
                <h5 className="card-title fs-2 text-center">{titulo} </h5>
                <h3 className="card-subtitle text-center text-secondary fst-italic">{subtitulo} </h3>
                <p className="card-text mt-2">{descripcion} </p>

            </div>
            <div className="card-footer d-flex justify-content-center">
                <a href={urlButton} target="_blank" className="btn btn-primary">Ver película</a>
            </div>
        </div>
    )
}

export default Card;