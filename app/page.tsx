import { AuroraBackground } from "@/components/aurora-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { ConnectorStatus } from "@/components/connector-status"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <AuroraBackground />
      <Navigation />
      
      <main className="pt-20">
        <HeroSection />
        
        {/* Enhanced Connector Status Section */}
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-grey-900/50 to-grey-800/50" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-grey-300 bg-clip-text text-transparent">
                Global Federation Network
              </h2>
              <p className="text-xl text-grey-400 max-w-2xl mx-auto">
                Real-time connectivity across the world&apos;s leading medical research institutions
              </p>
            </div>
            <ConnectorStatus />
          </div>
        </section>
        
        <CTASection />
        
        {/* Enhanced Mission Statement */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-grey-900 via-grey-800 to-grey-900" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-pass/5 rounded-full blur-3xl" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <blockquote className="text-3xl md:text-5xl font-light italic text-grey-200 mb-8 leading-tight">
              &ldquo;We design to collapse the distance between idea and cure—at planetary scale.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4 text-accent-pass text-lg font-semibold">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent-pass" />
              <span>Merge only what advances the CureGraph</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent-pass" />
            </div>
          </div>
        </section>
      </main>
      
      {/* Enhanced Footer */}
      <footer className="border-t border-grey-700/50 bg-grey-900/90 backdrop-blur-xl py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Brand column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-pass to-accent-merit flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">Bastion</span>
              </div>
              <p className="text-grey-400 max-w-md">
                The command center for translational medicine, unifying research at software speed.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-accent-pass">
                  <div className="w-2 h-2 bg-accent-pass rounded-full animate-pulse" />
                  System Online
                </div>
                <div className="text-sm text-grey-400">99.9% Uptime</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Platform</h4>
              <ul className="space-y-3 text-grey-400">
                <li><a href="/discover" className="hover:text-accent-pass transition-colors">Discover</a></li>
                <li><a href="/workspace" className="hover:text-accent-pass transition-colors">Workspace</a></li>
                <li><a href="/curegraph" className="hover:text-accent-pass transition-colors">CureGraph</a></li>
                <li><a href="/ops" className="hover:text-accent-pass transition-colors">Ops Dashboard</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Ecosystem</h4>
              <ul className="space-y-3 text-grey-400">
                <li><a href="/marketplace" className="hover:text-accent-pass transition-colors">Marketplace</a></li>
                <li><a href="/connectors" className="hover:text-accent-pass transition-colors">Connectors</a></li>
                <li><a href="/governance" className="hover:text-accent-pass transition-colors">Governance</a></li>
                <li><a href="/rfcs" className="hover:text-accent-pass transition-colors">RFCs</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-3 text-grey-400">
                <li><a href="/docs" className="hover:text-accent-pass transition-colors">Documentation</a></li>
                <li><a href="/api" className="hover:text-accent-pass transition-colors">API Reference</a></li>
                <li><a href="/compliance" className="hover:text-accent-pass transition-colors">Compliance</a></li>
                <li><a href="/status" className="hover:text-accent-pass transition-colors">System Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-grey-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-grey-400">
              © 2025 Estelion. Licensed under MIT. Built with evidence and abundance.
            </div>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-grey-400 hover:text-accent-pass transition-colors">Privacy</a>
              <a href="/terms" className="text-grey-400 hover:text-accent-pass transition-colors">Terms</a>
              <a href="/security" className="text-grey-400 hover:text-accent-pass transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}