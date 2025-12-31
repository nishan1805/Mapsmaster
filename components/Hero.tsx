
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fallbackImage = "https://picsum.photos/id/2/1000/800";

  const startGeneration = async () => {
    try {
      setError(null);
      setIsGenerating(true);
      
      // Instantiate GoogleGenAI right before the API call as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let operation;
      try {
        operation = await ai.models.generateVideos({
          model: 'veo-3.1-fast-generate-preview',
          prompt: 'split screen transformation, before vs after local business profile, low ratings turning into high reviews, performance charts rising, green growth arrows, maps pins, smooth cinematic motion, clean modern marketing style, 4K, professional animation',
          config: {
            numberOfVideos: 1,
            resolution: '1080p',
            aspectRatio: '16:9'
          }
        });
      } catch (e: any) {
        // Handle the specific "Requested entity was not found" error by prompting for key selection
        if (e.message?.includes("Requested entity was not found") || JSON.stringify(e).includes("Requested entity was not found")) {
          setError("Key Error");
          setIsGenerating(false);
          return;
        }
        throw e;
      }

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        // Re-instantiate for each status check to ensure latest key is used if it changed
        const statusAi = new GoogleGenAI({ apiKey: process.env.API_KEY });
        operation = await statusAi.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        setVideoUrl(`${downloadLink}&key=${process.env.API_KEY}`);
      } else {
        throw new Error("Video URI not found in response.");
      }
    } catch (e: any) {
      console.error("Video generation failed:", e);
      if (e.message?.includes("Requested entity was not found") || JSON.stringify(e).includes("Requested entity was not found")) {
        setError("Key Error");
      } else {
        setError("Failed to generate video");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeySelection = async () => {
    try {
      await window.aistudio.openSelectKey();
      // Proceed directly after selection attempt
      startGeneration();
    } catch (e) {
      console.error("Key selection failed", e);
    }
  };

  useEffect(() => {
    const checkAndStart = async () => {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (hasKey) {
        startGeneration();
      }
    };
    checkAndStart();
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-3/5 text-center lg:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Grow Your Local Business with <span className="text-googleBlue">Google Maps</span> & <span className="text-googleGreen">Local SEO</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              We help local businesses rank always on Google Search 1st Page and get more real customers in Raipur's local market today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href="#contact"
                className="w-full sm:w-auto bg-googleBlue text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-navy transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200 text-center"
              >
                Get Started
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto border-2 border-navy text-navy px-10 py-5 rounded-xl font-bold text-lg hover:bg-navy hover:text-white transition-all transform hover:-translate-y-1 text-center"
              >
                Contact Us
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex items-center gap-3">
                <span className="text-googleYellow text-2xl">★★★★★</span>
                <span className="text-sm font-bold text-navy"><span className="text-lg">100+</span> Happy Clients</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Raipur’s No. 1 Agency</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 aspect-video lg:aspect-auto">
              {videoUrl ? (
                <video 
                  src={videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-3xl"
                  onError={() => setVideoUrl(null)}
                />
              ) : (
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-gray-100 rounded-3xl">
                  <img 
                    src={fallbackImage} 
                    alt="Local SEO Marketing" 
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  />
                  
                  {/* Overlay for status and key selection */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-3xl backdrop-blur-[2px] z-10">
                    {!isGenerating && !videoUrl && (
                      <div className="text-center px-4">
                        <p className="text-white font-bold mb-4 text-sm">
                          {error === "Key Error" ? "Please select a valid Paid API Key to view the AI video." : "Experience our AI-powered transformation"}
                        </p>
                        <button 
                          onClick={handleKeySelection}
                          className="bg-white text-navy px-6 py-3 rounded-xl font-bold shadow-xl hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto pointer-events-auto"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          {error === "Key Error" ? "Update API Key" : "Generate Video Preview"}
                        </button>
                        {error === "Key Error" && (
                          <a 
                            href="https://ai.google.dev/gemini-api/docs/billing" 
                            target="_blank" 
                            className="block mt-4 text-[10px] text-white underline opacity-80 pointer-events-auto"
                          >
                            Requires Paid Billing Project
                          </a>
                        )}
                      </div>
                    )}
                    
                    {isGenerating && (
                      <div className="text-white text-center p-6 bg-navy/80 rounded-2xl mx-4 shadow-2xl border border-white/10">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mx-auto mb-4"></div>
                        <p className="font-bold text-sm mb-1">Creating Your AI Video...</p>
                        <p className="text-[10px] opacity-80">This usually takes 1-2 minutes.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Static Review Card Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-5 z-20 pointer-events-none">
                <div className="w-14 h-14 bg-googleRed rounded-2xl flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-navy">New Local Review!</p>
                  <p className="text-sm text-gray-500">Just arrived at Sharma Auto Works</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-googleBlue/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-googleYellow/5 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
