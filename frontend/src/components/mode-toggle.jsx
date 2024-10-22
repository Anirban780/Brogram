import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export function ModeToggle({ className = "" }) {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    // Update the state based on the current theme
    useEffect(() => {
        setIsDark(theme === "dark");
    }, [theme]);

    // Toggle between light and dark modes
    const toggleTheme = () => {
        if (isDark) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <Button
            variant="ghost"
            className={`size-9 px-0 ${className}`}
            onClick={toggleTheme}
        >
            <SunIcon
                className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
                    isDark ? "dark:-rotate-90 dark:scale-0" : ""
                }`}
            />
            <MoonIcon
                className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
                    isDark ? "dark:rotate-0 dark:scale-100" : ""
                }`}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
