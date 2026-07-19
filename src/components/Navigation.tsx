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
        { label: "~/home", href: "#home" },
        { label: "~/about", href: "#about" },
        { label: "~/projects", href: "#projects" },
        { label: "~/sys_config", href: "#skills" },
        { label: "~/network", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono text-xs md:text-sm ${
                    isScrolled ? "bg-[#0a0a0a]/90 border-b border-primary/20 backdrop-blur-md" : "bg-[#0a0a0a]/10 backdrop-blur-xs"
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-10">
                        
                        {/* Minimalist Text Logo */}
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("#home");
                            }}
                            className="text-primary font-bold tracking-wider flex items-center gap-2 cursor-pointer"
                        >
                            <span className="w-2 h-2 bg-primary/80 shadow-[0_0_8px_rgba(16,185,129,0.8)] rounded-full animate-pulse"></span>
                            guri@system:~$
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/50"
                                    onClick={() => scrollToSection(item.href)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-primary hover:bg-primary/10"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
