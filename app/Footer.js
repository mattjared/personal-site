export default function Footer() {
  return (
    <div className='mx-auto w-full max-w-3xl p-10 text-slate-400'>
      <p className="text-sm">All rights reserved {new Date().getFullYear()}. Built with Next.JS on Vercel. <a target="_blank" rel="noreferrer" href="https://github.com/mattjared/personal-site">Raise a PR on Gitub.</a></p>
    </div>
  )
}