import React, { useState, useEffect } from "react";
import "./css/Home.css";

export default function Home() {
  let [name, setName] = useState("");

  useEffect(() => {
    const arr = "Santiago Puentes       ";
    let i = 0;
    let aux = "";
    const interval = setInterval(() => {
      aux = aux + arr[i];
      setName(aux);
      i++;
      if (i === arr.length + 1) {
        setName("");
        aux = "";
        i = 0;
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-column flex-row-ns mr3 mb0 code pb0 ">
      <div className="db dtc v-mid-ns tl w-100 w-50-ns gold ma3  ">
        <p className="f2 f1-l mb2 mt3 b ">{name}</p>
        <p className="f4 f3-l ma0 courier">FULL STACK JR</p>
        <p className="f5 f4-l mt1 mb0 courier">Bogotá,Col</p>
        <p className="f5 f4-l mt1 courier">santiagopuentes8@gmail.com</p>

        <div>
          <a
            className="link gold hover-silver dib h2 w2 mr3"
            href="https://github.com/mrmrs"
            title="GitHub"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
            >
              <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
            </svg>
          </a>
          <a className="link hover-silver gold dib h2 w2 mr3" title="LinkedIn">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
            >
              <path
                d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
                fillRule="nonzero"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="db dtc v-mid-ns w-100 w-50-ns flex justify-center align-center"></div>
    </div>
  );
}
