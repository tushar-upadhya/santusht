import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const { toast } = useToast();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    const handleThemeToggle = () => {
        const newTheme = isDark ? "light" : "dark";
        setTheme(newTheme);

        toast({
            title: "",
            description: `Switched to ${newTheme} mode.`,
            duration: 2000,
            className: " shadow-none text-slate-800 dark:text-white px-8",
        });
    };

    return (
        <div className="flex items-center space-x-2">
            <Switch
                checked={isDark}
                onCheckedChange={handleThemeToggle}
                className="data-[state=checked]:bg-gray-900"
            />
        </div>
    );
};

export default ThemeToggler;
