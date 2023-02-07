import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, Outlet } from "react-router-dom";

export default function Works() {
  return (
    <div>
      <ReactMarkdown>
      ### Au fil des années, nous avons pu accompagner les meilleurs.
      </ReactMarkdown>
      <ReactMarkdown>
      Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
      </ReactMarkdown>
      <nav>
        <Link to='works/platon-study-case'>Platon</Link>
        <Link to='works/sedal-study-case'>Sedal</Link>
        <Link to='works/solane-study-case'>Solane</Link>
      </nav>
      <Outlet />
    </div>
  )
}