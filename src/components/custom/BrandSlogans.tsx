"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// 品牌标语集合 - 体现力量、精准、专业
const slogans = [
  {
    zh: "汇刃，外汇交易市场的一把利刃",
    en: "FX Killer, the sharp blade in forex trading"
  },
  {
    zh: "精准，如刀锋般锐利",
    en: "Precision, sharp as a blade's edge"
  },
  {
    zh: "每一次交易，都是一次狙击",
    en: "Every trade is a sniper shot"
  },
  {
    zh: "市场是战场，你需要的是武器",
    en: "The market is a battlefield, you need weapons"
  },
  {
    zh: "不做散户，只做猎手",
    en: "Not retail traders, but hunters"
  },
  {
    zh: "百炼成钢，百战成神",
    en: "Forged through trials, ascend through battles"
  },
  {
    zh: "锋芒所向，所向披靡",
    en: "Where the edge points, nothing stands"
  },
  {
    zh: "交易如战，策略制胜",
    en: "Trade like war, win with strategy"
  }
];

interface BrandSlogansProps {
  showEnglish?: boolean;
  className?: string;
  containerClassName?: string;
}

export default function BrandSlogans({ showEnglish = false, className = "", containerClassName = "" }: BrandSlogansProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {slogans.map((slogan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            y: currentIndex === index ? 0 : 20,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col justify-center"
        >
          <p className={className || "text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 tracking-wide"}>
            {language === 'en' ? slogan.en : slogan.zh}
          </p>
          {showEnglish && language === 'zh' && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              {slogan.en}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// 静态标语组件 - 用于特定位置
export function StaticSlogan({ index = 0, showEnglish = false }: { index?: number; showEnglish?: boolean }) {
  const slogan = slogans[index % slogans.length];
  const { language } = useLanguage();

  return (
    <div className="text-center">
      <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
        {language === 'en' ? slogan.en : slogan.zh}
      </p>
      {showEnglish && language === 'zh' && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
          {slogan.en}
        </p>
      )}
    </div>
  );
}

// 导出标语数据供其他地方使用
export { slogans };
