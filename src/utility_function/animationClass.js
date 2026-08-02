export const animationClass = (isActive) => {
    `transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
        isActive
        ?"opacity-100 -translate-x-0 scale-100"
        :"opacity-0 -translate-x-10  scale-90"
    }`
}