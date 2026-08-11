/** 구성원 프로필 사진 버킷 */
export const MEMBER_PHOTO_BUCKET = 'member-photos';

const PUBLIC_URL_MARKER = `/storage/v1/object/public/${MEMBER_PHOTO_BUCKET}/`;

/**
 * 업로드된 사진의 공개 URL에서 버킷 내부 경로를 뽑아냅니다.
 * 우리 Supabase 프로젝트의 URL이 아니거나(외부 링크), 시드 데이터처럼
 * public/ 폴더의 로컬 경로(/images/...)면 null을 돌려줍니다.
 * → 삭제 대상이 아닌 것을 실수로 지우지 않기 위한 방어입니다.
 */
export function memberPhotoPathFromUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base || !url.startsWith(base)) return null;

  const index = url.indexOf(PUBLIC_URL_MARKER);
  if (index === -1) return null;

  const path = url.slice(index + PUBLIC_URL_MARKER.length).split('?')[0];
  return path ? decodeURIComponent(path) : null;
}
