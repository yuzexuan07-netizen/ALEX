"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: {
      zh: "张同学",
      en: "Student Zhang"
    },
    role: {
      zh: "职业交易员",
      en: "Professional Trader"
    },
    avatar: "Z",
    rating: 5,
    date: "2024-10",
    content: {
      zh: "在汇刃学习的30天是我人生的转折点。从完全不懂交易到通过考核，整个过程非常系统和专业。现在我每个月都能稳定盈利，真正实现了财务自由。",
      en: "The 30 days at FX Killer was a turning point in my life. From knowing nothing about trading to passing the assessment, the entire process was systematic and professional. Now I can make stable profits every month and truly achieve financial freedom."
    }
  },
  {
    id: 2,
    name: {
      zh: "李同学",
      en: "Student Li"
    },
    role: {
      zh: "独立交易员",
      en: "Independent Trader"
    },
    avatar: "L",
    rating: 5,
    date: "2024-09",
    content: {
      zh: "之前在其他平台学了很久都没有成果，来到汇刃后才发现什么是真正的交易培训。规则清晰，考核标准明确，老师耐心指导。通过考核后拿到资金，现在已经盈利20%+。",
      en: "I had learned on other platforms for a long time without results. After coming to FX Killer, I realized what real trading training is. Clear rules, explicit assessment standards, and patient guidance. After passing, I got funding and have now made 20%+ profit."
    }
  },
  {
    id: 3,
    name: {
      zh: "王同学",
      en: "Student Wang"
    },
    role: {
      zh: "基金经理",
      en: "Fund Manager"
    },
    avatar: "W",
    rating: 5,
    date: "2024-08",
    content: {
      zh: "汇刃最大的优势是实战性强。不是教你理论，而是直接教你怎么在市场上赚钱。我用了25个工作日通过考核，现在管理着6位数的资金，分成比例高达80%。",
      en: "FX Killer's greatest advantage is its practicality. They don't teach theory, but directly teach you how to make money in the market. I passed the assessment in 25 working days and now manage six-figure funds with an 80% profit share."
    }
  },
  {
    id: 4,
    name: {
      zh: "陈同学",
      en: "Student Chen"
    },
    role: {
      zh: "职业交易员",
      en: "Professional Trader"
    },
    avatar: "C",
    rating: 5,
    date: "2024-11",
    content: {
      zh: "起初我也怀疑过这个模式，但实际体验后发现确实是在培养真正的交易员。考核标准严格但合理，通过后的支持也很到位。现在每天只需要盯盘几小时，收入却比以前上班高多了。",
      en: "Initially I doubted this model, but after experiencing it, I found they truly cultivate real traders. The assessment standards are strict but reasonable, and the support after passing is excellent. Now I only need to watch the market for a few hours daily, yet my income is much higher than before."
    }
  },
  {
    id: 5,
    name: {
      zh: "刘同学",
      en: "Student Liu"
    },
    role: {
      zh: "独立交易员",
      en: "Independent Trader"
    },
    avatar: "L",
    rating: 5,
    date: "2024-07",
    content: {
      zh: "作为一个90后，我在汇刃找到了真正适合自己的职业。30天的培训虽然辛苦，但收获巨大。现在我可以在世界任何地方工作，时间和地点完全自由。",
      en: "As a post-90s, I found a career truly suitable for me at FX Killer. The 30-day training was tough but rewarding. Now I can work anywhere in the world with complete freedom of time and location."
    }
  },
  {
    id: 6,
    name: {
      zh: "赵同学",
      en: "Student Zhao"
    },
    role: {
      zh: "职业交易员",
      en: "Professional Trader"
    },
    avatar: "Z",
    rating: 5,
    date: "2024-06",
    content: {
      zh: "汇刃的筛选机制很严格，但正因如此，通过的人都是真正有潜力的。我很庆幸自己坚持下来了。现在回头看，那45天的投入是我做过最值得的决定。",
      en: "FX Killer's screening mechanism is strict, but that's why those who pass truly have potential. I'm glad I persisted. Looking back, those 45 days of investment were the most worthwhile decision I've ever made."
    }
  }
];

export default function Testimonials() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            {language === 'zh' ? '学员感言' : 'Student Testimonials'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'zh'
              ? '来自真实学员的反馈，他们通过系统培训成为职业交易员'
              : 'Real feedback from students who became professional traders through systematic training'}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 border-2 border-black dark:border-white p-6 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  {/* Name & Role */}
                  <div>
                    <h3 className="font-bold text-black dark:text-white">
                      {language === 'zh' ? testimonial.name.zh : testimonial.name.en}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'zh' ? testimonial.role.zh : testimonial.role.en}
                    </p>
                  </div>
                </div>
                {/* Date */}
                <span className="text-xs text-gray-500">{testimonial.date}</span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {language === 'zh' ? testimonial.content.zh : testimonial.content.en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
