export function AboutSection() {
  return (
    <div className="space-y-4">
      <p>
        Hi, and thanks for stopping by. My name is{" "}
        <span className="font-extrabold text-primary-1">Callum</span> and I am a self
        taught web developer specialising in building full stack applications with{" "}
        <a className="link" href="https://remix.run">
          Remix
        </a>
        ,{" "}
        <a className="link" href="https://react.dev">
          React
        </a>{" "}
        and{" "}
        <a className="link" href="https://www.typescriptlang.org">
          Typescript
        </a>
        . Checkout my projects in the Project section, or leave a message!
      </p>
      <p>
        I&apos;ve worked at start ups and scale ups as a Product manager, helping to
        deliver value through research, rapid testing and a desire to succeed.
      </p>
      <p>
        When I am not programming, I enjoy walking my dog, chess, photography and running.
        Reach out and lets connect!
      </p>
    </div>
  );
}
