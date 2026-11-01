export default function EmailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-flex min-h-11 items-center underline-offset-4 transition-transform hover:-translate-y-0.5 hover:underline focus-visible:outline-2 focus-visible:outline-current"
    >
      {email}
    </a>
  );
}
