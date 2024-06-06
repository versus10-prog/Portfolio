"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const ConnectionLayout = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ConnectionLayout;
