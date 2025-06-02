import { motion } from "motion/react"

export const CircleDecoration = ({ className, strokeWidth, delay = 0 }: { className?: string, strokeWidth?: number, delay?: number }) => {
    return (
        <svg className={className} strokeWidth={strokeWidth ?? 1} width="127" stroke="currentColor" height="41" viewBox="0 0 127 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} exit={{ pathLength: 0 }} transition={{ type: "spring", damping: 20, delay }} d="M65.2357 0.595703C30.613 0.595703 1.04297 9.8268 1.04297 20.7362C1.04297 31.6455 29.1102 40.4893 63.7329 40.4893C98.3556 40.4893 126.423 31.6455 126.423 20.7362C126.423 10.0305 99.4091 2.12249 65.6804 1.80074" />
        </svg>
    )
}

export const CircleMark = ({ className, strokeWidth }: { className?: string, strokeWidth?: number }) => (
    <svg className={className} strokeWidth={strokeWidth ?? 5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width={334} height={370} viewBox="0 0 334 370" fill="none">
        <path d="M4.177 309.482c-12.667 74.833 77.949 94.529 221.549-49.071 179.5-179.5 113.951-369.929-80.049-175.929" />
    </svg>
)
