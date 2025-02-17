'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HomePage() {
  const [init, setInit] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      color: {
        value: "#6366f1",
      },
      links: {
        color: "#6366f1",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      opacity: {
        value: 0.4,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Particle effect background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={particlesOptions}
        />
      )}

      {/* Hero Section */}
      <div className="relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
            className="relative z-10"
          >
            {/* Animated text reveal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">
                Welcome to
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl font-bold text-white mb-8 leading-tight"
            >
              Snowy River <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Technologies
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-12"
            >
              Delivering cutting-edge solutions in infrastructure, data analytics, 
              and e-commerce optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4"
            >
              <a
                href="/projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 
                         transition-colors duration-300 flex items-center group"
              >
                View Projects
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg 
                         hover:border-gray-600 hover:text-white transition-colors duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Firedog Project */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-gray-700">
            <div className="h-3 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Firedog Fireproofing</h3>
              <p className="text-gray-400 mb-4">
                Engineered high-performance NAS infrastructure with comprehensive backup solutions, 
                ensuring seamless data integrity and disaster recovery.
              </p>
              <a 
                href="/projects/firedog"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Maven Project */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Maven Baseball Lab</h3>
              <p className="text-gray-400 mb-4">
                Data-driven solutions for player performance analysis, integrating advanced metrics 
                and machine learning models for optimal results.
              </p>
              <a 
                href="/projects/maven"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* DM Lives Project */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">DM Lives</h3>
              <p className="text-gray-400 mb-4">
                Technology-enhanced wellness brand with intelligent recommendation systems and 
                automated operations for personalized experiences.
              </p>
              <a 
                href="/projects/dmlives"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-indigo-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Infrastructure & Security</h3>
            <p className="text-gray-400">
              Robust infrastructure solutions with comprehensive security measures and backup systems.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-blue-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Data Analytics</h3>
            <p className="text-gray-400">
              Transform raw data into actionable insights with custom analytics solutions.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-purple-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Process Optimization</h3>
            <p className="text-gray-400">
              Streamline operations and enhance efficiency through automated workflows and intelligent systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
