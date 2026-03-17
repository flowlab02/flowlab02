/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Layout, 
  Search, 
  Palette, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Process', href: '#process' },
    { name: 'Product', href: '#product' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-lg font-display font-bold tracking-tighter">
          FLOW LAB<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-black/60 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/80 transition-all"
          >
            상담 신청하기
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-black/60"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="w-full py-4 bg-black text-white rounded-xl text-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              상담 신청하기
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/r4xbot-VpJHjZhcPnM144y5P1ekEFpR/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="scale-110 md:scale-100"
        ></iframe>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black/30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-black/30 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-8">
                Our Philosophy
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-10 tracking-tight text-black">
                우리는 단순한 웹사이트가 아닌,<br />
                <span className="text-blue-600">비즈니스의 가속기</span>를 만듭니다.
              </h2>
              <p className="text-lg text-black/60 font-light leading-relaxed mb-12 max-w-xl">
                Flow Lab은 시각적인 화려함에만 매몰되지 않습니다. 
                우리는 데이터와 심리학을 기반으로 사용자의 행동을 설계하고, 
                브랜드의 가치가 매출로 직결되는 최적의 경로를 구축합니다.
              </p>
              
              <div className="flex flex-wrap gap-12">
                <div>
                  <div className="text-4xl font-display font-bold text-black mb-2">98%</div>
                  <div className="text-sm text-black/40 uppercase tracking-wider">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-black mb-2">2.5x</div>
                  <div className="text-sm text-black/40 uppercase tracking-wider">Avg. Conversion Lift</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-[40px] overflow-hidden aspect-[4/5] bg-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                alt="Flow Lab Corporate" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                <h4 className="text-2xl font-bold mb-4">전략이 디자인을 이끕니다.</h4>
                <p className="text-white/80 font-light">모든 픽셀에는 이유가 있어야 하며, 모든 버튼은 목적이 있어야 합니다.</p>
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
};

