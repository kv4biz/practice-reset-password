import Logo from "@/components/atoms/Logo";

export default function ResetPasswordTemplate({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="reset-password-container">
      {/* Logo at the top-right */}
      <div className="reset-logo">
        <Logo />
      </div>

      {/* Children content */}
      <div className="reset-content">{children}</div>
    </div>
  );
}
