// app/animate/page.tsx

// app/tab-hoarders/components/FeatureCard.tsx
'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Balancer } from 'react-wrap-balancer';
import Container from '../components/container';
import FeatureIcon1 from '../components/icons/feature1';
import FeatureIcon2 from '../components/icons/feature2';
import FeatureIcon3 from '../components/icons/feature3';
import { FadeIn } from '../components/fade-in';
import ts from 'typescript';

const features = [
  {
    title: `All-Tab Search: The Panoramic View`,
    subTitle: `Upgrade from One-Tab Searches`,
    description: `Your CTRL+F only searches one tab? That's cute. We prefer the panoramic view.`,
    icon: FeatureIcon1,
  },
  {
    title: `Familiar Interface: Revolutionary Yet Comfortable`,
    subTitle: `Innovation with Coziness`,
    description: `Just because we've revolutionized search doesn't mean we can't be cozy. Slip into something comfortable.`,
    icon: FeatureIcon2,
  },
  {
    title: `Easy Activation: CTRL+SHIFT+F`,
    subTitle: `Simplicity at Your Fingertips`,
    description: `CTRL+SHIFT+F. So easy a caveman could do it. But don't worry, you'll probably get the hang of it too.`,
    icon: FeatureIcon3,
  },
];

function Section({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    // margin: '0px 0px -250px 0px',
  });
  const initialXOffset: string = index % 2 === 1 ? '500px' : '-500px';

  return (
    <div
      // ref={ref}
      className={`flex items-center justify-center   ${
        index % 2 === 1 ? 'laptop:order-last' : ''
      }`}
    >
      <span
        className="block"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'none' : `translateX(${initialXOffset})`,
          transition: 'all 1.9s',
        }}
      >
        {children}
      </span>
      <div className="bg-red-500" ref={ref}>
        animate!
      </div>
    </div>
  );
}

function AnimtateCard({ feat, index }: { feat: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    // margin: '0px 0px -250px 0px',
  });
  // const initialXOffset: string = index % 2 === 1 ? '500px' : '-500px';
  const calculateInitialOffset = (index: number): string => {
    // const initialXOffset: string = index % 2 === 1 ? '500px' : '-500px';
    return index % 2 === 1 ? '500px' : '-500px';
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-9 laptop:flex-row">
        <div
          // motion
          className={`flex items-center justify-center   ${
            index % 2 === 1 ? 'laptop:order-last' : ''
          }`}
        >
          {' '}
          <span
            className="block"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView
                ? 'none'
                : `translateX(${calculateInitialOffset(index)})`,
              transition: 'all 1.9s',
            }}
          >
            {
              <feat.icon className="h-[221.358px] w-[263.2px] laptop:h-[317px] laptop:w-[376px]" />
            }
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div
            className="h-0 w-0 "
            // className="bg-red-500"
            ref={ref}
          >
            {/* animate */}
          </div>
        </div>

        <div
          className={`flex w-full  ${
            index % 2 === 1 ? '' : 'laptop:justify-end'
          } `}
        >
          <span
            className="block"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'none' : 'translateY(500px)',
              transition: 'all 1.9s',
            }}
          >
            <div
              // motion
              className="flex w-fit flex-col items-center justify-center gap-9 px-1 mobile-md:px-0 laptop:items-start"
              // variants={textVariants()}
            >
              <h2 className="text-center font-inter text-fs-base text-primary1 laptop:text-left">
                <Balancer>{feat.title}</Balancer>
              </h2>

              <h3 className="max-w-[305px] text-center font-inter text-fs-x0 text-shark tablet:max-w-[525px] tab-pro:text-fs-xl laptop:max-w-[521px] laptop:text-left">
                {feat.subTitle}
              </h3>

              <p className="max-w-[19rem] text-center font-open-sans text-fs-lg text-shark tablet:max-w-[23.6875rem] laptop:max-w-[491px] laptop:text-left">
                <Balancer>{feat.description}</Balancer>
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FeatureCard() {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = () => {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 1.3,
        },
      },
    };
  };

  const iconVariants = (index: number) => {
    const initialXOffset = index % 2 === 1 ? '500' : '-500';

    return {
      hidden: { opacity: 0, x: initialXOffset },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.9,
        },
      },
    };
  };

  const textVariants = () => {
    return {
      hidden: { opacity: 0, y: 500 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.9,
        },
      },
    };
  };

  return (
    <>
      {features.map((feat, index) => {
        return (
          <FadeIn key={feat.title} className=" mt-146">
            <Container className=" mt-18  flex w-full flex-col tablet:mt-24 wide:mt-[7.625rem]">
              <div className="laptop:text-left">
                <FadeIn
                  className="flex min-h-154 items-center justify-center overflow-hidden rounded-[2.25rem] bg-white tablet:p-9 tab-pro:p-14 laptop:min-h-146 laptop:p-16 desktop:p-20 wide:p-24"
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true }}
                  // variants={cardVariants()}
                >
                  <AnimtateCard feat={feat} index={index} />
                </FadeIn>
              </div>
            </Container>
          </FadeIn>
        );
      })}
    </>
  );
}
