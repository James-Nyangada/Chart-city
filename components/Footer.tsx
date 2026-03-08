export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#04040B] pt-20 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <span className="font-space-grotesk font-bold text-2xl text-white tracking-widest">
              CHART CITY
            </span>
            <p className="text-sm text-gray-400 leading-relaxed">
              A digital ecosystem where creativity is currency and participation is power.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2">Explore</h4>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Market</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Continents</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Architects</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Kings</a>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2">Info</h4>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Manifesto</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2">Social</h4>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Twitter (X)</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">YouTube</a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-8">
          <p className="text-[10px] text-gray-600 leading-relaxed text-justify">
            HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS HAVE CERTAIN LIMITATIONS. UNLIKE AN ACTUAL PERFORMANCE RECORD, SIMULATED RESULTS DO NOT REPRESENT ACTUAL TRADING. ALSO, SINCE THE TRADES HAVE NOT BEEN EXECUTED, THE RESULTS MAY HAVE UNDER-OR-OVER COMPENSATED FOR THE IMPACT, IF ANY, OF CERTAIN MARKET FACTORS, SUCH AS LACK OF LIQUIDITY. SIMULATED TRADING PROGRAMS IN GENERAL ARE ALSO SUBJECT TO THE FACT THAT THEY ARE DESIGNED WITH THE BENEFIT OF HINDSIGHT. NO REPRESENTATION IS BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFIT OR LOSSES SIMILAR TO THOSE SHOWN.
            <br /><br />
            Chart City is not a broker and does not accept deposits. The offered technical solution for the Chart City platforms and data feed is powered by third-party providers. All content published and distributed by Chart City is to be treated as general information only. None of the information provided by Chart City or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a recommendation, endorsement, or sponsorship of any security, company, or fund.
          </p>
        </div>
      </div>
    </footer>
  );
}
