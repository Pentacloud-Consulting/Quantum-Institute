"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Briefcase, 
  Sparkles, 
  Check, 
  ChevronDown, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  X,
  Compass,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

// Label component
const Label = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <label className="block text-[11px] font-heading font-bold tracking-[0.18em] text-[#475569] uppercase mb-2 flex items-center gap-1">
    {children}
    {required && <span className="text-[#ea580c]">*</span>}
  </label>
);

// Input component with icon
const IconInput = ({ 
  icon: Icon, 
  ...props 
}: { 
  icon?: React.ElementType; 
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative group">
    {Icon && (
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ea580c] transition-colors pointer-events-none">
        <Icon className="w-4 h-4" />
      </div>
    )}
    <input 
      className={`w-full bg-white/90 border border-slate-200/90 rounded-xl ${Icon ? 'pl-11' : 'px-4'} pr-4 py-3.5 text-sm font-ui text-[#1e293b] placeholder:text-slate-400 focus:outline-none focus:border-[#ea580c] focus:ring-4 focus:ring-[#ea580c]/10 shadow-sm transition-all duration-200`}
      {...props}
    />
  </div>
);

// CustomSelect Dropdown component
const CustomSelect = ({ 
  options, 
  placeholder, 
  multiple = false,
  value,
  onChange
}: { 
  options: { label: string; value: string }[]; 
  placeholder: string; 
  multiple?: boolean;
  value?: string[];
  onChange?: (val: string[]) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<string[]>(value || []);
  const [otherText, setOtherText] = useState('');

  const selected = value !== undefined ? value : internalSelected;

  const updateSelected = (newSelected: string[]) => {
    if (onChange) {
      onChange(newSelected);
    } else {
      setInternalSelected(newSelected);
    }
  };

  const handleSelect = (val: string) => {
    if (multiple) {
      const next = selected.includes(val) 
        ? selected.filter(v => v !== val) 
        : [...selected, val];
      updateSelected(next);
    } else {
      updateSelected([val]);
      setIsOpen(false);
    }
  };

  const removeTag = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    updateSelected(selected.filter(v => v !== val));
  };

  const showOtherInput = selected.includes('other');

  return (
    <div className="relative" style={{ zIndex: isOpen ? 60 : 10 }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/90 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-[#1e293b] cursor-pointer flex justify-between items-center hover:border-slate-300 shadow-sm transition-all duration-200 min-h-[48px]"
      >
        <div className="flex flex-wrap gap-1.5 items-center flex-1 mr-2">
          {selected.length === 0 ? (
            <span className="text-slate-400 text-sm">{placeholder}</span>
          ) : multiple ? (
            selected.map((val) => {
              const opt = options.find(o => o.value === val);
              return (
                <span 
                  key={val} 
                  className="inline-flex items-center gap-1.5 bg-[#ea580c]/10 text-[#ea580c] font-medium text-xs px-2.5 py-1 rounded-lg"
                >
                  {opt?.label || val}
                  <X className="w-3 h-3 hover:text-black cursor-pointer" onClick={(e) => removeTag(val, e)} />
                </span>
              );
            })
          ) : (
            <span className="text-[#1e293b] font-medium text-sm">
              {options.find(o => o.value === selected[0])?.label || placeholder}
            </span>
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#ea580c]' : ''}`} />
      </div>

      {showOtherInput && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3">
          <input 
            type="text" 
            value={otherText} 
            onChange={(e) => setOtherText(e.target.value)} 
            placeholder="Please specify..." 
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#1e293b] placeholder:text-slate-400 focus:outline-none focus:border-[#ea580c] focus:ring-4 focus:ring-[#ea580c]/10 transition-all" 
          />
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-xl shadow-xl max-h-[240px] overflow-y-auto p-1.5"
          >
            {options.map((opt) => {
              const isSelected = selected.includes(opt.value);
              return (
                <div 
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm flex items-center justify-between cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-[#ea580c]/10 text-[#ea580c] font-semibold' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-[#1e293b]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {multiple && (
                      <div className={`w-4 h-4 rounded border ${isSelected ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'} flex items-center justify-center transition-colors`}>
                        {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                      </div>
                    )}
                    {opt.label}
                  </span>
                  {!multiple && isSelected && <Check className="w-4 h-4 text-[#ea580c]" />}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function JoinTheWaitlist() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    earlyAccess: [] as string[],
    betaTesting: [] as string[],
    background: '',
    affiliation: [] as string[],
    interests: [] as string[],
    reason: [] as string[],
    notes: ''
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#faf8f5] text-[#1e293b] py-28 md:py-36 px-4 sm:px-6 md:px-12 flex justify-center items-center relative overflow-hidden selection:bg-[#ea580c] selection:text-white">
      
      {/* Dynamic Background Ambient Light Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#ea580c]/10 via-[#fed7aa]/20 to-transparent blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#ea580c]/5 blur-[140px] pointer-events-none rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative z-10"
      >
        
        {/* Header Badge & Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-[#ea580c]/10 border border-[#ea580c]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[11px] font-heading font-bold tracking-[0.2em] uppercase text-[#ea580c]">
              QUANTUM MOVEMENT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#1e293b] tracking-tight mb-3">
            Join the Waitlist
          </h1>
          <p className="text-sm sm:text-base font-body text-slate-500 max-w-lg mx-auto leading-relaxed">
            Be among the first to experience our sanctuary for exploration, scientific discovery, and holistic healing.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <div key="waitlist-form">
              {/* Stepper Progress Indicator */}
              <div className="mb-10">
                <div className="flex items-center justify-between text-xs font-heading font-bold tracking-wider uppercase mb-3">
                  <span className={step >= 1 ? "text-[#ea580c]" : "text-slate-400"}>
                    01. Basic Info
                  </span>
                  <span className={step >= 2 ? "text-[#ea580c]" : "text-slate-400"}>
                    02. Background & Vision
                  </span>
                </div>
                
                {/* Progress Bar Track */}
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#ea580c] to-[#f97316] rounded-full"
                    initial={{ width: "50%" }}
                    animate={{ width: step === 1 ? "50%" : "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Form Steps */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label required>Full Name</Label>
                          <IconInput 
                            icon={User}
                            type="text" 
                            placeholder="e.g., Sarah Jenkins" 
                            required
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                          />
                        </div>

                        <div>
                          <Label required>Email Address</Label>
                          <IconInput 
                            icon={Mail}
                            type="email" 
                            placeholder="e.g., sarah@example.com" 
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>

                        <div>
                          <Label>Phone Number <span className="text-slate-400 normal-case font-normal">(Optional)</span></Label>
                          <IconInput 
                            icon={Phone}
                            type="tel" 
                            placeholder="e.g., +1 (555) 000-0000" 
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>

                        <div>
                          <Label required>Location / Timezone</Label>
                          <IconInput 
                            icon={Globe}
                            type="text" 
                            placeholder="e.g., London, UK (GMT)" 
                            required
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <div>
                          <Label>Early Access Preferences</Label>
                          <CustomSelect 
                            placeholder="Select early access options..."
                            multiple={true}
                            value={formData.earlyAccess}
                            onChange={(val) => handleInputChange('earlyAccess', val)}
                            options={[
                              { label: 'Courses & Workshops', value: 'courses' },
                              { label: 'Research Papers & Insights', value: 'research' },
                              { label: 'Community Forums', value: 'community' },
                              { label: 'Healing Programs', value: 'healing' },
                              { label: 'Volunteering & Collaborations', value: 'volunteering' }
                            ]}
                          />
                        </div>

                        <div>
                          <Label>Beta Testing Interest</Label>
                          <CustomSelect 
                            placeholder="Select preference..."
                            value={formData.betaTesting}
                            onChange={(val) => handleInputChange('betaTesting', val)}
                            options={[
                              { label: "Yes, I'd love to participate", value: 'yes' },
                              { label: 'No, thank you', value: 'no' }
                            ]}
                          />
                        </div>
                      </div>

                      {/* Next Step Button */}
                      <div className="pt-6 border-t border-slate-100 flex justify-end">
                        <button 
                          type="button" 
                          onClick={() => setStep(2)}
                          className="w-full sm:w-auto px-8 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-heading font-bold tracking-[0.15em] uppercase rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#ea580c]/25 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
                        >
                          Continue to Step 02
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:col-span-2">
                          <Label>Professional Background & Experience</Label>
                          <IconInput 
                            icon={Briefcase}
                            type="text" 
                            placeholder="e.g., Neuroscience Researcher, 7 years in Integrative Health" 
                            value={formData.background}
                            onChange={(e) => handleInputChange('background', e.target.value)}
                          />
                        </div>

                        <div>
                          <Label>Primary Affiliation</Label>
                          <CustomSelect 
                            placeholder="Select affiliation..."
                            value={formData.affiliation}
                            onChange={(val) => handleInputChange('affiliation', val)}
                            options={[
                              { label: 'Student / Academic', value: 'student' },
                              { label: 'Researcher / Scholar', value: 'researcher' },
                              { label: 'Healthcare Practitioner', value: 'practitioner' },
                              { label: 'Entrepreneur / Executive', value: 'entrepreneur' },
                              { label: 'Other', value: 'other' }
                            ]}
                          />
                        </div>

                        <div>
                          <Label>Reason for Joining</Label>
                          <CustomSelect 
                            placeholder="What brings you here?"
                            value={formData.reason}
                            onChange={(val) => handleInputChange('reason', val)}
                            options={[
                              { label: 'Want to study & learn', value: 'study' },
                              { label: 'Looking to collaborate', value: 'collaborate' },
                              { label: 'Research opportunities', value: 'research_opp' },
                              { label: 'Curious explorer', value: 'explorer' },
                              { label: 'Seeking healing & wellbeing', value: 'heal' },
                              { label: 'Other', value: 'other' }
                            ]}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Areas of Interest</Label>
                        <CustomSelect 
                          placeholder="Select all areas that excite you..."
                          multiple={true}
                          value={formData.interests}
                          onChange={(val) => handleInputChange('interests', val)}
                          options={[
                            { label: 'Quantum Science', value: 'quantum' },
                            { label: 'Integrative Medicine & Healing', value: 'healing' },
                            { label: 'Architecture & Spatial Design', value: 'architecture' },
                            { label: 'Consciousness & Philosophy', value: 'philosophy' },
                            { label: 'Public Health Education', value: 'health' }
                          ]}
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <button 
                          type="button" 
                          onClick={() => setStep(1)}
                          className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-heading font-semibold tracking-wider uppercase rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </button>

                        <button 
                          type="submit" 
                          className="w-full sm:w-auto px-10 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-heading font-bold tracking-[0.15em] uppercase rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ea580c]/30 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
                        >
                          Submit Application
                          <CheckCircle2 className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          ) : (
            /* Success Screen Animation */
            <motion.div 
              key="success-screen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="py-12 text-center flex flex-col items-center justify-center space-y-6"
            >
              {/* Animated Quantum Checkmark Orb */}
              <div className="relative flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-24 h-24 rounded-full bg-[#ea580c]/20 blur-lg"
                />
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#ea580c] to-[#f97316] flex items-center justify-center shadow-lg shadow-[#ea580c]/30 relative z-10">
                  <Check className="w-8 h-8 text-white stroke-[3]" />
                </div>
              </div>

              <div className="space-y-2 max-w-md">
                <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#1e293b]">
                  Application Received!
                </h2>
                <p className="text-sm font-body text-slate-500 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1e293b]">{formData.fullName || 'Explorer'}</span>. Your request for early access to the Quantum Institute has been submitted.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl max-w-sm w-full text-left text-xs text-slate-600 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Confirmation Sent To:</span>
                  <span className="font-medium text-[#1e293b] truncate max-w-[200px]">{formData.email || 'Your Email'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-[#ea580c] font-semibold">Priority Review</span>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#1e293b] hover:bg-black text-white text-xs font-heading font-semibold tracking-wider uppercase rounded-full transition-all shadow-md"
                >
                  Return to Home
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
