import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Star, Package, Zap, Component, Palette } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
                EzUI
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  className="text-slate-300 hover:text-white"
                >
                  <Link href="/docs" prefetch={true}>
                    Documentation
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-slate-300 hover:text-white"
                >
                  Components
                </Button>
                <Button
                  variant="ghost"
                  className="text-slate-300 hover:text-white"
                >
                  Examples
                </Button>
                <Button variant="secondary">
                  <Link
                    className="flex items-center gap-2"
                    href="https://github.com/nwaliaez/ezui"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Beautiful UI components, <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
              crafted with simplicity
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            A modern UI library built with Tailwind CSS and TypeScript. Create
            stunning interfaces with minimal effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              <Link href="/docs" prefetch={true}>
                Get Started
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Star className="w-5 h-5" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Package className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Lightweight
                  </h3>
                </div>
                <p className="text-slate-300">
                  Zero dependencies, minimal bundle size, and optimal
                  performance out of the box.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-violet-500/10 rounded-lg">
                    <Zap className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Type-Safe
                  </h3>
                </div>
                <p className="text-slate-300">
                  Built with TypeScript for better developer experience and
                  fewer bugs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-pink-500/10 rounded-lg">
                    <Component className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Customizable
                  </h3>
                </div>
                <p className="text-slate-300">
                  Easily customize components to match your brand with Tailwind
                  CSS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-slate-400">Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5k+</div>
              <div className="text-slate-400">Github Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-slate-400">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400">Contributors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
                ezUI
              </span>
              <span className="text-slate-400">
                © 2024. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Package className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Palette className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
