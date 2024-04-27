"use client";
import * as React from "react";

import type {
  SessionValueTypes,
  SessionContextSessionValueTypes,
} from "@/components/atoms/SessionProvider/types";

export const SessionContext =
  React.createContext<SessionContextSessionValueTypes>(
    {} as SessionContextSessionValueTypes
  );

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = React.useState<SessionValueTypes>({
    modal: "off",
  });

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(SessionContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}
