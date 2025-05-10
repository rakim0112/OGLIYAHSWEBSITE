import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Music, Instagram, Youtube, Tiktok, Facebook } from "lucide-react";

export default function OGLiyahWebsite() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-b from-black to-red-900">
        <h1 className="text-5xl font-bold mb-4">OG LIYAH</h1>
        <p className="text-lg mb-6">Raw. Real. Rising.</p>
        <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => window.open("https://open.spotify.com/artist/2xhuM8fIUkuQz1pM6HKcQq?si=5LzsM1vkQbCQwkHSYQhBBg", "_blank")}>Listen Now</Button>
      </section>

      {/* Music Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Music</h2>
        <div className="flex flex-col items-center space-y-4">
          <iframe
            src="https://open.spotify.com/embed/artist/2xhuM8fIUkuQz1pM6HKcQq?utm_source=generator"
            width="300"
            height="80"
            allow="encrypted-media"
            className="rounded"
          ></iframe>
          <iframe
            width="300"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/zone6prinxess&color=%23ff5500"
            className="rounded"
          ></iframe>
          <Button className="bg-white text-black" onClick={() => window.open("https://music.apple.com/us/artist/og-liyah/1799799132", "_blank")}>Listen on Apple Music</Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="p-10 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-4">Videos</h2>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed?listType=user_uploads&list=ZONE6PRINXESS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      </section>

      {/* About Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">About OG LIYAH</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          OG LIYAH is a rising artist breaking through with raw lyricism and viral presence.
          With over 1M+ TikTok likes and 15K+ SoundCloud plays, she’s crafting her lane in the industry.
        </p>
      </section>

      {/* Shows Section */}
      <section className="p-10 bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-4">Upcoming Shows</h2>
        <ul className="space-y-2 text-gray-300">
          <li>📍 Atlanta, GA – June 8th @ The Loft</li>
          <li>📍 Charlotte, NC – June 22nd @ Snug Harbor</li>
          <li>📍 Miami, FL – July 14th @ Wynwood Central</li>
        </ul>
      </section>

      {/* Mailing List Signup */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join the Mailing List</h2>
        <form
          className="flex flex-col items-center space-y-4"
          action="https://formspree.io/f/xgvkzjye"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded text-black"
            required
          />
          <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
        </form>
      </section>

      {/* Contact + Socials */}
      <section className="p-10 bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-4">Connect</h2>
        <div className="flex justify-center space-x-6 text-white">
          <a href="mailto:youremail@example.com" aria-label="Email"><Mail /></a>
          <a href="https://www.instagram.com/zone6prinxess/" target="_blank" aria-label="Instagram"><Instagram /></a>
          <a href="https://www.tiktok.com/@zone6prinxess?lang=en" target="_blank" aria-label="TikTok"><Tiktok /></a>
          <a href="https://www.youtube.com/@ZONE6PRINXESS" target="_blank" aria-label="YouTube"><Youtube /></a>
          <a href="https://www.facebook.com/ZONE6PRINXESSVlogs/" target="_blank" aria-label="Facebook"><Facebook /></a>
          <a href="https://open.spotify.com/artist/2xhuM8fIUkuQz1pM6HKcQq?si=5LzsM1vkQbCQwkHSYQhBBg" target="_blank" aria-label="Spotify"><Music /></a>
        </div>
      </section>
    </main>
  );
}
