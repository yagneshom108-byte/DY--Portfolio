import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Showreel', href: '#showreel' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#software' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);

  }, []);

  // Scroll to Contact

  const scrollToContact = () => {

    const section = document.getElementById('contact');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setIsMobileMenuOpen(false);

  };

  return (

    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled
          ? 'glass-dark py-2'
          : 'bg-transparent'
      )}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >

          <img
            src="public/images/logo/ChatGPT Image May 14, 2026, 08_23_50 PM.png"
            alt="DY Logo"
            className="h-12 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,0,0,0.45)]"
          />

        </motion.div>

        {/* Desktop Links */}

        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link, index) => (

            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >

              {link.name}

              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />

            </motion.a>

          ))}

          {/* Hire Me Button */}

          <Button
            variant="default"
            size="sm"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white shadow-glow hover:shadow-glow-lg transition-all"
          >
            Hire Me
          </Button>

        </div>

        {/* Mobile Toggle */}

        <div className="md:hidden">

          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="text-white p-2"
          >

            {isMobileMenuOpen
              ? <X size={24} />
              : <Menu size={24} />
            }

          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isMobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark mt-4 rounded-xl overflow-hidden"
          >

            <div className="flex flex-col p-6 gap-4">

              {navLinks.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
                  className="text-lg font-medium text-muted-foreground hover:text-primary"
                >

                  {link.name}

                </a>

              ))}

              {/* Mobile Hire Me */}

              <Button
                onClick={scrollToContact}
                className="w-full bg-primary text-white mt-4"
              >
                Hire Me
              </Button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );

};