import Link from "next/link";
import Contact from "../components/Contact";
import { site } from "../../siteData";
import MugShot from "../components/MugShot";
import { Card, CardContent } from "@/components/ui/card";

export default function DeployThisSite() {
  return (
    <>
      <main className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MugShot heading={site.about.heading} subheading="Deploy this site" />
          <div>
            <hr className="my-8" />
            <div>
              <h4 className="text-2xl font-serif mb-4">How it works</h4>
              <p>Deploy this site to your own Vercel account. <Link href="https://vercel.com" target="_blank">Start by creating an account here</Link></p>
              <p>Then, you can clone this repo and deploy it to your own account.</p>
              <p>This is a simple Next.js app with a bit of Tailwind CSS and Shadcn UI. It&apos;s hosted on Vercel.</p>
              <p className="mb-4">The code is open source and available on GitHub <Link href="https://github.com/mattjared/personal-site" target="_blank">here</Link>.</p>
              <hr className="my-8" />
              <h4 className="text-2xl font-serif mb-4">Guided option</h4>
              <p className="mb-4">I&apos;m also available to teach you how to build this site from the ground up for $250. That&apos;s 2 hours of consulting time and a custom build. I&apos;ve been a full-stack developer for 10 years and have experience with React, Next.js, Node.js, and more. You&apos;ll leave the call with all the tools to learn to code and build your own site. I&apos;ll help you customize the site to your liking, deploy to Vercel and use all the latest and great Next.js features.</p>
              <Card className="mb-4">
                <CardContent className="flex items-center p-4">
                  <span className="text-2xl mr-4">🦍</span>
                  <div>
                    <h5 className="font-semibold">$250 of consulting time and a custom build</h5>
                    <Link href="/contact" className="text-sm text-gray-500">Get in touch</Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}