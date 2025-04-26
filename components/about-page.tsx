"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Heart, BookOpen, Users, Code, Coffee } from "lucide-react"
import { motion } from "framer-motion"
import Link  from "next/link"

export function AboutPage() {
  return (
    <motion.div
      className="flex-1 p-6 overflow-y-auto bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Goodreads Scraper API</h1>

        <div className="grid gap-6">
          <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-emerald-500" />
                Who Made This?
              </CardTitle>
              <CardDescription>Crafted with too much coffee for Bookish Nearby</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
            <p className="text-slate-600 dark:text-slate-400">
            The Goodreads Scraper API was built during a caffeine-fueled coding sprint as part of the R&D project <Link href="https://bookishnearby.com" className="text-emerald-500 hover:underline" target="_blank" rel="noopener noreferrer">Nearby Bookish</Link>; a platform that connects local readers to share books, engage in discussions, and foster a sense of community around reading. 
            When Goodreads shut down their API, one stubborn developer (hi 👋) decided to make a new way to fetch book data — by scraping it.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Developer: <Link href="https://github.com/ekamid" className="text-emerald-500 hover:underline" target="_blank" rel="noopener noreferrer">Ebrahim Khalil</Link> (professional overthinker and sometimes pretends to be a book nerd)
            </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/30">

            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-emerald-500" />
                Why We Made This
              </CardTitle>
              <CardDescription>Our mission and purpose</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <p className="text-slate-600 dark:text-slate-400">
              When Goodreads deprecated their public API in 2020, many book-related applications and services were left without a reliable source of book data.Although <Link href="https://bookishnearby.com" className="text-emerald-500 hover:underline" target="_blank" rel="noopener noreferrer">Nearby Bookish</Link> didn’t exist back then, while building it, we recognized the gap and the ongoing need for reliable book information. This API was created to fill that gap and to provide developers with easy access to the rich book data still available on Goodreads.
              </p>
              <p className="text-slate-600 dark:text-slate-400">Our mission is to:</p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-1">
                <li>Make book data accessible to developers</li>
                <li>Support the creation of innovative book-related applications</li>
                <li>Foster a community of book-loving developers</li>
                <li>Provide a reliable alternative to the deprecated Goodreads API</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Coffee className="mr-2 h-5 w-5 text-emerald-500" />
                Additional Credits
              </CardTitle>
              <CardDescription>People and resources that made this possible</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <p className="text-slate-600 dark:text-slate-400">
                We'd like to thank the following people and resources that made this project possible:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-1">
                <li>The open-source community for providing invaluable tools and libraries — especially <Link href="https://biblioreads.eu.org" className="text-emerald-500 hover:underline" target="_blank" rel="noopener noreferrer">Biblioreads</Link></li>
                <li>Goodreads for creating such a comprehensive book database</li>
                <li>All the authors and publishers who create the stories and knowledge we love.</li>
                <li>Our early adopters who provided valuable feedback and feature suggestions.</li>
                <li>And of course, anyone who helps keep me running with endless cups of coffee ☕</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/30 hover:shadow-md transition-shadow">

              <CardHeader>
                <CardTitle className="flex items-center">
                  <Github className="mr-2 h-5 w-5 text-emerald-500" />
                  GitHub Repository
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Our project is open-source! Check out the code, contribute, or report issues on GitHub.
                </p>
                
                <Button className="w-full bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600">
                  <Link href="https://github.com/ekamid/goodreads-scraper-api" className="flex items-center" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/30 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-red-500" />
                  Support This Project
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                If you find this project useful, please fuel its caffeine addiction and help keep it going!
                </p>
                <Button asChild className="w-full bg-red-500 hover:bg-red-600">
                  <Link href="https://buymeacoffee.com/ebrahimkhalil" className="flex items-center" target="_blank" rel="noopener noreferrer">
                    <Coffee className="mr-2 h-4 w-4" />
                    Buy Me a Coffee
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5 text-emerald-500" />
                Usage Terms
              </CardTitle>
              <CardDescription>How you can use this API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <p className="text-slate-600 dark:text-slate-400">
                The Goodreads Scraper API is provided for non-commercial use. If you're using it for a commercial
                project, please contact us for licensing options.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Please note that this API is not affiliated with or endorsed by Goodreads or Amazon. It is an
                independent project that scrapes publicly available data from Goodreads.
              </p>
              <p className="text-slate-600 dark:text-slate-400">We kindly ask that you:</p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-1">
                <li>Respect Goodreads' terms of service</li>
                <li>Cache data when possible to reduce load on our servers</li>
                <li>Credit our API in your application</li>
                <li>Do not use the API for scraping or data harvesting purposes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
