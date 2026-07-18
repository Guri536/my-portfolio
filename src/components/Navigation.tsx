import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, X, User } from "lucide-react";
import FullLogo from "@/assets/FullNameLogo.png"

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between gap-3">

                            <a
                                href="#home"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("#home");
                                }}
                                className="text-xl font-bold gradient-text cursor-pointer relative block"
                            >
                                <div
                                    className="z-0 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] h-10 w-32"
                                    style={{
                                        backgroundImage: `url(${FullLogo})`,

                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',

                                    }}
                                >
                                    {/* Sheen Mask Layer */}
                                    <div
                                        className="absolute inset-0 overflow-hidden"
                                        style={{
                                            WebkitMaskImage: `url(${FullLogo})`,
                                            WebkitMaskSize: 'contain',
                                            WebkitMaskPosition: 'center', // Keep mask aligned with background
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskImage: `url(${FullLogo})`,
                                            maskSize: 'contain',
                                            maskPosition: 'center',
                                            maskRepeat: 'no-repeat',
                                        }}
                                    >
                                        <div
                                            className="absolute top-0 left-0 h-full w-[300%] bg-linear-to-r from-transparent via-white to-transparent"
                                            style={{ animation: 'sheen 5.5s infinite alternate' }}
                                        ></div>
                                    </div>

                                    <style>
                                        {`
                                            @keyframes sheen {
                                                0% { 
                                                    transform: translateX(-50%) skewX(-12deg); 
                                                    opacity: 0.6; 
                                                }
                                                50% { 
                                                    /* Interpolated translation between -50% and -10% */
                                                    transform: translateX(-30%) skewX(-12deg); 
                                                    opacity: 1; 
                                                }
                                                100% { 
                                                    transform: translateX(-10%) skewX(-12deg); 
                                                    opacity: 0.6; 
                                                }
                                            }
                                        `}
                                    </style>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1 text-4xl">
                            {navItems.map((item) => (
                                <Button
                                    key={item.href}
                                    variant="ghost"
                                    className="hover:text-gray-900 hover:glow-effect hover:font-bold transition-colors text-lg"
                                    onClick={() => scrollToSection(item.href)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-background/95 backdrop-blur-lg">
                        <div className="flex flex-col items-center justify-center h-full gap-6">
                            {navItems.map((item) => (
                                <Button
                                    key={item.href}
                                    variant="ghost"
                                    className="text-2xl hover:text-primary transition-colors"
                                    onClick={() => scrollToSection(item.href)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
