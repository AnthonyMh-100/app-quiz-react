export const LogoMark = ({ variant = 'brand' }) => {
  if (variant === 'light') {
    return (
      <svg viewBox="0 0 64 64" width="34" height="34" role="img" aria-label="Quizly">
        <rect x="10" y="10" width="44" height="48" rx="12" fill="#ffffff" opacity="0.95" />
        <rect x="22" y="24" width="20" height="4" rx="2" fill="#e0e7ff" />
        <rect x="22" y="32" width="16" height="4" rx="2" fill="#e0e7ff" />
        <path
          d="M25.5 43.2l3.2 3.2 9-9"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" width="22" height="22" role="img" aria-label="Quizly">
      <rect x="10" y="10" width="44" height="48" rx="12" fill="url(#quizly-g)" />
      <rect x="18" y="16" width="28" height="36" rx="8" fill="#ffffff" opacity="0.95" />
      <rect x="22" y="24" width="20" height="4" rx="2" fill="#c7d2fe" />
      <rect x="22" y="32" width="16" height="4" rx="2" fill="#c7d2fe" />
      <path
        d="M25.5 43.2l3.2 3.2 9-9"
        fill="none"
        stroke="#4f46e5"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="quizly-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const CheckIcon = ({ size = 14 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" aria-hidden="true">
    <path
      d="m3.5 8.5 3 3 6-7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const CrossIcon = ({ size = 14 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" aria-hidden="true">
    <path
      d="m4 4 8 8M12 4l-8 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const UserIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M5 20a7 7 0 0 1 14 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const MailIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const LockIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <rect x="4" y="10" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 10V7a4 4 0 0 1 8 0v3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)