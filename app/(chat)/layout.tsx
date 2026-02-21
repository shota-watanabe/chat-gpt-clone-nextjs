import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // page.tsxがchildren部分に埋め込まれる
    <div className="relative flex min-h-svh flex-1 flex-col">{children}</div>
  );
}
