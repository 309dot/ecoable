'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TabMenu from '@/components/TabMenu';


interface PortfolioProject {
  year: string;
  title: string;
  client: string;
}

// CSV 데이터를 기반으로 한 탭별 프로젝트 데이터
const portfolioData = {
  lca: {
    title: 'LCA(전과정평가)',
    projects: [
      { year: '2025', title: '탄소나노소재의 전주기 평가를 위한 자료 수집 및 환경성 분석', client: '광주과학기술원' },
      { year: '2025', title: 'S-OIL 전제품에 대한 LCA 수행 및 LCA 시스템 개발', client: 'S-OIL㈜' },
      { year: '2025', title: 'KT&G 스틱, 각초, 디바이스, 잎담배에 대한 전과정평가 수행', client: '㈜케이티앤지' },
      { year: '2025', title: 'OCI 제품 전과정평가 수행 및 Tool 개발', client: 'OCI 주식회사' },
      { year: '2025', title: '현대OCI 카본블랙 제품 전과정평가 및 Tool 개발', client: 'HD현대오씨아이㈜' },
      { year: '2025', title: '삼양이노켐 ISB 제품에 대한 LCA 수행', client: '삼양이노켐㈜' },
      { year: '2025', title: '켐코 황산니켈 제품에 대한 전과정평가 수행', client: '켐코㈜' },
      { year: '2025', title: 'SK케미칼 Recycle PET 제품에 대한 LCA 수행 및 소통 방법론 개발', client: 'SK케미칼㈜' },
      { year: '2025', title: '(4차)전과정목록 전면개편 및 국제 플랫폼 등록_총괄주관사', client: '한국환경산업기술원' },
      { year: '2025', title: '대동 제품 전과정평가 컨설팅 및 내부 담당자 교육', client: '(주)대동' },
      { year: '2025', title: 'HD현대케미칼 LCA Tool 업데이트 컨설팅', client: '현대케미칼㈜' },
      { year: '2024', title: 'HD현대케미칼 HDPE, LDPE, EVA, PP에 대한 ISCC인증 및 제3자 검증', client: '현대케미칼㈜' },
      { year: '2024', title: '국도화학 제품에 대한 간이 LCA 수행', client: '국도화학㈜' },
      { year: '2024', title: '조선내화 내화물 제품에 대한 전과정평가 수행', client: '조선내화(주)' },
      { year: '2024', title: '삼성병원 유방암 수술에 대한 LCA 수행', client: '삼성서울병원' },
      { year: '2024', title: '국가 LCI DB 전면개편 및 국제 플랫폼 등록', client: '한국환경산업기술원' },
      { year: '2024', title: '콜마비앤에이치 헤모힘에 대한 전과정평가 수행', client: '콜마비앤에이치 주식회사' },
      { year: '2024', title: 'LS일렉트릭 제품 에코디자인 체계 구축', client: '엘에스일렉트릭㈜' },
      { year: '2024', title: '국도화학 10개 제품에 대한 전과정평가 수행 및 LCA 내재화 방안 마련', client: '국도화학㈜' },
      { year: '2024', title: 'SK케미칼 제품 LCA Tool 개발', client: 'SK케미칼㈜' },
      { year: '2024', title: '현대엔지니어링 P2E 수소 LCA 수행 및 청정수소인증제 대응방안 마련', client: '현대엔지니어링㈜' },
      { year: '2023', title: 'DL케미칼 PE제품에 대한 Carbon footprint 산정', client: 'DL케미칼㈜' },
      { year: '2023', title: 'SK온 Battery 제품의 환경전과정평가 수행 및 교육', client: 'SK온㈜' },
      { year: '2023', title: 'NB-Latex에 대한 환경성평가', client: '금고석유화학㈜' },
      { year: '2023', title: '나이스LMS 폐어망 활용 PA6 생산에 대한 환경성 평가', client: '(주)나이스엘엠에스' },
      { year: '2023', title: '삼성엔지니어링 CO2 포집 기술에 대한 환경성평가', client: '삼성엔지니어링㈜' },
      { year: '2023', title: '현대쉘베이스오일 윤활기유에 대한 전과정평가 수행', client: 'HD현대쉘베이스오일㈜' },
      { year: '2023', title: 'KT&G NGP 플랫폼에 대한 전과정평가 수행 및 에코디자인 가이드라인 개발', client: '㈜케이티앤지' },
      { year: '2023', title: 'LG CNS 탄소발자국 산정 시스템(LG에너지솔루션 대상) 개발 지원', client: '㈜LG CNS' },
      { year: '2023', title: 'LG화학 Scope 3 Upstream 협력회사 탄소발자국 (Product Carbon Footprint, PCF) 관리', client: '㈜LG화학' },
      { year: '2023', title: 'OCI 제품 LCA 수행 및 내재화 방안 마련', client: 'OCI 주식회사' },
      { year: '2023', title: '금고피앤비화학 LCA 수행 및 내재화 방안 마련', client: '금고피앤비화학㈜' },
      { year: '2023', title: '유한킴벌리10개 제품에 대한 LCA 수행 및 주요사업장 별 LCA Tool 개발', client: '유한킴벌리㈜' },
      { year: '2023', title: '현대오일뱅크 전체 공정 및 제품 전과정평가', client: 'HD현대오일뱅크㈜' },
      { year: '2023', title: 'MX, HPC 공정 제품 및 CO-processing에 대한 전과정평가 수행', client: '현대케미칼㈜' },
      { year: '2023', title: '금고석유화학 주요 제품군에 대한 LCA 수행 및 내재화 방안마련', client: '금고석유화학㈜' },
      { year: '2023', title: 'DL케미칼 EPO 제품 Carbon Footprint 산정', client: 'DL케미칼㈜' },
      { year: '2023', title: 'SKMG14 제품에 대한 환경성평가 수행 및 제품관련 국제 동향 분석', client: 'SK머티리얼즈 그룹14' },
      { year: '2022', title: 'LG화학 폐배터리 재활용 및 전구체에 대한 전과정평가 산정 Tool 개발', client: '㈜LG화학' },
      { year: '2022', title: '삼성SDI 배터리 제품 대한 전과정평가 수행 및 카본트러스트 인증', client: '삼성SDI㈜' },
      { year: '2022', title: '에코프로 양극재 제품 전과정평가 수행 및 카본트러스트 인증 대응', client: '㈜에코프로' },
      { year: '2022', title: '아모레퍼시픽 제품에 대한 전과정평가 및 카본트러스트 인증 대응', client: '㈜아모레퍼시픽' },
      { year: '2022', title: '국가 LCI DB 전면개편 및 국제 플랫폼 등록', client: '한국환경산업기술원' },
      { year: '2022', title: '한화솔루션 EVA제품 환경성평가 및 ISCC인증 대응', client: '한화솔루션㈜' },
      { year: '2022', title: 'SK picglobal PM 제품의 카본트러스트 인증 대응', client: 'SK picglobal' },
      { year: '2022', title: 'LG이노텍 제품 전과정평가 수행 및 환경부 환경성적표지인증 대응', client: 'LG이노텍㈜' },
      { year: '2022', title: '정우화인 단열재 제품 환경성적표지인증', client: '정우화인(주)' },
      { year: '2022', title: '코스모폴 단열재 제품 환경성적표지인증', client: '코스모폴㈜' },
      { year: '2022', title: '하우테크 단열재 제품 환경성적표지인증', client: '주식회사 하우테크' },
      { year: '2022', title: '롯데마트 PB제품 (생수)에 대한 환경성적표지인증', client: '롯데쇼핑㈜ 롯데마트사업부' },
      { year: '2022', title: '포스코 협력사에 대한 환경성적표지인증 컨설팅', client: '한국환경산업기술원, 포스코' },
      { year: '2022', title: '포스코/동양에스텍 H형강 제품 환경성적표지인증 및 UL EPD 인증 컨설팅', client: '포스코 / (주)동양에스텍' },
      { year: '2022', title: '금성인슈텍 단열재 제품 환경성적표지인증 컨설팅', client: '㈜금성인슈텍' },
      { year: '2022', title: '서연이화 자동차 시트 제품 환경성적표지인증 컨설팅', client: '서연이화' },
      { year: '2022', title: '단석산업 제품(바이오 디젤, 바이오 중유) ISCC인증 컨설팅', client: '㈜단석산업' },
      { year: '2022', title: '미래아우드 제품 환경성적표지인증 컨설팅', client: '미래아우드' },
      { year: '2022', title: '동양테이프 제품 환경성적표지인증 컨설팅', client: '(주)동양테이프' },
      { year: '2022', title: '인스팅터스 환경성적표지인증 컨설팅', client: '(주)인스팅터스' },
      { year: '2022', title: '에스에스케이_이마트PB제품 환경성적표지인증 컨설팅', client: '(주)에스에스케이' },
      { year: '2021', title: 'SK picglobal PO, PG제품의 카본트러스트 인증 컨설팅', client: 'SK picglobal' },
      { year: '2021', title: '코오롱바스프이노폼 POM 제품 전과정평가 수행 및 ISCC 인증 대응', client: '코오롱바스프이노폼㈜' },
      { year: '2021', title: '이마트 PB제품 환경성적표지인증 지원사업', client: '㈜이마트' },
      { year: '2021', title: '코오롱플라스틱 POM 제품 전과정평가 수행 및 ISCC 인증 대응', client: '코오롱플라스틱㈜' },
      { year: '2021', title: '빙그레 제품 환경성적표지인증 컨설팅', client: '㈜빙그레' },
      { year: '2021', title: '네이버 Clova AI제품 환경성적표지 인증 컨설팅', client: '네이버㈜' },
      { year: '2021', title: '삼성전기 제품 환경성적표지 인증 취득 컨설팅', client: '삼성전기㈜' },
      { year: '2021', title: '신에츠실리콘 제품 환경성적표지인증 컨설팅', client: '한국신에츠실리콘㈜' },
      { year: '2021', title: '누리캠 환경성적표지인증 컨설팅', client: '누리캠' },
      { year: '2021', title: '한국신에츠실리콘 환경성적표지인증 컨설팅', client: '한국신에츠실리콘㈜' },
      { year: '2021', title: '삼양식품 제품 전과정평가 수행 및 환경성적표지인증', client: '삼양식품㈜' },
      { year: '2021', title: '동천 우레탄 단열재 제품 환경성적표지인증 컨설팅', client: '(주)동천' },
      { year: '2021', title: '동산 ENG 환경성적표지인증 컨설팅', client: '(주)동산이엔지' },
      { year: '2021', title: 'CNS 환경성적표지인증 컨설팅', client: '㈜LG CNS' },
      { year: '2020', title: '무릉도원 제품 환경성적표지인증 컨설팅', client: '무릉도원㈜' },
      { year: '2020', title: '트렘코일브럭 제품 환경성적표지인증 컨설팅', client: '트렘코일브럭(유)' },
      { year: '2020', title: '세경산업 제품 환경성적표지인증 컨설팅', client: '세경산업㈜' },
      { year: '2020', title: '디앤에프 제품 환경성적표지인증 컨설팅', client: '디앤에프' },
      { year: '2020', title: '스페이스링크 제품 환경성적표지인증 컨설팅', client: '(주)스페이스링크' },
      { year: '2020', title: '다스코 단열재 제품 환경성적표지인증 컨설팅', client: '다스코㈜' },
      { year: '2020', title: 'IS중공업 제품 환경성적표지인증 컨설팅', client: '(주)아이에스중공업' },
      { year: '2020', title: '신원 단열재 제품 환경성적표지인증 컨설팅', client: '(주)신원' },
      { year: '2020', title: '이비아이 단열재 제품 환경성적표지인증 컨설팅', client: '(주)이비아이' },
      { year: '2020', title: '이마트 PB 제품 환경성적표지인증 컨설팅', client: '㈜이마트' },
      { year: '2020', title: '국가 LCI 데이터베이스 구축 사업', client: '한국환경산업기술원' },
      { year: '2019', title: '에버월 제품 환경성적표지인증 컨설팅', client: '에버월' },
      { year: '2019', title: '동천 단열재 제품 환경성적표지인증 컨설팅', client: '(주)동천' },
      { year: '2019', title: '유통사 PB제품 환경성적표지인증 컨설팅 지원사업', client: '한국환경산업기술원' },
      { year: '2018', title: '서경씨엠티 환경성적표지인증 컨설팅', client: '(주)서경씨엠티' },
      { year: '2018', title: '삼성전자 디스플레이 UL EPD 인증 컨설팅', client: '삼성전자㈜' },
      { year: '2017', title: '노보텔 엠버서더 호텔 탄소성적표지 인증 컨설팅', client: '노보텔' },
      { year: '2017', title: '집단에너지 저탄소 인증 컨설팅', client: '한국지역난방공사' },
      { year: '2017', title: '중소중견기업 환경성적표지인증 지원사업', client: '한국환경산업기술원' },
      { year: '2016', title: '국가 LCI 데이터베이스 제·개정', client: '한국환경산업기술원' },
      { year: '2016', title: '스페이스링크 탄소성적표지인증 컨설팅', client: '(주)스페이스링크' },
      { year: '2016', title: '한국신에츠 탄소성적표지인증 컨설팅', client: '한국신에츠실리콘㈜' }
    ]
  },
  epd: {
    title: 'EPD 인증대응',
    projects: [
      { year: '2025', title: '유니스포텍 인조잔디 제품 환경성적표지인증', client: '(주)유니스포텍' },
      { year: '2025', title: '덕신 EPC 제품에 대한 환경성적표지인증', client: '(주)덕신이피씨' },
      { year: '2025', title: 'TCC 도금 공정에 대한 노르웨이 EPD 인증 컨설팅', client: '(주)TCC스틸' },
      { year: '2025', title: '신원하이테크 단열재 제품에 대한 환경성적표지인증', client: '신원하이테크㈜' },
      { year: '2025', title: '현대쉘베이스오일 윤활기유 및 Gasoil에 대한 ISCC 인증 대응', client: 'HD현대쉘베이스오일㈜' },
      { year: '2025', title: '삼성물산 협력사 환경성적표지인증', client: '삼성물산㈜' },
      { year: '2025', title: '롯데마트 협력사 환경성적표지인증', client: '롯데쇼핑㈜ 롯데마트사업부' },
      { year: '2025', title: 'LS ELECTRIC 몰드변압기 제품에 대한 노르웨이 EPD 인증', client: '엘에스일렉트릭㈜' },
      { year: '2025', title: '장성산업 제품에 대한 환경성적표지인증', client: '(주)장성산업' },
      { year: '2025', title: '진영기업 레미콘 6개 제품에 대한 환경성적표지인증', client: '(주)진영기업' },
      { year: '2025', title: '동천 단열재 PUR_I-D에 대한 환경성적표지인증 컨설팅', client: '(주)동천' },
      { year: '2024', title: '삼양식품 3개 제품 환경성적표지인증 컨설팅', client: '삼양식품㈜' },
      { year: '2024', title: '빙그레 4개 제품 환경성적표지인증 컨설팅', client: '㈜빙그레' },
      { year: '2024', title: '한국신에츠실리콘 제품 환경성적표지인증 컨설팅', client: '한국신에츠실리콘㈜' },
      { year: '2024', title: '금성인슈텍/금성화학 단열재 제품에 대한 환경성적표지인증', client: '㈜금성인슈텍 / 금성화학㈜' },
      { year: '2024', title: '평택유지 UCO 제품에 대한 환경성적표지인증 컨설팅', client: '평택유지(주)' },
      { year: '2024', title: '삼성물산㈜ 건설부문 협력사 환경성적표지/저탄소제품 인증 취득 컨설팅', client: '삼성물산㈜' },
      { year: '2024', title: '동천 단열재 제품에 대한 저탄소제품인증 컨설팅', client: '(주)동천' },
      { year: '2024', title: '일신산업 로이단열재 저탄소제품 인증 컨설팅', client: '(주)일신산업' },
      { year: '2024', title: 'KC산업 PC제품에 대한 환경성적표지인증 컨설팅', client: '(주)케이씨산업' },
      { year: '2024', title: '정우화인 재활용 폴리올에 대한 환경성적표지인증 컨설팅', client: '정우화인(주)' },
      { year: '2024', title: '정우산업 단열재 제품에 대한 환경성적표지인증 컨설팅', client: '주식회사 정우산업' },
      { year: '2024', title: '세경산업 단열재 제품에 대한 환경성적표지인증 컨설팅', client: '세경산업㈜' },
      { year: '2024', title: '디앤케이켐텍 심재준불연 단열재 제품에 대한 환경성적표지인증 컨설팅', client: '(주)디앤케이켐텍' },
      { year: '2024', title: '롯데마트 PB제품에 대한 환경성적표지인증 컨설팅', client: '롯데쇼핑㈜ 롯데마트사업부' },
      { year: '2024', title: '이마트 PB제품에 대한 환경성적표지인증 컨설팅', client: '㈜이마트' },
      { year: '2023', title: '아모레퍼시픽 제품 카본트러스트 인증', client: '㈜아모레퍼시픽' },
      { year: '2023', title: 'D&K켐텍 PF보드 제품 환경성적표지 인증', client: '(주)디앤케이켐텍' },
      { year: '2023', title: '녹수 바닥재 제품 환경성적표지/저탄소제품 인증', client: '(주)녹수' },
      { year: '2023', title: '다스코 우레탄 단열재 제품 환경성적표지/저탄소제품 인증', client: '다스코㈜' },
      { year: '2023', title: '롯데마트 PB제품(스낵류) 환경성적표지인증', client: '롯데쇼핑㈜ 롯데마트사업부' },
      { year: '2023', title: '정우산업 우레탄 단열재 환경성적표지/저탄소제품 인증', client: '주식회사 정우산업' },
      { year: '2023', title: '동천 우레탄 단열재 환경성적표지/저탄소제품 인증', client: '(주)동천' },
      { year: '2023', title: '디앤에프 데크플레이트 제품 환경성적표지 인증', client: '디앤에프' },
      { year: '2023', title: '다인폼 우레탄 단열재 제품 환경성적표지/저탄소제품 인증', client: '(주)다인폼' },
      { year: '2023', title: '스페이스링크 손건조기 제품 환경성적표지 인증', client: '(주)스페이스링크' },
      { year: '2023', title: '이마트-엔씽 스마트팜 농법에 대한 환경성적표지 인증', client: '㈜이마트' },
      { year: '2023', title: '이비아이 우레탄 단열재 환경성적표지/저탄소제품 인증', client: '(주)이비아이' },
      { year: '2023', title: '한국신에츠실리콘 실리콘제품 환경성적표지 인증', client: '한국신에츠실리콘㈜' },
      { year: '2023', title: '아모레퍼시픽 세럼 제품 카본트러스트 인증', client: '㈜아모레퍼시픽' },
      { year: '2023', title: 'LS ELECTRIC㈜ LCA 체계구축 및 International EPD인증 취득', client: '엘에스일렉트릭㈜' },
      { year: '2023', title: '현대오일뱅크 바이오연료 ISCC 인증 대응', client: 'HD현대오일뱅크㈜' },
      { year: '2023', title: '현대케미칼 바이오연료 ISCC 인증 대응', client: '현대케미칼㈜' },
      { year: '2023', title: 'LCI DB 전면 개편 및 국제 플랫폼 등록 (2023년도)', client: '환경부' },
      { year: '2023', title: '디앤케이켐텍 환경성적표지인증 컨설팅', client: '(주)디앤케이켐텍' },
      { year: '2022', title: '삼성전자 모니터 제품 UL EPD 인증 컨설팅', client: '삼성전자㈜' },
      { year: '2022', title: '삼성SDI 배터리 제품 대한 전과정평가 수행 및 카본트러스트 인증', client: '삼성SDI㈜' },
      { year: '2022', title: '에코프로 양극재 제품 전과정평가 수행 및 카본트러스트 인증 대응', client: '㈜에코프로' },
      { year: '2022', title: '아모레퍼시픽 제품에 대한 전과정평가 및 카본트러스트 인증 대응', client: '㈜아모레퍼시픽' },
      { year: '2022', title: '국가 LCI DB 전면개편 및 국제 플랫폼 등록', client: '한국환경산업기술원' },
      { year: '2022', title: '한화솔루션 EVA제품 환경성평가 및 ISCC인증 대응', client: '한화솔루션㈜' },
      { year: '2022', title: 'SK picglobal PM 제품의 카본트러스트 인증 대응', client: 'SK picglobal' },
      { year: '2022', title: 'LG이노텍 제품 전과정평가 수행 및 환경부 환경성적표지인증 대응', client: 'LG이노텍㈜' },
      { year: '2022', title: '정우화인 단열재 제품 환경성적표지인증', client: '정우화인(주)' },
      { year: '2022', title: '코스모폴 단열재 제품 환경성적표지인증', client: '코스모폴㈜' },
      { year: '2022', title: '하우테크 단열재 제품 환경성적표지인증', client: '주식회사 하우테크' },
      { year: '2022', title: '롯데마트 PB제품 (생수)에 대한 환경성적표지인증', client: '롯데쇼핑㈜ 롯데마트사업부' },
      { year: '2022', title: '포스코 협력사에 대한 환경성적표지인증 컨설팅', client: '한국환경산업기술원, 포스코' },
      { year: '2022', title: '포스코/동양에스텍 H형강 제품 환경성적표지인증 및 UL EPD 인증 컨설팅', client: '포스코 / (주)동양에스텍' },
      { year: '2022', title: '금성인슈텍 단열재 제품 환경성적표지인증 컨설팅', client: '㈜금성인슈텍' },
      { year: '2022', title: '서연이화 자동차 시트 제품 환경성적표지인증 컨설팅', client: '서연이화' },
      { year: '2022', title: '단석산업 제품(바이오 디젤, 바이오 중유) ISCC인증 컨설팅', client: '㈜단석산업' },
      { year: '2022', title: '미래아우드 제품 환경성적표지인증 컨설팅', client: '미래아우드' },
      { year: '2022', title: '동양테이프 제품 환경성적표지인증 컨설팅', client: '(주)동양테이프' },
      { year: '2022', title: '인스팅터스 환경성적표지인증 컨설팅', client: '(주)인스팅터스' },
      { year: '2022', title: '에스에스케이_이마트PB제품 환경성적표지인증 컨설팅', client: '(주)에스에스케이' },
      { year: '2021', title: 'SK picglobal PO, PG제품의 카본트러스트 인증 컨설팅', client: 'SK picglobal' },
      { year: '2021', title: '코오롱바스프이노폼 POM 제품 전과정평가 수행 및 ISCC 인증 대응', client: '코오롱바스프이노폼㈜' },
      { year: '2021', title: '이마트 PB제품 환경성적표지인증 지원사업', client: '㈜이마트' },
      { year: '2021', title: '코오롱플라스틱 POM 제품 전과정평가 수행 및 ISCC 인증 대응', client: '코오롱플라스틱㈜' },
      { year: '2021', title: '빙그레 제품 환경성적표지인증 컨설팅', client: '㈜빙그레' },
      { year: '2021', title: '네이버 Clova AI제품 환경성적표지 인증 컨설팅', client: '네이버㈜' },
      { year: '2021', title: '삼성전기 제품 환경성적표지 인증 취득 컨설팅', client: '삼성전기㈜' },
      { year: '2021', title: '신에츠실리콘 제품 환경성적표지인증 컨설팅', client: '한국신에츠실리콘㈜' },
      { year: '2021', title: '누리캠 환경성적표지인증 컨설팅', client: '누리캠' },
      { year: '2021', title: '한국신에츠실리콘 환경성적표지인증 컨설팅', client: '한국신에츠실리콘㈜' },
      { year: '2021', title: '삼양식품 제품 전과정평가 수행 및 환경성적표지인증', client: '삼양식품㈜' },
      { year: '2021', title: '동천 우레탄 단열재 제품 환경성적표지인증 컨설팅', client: '(주)동천' },
      { year: '2021', title: '동산 ENG 환경성적표지인증 컨설팅', client: '(주)동산이엔지' },
      { year: '2021', title: 'CNS 환경성적표지인증 컨설팅', client: '㈜LG CNS' },
      { year: '2020', title: '무릉도원 제품 환경성적표지인증 컨설팅', client: '무릉도원㈜' },
      { year: '2020', title: '트렘코일브럭 제품 환경성적표지인증 컨설팅', client: '트렘코일브럭(유)' },
      { year: '2020', title: '세경산업 제품 환경성적표지인증 컨설팅', client: '세경산업㈜' },
      { year: '2020', title: '디앤에프 제품 환경성적표지인증 컨설팅', client: '디앤에프' },
      { year: '2020', title: '스페이스링크 제품 환경성적표지인증 컨설팅', client: '(주)스페이스링크' },
      { year: '2020', title: '다스코 단열재 제품 환경성적표지인증 컨설팅', client: '다스코㈜' },
      { year: '2020', title: 'IS중공업 제품 환경성적표지인증 컨설팅', client: '(주)아이에스중공업' },
      { year: '2020', title: '신원 단열재 제품 환경성적표지인증 컨설팅', client: '(주)신원' },
      { year: '2020', title: '이비아이 단열재 제품 환경성적표지인증 컨설팅', client: '(주)이비아이' },
      { year: '2020', title: '이마트 PB 제품 환경성적표지인증 컨설팅', client: '㈜이마트' },
      { year: '2020', title: '국가 LCI 데이터베이스 구축 사업', client: '한국환경산업기술원' },
      { year: '2019', title: '에버월 제품 환경성적표지인증 컨설팅', client: '에버월' },
      { year: '2019', title: '동천 단열재 제품 환경성적표지인증 컨설팅', client: '(주)동천' },
      { year: '2019', title: '유통사 PB제품 환경성적표지인증 컨설팅 지원사업', client: '한국환경산업기술원' },
      { year: '2018', title: '서경씨엠티 환경성적표지인증 컨설팅', client: '(주)서경씨엠티' },
      { year: '2018', title: '삼성전자 디스플레이 UL EPD 인증 컨설팅', client: '삼성전자㈜' },
      { year: '2017', title: '노보텔 엠버서더 호텔 탄소성적표지 인증 컨설팅', client: '노보텔' },
      { year: '2017', title: '집단에너지 저탄소 인증 컨설팅', client: '한국지역난방공사' },
      { year: '2017', title: '중소중견기업 환경성적표지인증 지원사업', client: '한국환경산업기술원' },
      { year: '2016', title: '국가 LCI 데이터베이스 제·개정', client: '한국환경산업기술원' },
      { year: '2016', title: '스페이스링크 탄소성적표지인증 컨설팅', client: '(주)스페이스링크' },
      { year: '2016', title: '한국신에츠 탄소성적표지인증 컨설팅', client: '한국신에츠실리콘㈜' }
    ]
  },
  circulation: {
    title: '자원순환',
    projects: [
      { year: '2025', title: '환경성보장제도 전품목 확대에 따른 회수재활용 의무이행 방안 마련', client: '이순환거버넌스' },
      { year: '2023', title: '미래폐자원 자원순환체계 구축 기반 마련 연구', client: '이순환거버넌스' },
      { year: '2023', title: '폐전기·전자제품 물질흐름분석 및 실질 재활용률 분석 사업', client: '이순환거버넌스' },
      { year: '2022', title: '전기전자제품 자원순환 정책 및 법령 정비 방안마련 연구', client: '이순환거버넌스' },
      { year: '2022', title: '한국농수산재활용공제조합 재활용 분담금 단가 산정 연구', client: '한국농수산재활용사업공제조합' },
      { year: '2022', title: '알루미늄 캔 닫힌 고리 재활용 활성화를 위한 방안 연구', client: '노벨리스코리아(주)' },
      { year: '2021', title: '지속가능 회수재활용체계 마련 환경성보장제 발전 방안', client: '이순환거버넌스' },
      { year: '2021', title: '제로웨이스트 매장 인증기준 개발 연구', client: '서울특별시' },
      { year: '2020', title: '필름류 제품ᆞ포장재 재생원료ᆞ재활용제품 사용현황 분석 및 판로확대 제도화 방안 연구', client: '환경부' },
      { year: '2020', title: '전기전자제품 장기재활용 목표량 적정성 분석', client: '이순환거버넌스' },
      { year: '2020', title: '전선피복 회수 및 재활용 활성화를 위한 합리적 방안 마련 연구', client: '대한전선협회' },
      { year: '2020', title: '종이제품 EPR도입 타당성 분석 연구', client: '한국제지연합회' },
      { year: '2020', title: '분담금 단가산정 및 변동인자 적용 방안 연구', client: '한국농수산재활용사업공제조합' },
      { year: '2019', title: '건설용 발포플라스틱 회수 및 재활용활성화 방안 연구', client: '한국발포플라스틱공업협동조합' },
      { year: '2019', title: '산업용PE필름 품목 정립 및 재활용 등 실태조사 연구', client: '한국농수산재활용사업공제조합' },
      { year: '2019', title: '석탄화력 자원순환 성과관리제 효율적 대응방안 마련 연구', client: '발전 4사' },
      { year: '2019', title: '리튬배터리 채택 폐전자제품 적정 관리방안 마련을 위한 연구', client: '이순환거버넌스' },
      { year: '2019', title: '순환자원 품질표지인증을 위한 \'식물성 잔재물\' 현장심사지침 개발', client: '한국환경산업기술원' },
      { year: '2019', title: '수산물 양식용 부자 EPR 사업 개선방안 연구 및 부담금 단가산정 및 변동인자 적용 방안 연구', client: '한국농수산재활용사업공제조합' },
      { year: '2018', title: '전기차 폐배터리 재활용 방법 및 기준마련 연구', client: '환경부' },
      { year: '2018', title: '중기 공제사업 여건분석 및 대응방안 마련 연구', client: '한국포장재재활용사업공제조합' },
      { year: '2017', title: '폐기물부담금 플라스틱 자발적 협약 품목 발생량 추정 및 재활용 비용산정 연구', client: '자발적협약 재활용협회' },
      { year: '2017', title: '산업용 PE필름 출고량, 폐기물발생량 및 재활용비용 산정연구', client: '한국농수산재활용사업공제조합' },
      { year: '2017', title: '중소형 폐전기전자제품의 효율적인 회수체계 구축방안 연구', client: '이순환거버넌스' },
      { year: '2017', title: '빈용기보증금 포함 제품 판매 회수 유형 연구', client: '한국순환자원유통지원센터' },
      { year: '2016', title: '국내·외 재활용 관련 표준 조사', client: '한국산업기술시험원' },
      { year: '2016', title: '사업회원 자격기준의 적정성 평가 및 개선방안 연구', client: '이순환거버넌스' },
      { year: '2016', title: 'Eco-efficiency 기술분석평가를 통한 재활용기술 상용화 지원', client: '한국지질자원연구원' }
    ]
  },
  climate: {
    title: '기후변화대응',
    projects: [
      { year: '2025', title: 'LS ELECTRIC㈜ ESG 및 지속가능성 평가 대응 전략수립 연구', client: '엘에스일렉트릭㈜' },
      { year: '2025', title: 'DL케미칼 SCOPE3 배출량 산정', client: 'DL케미칼㈜' },
      { year: '2024', title: 'SK쉴더스 SCOPE3 배출량 산정', client: 'SK쉴더스㈜' },
      { year: '2024', title: '삼성전자 GLEC Framework 검증 컨설팅', client: '삼성전자㈜' },
      { year: '2024', title: 'DL케미칼 SCOPE3 배출량 산정', client: 'DL케미칼㈜' },
      { year: '2024', title: '조선내화 SCOPE3 배출량 산정', client: '조선내화(주)' },
      { year: '2023', title: '유한킴벌리 Scope 3 배출량 산정 및 관리방안 마련', client: '유한킴벌리㈜' },
      { year: '2023', title: '서연이화 Scope3 배출량 산정 및 산정 체계 구축', client: '서연이화' },
      { year: '2023', title: 'DL케미칼 Scope3 배출량 산정 및 검증', client: 'DL케미칼㈜' },
      { year: '2023', title: '아모레퍼시픽 SCOPE3 배출량 산정체계 구축 및 SBTi 검증', client: '㈜아모레퍼시픽' },
      { year: '2023', title: '서연이화 사업장인벤토리 구축', client: '서연이화' },
      { year: '2021', title: '아태 환경장관포럼 탄소배출량 산정', client: '한국환경산업기술원' },
      { year: '2020', title: '섬유패션 소재 제조기업 기후변화 대응 기반구축 지원', client: 'FITI시험연구원' },
      { year: '2019', title: '코스맥스 CDP 대응 컨설팅', client: '코스맥스' },
      { year: '2017', title: '전과정평가 기법을 활용한 온실가스 저감기술에 대한 환경성평가', client: '한국화학연구원' },
      { year: '2016', title: 'LG생활건강 탄소파트너십 사업', client: '산업통상자원부' },
      { year: '2016', title: '수산분야 온실가스 정보 웹사이트 컨텐츠 작성', client: '국립수산과학원' }
    ]
  },
  policy: {
    title: '환경정책 및 보건환경',
    projects: [
      { year: '2025', title: '2025년 유통 생활화학제품 및 어린이용품 온오프라인 시장모니터링', client: '한국환경산업기술원' },
      { year: '2025', title: '2025년 취약계층 실내환경 컨설팅 사업', client: '한국환경산업기술원' },
      { year: '2025', title: '녹색분류체계 인정기준 고도화 및 기준안 연구', client: '한국환경산업기술원' },
      { year: '2024', title: '2024년 취약계층 실내환경 컨설팅 사업', client: '한국환경산업기술원' },
      { year: '2024', title: '2024년 생활화학제품 시장감시단 운영', client: '한국환경산업기술원' },
      { year: '2024', title: '2024년 어린이용품 모니터링 및 환경유해인자 관리 컨설팅', client: '한국환경산업기술원' },
      { year: '2024', title: '환경책임투자 동향 DB 구축 사업', client: '한국환경산업기술원' },
      { year: '2024', title: '한국형 녹색분류체계 협의체 운영', client: '한국환경산업기술원' },
      { year: '2023', title: '2023년 취약계층 실내환경 컨설팅 사업', client: '한국환경산업기술원' },
      { year: '2023', title: '한국형 녹색분류체계의 전과정평가 기반 인정기준 적용방안 연구', client: '한국환경산업기술원' },
      { year: '2023', title: '생활화학제품 정보제공 체계 선진화 방안 마련', client: '환경부' },
      { year: '2023', title: '2023년 생활화학제품 시장감시단 운영', client: '한국환경산업기술원' },
      { year: '2023', title: '2023년 환경책임투자 동향 DB 구축 사업', client: '한국환경산업기술원' },
      { year: '2022', title: '생활화학제품 안전관리제도 효율적 운영 및 개선방안 연구', client: '환경부' },
      { year: '2022', title: '2022년 생활화학제품 시장감시단 운영', client: '한국환경산업기술원' },
      { year: '2022', title: '2022년 취약계층 생활환경 컨설팅 사업', client: '한국환경산업기술원' },
      { year: '2022', title: '2022년 환경책임투자 동향 DB 구축 사업', client: '한국환경산업기술원' },
      { year: '2021', title: '기업 ESG평가를 위한 전략수립 컨설팅', client: '트레스웍스' },
      { year: '2021', title: '환경경영정보포털 환경정보 데이터베이스 구축', client: '한국환경산업기술원' },
      { year: '2021', title: '환경개선 기여도 산정 방법론 및 녹색금융 동향 DB 구축', client: '한국환경산업기술원' },
      { year: '2021', title: '2021년 어린이용품 자가관리 지원사업', client: '한국환경산업기술원' },
      { year: '2021', title: '2021년 어린이용품 환경유해인자 모니터링 사업', client: '한국환경산업기술원' },
      { year: '2021', title: '2021년 생활화학제품 시장감시단 운영', client: '한국환경산업기술원' },
      { year: '2021', title: '2021년 취약계층 실내환경 컨설팅 사업', client: '한국환경산업기술원' },
      { year: '2020', title: '환경성적표지 인증 심사 매뉴얼 개발', client: '한국환경산업기술원' },
      { year: '2020', title: '친환경제품 매출액 조사 및 지표화 방안 연구', client: '한국환경산업기술원' },
      { year: '2020', title: '환경성 프로파일 분석을 통한 제품분류 및 기준단위 개발', client: '한국환경산업기술원' },
      { year: '2020', title: '녹색장터 중장기 발전방안 마련을 위한 연구', client: '한국환경산업기술원' },
      { year: '2020', title: '환경성질환 피해자 실내환경 컨설팅', client: '한국환경산업기술원' },
      { year: '2020', title: '2020년 생활화학제품 시장감시단 운영', client: '한국환경산업기술원' },
      { year: '2020', title: '2020년 취약계층 실내환경 컨설팅 사업', client: '한국환경산업기술원' },
      { year: '2020', title: '2020년 어린이용품 모니터링 및 유해물질 관리 컨설팅', client: '한국환경산업기술원' },
      { year: '2019', title: '환경산업연구단지 입주기업 실태조사', client: '한국환경산업기술원' },
      { year: '2019', title: '환경성적표지 인증 심사 매뉴얼 제작', client: '한국환경산업기술원' },
      { year: '2019', title: '시장유통제품 안전/표시기준 준수여부 조사', client: '한국환경산업기술원' },
      { year: '2019', title: '광산채움재 기술에 대한 경제성평가', client: '한국지질자원연구원' },
      { year: '2018', title: '어린이 사용제품의 안정성 향상을 위한 위험성 평가', client: '에코플러스' },
      { year: '2018', title: '환경오염피해 구제제도 개선 및 발전 방안 마련', client: '한국환경산업기술원' },
      { year: '2018', title: '환경산업연구단지 입주기업 실태조사 지표 개발 및 성과관리 체계 구축 연구', client: '한국환경산업기술원' },
      { year: '2018', title: '중소기업 사업화지원사업 사업관리 및 과제수행 효율화 방안 마련 연구', client: '한국환경산업기술원' },
      { year: '2018', title: '산업환경규제관리사 교재개발 및 제작 용역', client: '한국생산기술연구원' },
      { year: '2018', title: '생활화학제품 안전정보 콜센터 운영', client: '한국환경산업기술원' },
      { year: '2017', title: '기업 ESH 통합관리를 위한 사업모델 분석', client: '한국생산기술연구원' },
      { year: '2017', title: '석면무해화 기술에 대한 경제성평가', client: '한국지질자원연구원' },
      { year: '2016', title: 'CJ 대한통운 공급망 화학물질 관리 체계 구축 사업', client: '산업통상자원부' },
      { year: '2016', title: '중소기업 전기제품 안전품질 제고를 위한 안전설계 기준개발 및 설계 DB 구축', client: '한국생산기술연구원' },
      { year: '2016', title: '통합환경관리제도 대응을 위한 오염물질 배출목록 및 저감효율 표준화 방안 마련', client: '한국환경공단, 에코앤파트너스' },
      { year: '2016', title: '환경정책자금 직접대출제도 도입 사전연구', client: '한국환경산업기술원' },
      { year: '2016', title: '시험분석 운영체계 선진화 방안', client: '한국환경산업기술원' }
    ]
  }
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof portfolioData>('lca');

  const portfolioTabs = [
    { key: 'lca', label: 'LCA(전과정평가)' },
    { key: 'epd', label: 'EPD 인증대응' },
    { key: 'circulation', label: '자원순환' },
    { key: 'climate', label: '기후변화대응' },
    { key: 'policy', label: '환경정책 및 보건환경' }
  ];

  const activeData = portfolioData[activeTab];

  // 연도별로 프로젝트 그룹화
  const groupedProjects = activeData.projects.reduce((groups: { [key: string]: PortfolioProject[] }, project) => {
    const year = project.year;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(project);
    return groups;
  }, {});

  // 연도를 내림차순으로 정렬
  const sortedYears = Object.keys(groupedProjects).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen" style={{
      maxWidth: '1440px',
      margin: '0 auto',
      wordBreak: 'keep-all',
      overflowWrap: 'break-word'
    }}>
      {/* Navigation Section */}
      <div className="w-full">
        <div className="w-full container-1440 mx-auto py-4">
          <Navigation variant="pill" />
        </div>
      </div>

      <div className="nav-spacing">
        {/* Tab Menu Section - 왼쪽 정렬 */}
        <div className="w-full py-8">
          <div className="w-full container-1440 mx-auto">
            <TabMenu
              tabs={portfolioTabs}
              activeTab={activeTab}
              onChange={(key) => setActiveTab(key as keyof typeof portfolioData)}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          <div className="w-full container-1440 mx-auto py-6">
            <div className="flex flex-col xl:flex-row gap-6 mb-6 py-6">
              
              {/* Title Section */}
              <div className="w-full xl:w-[360px]">
                <h1 className="text-[#14151A] font-bold text-[30px] leading-[1.2] mb-2">
                  수행 실적 소개
                </h1>
              </div>

              {/* Projects List */}
              <div className="flex-1">
                {sortedYears.length > 0 ? (
                  sortedYears.map((year) => (
                    <div key={year} className="mb-8">
                      {/* Year Header */}
                      <div className="flex items-stretch mb-4">
                        <div className="flex items-stretch flex-1 gap-2.5 p-4">
                          <h2 className="text-xl font-bold leading-[1.4] text-black flex-1">
                            {year}
                          </h2>
                        </div>
                      </div>

                      {/* Projects for this year */}
                      <div className="flex flex-col">
                        {groupedProjects[year].map((project, index) => (
                          <div key={index} className="flex items-stretch border-t border-gray-200">
                            <div className="flex items-stretch flex-1 gap-2.5 p-4">
                              <div className="flex-1 text-base md:text-sm leading-[1.44] text-black">
                                {project.title}
                              </div>
                            </div>
                            <div className="flex items-stretch">
                              <div className="flex items-stretch flex-1 gap-2.5 p-4">
                                <div className="flex-1 text-base md:text-sm leading-[1.44] text-black">
                                  {project.client}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center py-16 text-gray-500">
                    해당 분야의 프로젝트가 준비 중입니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 