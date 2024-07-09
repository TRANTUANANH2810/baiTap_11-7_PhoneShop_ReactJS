export function Text({ children, as: As = "p" }) {
  return (
    <>
      <As>{children}</As>
    </>
  );
}
