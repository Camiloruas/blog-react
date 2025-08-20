"use client";
import clsx from "clsx";

export default function Header() {
    return (
        <div>
            <button
                className={clsx(
                    "rounded-md",
                    "bg-blue-500",
                    "text-white",
                    "px-4",
                    "py-2",
                    "hover:scale-105",
                    "hover:-translate-y-1",
                    "transition-transform",
                    "duration-200"
                )}
                onClick={() => alert(123)}
            >
                Botão com Salto e alert
            </button>
        </div>
    );
}
