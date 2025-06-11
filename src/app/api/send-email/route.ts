import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const requestData = await request.json();
    
    // 두 가지 폼 형식 지원 (what-we-do와 contact)
    const name = requestData.name;
    const position = requestData.position || requestData.organization || '';
    const phone = requestData.phone || requestData.contact || '';
    const email = requestData.email;
    const message = requestData.message || requestData.inquiry || '';

    // 검증
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // 환경 변수 확인
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email credentials not configured, creating mailto link instead');
      
      // mailto 링크 생성을 위한 데이터 반환
      const subject = `[ecoable 문의] ${name}님의 문의사항`;
      const body = `
문의자 정보:
- 성함: ${name}
- 소속 및 직책: ${position || '미입력'}  
- 연락처: ${phone}
- 이메일: ${email}

문의 사항:
${message}

---
이 메일은 ecoable 웹사이트 문의하기 폼에서 발송되었습니다.
      `;
      
      return NextResponse.json(
        { 
          success: true, 
          useMailto: true,
          mailtoLink: `mailto:hello@309designlab.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
          message: '이메일 클라이언트를 통해 문의를 전송합니다.' 
        },
        { status: 200 }
      );
    }

    // Nodemailer transporter 설정 (Gmail 사용 예시)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 이메일 내용 구성
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hello@309designlab.com',
      subject: `[ecoable 문의] ${name}님의 문의사항`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A3A6F; border-bottom: 2px solid #1A3A6F; padding-bottom: 10px;">
            ecoable 웹사이트 문의
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #14151A; margin-bottom: 15px;">문의자 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 120px;">성함</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">소속 및 직책</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${position || '미입력'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">연락처</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">이메일</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 30px 0;">
            <h3 style="color: #14151A; margin-bottom: 15px;">문의 사항</h3>
            <div style="padding: 15px; border: 1px solid #ddd; background-color: #f9f9f9; white-space: pre-wrap; line-height: 1.6;">
${message}
            </div>
          </div>

          <div style="margin-top: 30px; padding: 15px; background-color: #e8f4f8; border-left: 4px solid #399084;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              이 메일은 ecoable 웹사이트의 문의하기 폼을 통해 자동 발송된 메일입니다.
            </p>
          </div>
        </div>
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: '문의내용이 성공적으로 전송되었습니다.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, error: '이메일 전송 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 