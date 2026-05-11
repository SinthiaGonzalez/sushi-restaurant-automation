import Link from "next/link";
import { Plus, Menu as MenuIcon, Rainbow } from "lucide-react";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex  bg-white/10 px-8 py-3 backdrop-blur-sm border border-white/10">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:text-brand"
              >
                {link.name}
                {link.hasSubmenu && <Plus className="h-3.5 w-3.5 opacity-70" strokeWidth={3} />}
              </Link>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center">
            <button className="flex items-center gap-2.5 bg-[#DD5903] px-5 py-3 text-base font-semibold tracking-wider text-white transition-opacity hover:opacity-90">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <g clipPath="url(#clip0_200_3510)">
                  <path d="M14.9062 0H9.09375C8.49066 0 8 0.490656 8 1.09375V7.79241C8.23128 7.85987 8.45922 7.94056 8.68306 8.03525C9.42741 8.35009 10.0957 8.80059 10.6694 9.37428C11.2431 9.94797 11.6936 10.6163 12.0084 11.3606C12.2602 11.9559 12.4158 12.5796 12.4738 13.221C13.0255 13.3508 13.4375 13.8468 13.4375 14.4375V14.75C13.4375 15.2145 13.2915 15.6454 13.0436 16H14.9062C15.5093 16 16 15.5093 16 14.9062V1.09375C16 0.490656 15.5093 0 14.9062 0ZM13.7656 5.125C14.0245 5.125 14.2344 5.33488 14.2344 5.59375C14.2344 5.85262 14.0245 6.0625 13.7656 6.0625H10.2344C9.9755 6.0625 9.76562 5.85262 9.76562 5.59375C9.76562 5.33488 9.9755 5.125 10.2344 5.125H13.7656ZM10.9531 2.78125C10.9531 2.52238 11.163 2.3125 11.4219 2.3125H12.5781C12.837 2.3125 13.0469 2.52238 13.0469 2.78125C13.0469 3.04012 12.837 3.25 12.5781 3.25H11.4219C11.163 3.25 10.9531 3.04012 10.9531 2.78125ZM10.2344 7.9375C9.9755 7.9375 9.76562 7.72762 9.76562 7.46875C9.76562 7.20988 9.9755 7 10.2344 7H13.7656C14.0245 7 14.2344 7.20988 14.2344 7.46875C14.2344 7.72762 14.0245 7.9375 13.7656 7.9375H10.2344Z" fill="currentColor"/>
                  <path d="M5.78129 8.50203C3.26736 8.72184 1.25567 10.6923 0.972168 13.1875H11.5279C11.2444 10.6923 9.23273 8.72184 6.71879 8.50203V7.56094V7.49419H7.06864C7.32751 7.49419 7.53739 7.28431 7.53739 7.02544C7.53739 6.76656 7.32751 6.55669 7.06864 6.55669H5.43142C5.17254 6.55669 4.96267 6.76656 4.96267 7.02544C4.96267 7.28431 5.17254 7.49419 5.43142 7.49419H5.78129V7.56094V8.50203ZM4.33886 11.0023C3.98242 11.2532 3.68545 11.5883 3.48014 11.9715C3.39564 12.1292 3.23376 12.219 3.06657 12.219C2.99182 12.219 2.91607 12.2011 2.84557 12.1633C2.61739 12.041 2.53154 11.7569 2.65379 11.5287C2.92782 11.0173 3.32395 10.5702 3.79939 10.2357C4.01098 10.0867 4.30348 10.1375 4.45248 10.3492C4.60142 10.5609 4.55057 10.8533 4.33886 11.0023ZM5.93754 10.4966C5.83567 10.4966 5.73304 10.5022 5.63254 10.5132C5.61523 10.5151 5.59804 10.516 5.58107 10.516C5.34501 10.516 5.14189 10.3381 5.11567 10.0981C5.08757 9.84072 5.27339 9.60928 5.53073 9.58119C5.66492 9.56653 5.80179 9.55909 5.93754 9.55909C6.19642 9.55909 6.40629 9.76897 6.40629 10.0278C6.40629 10.2867 6.19642 10.4966 5.93754 10.4966Z" fill="currentColor"/>
                  <path d="M12.5 14.75V14.4375C12.5 14.2649 12.3601 14.125 12.1875 14.125H0.3125C0.139906 14.125 0 14.2649 0 14.4375V14.75C0 15.4403 0.559656 16 1.25 16H9.09375H11.25C11.9403 16 12.5 15.4403 12.5 14.75Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_200_3510">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="uppercase">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
