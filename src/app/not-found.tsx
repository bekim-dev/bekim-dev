import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: This page could not be found",
}

export default function NotFound() {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <p>This page could not be found.</p>
    </div>
  )
}