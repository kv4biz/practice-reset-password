export default function AuthTemplate({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="auth-layout">
      {/* Left Side: Blue Background */}
      <div className="auth-left"></div>

      {/* Right Side: Children */}
      <div className="auth-right">{children}</div>
    </div>
  );
}
