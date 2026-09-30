'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { TextField, Button } from '@mui/material';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF6B00', '#FF8A00', '#FFA047', '#FFFFFF'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.10] text-xs font-semibold uppercase tracking-widest text-[#FF8A00] mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mb-4">
            Let&apos;s Build Something <span className="text-gradient-orange">Impactful Together</span>
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            Interested in hiring Sajun or discussing MERN full-stack development opportunities? Reach out directly or drop a message below.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.10] space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-white mb-1">
                    Sajun Palraj
                  </h3>
                  <div className="text-base font-semibold text-[#FF6B00]">
                    MERN Full-Stack Developer
                  </div>
                  <p className="text-sm text-[#888888] mt-2">
                    Open to full-time junior/entry roles, full-stack internships, and ambitious engineering projects.
                  </p>
                </div>

                {/* Direct info items */}
                <div className="space-y-4 pt-2">
                  <a
                    href="mailto:sajunpalraj2004@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-[#FF6B00]/60 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#888888] font-medium">Email</div>
                      <div className="text-sm font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                        sajunpalraj2004@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+918608225321"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-[#FF6B00]/60 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#FF8A00]/10 text-[#FF8A00] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#888888] font-medium">Phone</div>
                      <div className="text-sm font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                        +91 8608225321
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-white/[0.08]">
                    <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#888888] font-medium">Location</div>
                      <div className="text-sm font-bold text-white">
                        Nagercoil, Tamil Nadu, India
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#888888] mb-3">
                    Social & Developer Networks
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/sajunpalraj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-[#FF6B00] hover:text-[#FF6B00] text-[#D4D4D4] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/sajun-palraj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-[#FF8A00] hover:text-[#FF8A00] text-[#D4D4D4] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/[0.10] relative">
                
                <h3 className="text-2xl font-bold font-outfit text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-[#888888] mb-6">
                  Fill out the form below and I will respond to your inquiry as soon as possible.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white font-outfit">
                      Thank you for reaching out!
                    </h4>
                    <p className="text-sm text-[#D4D4D4] max-w-md mx-auto">
                      Your message has been sent successfully. Sajun will get back to you promptly at your email address.
                    </p>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => setSubmitted(false)}
                      sx={{ borderColor: '#FF6B00', color: '#FF6B00', mt: 2 }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <TextField
                        fullWidth
                        id="contact-name"
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#888888' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(20, 20, 20, 0.7)',
                            borderRadius: '12px',
                            color: '#FFFFFF',
                            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.10)' },
                            '&:hover fieldset': { borderColor: '#FF6B00' },
                            '&.Mui-focused fieldset': { borderColor: '#FF6B00' },
                          },
                        }}
                      />
                    </div>

                    <div>
                      <TextField
                        fullWidth
                        id="contact-email"
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#888888' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(20, 20, 20, 0.7)',
                            borderRadius: '12px',
                            color: '#FFFFFF',
                            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.10)' },
                            '&:hover fieldset': { borderColor: '#FF6B00' },
                            '&.Mui-focused fieldset': { borderColor: '#FF6B00' },
                          },
                        }}
                      />
                    </div>

                    <div>
                      <TextField
                        fullWidth
                        id="contact-message"
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#888888' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(20, 20, 20, 0.7)',
                            borderRadius: '12px',
                            color: '#FFFFFF',
                            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.10)' },
                            '&:hover fieldset': { borderColor: '#FF6B00' },
                            '&.Mui-focused fieldset': { borderColor: '#FF6B00' },
                          },
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={loading}
                      endIcon={<Send className="w-4 h-4" />}
                      className="w-full !py-3.5 !font-bold shadow-lg"
                    >
                      {loading ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
