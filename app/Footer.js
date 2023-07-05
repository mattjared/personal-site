
import Box from "./Box";

export default function Footer() {
  return (
    <Box>
      <p className="text-sm">All rights reserved {new Date().getFullYear()}. Built with Next.JS on Vercel. <a target="_blank" rel="noreferrer" href="https://github.com/mattjared/personal-site">Raise a PR on Gitub.</a></p>
    </Box>
  )
}