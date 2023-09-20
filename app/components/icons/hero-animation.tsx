// app/components/icons/hero-animation.tsx\
'use client';

// import gifHero from '@/public/images/gif-hero-animated.webp';
import { useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import heroAnimationStill from 'public/images/hero-animation-still.png';

export default function HeroAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false); // State to track device type

  useEffect(() => {
    // Function to check and set if the device is desktop
    const checkDeviceType = () => {
      if (window.innerWidth >= 1024) {
        // Assuming 1024px as the breakpoint for desktop
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    // Initial check
    checkDeviceType();

    // Add event listener for window resize
    window.addEventListener('resize', checkDeviceType);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  if (!isDesktop) return null;
  // const imageSrc = prefersReducedMotion ? heroAnimationStill : gifHero;

  let imageSrc, className;
  if (prefersReducedMotion) {
    imageSrc =
      'https://res.cloudinary.com/dyy8g76av/image/upload/f_webp,q_auto/v1695149280/hero-animation-still_neaxme.webp';
    className = '-mt-9';
  } else {
    imageSrc =
      'https://res.cloudinary.com/dyy8g76av/image/upload/v1695149280/gif-hero-animated_pwcfif.webp';
    className = '-mt-18';
  }

  return (
    <>
      <div className={className}>
        <Image
          height="423"
          width="480"
          src={imageSrc}
          // src=""
          // src="https://res.cloudinary.com/dyy8g76av/image/upload/v1695149280/gif-hero-animated_pwcfif.webp"
          alt={'Animated Search Visual'}
          aria-hidden="true"
          // loading="lazy"
          priority
        />
      </div>
    </>
  );
}

// app/components/icons/hero-animation.tsx\
// 'use client';

// import gifHero from '@/public/images/gif-hero-animated.webp';
// import { useReducedMotion } from 'framer-motion';
// import Image from 'next/image';
// import heroAnimationStill from 'public/images/hero-animation-still.png';

// export default function HeroAnimation({ className }: any) {
//   const prefersReducedMotion = useReducedMotion();

//   return (
//     <>
//       {prefersReducedMotion ? (
//         <div className="-mt-9 hidden laptop:block">
//           <Image
//             src={heroAnimationStill}
//             alt={'Animated Search Visual'}
//             aria-hidden="true"
//             // loading="lazy"
//             priority
//           />
//         </div>
//       ) : (
//         <div className="-mt-18 hidden laptop:block">
//           <Image
//             height="423"
//             width="480"
//             unoptimized={true}
//             src={gifHero}
//             // src="https://res.cloudinary.com/dyy8g76av/image/upload/v1694724152/gif-hero_etecxp.gif"
//             // src="https://res.cloudinary.com/dyy8g76av/image/upload/fl_animated/v1694724152/gif-hero_etecxp.webp"
//             alt={'Animated Search Visual'}
//             aria-hidden="true"
//             priority
//             // loading="lazy"
//           />
//         </div>
//       )}
//     </>
//   );
// }
