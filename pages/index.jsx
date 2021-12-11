import React from "react";
import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1>Go to Saas Landing Page <span style={{color: "green", textAlign: "center"}}>
          <Link href="/index.html">here</Link>
          </span> </h1>
      </div>
  );
}
