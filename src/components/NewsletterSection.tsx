import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-8 py-16 text-center">
      <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl text-white font-extrabold mb-8 tracking-tight uppercase">
        JOIN_THE_NEURAL_NETWORK
      </h2>

      {submitted ? (
        <div className="p-6 bg-[#1a1c1c] border border-[#ddb7ff]/40 rounded-lg text-center space-y-3 animate-fade-in">
          <CheckCircle className="w-10 h-10 text-[#ddb7ff] mx-auto" />
          <h3 className="font-display-lg text-lg text-white font-bold">
            FEED_LINK_INITIALIZED
          </h3>
          <p className="font-mono text-xs text-[#cfc2d6]">
            User ID <span className="text-[#ddb7ff] font-bold">{email}</span> connected to NEONTOMY real-time telemetry stream.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setEmail('');
            }}
            className="text-[10px] font-mono text-[#adc6ff] hover:underline"
          >
            CONNECT_ANOTHER_FEED
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="INPUT_USER_ID@NEONTOMY.SYS"
              className="w-full bg-transparent border-b border-white/20 px-4 py-6 font-mono text-xs sm:text-sm md:text-base text-[#ddb7ff] placeholder:text-white/20 focus:outline-none focus:border-[#adc6ff] transition-all"
            />
            <span className="absolute top-0 right-0 font-mono text-[8px] text-[#adc6ff] opacity-0 group-focus-within:opacity-100 transition-opacity uppercase">
              INPUT_REQ
            </span>
          </div>

          <button
            type="submit"
            className="octagonal bg-[#ddb7ff] text-[#490080] px-12 py-4 font-mono text-xs md:text-sm font-bold tracking-widest hover:shadow-[0_0_25px_white] transition-all duration-300 inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            CONNECT_FEED
          </button>
        </form>
      )}
    </section>
  );
};
