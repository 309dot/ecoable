'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { adminIdToEmail } from '@/lib/admin-id';

const inputClass =
  'w-full px-4 py-3 border border-[#DEE0E3] rounded-[12px] text-sm text-[#14151A] bg-white placeholder:text-[rgba(13,17,38,0.4)] focus:outline-none focus:border-[#399084]';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: adminIdToEmail(adminId),
      password,
    });

    if (signInError) {
      setError(
        signInError.message === 'Invalid login credentials'
          ? '아이디 또는 비밀번호가 올바르지 않습니다.'
          : signInError.message
      );
      setIsSubmitting(false);
      return;
    }

    const redirectTo = searchParams.get('redirect') ?? '/admin';
    router.replace(redirectTo);
    router.refresh();
  };

  return (
    <div className="w-full max-w-[400px]">
      <div className="bg-white border border-[#DEE0E3] rounded-[24px] p-8">
        <Image
          src="/images/logo_bk.png"
          alt="ecoable"
          width={143}
          height={28}
          className="object-contain mb-4"
          priority
        />
        <p className="text-[rgba(15,19,36,0.6)] text-sm mb-6">
          구성원 · 수행실적을 수정하려면 로그인해주세요.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="adminId" className="block text-[#14151A] font-medium text-sm mb-2">
              아이디
            </label>
            <input
              id="adminId"
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className={inputClass}
              placeholder="admin"
              autoComplete="username"
              autoCapitalize="none"
              spellCheck={false}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#14151A] font-medium text-sm mb-2">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-[12px] px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-[#1B376F] to-[#3A9284] text-white font-medium py-3 rounded-[12px] transition-all ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
            }`}
          >
            {isSubmitting ? '로그인 중...' : '로그인'}
          </button>
        </form>
      </div>
    </div>
  );
}
