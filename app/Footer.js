
import Box from "./Box";

export default function Footer() {
  return (
    <Box>
      <p className="text-sm">All rights reserved {new Date().getFullYear()}. Built with Next.JS and Tailwind hosted on Vercel. <a target="_blank" rel="noreferrer" href="https://github.com/mattjared/mattjared.github.io">Code available on Github.</a></p>
    </Box>
  )
}