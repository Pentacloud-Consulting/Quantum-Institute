"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

// Reusable components
const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-2">
    {children}
  </label>
);

const Input = ({ ...props }) => (
  <input 
    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d15000] focus:ring-1 focus:ring-[#d15000] transition-all"
    {...props}
  />
);

const CustomSelect = ({ options, placeholder, multiple = false }: { options: {label: string, value: string}[], placeholder: string, multiple?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [otherText, setOtherText] = useState('');

  const handleSelect = (val: string) => {
    if (multiple) {
      setSelected(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
    } else {
      setSelected([val]);
      setIsOpen(false);
    }
  };

  const getDisplayText = () => {
    if (selected.length === 0) return placeholder;
    if (multiple) {
      if (selected.length === 1) return options.find(o => o.value === selected[0])?.label;
      return `${selected.length} options selected`;
    }
    return options.find(o => o.value === selected[0])?.label;
  };

  const showOtherInput = !multiple && selected.includes('other');

  return (
    <div className="relative" style={{ zIndex: isOpen ? 50 : 10 }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3.5 text-[14px] text-white cursor-pointer flex justify-between items-center hover:border-white/30 transition-colors"
      >
        <span className={selected.length ? "text-white" : "text-gray-500"}>
          {getDisplayText()}
        </span>
        <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {showOtherInput && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3">
           <input type="text" value={otherText} onChange={(e) => setOtherText(e.target.value)} placeholder="Please specify..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d15000] focus:ring-1 focus:ring-[#d15000] transition-all" />
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-2xl max-h-[250px] overflow-y-auto"
          >
            {options.map((opt) => {
              const isSelected = selected.includes(opt.value);
              return (
                <div 
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={`px-4 py-3 text-[14px] flex items-center gap-3 cursor-pointer transition-colors ${isSelected && !multiple ? 'bg-[#d15000]/20 text-white' : 'text-gray-300 hover:bg-[#d15000] hover:text-white'}`}
                >
                  {multiple && (
                    <div className={`w-[16px] h-[16px] rounded-[3px] border ${isSelected ? 'border-[#d15000] bg-[#d15000]' : 'border-white/30 bg-transparent'} flex items-center justify-center shrink-0`}>
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                  )}
                  {opt.label}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Checkbox = ({ label, name }: { label: string, name: string }) => (
  <label className="flex items-center gap-4 cursor-pointer group">
    <div className="relative flex items-center justify-center w-[18px] h-[18px] rounded-[4px] border border-white/30 bg-transparent group-hover:border-white/50 transition-colors shrink-0">
      <input type="checkbox" name={name} value={label} className="absolute opacity-0 w-full h-full cursor-pointer peer" />
      <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
    </div>
    <span className="text-[14px] text-gray-300 group-hover:text-white transition-colors">{label}</span>
  </label>
);

const Radio = ({ label, name }: { label: string, name: string }) => (
  <label className="flex items-center gap-4 cursor-pointer group">
    <div className="relative flex items-center justify-center w-[18px] h-[18px] rounded-full border border-white/30 bg-transparent group-hover:border-white/50 transition-colors shrink-0">
      <input type="radio" name={name} value={label} className="absolute opacity-0 w-full h-full cursor-pointer peer" />
      <div className="w-[10px] h-[10px] rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
    </div>
    <span className="text-[14px] text-gray-300 group-hover:text-white transition-colors">{label}</span>
  </label>
);

export default function JoinTheWaitlist() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full bg-[#050505] text-white py-24 md:py-32 px-4 sm:px-6 flex justify-center items-start selection:bg-[#d15000] selection:text-white relative overflow-x-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d15000]/10 blur-[120px] pointer-events-none rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative z-10"
      >
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Join the Waitlist</h1>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Become part of the Quantum Movement. Provide your details below to request early access and help shape tomorrow.
          </p>
        </div>

        <form className="space-y-0" onSubmit={(e) => e.preventDefault()}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#d15000]/20 flex items-center justify-center text-[#d15000] text-sm font-bold shrink-0">1</div>
                  <h2 className="text-xl font-medium tracking-wide">Basic Information</h2>
                  <div className="flex-1 h-px bg-white/10 ml-4" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Full Name</Label>
                    <Input type="text" placeholder="e.g., John Doe" required />
                  </div>
                  <div>
                    <Label>Email Address</Label>
                    <Input type="email" placeholder="e.g., john@example.com" required />
                  </div>
                  <div>
                    <Label>Phone Number <span className="text-gray-600 normal-case font-normal">(Optional)</span></Label>
                    <Input type="tel" placeholder="e.g., +1 (555) 000-0000" />
                  </div>
                  <div>
                    <Label>Country / City / Time Zone</Label>
                    <Input type="text" placeholder="e.g., USA, New York, EST" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="relative" style={{ zIndex: 40 }}>
                    <Label>Early Access Preferences</Label>
                    <CustomSelect 
                      placeholder="Select early access options..."
                      multiple={true}
                      options={[
                        { label: 'Courses', value: 'courses' },
                        { label: 'Research papers', value: 'research' },
                        { label: 'Community forums', value: 'community' },
                        { label: 'Healing programs', value: 'healing' },
                        { label: 'Volunteering / Internships', value: 'volunteering' }
                      ]}
                    />
                  </div>
                  <div className="relative" style={{ zIndex: 30 }}>
                    <Label>Beta Testing</Label>
                    <CustomSelect 
                      placeholder="Select beta testing preference..."
                      options={[
                        { label: "Yes, I'm interested", value: 'yes' },
                        { label: 'No, thank you', value: 'no' }
                      ]}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-end">
                  <button 
                    type="button" 
                    onClick={() => setStep(2)}
                    className="px-12 py-4 bg-[#d15000] hover:bg-[#b04300] text-white text-sm font-bold tracking-[0.1em] uppercase rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(209,80,0,0.3)] hover:shadow-[0_0_30px_rgba(209,80,0,0.5)] flex items-center gap-3"
                  >
                    Next Step
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#d15000]/20 flex items-center justify-center text-[#d15000] text-sm font-bold shrink-0">2</div>
                  <h2 className="text-xl font-medium tracking-wide">Background & Intent</h2>
                  <div className="flex-1 h-px bg-white/10 ml-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label>Professional Background</Label>
                    <Input type="text" placeholder="e.g., Data Scientist, Healthcare, 5 years experience" required />
                  </div>
                  <div className="md:col-span-2 relative z-50">
                    <Label>Primary Affiliation</Label>
                    <CustomSelect 
                      placeholder="Select your primary affiliation..."
                      options={[
                        { label: 'Student', value: 'student' },
                        { label: 'Researcher', value: 'researcher' },
                        { label: 'Practitioner', value: 'practitioner' },
                        { label: 'Entrepreneur', value: 'entrepreneur' },
                        { label: 'Other', value: 'other' }
                      ]}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="relative" style={{ zIndex: 40 }}>
                    <Label>Areas of Interest</Label>
                    <CustomSelect 
                      placeholder="Select all that apply..."
                      multiple={true}
                      options={[
                        { label: 'Quantum Science', value: 'quantum' },
                        { label: 'Healing / Integrative Medicine', value: 'healing' },
                        { label: 'Technology & Innovation', value: 'tech' },
                        { label: 'Research & Academia', value: 'research' },
                        { label: 'Consciousness / Philosophy', value: 'philosophy' },
                        { label: 'Health Education / Public Health', value: 'health' }
                      ]}
                    />
                  </div>
                  <div className="relative" style={{ zIndex: 30 }}>
                    <Label>Reason for Joining</Label>
                    <CustomSelect 
                      placeholder="What brings you here?"
                      options={[
                        { label: 'Want to study', value: 'study' },
                        { label: 'Want to collaborate', value: 'collaborate' },
                        { label: 'Looking for research opportunities', value: 'research_opp' },
                        { label: 'Curious explorer', value: 'explorer' },
                        { label: 'Want to heal / be healed', value: 'heal' },
                        { label: 'Other', value: 'other' }
                      ]}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col items-center">
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <button 
                      type="button" 
                      onClick={() => setStep(1)}
                      className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-sm font-bold tracking-[0.1em] uppercase rounded-full transition-all"
                    >
                      Back
                    </button>
                    <button 
                      type="button" 
                      className="flex-1 md:flex-none px-12 py-4 bg-[#d15000] hover:bg-[#b04300] text-white text-sm font-bold tracking-[0.1em] uppercase rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(209,80,0,0.3)] hover:shadow-[0_0_30px_rgba(209,80,0,0.5)] flex items-center justify-center gap-3"
                    >
                      Submit Application
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-5 text-center max-w-md leading-relaxed">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service. We will review your application and get in touch with you soon.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}
