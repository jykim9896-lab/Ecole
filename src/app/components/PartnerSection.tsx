import { useState, ChangeEvent, FormEvent } from 'react';
import { FONT_FAMILY, colors } from '../utils/styles';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacyAgreed: boolean;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacyAgreed: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacyAgreed: false
};

const INITIAL_ERRORS: FormErrors = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacyAgreed: ''
};

const ERROR_MESSAGE = '필수 항목을 입력해주세요.';

export function PartnerSection() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>(INITIAL_ERRORS);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, privacyAgreed: e.target.checked }));
    if (errors.privacyAgreed) {
      setErrors(prev => ({ ...prev, privacyAgreed: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = { ...INITIAL_ERRORS };
    let hasError = false;

    const requiredFields: (keyof FormData)[] = ['name', 'email', 'phone', 'subject', 'message'];
    
    requiredFields.forEach(field => {
      if (typeof formData[field] === 'string' && !formData[field].trim()) {
        newErrors[field] = ERROR_MESSAGE;
        hasError = true;
      }
    });

    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = ERROR_MESSAGE;
      hasError = true;
    }

    setErrors(newErrors);
    return !hasError;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData(INITIAL_FORM_DATA);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-[#C8F5E8]" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Contact Form */}
          <div className="order-2 md:order-1">
            <div 
              className="bg-gradient-to-r from-white/40 via-white/30 to-white/40 backdrop-blur-xl rounded-3xl border border-white/50 p-6 md:p-8"
              style={{
                boxShadow: '0 8px 32px 0 rgba(161, 229, 216, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)'
              }}
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="이름*"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/60 backdrop-blur-sm border border-white/80 rounded-[5px] px-[14px] py-[15px] text-[13px] tracking-[-0.5px] focus:outline-none focus:ring-2 focus:ring-[#0098FF]/30"
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400
                      }}
                    />
                    {errors.name && (
                      <p 
                        className="text-red-500 mt-1 text-[12px] tracking-[-0.3px]"
                        style={{
                          fontFamily: FONT_FAMILY,
                          fontWeight: 400
                        }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="이메일*"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/60 backdrop-blur-sm border border-white/80 rounded-[5px] px-[14px] py-[15px] text-[13px] tracking-[-0.5px] focus:outline-none focus:ring-2 focus:ring-[#0098FF]/30"
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400
                      }}
                    />
                    {errors.email && (
                      <p 
                        className="text-red-500 mt-1 text-[12px] tracking-[-0.3px]"
                        style={{
                          fontFamily: FONT_FAMILY,
                          fontWeight: 400
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone and Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="연락처*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/60 backdrop-blur-sm border border-white/80 rounded-[5px] px-[14px] py-[15px] text-[13px] tracking-[-0.5px] focus:outline-none focus:ring-2 focus:ring-[#0098FF]/30"
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400
                      }}
                    />
                    {errors.phone && (
                      <p 
                        className="text-red-500 mt-1 text-[12px] tracking-[-0.3px]"
                        style={{
                          fontFamily: FONT_FAMILY,
                          fontWeight: 400
                        }}
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="문의제목*"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white/60 backdrop-blur-sm border border-white/80 rounded-[5px] px-[14px] py-[15px] text-[13px] tracking-[-0.5px] focus:outline-none focus:ring-2 focus:ring-[#0098FF]/30"
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400
                      }}
                    />
                    {errors.subject && (
                      <p 
                        className="text-red-500 mt-1 text-[12px] tracking-[-0.3px]"
                        style={{
                          fontFamily: FONT_FAMILY,
                          fontWeight: 400
                        }}
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="문의내용*"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/60 backdrop-blur-sm border border-white/80 rounded-[5px] p-[14px] text-[13px] tracking-[-0.5px] resize-none focus:outline-none focus:ring-2 focus:ring-[#0098FF]/30"
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 400
                    }}
                  />
                  {errors.message && (
                    <p 
                      className="text-red-500 mt-1 text-[12px] tracking-[-0.3px]"
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400
                      }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Privacy Policy Checkbox */}
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacyAgreed}
                      onChange={handleCheckboxChange}
                      className="w-[13px] h-[13px] bg-white border border-[#767676] rounded-[2.5px] appearance-none cursor-pointer checked:bg-[#3497fd] checked:border-[#3497fd]"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-[15px] text-black tracking-[-0.5px]"
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400
                      }}
                    >
                      개인정보 처리방침에 동의합니다.
                    </label>
                    <button
                      type="button"
                      onClick={() => window.location.href = '/privacy-policy/'}
                      className="bg-[#26b48e] text-white text-[12px] px-[14px] py-[5px] rounded-full tracking-[-0.5px] border border-[#26b48e] hover:bg-[#229c7a] transition-colors cursor-pointer"
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400
                      }}
                    >
                      전문보기
                    </button>
                  </div>
                  {errors.privacyAgreed && (
                    <p 
                      className="text-red-500 mt-1 text-[12px] tracking-[-0.3px]"
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400
                      }}
                    >
                      {errors.privacyAgreed}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0098FF] to-[#00C6FF] text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 500,
                      fontSize: '17px',
                      letterSpacing: '-0.3px',
                      boxShadow: '0 4px 15px rgba(0, 152, 255, 0.3)'
                    }}
                  >
                    문의하기
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 md:order-2">
            <h2 
              className="mb-6 text-black"
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 42px)',
                lineHeight: '1.19',
                letterSpacing: '-0.5px'
              }}
            >
              아트봉봉에꼴은<br />
              여러분을 기다립니다.
            </h2>
            
            <div
              className="text-[#141414]"
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 500,
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '1.4',
                letterSpacing: '-0.5px'
              }}
            >
              <p className="mb-2">전통 창의미술 교육과 디지털 미술을 할 수 있는</p>
              <p className="mb-2">국내 유일의 아동 미술학원 '아트봉봉에꼴'</p>
              <p>미래를 준비하는 아트봉봉에꼴과 함께 하세요.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}