const WhyWebsite = () => {
  const reasons = [
    {
      title: "24시간 쉬지 않는 영업사원",
      desc: "웹사이트는 당신이 잠든 시간에도 고객을 응대하고 가치를 전달합니다.",
      icon: <Globe size={24} />
    },
    {
      title: "첫인상의 결정적 순간",
      desc: "고객은 0.05초 만에 브랜드의 신뢰도를 판단합니다. 전문적인 웹사이트는 필수입니다.",
      icon: <Palette size={24} />
    },
    {
      title: "데이터 기반의 성장",
      desc: "방문자의 행동을 분석하여 비즈니스 방향을 설정하고 성장을 가속화할 수 있습니다.",
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold mb-6"
          >
            왜 홈페이지가<br />
            <span className="text-blue-500">매출의 핵심</span>일까요?
          </motion.h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            디지털 시대에 웹사이트는 단순한 정보 제공을 넘어 비즈니스의 생존과 직결됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Strengths = () => {
  const strengths = [
    {
      title: "도메인 & 호스팅 1년 무료",
      desc: "초기 비용 부담을 덜어드리기 위해 도메인과 고성능 호스팅을 1년간 무료로 제공합니다.",
      icon: <Globe className="text-blue-600" />
    },
    {
      title: "독립형 (소유권 완전 이전)",
      desc: "임대형이 아닌 독립형 제작으로, 사이트의 모든 소유권과 데이터를 고객님께 완전 이전해 드립니다.",
      icon: <ShieldCheck className="text-blue-600" />
    },
    {
      title: "무료 기획 서비스",
      desc: "전문 기획자가 비즈니스 모델을 분석하여 최적의 메뉴 구조와 콘텐츠 배치를 무료로 설계해 드립니다.",
      icon: <FileText className="text-blue-600" />
    },
    {
      title: "검색노출 최적화 (SEO)",
      desc: "네이버, 구글 SEO 최적화 적용하여 사이트가 효율적으로 노출되게 합니다.",
      icon: <Search className="text-blue-600" />
    },
    {
      title: "탁월한 디자인",
      desc: "트렌디하고 감각적인 디자인으로 브랜드의 프리미엄 이미지를 구축합니다.",
      icon: <Palette className="text-blue-600" />
    },
    {
      title: "디자인 시안 제공",
      desc: "제작 전 디자인 시안을 미리 확인하고 피드백을 반영하여 만족도 높은 결과물을 보장합니다.",
      icon: <Layout className="text-blue-600" />
    }
  ];

  return (
    <section id="strengths" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Strengths</h2>
            <h3 className="text-xl md:text-2xl font-display font-bold">
              Flow Lab만의<br />
              <span className="text-black/40">특별한 혜택</span>
            </h3>
          </div>
          <p className="text-black/50 max-w-md">
            우리는 단순히 사이트를 만드는 것을 넘어, 고객사의 비즈니스가 성공할 수 있는 모든 환경을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bento-card p-10 flex flex-col"
            >
              <div className="mb-6">{item.icon}</div>
              <h4 className="text-base font-bold mb-4">{item.title}</h4>
              <p className="text-black/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "상담 및 기획",
      desc: "비즈니스 모델 분석 및 전략 수립"
    },
    {
      num: "02",
      title: "디자인 시안",
      desc: "브랜드 아이덴티티를 담은 디자인 설계"
    },
    {
      num: "03",
      title: "개발 및 구현",
      desc: "최신 기술을 활용한 안정적인 코딩"
    },
    {
      num: "04",
      title: "최적화 및 검수",
      desc: "SEO 적용 및 철저한 기능 테스트"
    },
    {
      num: "05",
      title: "오픈 및 교육",
      desc: "사이트 런칭 및 관리자 교육 진행"
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Process</h2>
          <h3 className="text-xl md:text-2xl font-display font-bold mb-6">체계적이고 투명한 과정</h3>
          <p className="text-black/40 max-w-xl mx-auto">
            신뢰할 수 있는 파트너로서 모든 과정을 고객님과 공유하며 최상의 결과물을 만들어냅니다.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-black/5 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center mb-8 relative group">
                  <div className="absolute inset-0 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <span className="text-2xl font-display font-bold relative z-10 group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-black/40 px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Product = () => {
  const products = [
    {
      name: "기본형",
      desc: "스타트업 및 개인 브랜딩을 위한 핵심 기능 위주의 실속형 패키지",
      features: ["반응형 웹", "기본 SEO", "도메인/호스팅 1년", "최대 5페이지"]
    },
    {
      name: "확장형",
      desc: "기업 홍보 및 서비스 안내를 위한 전문적인 비즈니스 패키지",
      features: ["반응형 웹", "고급 SEO", "기획 서비스 포함", "최대 12페이지", "애니메이션 효과"]
    },
    {
      name: "고급형",
      desc: "차별화된 브랜드 경험을 위한 커스텀 디자인 및 기능 패키지",
      features: ["커스텀 디자인", "고급 인터랙션", "데이터베이스 연동", "무제한 페이지", "유지보수 지원"]
    },
    {
      name: "쇼핑몰",
      desc: "안정적인 결제 시스템과 효율적인 상품 관리를 위한 커머스 패키지",
      features: ["결제 시스템 연동", "상품/주문 관리", "회원 관리 시스템", "쿠폰/이벤트 기능", "반응형 쇼핑몰"]
    }
  ];

  return (
    <section id="product" className="py-24 md:py-32 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Product</h2>
          <h3 className="text-xl md:text-2xl font-display font-bold">비즈니스 규모에 맞는<br />최적의 솔루션</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col"
            >
              <h4 className="text-lg font-bold mb-4">{product.name}</h4>
              <p className="text-white/40 text-sm mb-8 min-h-[60px]">
                {product.desc}
              </p>
              <div className="space-y-4 mb-10 flex-grow">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center text-sm text-white/70">
                    <CheckCircle2 size={16} className="text-blue-500 mr-2 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <a 
                href="#contact" 
                className="w-full py-4 bg-white text-black rounded-xl font-bold text-center hover:bg-blue-500 hover:text-white transition-all"
              >
                문의하기
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const images = [
    "https://raw.githubusercontent.com/flowlab02/flowlab/refs/heads/img/1.png",
    "https://raw.githubusercontent.com/flowlab02/flowlab/refs/heads/img/2.png",
    "https://raw.githubusercontent.com/flowlab02/flowlab/refs/heads/img/3.png",
    "https://raw.githubusercontent.com/flowlab02/flowlab/refs/heads/img/4.png",
    "https://raw.githubusercontent.com/flowlab02/flowlab/refs/heads/img/5.png",
    "https://raw.githubusercontent.com/flowlab02/flowlab/refs/heads/img/6.png",
    "https://raw.githubusercontent.com/flowlab02/flowlab/refs/heads/img/7.png",
    "https://raw.githubusercontent.com/flowlab02/flowlab/refs/heads/img/8.png",
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Portfolio</h2>
          <h3 className="text-xl md:text-2xl font-display font-bold">Flow Lab의 결과물</h3>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="w-[350px] md:w-[450px] aspect-[4/3] mx-3 rounded-3xl overflow-hidden group relative">
              <img 
                src={src} 
                alt={`Portfolio ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mqeygkan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('상담 신청이 완료되었습니다. 곧 연락드리겠습니다.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Contact</h2>
            <h3 className="text-xl md:text-2xl font-display font-bold mb-8">
              새로운 프로젝트를<br />시작할 준비가 되셨나요?
            </h3>
            <p className="text-black/50 text-lg mb-12 leading-relaxed">
              Flow Lab이 당신의 아이디어를 현실로 만들어 드립니다.<br />
              지금 바로 무료 상담을 신청하세요.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mr-6 shrink-0">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black/40 uppercase mb-1">Email</h4>
                  <p className="text-lg font-medium">flowlab02@naver.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mr-6 shrink-0">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black/40 uppercase mb-1">Phone</h4>
                  <p className="text-lg font-medium">010-7963-8202</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mr-6 shrink-0">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black/40 uppercase mb-1">Office</h4>
                  <p className="text-lg font-medium leading-snug">
                    서울시 강남구 테헤란로 70길 12,<br />
                    402-795A(대치동, H타워)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card p-10 bg-white">
            <h4 className="text-lg font-bold mb-8">상담 신청하기</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black/40 uppercase ml-1">성함</label>
                  <input 
                    type="text" 
                    required
                    placeholder="홍길동"
                    className="w-full px-5 py-4 bg-[#fafafa] border border-black/5 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black/40 uppercase ml-1">연락처</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="010-0000-0000"
                    className="w-full px-5 py-4 bg-[#fafafa] border border-black/5 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-black/40 uppercase ml-1">이메일</label>
                <input 
                  type="email" 
                  required
                  placeholder="example@email.com"
                  className="w-full px-5 py-4 bg-[#fafafa] border border-black/5 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-black/40 uppercase ml-1">문의 내용</label>
                <textarea 
                  rows={4}
                  placeholder="원하시는 서비스나 궁금한 점을 적어주세요."
                  className="w-full px-5 py-4 bg-[#fafafa] border border-black/5 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-black/5"
              >
                상담 신청 완료
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-lg font-display font-bold tracking-tighter">
          FLOW LAB<span className="text-blue-600">.</span>
        </div>
        <p className="text-sm text-black/40">
          © 2026 Flow Lab. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-xs font-medium text-black/40 hover:text-black">Privacy Policy</a>
          <a href="#" className="text-xs font-medium text-black/40 hover:text-black">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <WhyWebsite />
      <Strengths />
      <Process />
      <Product />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
