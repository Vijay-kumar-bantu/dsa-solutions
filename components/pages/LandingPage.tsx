"use client";

import { motion } from "framer-motion";
import { Code2, Brain, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-20 pb-32 px-4"
            >
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Code2 className="w-20 h-20 mx-auto text-primary-600 dark:text-primary-400" />
                    </motion.div>
                    <h1 className="mt-8 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                        Unlock Your Path to DSA Mastery
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Comprehensive solutions and explanations for the most important
                        coding interview questions.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push("/dataset/blind75")}
                        className="mt-8 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium flex items-center space-x-2 mx-auto"
                    >
                        <span>Start Learning</span>
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </motion.section>

            {/* Blind 75 Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center space-x-4 mb-8">
                            <Brain className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                What is Blind 75?
                            </h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            The Blind 75 is a curated list of leetcode questions created by a
                            Facebook engineer that covers the most important concepts and
                            patterns in coding interviews. These questions are carefully
                            selected to help you master the essential problem-solving
                            techniques required by top tech companies.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push("/dataset/blind75")}
                            className="mt-8 px-6 py-2 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            View Solutions
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
}
