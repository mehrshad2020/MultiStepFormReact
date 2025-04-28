import { useState } from 'react';
import './MultiStepForm.css';

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="form-container stepper-style">
      <div className="stepper">
        <div className={`step-circle${step === 1 ? ' active' : ''}`}>1</div>
        <div className="step-line" />
        <div className={`step-circle${step === 2 ? ' active' : ''}`}>2</div>
        <div className="step-line" />
        <div className={`step-circle${step === 3 ? ' active' : ''}`}>3</div>
      </div>
      <div className="form-content">
        {step === 1 && (
          <>
            <p className="form-desc">بیایید شروع کنیم.</p>
            <label className="form-label">
              نام کاربری<span className="required">*</span>:
              <input placeholder="نام کاربری" className="form-input modern" />
            </label>
          </>
        )}
        {step === 2 && (
          <>
            <p className="form-desc">ایمیل خود را وارد کنید.</p>
            <label className="form-label">
              آدرس ایمیل<span className="required">*</span>:
              <input placeholder="آدرس ایمیل" className="form-input modern" />
            </label>
          </>
        )}
        {step === 3 && <p className="form-desc">آماده ارسال!</p>}
      </div>
      <div className="button-container stepper-btns">
        {step < 3 && <button onClick={nextStep} className="stepper-btn next">بعدی</button>}
        {step > 1 && <button onClick={prevStep} className="stepper-btn prev">قبلی</button>}
        {step === 3 && <button className="stepper-btn submit">ارسال</button>}
      </div>
    </div>
  );
}

export default MultiStepForm;